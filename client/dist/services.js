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
            // newGoal.milestone = '5a0f89e544385b6ac8faf2ea';
            // newGoal.checkin = '5a0f3c2367a43c60928862ef';
            // newGoal.user = '5a0cf626b2b4744472a2d5a7';

            console.log('creating new goal:', newGoal);
            axios.post('http://localhost:3030/api/goals/', newGoal)
            .then(function(response){
              callback(null, response.data);
            })
            .catch(function(error){
              alert("error in goal creation");
              callback(error, null);
            })
          }
        });
      }
    },
    get: function(id, callback){
      axios.get('http://localhost:3030/api/goals/'+ id)
      .then(function(response) {
        console.log(response.data);
        callback(null, response.data[0]);
      })
      .catch(function(error){
        alert("failed in goal get");
        callback(error, null);
      })
    },
    delete: function(goalId, resId, callback){
      services.resource.delete(resId, function(err, results){
        if(err){
          console.log('Failed in goal delete - resource delete');
          callback(err, null);
        } else {
          axios.delete('http://localhost:3030/api/goals/'+ goalId)
          .then(function(response) {
            callback(null, response.data);
          })
          .catch(function(error){
            callback(error, null);
          })
        }
      })
    },
    update: function(goalID, goalBody, resId, resBody, callback){
      services.resource.update(resId, resBody, function(err, results){
        if(err){
          console.log('Failed in goal - resource update');
          callback(err, null);
        } else {
          axios.put('http://localhost:3030/api/goals/'+ goalID, goalBody)
          .then(function(response) {
            callback(null, response.data);
          })
          .catch(function(error){
            callback(error, null);
          })
        }
      });
    },
    updateGoal: function(goalID, goalBody, callback){
      axios.put('http://localhost:3030/api/goals/'+ goalID, goalBody)
        .then(function(response) {
          callback(null, response.data);
        })
        .catch(function(error){
          callback(error, null);
        })
    },
    listByUser: function(userId, callback){
      axios.get('http://localhost:3030/api/goals/user/'+ userId)
      .then(function(response) {
        callback(null, response.data);
      })
      .catch(function(error){
        callback(error, null);
      })
    }
  },

  checkin: {
    //creates resource and then creates checkin
    create: function(newCheckin, newRes, goalId, callback){
      if(newRes){
        services.resource.create(newRes, function(err, results){
          if(err){
            callback(err, null)
          } else {
            newCheckin.resource = results._id;
            axios.post('http://localhost:3030/api/checkins/', newCheckin)
            .then(function(response){
              //get checkins of goals and update it with new one
              services.goal.get(goalId, function(err, resGoal){
                if(err){
                  callback(err, null);
                } else {
                  let checkins = [];
                  checkins = resGoal.checkin.map((c) => c._id );
                  checkins.push(response.data._id);
                  services.goal.updateGoal(goalId, {checkin: checkins}, function(err, updatedGoal){
                    if(err){
                      callback(error, null);
                    } else {
                      callback(null, updatedGoal.data)
                    }
                  })
                }
              })
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
            callback(null, response.data);
          })
          .catch(function(error){
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
    create: function(newMilestone, newRes, goalId, callback){
      if(newRes){
        services.resource.create(newRes, function(err, results){
          if(err){
            callback(err, null)
          } else {
            newMilestone.resource = results._id;
            axios.post('http://localhost:3030/api/milestones/', newMilestone)
             .then(function(response){
              //get checkins of goals and update it with new one
              services.goal.get(goalId, function(err, resGoal){
                if(err){
                  callback(err, null);
                } else {
                  let milestones = [];
                  milestones = resGoal.milestone.map((m) => m._id );
                  milestones.push(response.data._id);
                  services.goal.updateGoal(goalId, {milestone: milestones}, function(err, updatedGoal){
                    if(err){
                      callback(error, null);
                    } else {
                      callback(null, updatedGoal.data)
                    }
                  })
                }
              })
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
    delete: function(MilestoneId, resId, goalId, callback){
      services.resource.delete(resId, function(err, results){
        if(err){
          console.log('Failed in Milestone delete - resource delete');
          callback(err, null);
        } else {
          axios.delete('http://localhost:3030/api/milestones/'+ MilestoneId)
          .then(function(response){
              //get checkins of goals and update it with new one
              console.log('calling goal get '+ goalId);
              services.goal.get(goalId, function(err, resGoal){
                if(err){
                  callback(err, null);
                } else {
                  let milestones = [];
                  milestones = resGoal.milestone.map((m) => m._id );
                  let index = milestones.findIndex(response.data._id);
                  if(index !== -1){
                    milestones.splice(index, 1);
                  }
                  services.goal.updateGoal(goalId, {milestone: milestones}, function(err, updatedGoal){
                    if(err){
                      callback(error, null);
                    } else {
                      callback(null, updatedGoal.data)
                    }
                  })
                }
              })
            })
          .catch(function(error){
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