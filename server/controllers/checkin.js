const checkinModel = require('../../database/models/checkin.js');
const Promise = require('bluebird');
const colors = require('colors');

module.exports = {

  list: function() {
    const promise = new Promise((resolve, reject) => {
      var myObj = {
        path: 'resource',
        model: 'Resource'
      };

      checkinModel
      .find({})
      .populate(myObj)
      .exec((err, milestones) => {
        if(err) {
          console.log('failed in list of milestones');
          reject(err);
        } else {
          resolve(milestones);
        }
      })
    });

    return promise;
  },
  get: function(id) {
    const promise = new Promise((resolve, reject) => {
      var myObj = {
        path: 'resource',
        model: 'Resource'
      };

      checkinModel
      .find({_id: id})
      .populate(myObj)
      .exec((err, milestone) => {
        if(err) {
          console.log('failed in get of milestones');
          reject(err);
        } else {
          resolve(milestone);
        }
      })
    });

    return promise;
  },
  create: function(values) {
    var newCheckin = new checkinModel(values);

    const promise = new Promise((resolve, reject) => {
      newCheckin.save((err, newCheck) => {
        if(err) {
          console.log(`error in saving checkin`);
          reject(err);
        } else {
          resolve(newCheck);
        }
      });
    });
    return promise;
  },
  update: function(id, value) {
    const promise = new Promise((resolve, reject) => {
      checkinModel.findByIdAndUpdate(id, value, { new: true }, (err, updatedCheckin) => {
        if(err) {
          console.log('failed in update of checkins');
          reject(err);
        } else {
          resolve(updatedCheckin);
        }
      })
    });
    return promise;
  },
  delete: function(id) {
     const promise = new Promise((resolve, reject) => {
      checkinModel.findOneAndRemove({_id: id}, (err, deletedCheckin) => {
        if(err) {
          console.log('failed in delete of checkins');
          reject(err);
        } else {
          resolve(deletedCheckin);
        }
      })
    });
    return promise;
  }
};


