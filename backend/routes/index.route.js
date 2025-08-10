import {
  signupUser,
  signinUser,
  getme,
  logoutUser,
} from '../controllers/auth.controller.js';
import isLogedIn from '../middleware/auth.middleware.js';

const route = (req, res) => {
  if (req.method === 'POST' && req.url === '/signup') signupUser(req, res);
  if (req.method === 'GET' && req.url === '/signin') signinUser(req, res);
  if (req.method === 'GET' && req.url === '/getme') isLogedIn(req, res);
  if (req.method === 'GET' && req.url === '/logout') isLogedIn(req, res);
};

export default route;
