const goalModel = require('../../database/models/goal.js');
const Promise = require('bluebird');
const colors = require('colors');

module.exports = {
  //list of goals of particular user
  list: function(user) {
    console.log(colors.blue('in goal controller'));
    const promise = new Promise((resolve, reject) => {
      // goalModel.find({user: user}, (err, goals) => {
      //   if(err) {
      //     console.log('failed in list of goals');
      //     reject(err);
      //   } else {
      //     console.log(`goals:  ${goals[0]}`);
      //     resolve(goals);
      //   }
      // })
    });
    return promise;
  },
  get: function(id) {
    const promise = new Promise((resolve, reject)=>{
      goalModel.findById(id, (err, goal) => {
        if(err) {
          console.log('failed in get of goals');
          reject(err);
        } else {
          console.log(`goal:  ${goal}`);
          resolve(goal);
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
          console.log(`error in saving goal`);
          reject(err);
        } else {
          console.log(`Goal saved in db ${newGoal}`);
          resolve(newGoal);
        }
      });
    });
    return promise;
  },
  update: function(id, value) {
    const promise = new Promise((resolve, reject) => {
      goalModel.findByIdAndUpdate(id, { username: 'starlord88' }, (err, updateGoal) => {
        if(err) {
          console.log('failed in update of goals');
          reject(err);
        } else {
          console.log(`updateGoal:  ${updateGoal}`);
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
          console.log(`deletedGoal:  ${deletedGoal}`);
          resolve(deletedGoal);
        }
      })
    });
    return promise;
  }
};


