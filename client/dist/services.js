// import axios from 'axios';
window.services = {
  resource: {
    create: function(newRes, callback) {
      axios.post('http://localhost:3030/api/resources/', newRes)
      .then(function(response) {
        callback(null, response.data);
      })
      .catch(function(error){
        alert("failed in resource creation");
        callback(error, null);
      })
    },
    list: function(callback){
      axios.get('http://localhost:3030/api/resources/')
      .then(function(response) {
        callback(null, response.data);
      })
      .catch(function(error){
        alert("failed in resource list");
        callback(error, null);
      })
    },
    update: function(id, updateRes, callback){
      axios.put('http://localhost:3030/api/resources/'+id, updateRes)
      .then(function(response){
        callback(null, response.data);
      })
      .catch(function(error){
        callback(error, null);
      })
    },
    delete: function(id, callback){
      axios.delete('http://localhost:3030/api/resources/'+id)
      .then(function(response){
        callback(null, response.data);
      })
      .catch(function(error){
        callback(error, null);
      })
    }
  },
  goal: {
    //creates resource and then creates goal
    create: function(newGoal, newRes, callback){
      if(newRes){
        services.resource.create(newRes, function(err, results){
          if(err){
            console.log('Failed in create of resource');
            callback(err, null)
          } else {
            newGoal.resource = results._id;
            console.log('creating new goal:', newGoal);
            axios.post('http://localhost:3030/api/goals/', newGoal)
            .then(function(response){
              alert("created goal");
              callback(null, response.data);
            })
            .catch(function(error){
              alert("error in goal creation");
              callback(error, null);
            })
          }
        });
      }
    }
  },
  checkin: {
    //creates resource and then creates checkin
    create: function(newCheckin, newRes, callback){
      if(newRes){
        services.resource.create(newRes, function(err, results){
          if(err){
            callback(err, null)
          } else {
            newCheckin.resource = results._id;
            axios.post('http://localhost:3030/api/checkins/', newCheckin)
            .then(function(response){
              callback(null, response.data);
            })
            .catch(function(error){
              callback(error, null);
            })
          }
        });
      }
    },
    get: function(id, callback){
      axios.get('http://localhost:3030/api/checkins/'+ id)
      .then(function(response) {
        callback(null, response.data[0]);
      })
      .catch(function(error){
        alert("failed in checkin get");
        callback(error, null);
      })
    },
    delete: function(checkinId, resId, callback){
      services.resource.delete(resId, function(err, results){
        if(err){
          console.log('Failed in checkin delete - resource delete');
          callback(err, null);
        } else {
          axios.delete('http://localhost:3030/api/checkins/'+ checkinId)
          .then(function(response) {
              console.log('checkin delete success');
              console.log(response);
           // callback(null, response.data);
          })
          .catch(function(error){
            alert("failed in checkin delete");
            callback(error, null);
          })
        }
      })
    },
    update: function(checkinID, checkinBody, resId, resBody, callback){
      services.resource.update(resId, resBody, function(err, results){
        if(err){
          console.log('Failed in checkin - resource update');
          callback(err, null);
        } else {
          axios.put('http://localhost:3030/api/checkins/'+ checkinID, checkinBody)
          .then(function(response) {
            callback(null, response.data);
          })
          .catch(function(error){
            callback(error, null);
          })
        }
      });
    }
  },
  milestone: {
    //creates resource and then creates milestone
    create: function(newMilestone, newRes, callback){
      if(newRes){
        services.resource.create(newRes, function(err, results){
          if(err){
            callback(err, null)
          } else {
            newMilestone.resource = results._id;
            axios.post('http://localhost:3030/api/milestones/', newMilestone)
            .then(function(response){
              callback(null, response.data);
            })
            .catch(function(error){
              callback(error, null);
            })
          }
        });
      }
    },
    get: function(id, callback){
      axios.get('http://localhost:3030/api/milestones/'+ id)
      .then(function(response) {
        callback(null, response.data[0]);
      })
      .catch(function(error){
        alert("failed in Milestone get");
        callback(error, null);
      })
    },
    delete: function(MilestoneId, resId, callback){
      services.resource.delete(resId, function(err, results){
        if(err){
          console.log('Failed in Milestone delete - resource delete');
          callback(err, null);
        } else {
          axios.delete('http://localhost:3030/api/milestones/'+ MilestoneId)
          .then(function(response) {
              console.log('Milestone delete success');
              console.log(response);
              callback(null, response.data);
          })
          .catch(function(error){
            alert("failed in Milestone delete");
            callback(error, null);
          })
        }
      })
    },
    update: function(milestoneID, milestoneBody, resId, resBody, callback){
      services.resource.update(resId, resBody, function(err, results){
        if(err){
          console.log('Failed in Milestone - resource update');
          callback(err, null);
        } else {
          axios.put('http://localhost:3030/api/milestones/'+ milestoneID, milestoneBody)
          .then(function(response) {
            callback(null, response.data);
          })
          .catch(function(error){
            callback(error, null);
          })
        }
      });
    }
  }
};