const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const colors = require('colors');
const PORT = 3030;
const db = require('../database/index.js');
const session = require('express-session');
const User = require('../database/index.js');
const handler = require('./request-handler.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/', (req, res) => {
  res.end();
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/signup', (req, res) => {
  res.render('signup');
});

app.post('/login', handler.logInUser);

app.post('/signup', handler.signUpUser);


app.listen(PORT, () => {
  console.log(colors.blue(`Listening on PORT ${PORT}`));
});
