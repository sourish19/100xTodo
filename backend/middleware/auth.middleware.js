import jwt from 'jsonwebtoken';

import User from '../models/auth.model.js';

const isLogedIn = async (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  const userId = jwt.verify(token, process.env.JWT_SECRET);

  const user = await User.findById(userId).select('-password');

  if (!user) return res.status(401).json({ message: 'Unauthorized' });

  req.user = user;

  next(req, res);
};

export default isLogedIn;
