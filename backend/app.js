import 'dotenv/config';
import http from 'http';

import dbConnection from './database/db.js';
import { authRoute, todoRoute } from './routes/index.route.js';
import cookieParser from './utils/cookieParser.util.js';

const PORT = process.env.PORT;

//  Routes
const server = http.createServer((req, res) => {
  const cookies = cookieParser(req.headers?.cookie); // send the cookie header custom cookie-parser

  // Attach cookies to req
  req.cookies = cookies;

  authRoute(req, res);
  todoRoute(req, res);
});

// Server listening on PORT ...
server.listen(PORT, (error) => {
  if (error) console.error(error);
  console.log(`Server listening - http://localhost:${PORT}`);
});

//  Database connection
dbConnection()
  .then(() => {
    console.log('✅ Database Connected');
  })
  .catch((err) => {
    console.log('❌ Database connection failed', err);
  });
