const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Goal = require('./goal.js');

const userSchema = new Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  goals: [{type: Schema.Types.ObjectId, ref: Goal}]
});

const User = mongoose.model('User', userSchema);

// let newUser = new User({
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

module.exports = User;
