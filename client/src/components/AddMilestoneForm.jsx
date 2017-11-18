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


class AddMilestoneForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      description: '',
      targetDate: '',
      dateCompleted: '',
      notes: '',
      title: '',
      res_description: '',
      imageRef: '',
      videoUrl: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCreateMilestone = this.handleCreateMilestone.bind(this);
    this.handleChangeTargetDate = this.handleChangeTargetDate.bind(this);
    this.handleChangeCompleteDate = this.handleChangeCompleteDate.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  handleChangeTargetDate(event, date){
    this.setState({
      targetDate: date
    });
  }
  handleChangeCompleteDate(event, date){
    this.setState({
      dateCompleted: date
    });
  }
  handleCreateMilestone(event){
    const checkin = {
      name: this.state.name,
      description: this.state.description,
      targetDate: this.state.targetDate,
      dateCompleted: this.state.dateCompleted,
      notes: this.state.notes
    };
    const resource = {
      title: this.state.title,
      description: this.state.res_description,
      imageRef: this.state.imageRef,
      videoUrl: this.state.videoUrl
    }
    this.props.serviceCreateMilestone(checkin, resource);
  }

  render() {
   return (
      <div>
        <div className="col-xs-12"><h3>Add New Milestone</h3></div>
          <form>
            <div className="container-fluid">
              <TextField name="name" value={this.state.name} onChange={this.changeHanlder}
                hintText="Your Milestone name" floatingLabelText="Name" fullWidth={true}
              /><br/>
              <TextField name="description" value={this.state.description}
                onChange = {this.handleChange}
                hintText="What do you wana do" floatingLabelText="Description" fullWidth={true}
              /><br/>
              <TextField name="notes" value={this.state.notes}
                onChange = {this.handleChange}
                hintText="Notes" floatingLabelText="Notes" multiLine={true} rows={2} rowsMax={4}
                fullWidth={true}
              />
              <div className="row">
                <div className="col-xs-6">
                  <DatePicker name="targetDate" value={this.state.targetDate}
                    onChange = {this.handleChangeTargetDate}
                    hintText="when will you achieve mile stone"
                    floatingLabelText="Target Date" onChange={this.handleStartDate}
                    value={this.state.startDate}
                  />
                </div>
                <div className="col-xs-6">
                  <DatePicker name="dateCompleted" value={this.state.dateCompleted}
                    onChange = {this.handleChangeCompleteDate}
                    hintText="when you achieved milestone"
                    floatingLabelText="Completion Date" onChange={this.handleEndDate}
                    value={this.state.endDate}
                  />
                </div>
              </div>
              <h4>Resource</h4>
              <TextField name="title" value={this.state.title} onChange = {this.handleChange}
                hintText="Your Resource name" floatingLabelText="Resource title" fullWidth={true}
              /><br/>
              <TextField name="res_description" value={this.state.res_description}
                onChange = {this.handleChange}
                hintText="Describe your resource" floatingLabelText="Resource Description" fullWidth={true}
              /><br/>
              <div className="row">
                <div className="col-xs-6">
                  <TextField name="imageRef" value={this.state.imageRef}
                    onChange = {this.handleChange}
                    hintText="Enter the image/resource url" floatingLabelText="Image url"
                  />
                </div>
                <div className="col-xs-6">
                  <TextField name="videoUrl" value={this.state.videoUrl}
                    onChange = {this.handleChange}
                    hintText="Enter video url" floatingLabelText="Video url"
                  />
                  <br/>
                  <br/>
                </div>
              </div>
            </div>
          </form>
          <div className="col-xs-12">
            <RaisedButton className="btn" label="Add Milestone" secondary={true}
              onClick={this.handleCreateMilestone}/>
            <RaisedButton className="btn" label="Cancel" primary={true}/>
            <br/><br/>
          </div>
      </div>
    );
  }
}

export default AddMilestoneForm;