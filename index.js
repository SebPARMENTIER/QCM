// environment variable
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 5050;

// calling express
const express = require('express');

const app = express();

// views settings
app.set('views', 'app/views');
app.set('view engine', 'ejs');


// statics
app.use(express.static('public'));

// management of POST bodies
app.use(express.urlencoded({extended: true}));

// session management
const session = require('express-session');
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'Un Super Secret'
}));

// middleware
const userMiddleware = require('./app/middlewares/user');
app.use(userMiddleware);

// routing
const router = require('./app/router');
app.use(router);

// server launch
app.listen( PORT,  () => {
  console.log(`Listening on ${PORT}`);
});