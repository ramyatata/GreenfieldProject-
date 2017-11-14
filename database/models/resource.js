const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resourceSchema = new Schema({
  title: String,
  description: String,
  imageRef: String,
  videoUrl: String,
  dateCreated: {type: Date, default: Date.now}
});

const Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource;
