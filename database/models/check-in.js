const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

const checkInSchema = new Schema({
  name: String,
  date: String,
  description: String,
  notes: String
});

const CheckIn = mongoose.model('CheckIn', checkInSchema);

module.exports = CheckIn;
