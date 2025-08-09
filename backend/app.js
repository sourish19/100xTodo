import 'dotenv/config';
import http from 'http';

import dbConnection from './database/db.js';
import route from './routes/index.route.js';

const PORT = process.env.PORT;

//  Routes
const server = http.createServer((req, res) => {
  route(req, res);
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
