import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    task: {
      typeof: String,
      required: true,
    },
    isCompleted: {
      typeof: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
