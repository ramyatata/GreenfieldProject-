const milestoneModel = require('../../database/models/milestone.js');
const Promise = require('bluebird');

module.exports = {
  //list of goals of particular user
  list: function(goal) {
    const promise = new Promise((resolve, reject) => {
      milestoneModel.find({goal: goal}, (err, milestones) => {
        if(err) {
          console.log('failed in list of milestones');
          reject(err);
        } else {
          console.log(`milestones:  ${milestones[0]}`);
          resolve(milestones);
        }
      })
    });
    return promise;
  },
  get: function(id) {
    const promise = new Promise((resolve, reject) => {
      milestoneModel.findById(id, (err, milestone) => {
        if(err) {
          console.log('failed in get of milestones');
          reject(err);
        } else {
          console.log(`milestones:  ${milestone}`);
          resolve(milestone);
        }
      })
    });
    return promise;
  },
  create: function(values) {
    var newMilestone = new milestoneModel(values);
    const promise = new Promise((resolve, reject) => {
      milestoneModel.save((err, newMilestone) => {
        if(err) {
          console.log(`error in saving newMilestone`);
          reject(err);
        } else {
          console.log(`newMilestone saved in db ${newMilestone}`);
          resolve(newMilestone);
        }
      });
    });
    return promise;
  },
  update: function(id, value) {
    const promise = new Promise((resolve, reject) => {
      milestoneModel.findByIdAndUpdate(id, { goal: goal }, (err, updatedMilestone) => {
        if(err) {
          console.log('failed in update of milestones');
          reject(err);
        } else {
          console.log(`updatedMilestone:  ${updatedMilestone}`);
          resolve(updatedMilestone);
        }
      })
    });
    return promise;
  },
  delete: function(id) {
    const promise = new Promise((resolve, reject) => {
      milestoneModel.findOneAndRemove({_id: id}, (err, deletedMilestone) => {
        if(err) {
          console.log('failed in delete of milestones');
          reject(err);
        } else {
          console.log(`deletedMilestone:  ${deletedMilestone}`);
          resolve(deletedMilestone);
        }
      })
    });
    return promise;
  }
};


