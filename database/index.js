const colors = require('colors');
const mongoose = require('mongoose');
const Milestone = require('./models/milestone.js');
const Goal = require('./models/goal.js');
const CheckIn = require('./models/checkin.js');
const Resource = require('./models/resource.js');

mongoose.connect('mongodb://velvetElvies:velvetElvies01@ds147265.mlab.com:47265/boost');
const db = mongoose.connection;

db.on('error', () => {
  console.log(colors.blue('connection error'));
});

db.on('open', () => {
  console.log( colors.blue('connection success'));
});

let newMilestone = new Milestone({
  name: 'Some Milestone',
  description: 'The description',
  notes: 'some notes',
});

let newResource = new Resource({
  title: 'ExampleTitle',
  description: 'testing',
  imageRef: 'www.exampleref.com',
  videoUrl: 'www.exampleref.com'
});

let newCheckIn = new CheckIn({
  name: 'a new check in',
  description: 'description',
  notes: 'notes'
});

// newResource.save(function(err, user){
//   if(err){
//     console.log(colors.blue(err));
//   } else {
//     console.log('document saved to db');
//     newMilestone.resource = user._id;
//     newCheckIn.resource = user._id;
//     newMilestone.save(function(err, milestone) {
//       if (err) {
//         console.log(colors.blue(err));
//       } else {
//         console.log('milestone succesfully saved!');
//         newCheckIn.save(function(err, checkin) {
//           if (err) {
//             console.log(colors.blue(err));
//           } else {
//             console.log('checkin successfully saved!');
//           }
//         });
//       }
//     });
//   }
// });

module.exports = db;
