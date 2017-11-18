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
      milestone: {}
    };
    //goals
    this.serviceCreateGoal = this.serviceCreateGoal.bind(this);
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

  }

  componentDidMount(){
    //services.resource.list(function(err, results){});

    //working
    //this.serviceGetCheckin('5a0f6e520c18496660c36582');
    this.serviceGetMilestone('5a0f97c9a48bd76dcf5646ae');
  }

  /*******************  services   *******************/
  /********** Goal ***********/
  serviceCreateGoal(goal, res){
    services.goal.create(goal, res, (err, results) => {
      if(err){
        alert('failed create goal');
      } else {
        alert('goal success');
      }
    });
  }

  /********** Checkin ***********/
  serviceCreateCheckin(checkin, res){
    services.checkin.create(checkin, res, (err, results) => {
      if(err){
        console.log('failed creating checking and resource');
      } else {
        //TODO - close add screen and clear fields
        console.log('created resource and checkin successfully');
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
    services.checkin.delete(checkinId, resourceId, function(err, results){
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
    services.milestone.create(milestone, res, (err, results) => {
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
    services.milestone.delete(milestoneId, resourceId, function(err, results){
      if(err){
        alert('failed deleting milestone and resource');
      } else {
        //TODO - close edit screen and clear fields
        alert('success deleting milestone and resource');
      }
    });
  }


  render() {
    let addGoal = <AddGoalForm serviceCreateGoal={this.serviceCreateGoal}/>;
    let editGoal = <EditGoalForm/>;

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


