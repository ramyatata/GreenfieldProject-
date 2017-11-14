const userModel = require('../../database/models/user.js');
const Promise = require('bluebird');

module.exports = {
  //list of goals of particular user
  list: function(goal) {
    const promise = new Promise((resolve, reject) => {
      userModel.find({goal: goal}, (err, users) => {
        if(err) {
          console.log('failed in list of users');
          reject(err);
        } else {
          console.log(`users:  ${users[0]}`);
          resolve(users);
        }
      })
    });
    return promise;
  },
  get: function(id) {
    const promise = new Promise((resolve, reject) => {
      userModel.findById(id, (err, user) => {
        if(err) {
          console.log('failed in get of user');
          reject(err);
        } else {
          console.log(`user:  ${user}`);
          resolve(user);
        }
      })
    });
    return promise;
  },
  create: function(values) {
    var newUserInst = new userModel(values);
    const promise = new Promise((resolve, reject) => {
      newUserInst.save((err, newUser) => {
        if(err) {
          console.log(`error in saving newUser`);
          reject(err);
        } else {
          console.log(`newUser saved in db ${newUser}`);
          resolve(newUser);
        }
      });
    });
    return promise;
  },
  update: function(id, value) {
    const promise = new Promise((resolve, reject) => {
      userModel.findByIdAndUpdate(id, value, (err, updatedUser) => {
        if(err) {
          console.log('failed in update of users');
          reject(err);
        } else {
          console.log(`updatedUser:  ${updatedUser}`);
          resolve(updatedUser);
        }
      })
    });
    return promise;
  },
  delete: function(id) {
     const promise = new Promise((resolve, reject) => {
      userModel.findOneAndRemove({_id: id}, (err, deletedUser) => {
        if(err) {
          console.log('failed in delete of users');
          reject(err);
        } else {
          console.log(`deletedUser:  ${deletedUser}`);
          resolve(deletedUser);
        }
      })
    });
    return promise;
  }
};


