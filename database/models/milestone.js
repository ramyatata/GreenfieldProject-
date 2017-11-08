const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

const milestoneSchema = new Schema({
  name: String,
  date: String,
  description: String,
  notes: String
});

const Milestone = mongoose.model('Milestone', milestoneSchema);

module.exports = Milestone;
