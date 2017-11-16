const resourceModel = require('../../database/models/resource.js');
const Promise = require('bluebird');
const colors = require('colors');

module.exports = {
  //list of goals of particular user
  list: function() {
    const promise = new Promise((resolve, reject) => {
      //change filter here
      resourceModel.find({}, (err, resources) => {
        if(err) {
          reject(err);
        } else {
          resolve(resources);
        }
      })
    });
    return promise;
  },
  get: function(id) {
    const promise = new Promise((resolve, reject) => {
      resourceModel.findById(id, (err, resource) => {
        if(err) {
          console.log(colors.blue('error in get of resource'));
          reject(err);
        } else {
          resolve(resource);
        }
      })
    });
    return promise;
  },
  create: function(values) {
    var newResource = new resourceModel(values);
    const promise = new Promise((resolve, reject) => {
      newResource.save((err, newRes) => {
        if(err) {
          console.log(colors.blue(`error in saving resource`));
          reject(err);
        } else {
          resolve(newRes);
        }
      });
    });
    return promise;
  },
  update: function(id, value) {
    const promise = new Promise((resolve, reject) => {
      resourceModel.findByIdAndUpdate(id, value, {new: true}, (err, updatedResource) => {
        if(err) {
          console.log(colors.blue('failed in update of resource'));
          reject(err);
        } else {
          resolve(updatedResource);
        }
      })
    });
    return promise;
  },
  delete: function(id) {
     const promise = new Promise((resolve, reject) => {
      resourceModel.findOneAndRemove({_id: id}, (err, deletedResource) => {
        if(err) {
          console.log('failed in delete of resources');
          reject(err);
        } else {
          resolve(deletedResource);
        }
      })
    });
     return promise;
  }
};


