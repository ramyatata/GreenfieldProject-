import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import _ from 'underscore';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

import AddGoalForm from './components/AddGoalForm.jsx';

// <AppBar title="Boost" iconElementRight={<AddGoalForm value={this.state.test}/>}/>
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      test: true
    };
  }
  render() {
    return (
      <MuiThemeProvider>
        <AppBar title="Boost" iconElementRight={<AddGoalForm/>}/>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));


