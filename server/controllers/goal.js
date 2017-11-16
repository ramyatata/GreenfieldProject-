const goalModel = require('../../database/models/goal.js');
const Promise = require('bluebird');
const colors = require('colors');

module.exports = {
  //list of goals of particular user
  list: function(user) {
    const promise = new Promise((resolve, reject) => {
      var populateArr = [
      {
        path: 'user',
        model: 'User',
        populate: {
          path: 'resource',
          model: 'Resource'
        }
      }, {
        path: 'resource',
        model: 'Resource'
      }, {
        path: 'milestone',
        model: 'Milestone',
        populate: {
          path: 'resource',
          model: 'Resource'
        }
      }, {
        path: 'checkin',
        model: 'CheckIn',
        populate: {
          path: 'resource',
          model: 'Resource'
        }
      }];

      goalModel
      .find({})
      .populate(populateArr)
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
      var populateArr = [
      {
        path: 'user',
        model: 'User',
        populate: {
          path: 'resource',
          model: 'Resource'
        }
      }, {
        path: 'resource',
        model: 'Resource'
      }, {
        path: 'milestone',
        model: 'Milestone',
        populate: {
          path: 'resource',
          model: 'Resource'
        }
      }, {
        path: 'checkin',
        model: 'CheckIn',
        populate: {
          path: 'resource',
          model: 'Resource'
        }
      }];

      goalModel
      .find({_id: id})
      .populate(populateArr)
      .exec((err, milestone) => {
        if(err) {
          console.log('failed in get of milestone');
          reject(err);
        } else {
          resolve(milestone);
        }
      })
    });

    return promise;
  },
  create: function(values) {
    var newGoal = new goalModel(values);
    const promise = new Promise((resolve, reject) => {
      newGoal.save((err, newGoal) => {
        if(err) {
          console.log(`failed in saving goal`);
          reject(err);
        } else {
          resolve(newGoal);
        }
      });
    });
    return promise;
  },
  update: function(id, value) {
    const promise = new Promise((resolve, reject) => {
      goalModel.findByIdAndUpdate(id, value,{new: true}, (err, updateGoal) => {
        if(err) {
          console.log('failed in update of goals');
          reject(err);
        } else {
          resolve(updateGoal);
        }
      })
    });
    return promise;
  },
  delete: function(id) {
     const promise = new Promise((resolve, reject) => {
      goalModel.findOneAndRemove({_id: id}, (err, deletedGoal) => {
        if(err) {
          console.log('failed in delete of goals');
          reject(err);
        } else {
          resolve(deletedGoal);
        }
      })
    });
    return promise;
  }
};


