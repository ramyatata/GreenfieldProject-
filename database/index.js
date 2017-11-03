const colors = require('colors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://velvetElvies:velvetElvies01@ds147265.mlab.com:47265/boost');
const db = mongoose.connection;

db.on('error', () => {
  console.log(colors.blue('connection error'));
});

db.on('open', () => {
  console.log( colors.blue('connection success'));
});

// const userSchema = mongoose.Schema({
//   name: String,
//   email: String,
//   password: String
// });

// const userModal = mongoose.model('user', userSchema);

// var newUser = new userModal({
//   name: 'Ramya',
//   email: 'test@gmail.com',
//   password: 'ramya'
// });

// newUser.save(function(err, user){
//   if(err){
//     console.log(colors.blue(err));
//   } else {
//     console.log('document saved to db');
//   }
// });

module.exports = db;