const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Resource = require('./resource.js');

const checkInSchema = new Schema({
  name: String,
  description: String,
  dateCreated: {type: Date, default: Date.now},
  notes: String,
  resource: [{type: Schema.Types.ObjectId, ref: Resource}]
});

const CheckIn = mongoose.model('CheckIn', checkInSchema);

module.exports = CheckIn;
