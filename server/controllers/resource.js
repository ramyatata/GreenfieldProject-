const resourceModel = require('../../database/models/resource.js');
const Promise = require('bluebird');

module.exports = {
  //list of goals of particular user
  list: function(goal) {
    const promise = new Promise((resolve, reject) => {
      //change filter here
      resourceModel.find({goal: goal}, (err, resources) => {
        if(err) {
          console.log('failed in list of resources');
          reject(err);
        } else {
          console.log(`resources:  ${resources[0]}`);
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
          console.log('failed in get of resource');
          reject(err);
        } else {
          console.log(`resource:  ${resource}`);
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
          console.log(`error in saving resource`);
          reject(err);
        } else {
          console.log(`Resource saved in db ${newRes}`);
          resolve(newRes);
        }
      });
    });
    return promise;
  },
  update: function(id, value) {
    const promise = new Promise((resolve, reject) => {
      resourceModel.findByIdAndUpdate(id, { goal: goal }, (err, updatedResource) => {
        if(err) {
          console.log('failed in update of checkins');
          reject(err);
        } else {
          console.log(`updatedResource:  ${updatedResource}`);
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
          console.log(`deletedResource:  ${deletedResource}`);
          resolve(deletedResource);
        }
      })
    });
     return promise;
  }
};


