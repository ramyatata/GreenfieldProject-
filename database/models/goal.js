const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Milestone = require('./milestone.js');
const CheckIn = require('./check-in.js');
const Resource = require('./resource.js');

const goalSchema = new Schema({
  name: String,
  description: String,
  startDate: Date,
  endDate: Date,
  estimatedHours: Number,
  estimatedEndDate: Date,
  isOpen: Boolean,
  color: String,
  dateCreated: {type: Date, default: Date.now},
  notes: String,
  milestone: [{type: Schema.Types.ObjectId, ref: Milestone}],
  checkIn: [{type: Schema.Types.ObjectId, ref: CheckIn}],
  resource: [{type: Schema.Types.ObjectId, ref: Resource}]
});

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;
