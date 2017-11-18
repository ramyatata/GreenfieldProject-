const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Milestone = require('./milestone.js');
const CheckIn = require('./checkin.js');
const Resource = require('./resource.js');
const User = require('./user.js');

const goalSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: User},
  name: String,
  description: String,
  startDate: Date,
  endDate: Date,
  estimatedHours: Number,
  estimatedEndDate: Date,
  isOpen: {type: Boolean, default: true},
  color: String,
  dateCreated: {type: Date, default: Date.now},
  notes: String,
  milestone: [{type: Schema.Types.ObjectId, ref: Milestone}],
  checkin: [{type: Schema.Types.ObjectId, ref: CheckIn}],
  resource: {type: Schema.Types.ObjectId, ref: Resource}
});

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;
