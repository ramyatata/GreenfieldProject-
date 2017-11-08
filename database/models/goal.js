const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const goalSchema = new Schema({
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

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;
