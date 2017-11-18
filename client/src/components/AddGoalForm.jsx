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
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      name: '',
      description: '',
      startDate: new Date(),
      endDate: new Date(),
      estimatedHours: '',
      estimatedEndDate: '',
      isOpen: true,
      color: '',
      notes: '',
      milestone: [],
      checkin: [],
      resource: [],

      title: '',
      res_description: '',
      imageRef: '',
      videoUrl: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
    this.handleCreateGoal = this.handleCreateGoal.bind(this);
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
  handleCreateGoal(event){
    const goal = {
      name: this.state.name,
      description: this.state.description,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      estimatedHours: this.state.endDate,
      notes: this.state.notes
    };
    const resource = {
      title: this.state.title,
      description: this.state.res_description,
      imageRef: this.state.imageRef,
      videoUrl: this.state.videoUrl
    }
    this.props.serviceCreateGoal(goal, resource);
  }

  render() {
    return (
      <div>
        <div className="col-xs-12"><h3>Add New Goal</h3></div>
          <form>
            <div className="container-fluid">
              <TextField
                name="name" value={this.state.name} onChange={this.handleChange}
                hintText="Your goal name" floatingLabelText="Name" fullWidth={true}
              /><br/>
              <TextField
                name="description" value={this.state.description} onChange={this.handleChange}
                hintText="What do you wana do" floatingLabelText="Description" fullWidth={true}
              /><br/>
              <TextField
                name="estimatedHours" value={this.state.estimatedHours} onChange={this.handleChange}
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
                name="notes" value={this.state.notes} onChange={this.handleChange}
                hintText="Notes" floatingLabelText="Notes" multiLine={true} rows={4}
                rowsMax={8} fullWidth={true}
              />
              <h4>Resource</h4>
              <TextField
                name="title" value={this.state.title} onChange={this.handleChange}
                hintText="Your Resource name" floatingLabelText="Resource title" fullWidth={true}
              /><br/>
              <TextField
                name="res_description" value={this.state.res_description}
                onChange={this.handleChange}
                hintText="Describe your resource" floatingLabelText="Resource Description"
                fullWidth={true}
              /><br/>
              <div className="row">
                <div className="col-xs-6">
                  <TextField
                    name="imageRef" value={this.state.imageRef} onChange={this.handleChange}
                    hintText="Enter the image/resource url" floatingLabelText="Image url"
                  />
                </div>
                <div className="col-xs-6">
                  <TextField
                    name="videoUrl" value={this.state.videoUrl} onChange={this.handleChange}
                    hintText="Enter video url" floatingLabelText="Video url"
                  />
                  <br/>
                  <br/>
                </div>
              </div>
            </div>
          </form>
          <div className="col-xs-12">
            <RaisedButton className="btn" label="Add Goal" secondary={true}
              onClick={this.handleCreateGoal}/>
            <RaisedButton className="btn" label="Cancel" primary={true}/>
            <br/><br/>
          </div>
      </div>
    );
  }
}

export default AddGoalForm;