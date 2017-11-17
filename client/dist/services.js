// import axios from 'axios';
window.services = {
  resource: {
    create: function(newRes, callback){
      axios.post('http://localhost:3030/api/resources/', newRes)
      .then(function(response){
        callback(null, response.data);
      })
      .catch(function(error){
        callback(error, null);
      })
    },
    list: function(callback){
      axios.get('http://localhost:3030/api/resources/')
      .then(function(response){
        callback(null, response.data);
      })
      .catch(function(error){
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
      axios.delte('http://localhost:3030/api/resources/'+id)
      .then(function(response){
        callback(null, response.data);
      })
      .catch(function(error){
        callback(error, null);
      })
    }
  },
  goal: {
    create: function(newGoal, newRes, callback){
      if(!newRes){
        services.resource.create(newRes, function(err, results){
          if(err){
            console.log('Failed in create of resource');
            callback(err, null)
          } else {
            newGoal.resource = results._id;
            alert('new res id:' + results._id);
            axios.post('http://localhost:3030/api/goals/', newGoal)
            .then(function(response){
              callback(null, response.data);
            })
            .catch(function(error){
              callback(error, null);
            })
          }
        });
      }
    }
  }
};