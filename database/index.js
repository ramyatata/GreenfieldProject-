const colors = require('colors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://velvetElvies:velvetElvies01@ds147265.mlab.com:47265/boost');
const db = mongoose.connection;

db.on('error', () => {
  console.log(colors.blue('connection error'));
});

db.on('open', () => {
  console.log( colors.blue('connection success'));
});

module.exports = db;
