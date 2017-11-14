const User = require('../database/models/user.js');
const bcrypt = require('bcrypt-nodejs');

exports.signUpUser = (req, res) => {
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
};

exports.logInUser = (req, res) => {
  // authenticate the user
  let username = req.body.user;
  let passwordAttempt = req.body.password;

  User.findOne({username: username})
    .exec(function(err, user) {
      if (!user) {
        res.redirect('/login');
      } else {
        bcrypt.compare(passwordAttempt, user.password, function(err, match) {
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
};

exports.logoutUser = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login');
  });
};
