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
      test: true
    };
  }
  render() {
    const addGoal = <AddGoalForm/>;
    const editGoal = <EditGoalForm/>;
    const addMilestone = <AddMilestoneForm/>;
    const EditMilestone = <EditMilestoneForm/>;
    const addCheckin = <AddCheckinForm/>;
    const editCheckin = <EditCheckinForm/>;

    return (
      <MuiThemeProvider>
        <AppBar title="Boost"/>
        <Paper style={moduleStyle} zDepth={3} children={addGoal}/>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));


