const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const colors = require('colors');
const PORT = 3030;
const db = require('../database/index.js');
const session = require('express-session');
const User = require('../database/index.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/', (req, res) => {
  res.end();
});

app.get('/login', (req, res) => {
  res.end()
});

app.get('/signup', (req, res) => {

});

app.post('/login', (res, req) => {
  // authenticate the user
  let username = req.body.user;
  let passwordAttempt = req.body.password;

  User.findOne({username: username})
    .exec(function(err, user) {
      if (!user) {
        res.redirect('/login');
      } else {
        User.comparePassword(passwordAttempt, user.password, function(err, match) {
          if (match) {
            // create a session
            req.session.regenerate(function() {
              req.session.user = user;
              res.redirect('/');
            });
          } else {
            console.log('Incorrect password!');
            res.redirect('/login');
          }
        });
      }
    });
});

app.post('/signup', (req, res) => {
  // store the username and password from the request body
  let usernmae = req.body.username;
  let password = req.body.password;

  // check if the user already exists
  User.findOne({username: username})
    .exec(function(err, user) {
      if (!user) {
        // create a password and encrypt it
        // set username and password
        bcrypt.genSalt(10, function(err, salt) {
          bcrypt.hash(password, salt, function(err, hash) {
              let newUser = new User({
                username: username,
                password: hash
              });
              // save the user to the db
              newUser.save()
                .then(function(user) {
                  console.log('Successfully saved the user to the database!');
                  // create a session for the user
                  req.session.regenerate(function() {
                    req.session.user = user;
                    res.redirect('/');
                  });
                });
          });
        });
      } else {
        console.log('This account already exists!');
        res.redirect('/signup');
      }
    });
});


app.listen(PORT, () => {
  console.log(colors.blue(`Listening on PORT ${PORT}`));
});
