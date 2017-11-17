import React from 'react';
import ReactDOM from 'react-dom';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Toggle from 'material-ui/Toggle';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';


class AddGoalForm extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      isOpen: true,
      startDate: '',
      endDate: ''
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
  }

  handleOpen(){
    this.setState({open: true});
  }
  handleClose(){
    this.setState({open: false});
  }
  handleToggle(event, toggled){
    this.state({[event.target.name]: !toggled});
  }
  handleStartDate(event, date){
    this.setState({
      startDate: date
    });
  }
  handleEndDate(event, date){
    this.setState({
      endDate: date
    });
  }
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <div>
        <div className="col-xs-12"><h3>Add New Goal</h3></div>
          <form>
            <div className="container-fluid">
              <TextField
                hintText="Your goal name" floatingLabelText="Name" fullWidth={true}
              /><br/>
              <TextField
                hintText="What do you wana do" floatingLabelText="Description" fullWidth={true}
              /><br/>
              <TextField
                hintText="Estimated Hours to complete goal" floatingLabelText="Hours"
                fullWidth={true}
              />
              <div className="row">
                <div className="col-xs-6">
                  <DatePicker
                    name="startDate" hintText="when are you starting goal"
                    floatingLabelText="Start Date" onChange={this.handleStartDate}
                    value={this.state.startDate}
                  />
                </div>
                <div className="col-xs-6">
                  <DatePicker
                    name="endDate" hintText="when will you achieve goal"
                    floatingLabelText="End Date" onChange={this.handleEndDate}
                    value={this.state.endDate}
                  />
                </div>
              </div>
              <TextField
                hintText="Notes" floatingLabelText="Notes" multiLine={true} rows={4} rowsMax={8}
                fullWidth={true}
              />
              <h4>Resource</h4>
              <TextField
                hintText="Your Resource name" floatingLabelText="Resource title" fullWidth={true}
              /><br/>
              <TextField
                hintText="Describe your resource" floatingLabelText="Resource Description" fullWidth={true}
              /><br/>
              <div className="row">
                <div className="col-xs-6">
                  <TextField
                    hintText="Enter the image/resource url" floatingLabelText="Image url"
                  />
                </div>
                <div className="col-xs-6">
                  <TextField
                    hintText="Enter video url" floatingLabelText="Video url"
                  />
                  <br/>
                  <br/>
                </div>
              </div>
            </div>
          </form>
          <div className="col-xs-12">
            <RaisedButton className="btn" label="Add Goal" secondary={true}/>
            <RaisedButton className="btn" label="Cancel" primary={true}/>
            <br/><br/>
          </div>
      </div>
    );
  }
}

export default AddGoalForm;