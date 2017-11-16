const milestoneModel = require('../../database/models/milestone.js');
const Promise = require('bluebird');

module.exports = {
  list: function() {
    const promise = new Promise((resolve, reject) => {

      var myObj = {
        path: 'resource',
        model: 'Resource'
      };

      milestoneModel
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

     milestoneModel
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
    var newMilestone = new milestoneModel(values);
    const promise = new Promise((resolve, reject) => {
      newMilestone.save((err, newMilestone) => {
        if(err) {
          console.log(`failed in saving newMilestone`);
          reject(err);
        } else {
          resolve(newMilestone);
        }
      });
    });
    return promise;
  },
  update: function(id, value) {
    const promise = new Promise((resolve, reject) => {
      milestoneModel.findByIdAndUpdate(id, value, { new: true }, (err, updatedMilestone) => {
        if(err) {
          console.log('failed in update of milestones');
          reject(err);
        } else {
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
          resolve(deletedMilestone);
        }
      })
    });
    return promise;
  }
};


