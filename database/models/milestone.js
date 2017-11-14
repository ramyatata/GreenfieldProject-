const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Resource = require('./resource.js');

const milestoneSchema = new Schema({
  name: String,
  description: String,
  dateCreated: {type: Date, default: Date.now},
  notes: String,
  resource: [{type: Schema.Types.ObjectId, ref: Resource}]
});

const Milestone = mongoose.model('Milestone', milestoneSchema);

module.exports = Milestone;
