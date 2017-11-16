const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Goal = require('./goal.js');

const userSchema = new Schema({
  name: String,
  username: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);
module.exports = User;
