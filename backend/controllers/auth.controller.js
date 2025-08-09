import User from '../models/auth.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const signupUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password)
      res.status(400).json({ message: 'All fields are required' });

    const user = await User.findOne({ username, email });

    if (user) res.status(400).json({ message: 'User already exists' });

    const newUser = await User.create({ username, email, password });

    if (!newUser) res.status(500).json({ message: 'User creation failed' });

    res.status(200).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error in signupUser:', error);
  }
};

const signinUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password)
      res.status(400).json({ message: 'All fields are required' });

    const user = await User.findOne({ username, email });

    if (!user) res.status(400).json({ message: 'User dosent exists' });

    const comparePasswords = bcrypt.compare(password, user.password);

    if (!comparePasswords)
      res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user?._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res
      .status(200)
      .cookie('token', token, {
        httpOnly: true,
      })
      .json({ message: 'User signed in successfully', token });
  } catch (error) {
    console.error('Error in signinUser:', error);
  }
};

const getme = async (req, res) => {
  try {
    const user = await User.findById(req.user?._id).select('-password');

    if (!user) res.status(400).json({ message: 'User dosent exists' });

    res.status(200).json(user);
  } catch (error) {
    console.error('Error in getme:', error);
  }
};

const logoutUser = async (req, res) => {
  try {
    const user = await User.findById(req.user?._id).select('-password');

    if (!user) res.status(400).json({ message: 'User dosent exists' });

    res
      .status(200)
      .clearcookie('token')
      .json({ message: 'User signed out successfully' });
  } catch (error) {
    console.error('Error in logoutUser:', error);
  }
};

export { signupUser, signinUser, getme, logoutUser };
