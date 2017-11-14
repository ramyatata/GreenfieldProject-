const checkinModel = require('../../database/models/checkin.js');
const Promise = require('bluebird');

module.exports = {
  //list of goals of particular user
  list: function(goal) {
    const promise = new Promise((resolve, reject) => {
      checkinModel.find({goal: goal}, (err, checkins) => {
        if(err) {
          console.log('failed in list of checkins');
          reject(err);
        } else {
          console.log(`checkin:  ${checkins[0]}`);
          resolve(checkins);
        }
      })
    });
    return promise;
  },
  get: function(id) {
    const promise = new Promise((resolve, reject) => {
      checkinModel.findById(id, (err, checkin) => {
        if(err) {
          console.log('failed in get of checkins');
          reject(err);
        } else {
          console.log(`checkin:  ${checkin}`);
          resolve(checkin);
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
          console.log(`Checkin saved in db ${newCheck}`);
          resolve(newCheck);
        }
      });
    });
    return promise;
  },
  update: function(id, value) {
    const promise = new Promise((resolve, reject) => {
      checkinModel.findByIdAndUpdate(id, { goal: goal }, (err, updatedCheckin) => {
        if(err) {
          console.log('failed in update of checkins');
          reject(err);
        } else {
          console.log(`updatedCheckin:  ${updatedCheckin}`);
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
          console.log(`deletedCheckin:  ${deletedCheckin}`);
          resolve(deletedCheckin);
        }
      })
    });
    return promise;
  }
};


