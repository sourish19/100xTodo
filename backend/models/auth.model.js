import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    todoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Todo',
    },
  },
  { timestamps: true }
);

userSchema.pre('save', async (next) => {
  const user = this;

  if (!user.isModified('password')) next();
  try {
    user.password = await bcrypt.hash(user.password, 10);
    next();
  } catch (error) {
    console.error('Unable to hash password');
    next(error);
  }
});

const User = mongoose.model('User', userSchema);

export default User;
