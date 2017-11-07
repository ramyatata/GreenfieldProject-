const colors = require('colors');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


mongoose.connect('mongodb://velvetElvies:velvetElvies01@ds147265.mlab.com:47265/boost');
const db = mongoose.connection;

db.on('error', () => {
  console.log(colors.blue('connection error'));
});

db.on('open', () => {
  console.log( colors.blue('connection success'));
});

const User = new Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  goals: Object
});

const Goal = new Schema({
  dateCreated: String,
  dateStarted: Number,
  dateCompleted: Number,
  name: String,
  description: String,
  notes: String,
  checkIn: Object,
  milestone: Object,
  color: String
});

const Milestone = new Schema({
  name: String,
  date: String,
  description: String,
  notes: String
});

const CheckIn = new Schema({
  name: String,
  date: String,
  description: String,
  notes: String
});

const userModel = mongoose.model('user', User);

var newUser = new userModel({
  name: 'Ramya',
  email: 'test@gmail.com',
  password: 'ramya'
});

// newUser.save(function(err, user){
//   if(err){
//     console.log(colors.blue(err));
//   } else {
//     console.log('document saved to db');
//   }
// });

module.exports = db;
