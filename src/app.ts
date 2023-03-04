require('dotenv').config();
import express from 'express';
import * as routes from './routes';
import databaseSetup from './startup/database';
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3015;

// --USING HTTP MODULE
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World!');
// });

// server.listen(3000, '127.0.0.1', () => {
//   console.log('SERVER IS RUNNING ON PORT 3000');
// });

//--USING EXPRESS
//ading middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//--SETTING UP THE DATABASE
databaseSetup();

//--SET ROUTING
routes.initRoutes(app);

app.listen(PORT, () => {
  console.log('SERVER IS RUNNING ON PORT ' + PORT);
});
