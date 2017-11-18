import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import _ from 'underscore';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';

import AddGoalForm from './components/AddGoalForm.jsx';
import EditGoalForm from './components/EditGoalForm.jsx';
import AddMilestoneForm from './components/AddMilestoneForm.jsx';
import EditMilestoneForm from './components/EditMilestoneForm.jsx';
import AddCheckinForm from './components/AddCheckinForm.jsx';
import EditCheckinForm from './components/EditCheckinForm.jsx';

const moduleStyle = {
  marginTop: '20px',
  width: '50vw',
  minWidth: '600px',
  backgroundColor: 'white',
  margin: 'auto',
  color: '#000',
  maxHeight: '700px',
  overflow: 'auto'
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      checkin: {},
      milestone: {},
      goal: {},
      goals: [],
      user: '5a0cf626b2b4744472a2d5a7'
    };

    //checkins
    this.serviceCreateCheckin = this.serviceCreateCheckin.bind(this);
    this.serviceGetCheckin = this.serviceGetCheckin.bind(this);
    this.serviceUpdateCheckin = this.serviceUpdateCheckin.bind(this);
    this.serviceDeleteCheckin = this.serviceDeleteCheckin.bind(this);
    //milestones
    this.serviceCreateMilestone = this.serviceCreateMilestone.bind(this);
    this.serviceGetMilestone = this.serviceGetMilestone.bind(this);
    this.serviceUpdateMilestone = this.serviceUpdateMilestone.bind(this);
    this.serviceDeleteMilestone = this.serviceDeleteMilestone.bind(this);
    //goals
    this.serviceCreateGoal = this.serviceCreateGoal.bind(this);
    this.serviceGetGoal = this.serviceGetGoal.bind(this);
    this.serviceUpdateGoal = this.serviceUpdateGoal.bind(this);
    this.serviceDeleteGoal = this.serviceDeleteGoal.bind(this);
    //goals of user
    //this.serviceListUserGoals = this.serviceListUserGoals.bind(this);
  }

  componentDidMount(){
    //these methods are called on click events of line with their respective id's

    //this.serviceGetCheckin('5a0f6e520c18496660c36582');
    this.serviceGetMilestone('5a0ff34bf1a27677f633eb83');
    //this.serviceGetGoal('5a0fbaff32657970852b7ea4');

    this.serviceListUserGoals('5a0cf626b2b4744472a2d5a7');
  }

  /*******************  services   *******************/
  /********** Goals of particular user ***********/
  serviceListUserGoals(userId) {
    services.goal.listByUser(userId, (err, results) => {
      if(err){
        console.log('failed in get goals of user');
      } else {
        this.setState({goals: results});
      }
    });
  }
  /********** Goal ***********/
  serviceCreateGoal(goal, res) {
    services.goal.create(goal, res, (err, results) => {
      if(err){
        console.log('failed create goal');
      } else {
        //TODO - close add screen and clear fields
        console.log('goal creation success');
      }
    });
  }
  serviceGetGoal(id){
    services.goal.get(id, (err, results) => {
      if(err){
        console.log('failed retrieving Goal and its resource');
      } else {
        this.setState({'goal': results});
      }
    });
  }
  serviceUpdateGoal(goalId, goalBody, resourceId, resourceBody){
    services.goal.update(goalId, goalBody, resourceId, resourceBody,
      function(err, results){
        if(err){
          console.log('failed updating Goal and resource');
        } else {
          //TODO - close edit screen and clear fields
          console.log('success updating Goal and resource successfully');
        }
      }
    );
  }
  serviceDeleteGoal(goalId, resourceId){
    services.goal.delete(goalId, resourceId, function(err, results){
      if(err){
        console.log('failed deleting Goal and resource');
      } else {
        //TODO - close edit screen and clear fields
        console.log('success deleting Goal and resource');
      }
    });
  }

  /********** Checkin ***********/
  serviceCreateCheckin(checkin, res){
    const goalId = '5a0fbaff32657970852b7ea4';
    services.checkin.create(checkin, res, goalId, (err, results) => {
      if(err){
        console.log('failed creating checking and resource', err);
      } else {
        //TODO - close add screen and clear fields
        console.log('created resource and checkin successfully');
        this.serviceListUserGoals('5a0cf626b2b4744472a2d5a7');
      }
    });
  }
  serviceGetCheckin(id){
    services.checkin.get(id, (err, results) => {
      if(err){
        console.log('failed retrieving checking and its resource');
      } else {
        this.setState({'checkin': results});
      }
    });
  }
  serviceUpdateCheckin(checkinId, checkinBody, resourceId, resourceBody){
    services.checkin.update(checkinId, checkinBody, resourceId, resourceBody,
      function(err, results){
        if(err){
          console.log('failed updating checking and resource');
        } else {
          //TODO - close edit screen and clear fields
          console.log('success updating checkin and resource successfully');
        }
      }
    );
  }
  serviceDeleteCheckin(checkinId, resourceId){
    const goalId = '5a0fbaff32657970852b7ea4';
    services.checkin.delete(checkinId, resourceId, goalId, function(err, results){
      if(err){
        console.log('failed deleting checkin and resource');
      } else {
        //TODO - close edit screen and clear fields
        console.log('success deleting checkin and resource');
      }
    });
  }

  /********** Milestone ***********/
  serviceCreateMilestone(milestone, res){
    const goalId = '5a0fbaff32657970852b7ea4';
    services.milestone.create(milestone, res, goalId, (err, results) => {
      if(err){
        console.log('failed creating milestone and resource');
      } else {
        //TODO - close add screen and clear fields
        console.log('created resource and milestone successfully');
      }
    });
  }
  serviceGetMilestone(id){
    services.milestone.get(id, (err, results) => {
      if(err){
        console.log('failed retrieving milestone and its resource');
      } else {
        console.log(results);
        this.setState({'milestone': results});
      }
    });
  }
  serviceUpdateMilestone(milestoneId, milestoneBody, resourceId, resourceBody){
    services.milestone.update(milestoneId, milestoneBody, resourceId, resourceBody,
      function(err, results){
        if(err){
          console.log('failed updating milestone and resource');
        } else {
          //TODO - close edit screen and clear fields
          console.log('success updating milestone and resource successfully');
        }
      }
    );
  }
  serviceDeleteMilestone(milestoneId, resourceId){
    const goalId = '5a0fbaff32657970852b7ea4';
    services.milestone.delete(milestoneId, resourceId, goalId, function(err, results){
      if(err){
        alert('failed deleting milestone and resource');
      } else {
        //TODO - close edit screen and clear fields
        alert('success deleting milestone and resource');
      }
    });
  }


  render() {
    let addGoal = <AddGoalForm serviceCreateGoal={this.serviceCreateGoal} user={this.state.user}/>;
    let editGoal = <EditGoalForm goal={this.state.goal}
                      serviceUpdateGoal={this.serviceUpdateGoal}
                      serviceDeleteGoal={this.serviceDeleteGoal}/>;

    let addMilestone = <AddMilestoneForm serviceCreateMilestone={this.serviceCreateMilestone}/>;
    let editMilestone = <EditMilestoneForm milestone={this.state.milestone}
                        serviceUpdateMilestone={this.serviceUpdateMilestone}
                        serviceDeleteMilestone={this.serviceDeleteMilestone}/>;

    let addCheckin = <AddCheckinForm serviceCreateCheckin={this.serviceCreateCheckin}/>;
    let editCheckin = <EditCheckinForm checkin={this.state.checkin}
                        serviceUpdateCheckin={this.serviceUpdateCheckin}
                        serviceDeleteCheckin={this.serviceDeleteCheckin}/>;

    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="Boost"/>
          <Paper style={moduleStyle} zDepth={3} children={editMilestone}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));


