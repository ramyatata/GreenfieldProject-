const userModel = require('../../database/models/user.js');
const Promise = require('bluebird');

module.exports = {
  //list of goals of particular user
  list: function(goal) {
    const promise = new Promise((resolve, reject) => {
      userModel.find({goal: goal}, (err, users) => {
        if(err) {
          console.log(colors.blue('failed in list of users'));
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
          console.log(colors.blue('failed in get of user'));
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
          console.log(colors.blue(`failed in saving newUser`));
          reject(err);
        } else {
          resolve(newUser);
        }
      });
    });
    return promise;
  },
  update: function(id, value) {
    const promise = new Promise((resolve, reject) => {
      userModel.findByIdAndUpdate(id, value, {new: true}, (err, updatedUser) => {
        if(err) {
          console.log(colors.blue('failed in update of users'));
          reject(err);
        } else {
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
          console.log(colors.blue('failed in delete of users'));
          reject(err);
        } else {
          resolve(deletedUser);
        }
      })
    });
    return promise;
  }
};


