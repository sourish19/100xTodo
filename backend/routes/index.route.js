import {
  signupUser,
  signinUser,
  getme,
  logoutUser,
} from '../controllers/auth.controller.js';
import {
  addTodo,
  getTodo,
  deleteTodo,
  editTodo,
} from '../controllers/todo.controller.js';
import isLogedIn from '../middleware/auth.middleware.js';

const authRoute = (req, res) => {
  if (req.method === 'POST' && req.url === '/signup') signupUser(req, res);
  if (req.method === 'GET' && req.url === '/signin') signinUser(req, res);
  if (req.method === 'GET' && req.url === '/getme') isLogedIn(req, res, getme);
  if (req.method === 'GET' && req.url === '/logout')
    isLogedIn(req, res, logoutUser);
};

const todoRoute = (req, res) => {
  if (req.method === 'GET' && req.url === '/gettodo')
    isLogedIn(req, res, getTodo);
  if (req.method === 'POST' && req.url === '/addtodo')
    isLogedIn(req, res, addTodo);
  if (req.method === 'DELETE' && req.url === '/deletetodo')
    isLogedIn(req, res, next);
  if (req.method === 'PUT' && req.url === '/edittodo')
    isLogedIn(req, res, editTodo);
};

export { authRoute, todoRoute };
