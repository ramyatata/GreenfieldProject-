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
import {List, ListItem} from 'material-ui/List';
import Edit from 'material-ui/svg-icons/content/create';
import Add from 'material-ui/svg-icons/content/add';
import Close from 'material-ui/svg-icons/navigation/close';
import Delete from 'material-ui/svg-icons/Action/delete';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';


class EditGoalForm extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
      name: '',
      description: '',
      startDate: new Date(),
      endDate: new Date(),
      estimatedHours: '',
      estimatedEndDate: new Date(),
      isOpen: true,
      color: '',
      notes: '',
      title: '',
      res_description: '',
      imageRef: '',
      videoUrl: ''


      // milestone: [{type: Schema.Types.ObjectId, ref: Milestone}],
      // checkin: [{type: Schema.Types.ObjectId, ref: CheckIn}],
    };


    this.handleChange = this.handleChange.bind(this);
    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
    this.handleChangeIsOpen = this.handleChangeIsOpen.bind(this);
    this.handleUpdateGoal = this.handleUpdateGoal.bind(this);
    this.handleDeleteGoal = this.handleDeleteGoal.bind(this);
  }

  /************* lifecycle methods ****************/
  componentWillReceiveProps(nextProps){

    this.setState({
      id: nextProps.goal._id,
      name: nextProps.goal.name,
      description: nextProps.goal.description,
      notes: nextProps.goal.notes,
      startDate: new Date(nextProps.goal.startDate),
      isOpen: nextProps.goal.isOpen,
      estimatedHours: nextProps.goal.estimatedHours,
      estimatedEndDate: nextProps.goal.estimatedEndDate === null ? '' :new Date(nextProps.goal.endDate),
      endDate: nextProps.goal.endDate === null ? '' :new Date(nextProps.goal.endDate),
      resourceId: nextProps.goal.resource === undefined ? '': nextProps.goal.resource._id,
      title: nextProps.goal.resource === undefined ? '' : nextProps.goal.resource.title,
      res_description: nextProps.goal.resource === undefined ? '' : nextProps.goal.resource.description,
      imageRef: nextProps.goal.resource === undefined ? '' : nextProps.goal.resource.imageRef,
      videoUrl: nextProps.goal.resource === undefined ? '' : nextProps.goal.resource.videoUrl
    });
  }

  /*****************. handlers **************/
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
  handleChangeIsOpen(event, value){
    if(value === 1){
      this.setState({
        isOpen: false
      });
    } else if(value === 2){
      this.setState({
        isOpen: true
      });
    }
  }
  handleUpdateGoal(event){
    const goal = {
      name: this.state.name,
      description: this.state.description,
      notes: this.state.notes,
      estimatedHours: this.state.estimatedHours,
      isOpen: this.state.isOpen,
      startDate: this.state.startDate,
      endDate: this.state.endDate
    };
    const resource = {
      title: this.state.title,
      description: this.state.res_description,
      imageRef: this.state.imageRef,
      videoUrl: this.state.videoUrl
    }
    this.props.serviceUpdateGoal(this.state.id, goal, this.state.resourceId, resource);
  }
  handleDeleteGoal(){
    this.props.serviceDeleteGoal(this.state.id, this.state.resourceId);
  }

  render() {
    const deleteButtonStyle = {
      marginTop: '10px',
      marginRight: '10px'
    }

    const milestones = this.props.goal.milestone !== undefined ? this.props.goal.milestone.map((mile) => <ListItem primaryText={mile.name} leftIcon={<Edit/>}></ListItem>): <ListItem primaryText="No Milestones under this goal"></ListItem>;

    const checkins = this.props.goal.checkin !== undefined ? this.props.goal.checkin.map((check) => <ListItem primaryText={check.name} leftIcon={<Edit/>}></ListItem>): "No Checkins Yet";

    return (
      <div>
        <div className="col-xs-12">
         <h3 className="col-xs-11">Edit Goal</h3>
         <div className="col-xs-1">
           <FloatingActionButton mini={true} style={deleteButtonStyle} onClick={this.handleDeleteGoal}><Delete/></FloatingActionButton>
         </div>
         </div>
          <form>
            <div className="container-fluid">
              <TextField name="name" value={this.state.name} onChange={this.handleChange}
                hintText="Your goal name" floatingLabelText="Name" fullWidth={true}
              /><br/>
              <TextField name="description" value={this.state.description} onChange={this.handleChange}
                hintText="What do you wana do" floatingLabelText="Description" fullWidth={true}
              /><br/>
              <div className="row">
                <div className="col-xs-6">
                  <TextField name="estimatedHours" value={this.state.estimatedHours}
                    onChange={this.handleChange}
                    hintText="Estimated Hours to complete goal" floatingLabelText="Hours"
                    fullWidth={true}
                  />
                </div>
                <div className="col-xs-6">
                  <SelectField
                    name="isOpen" value={!this.state.isOpen}
                    onChange = {this.handleChangeIsOpen}
                    floatingLabelText="Goal Completed?" fullWidth={true} >
                    <MenuItem value={null} primaryText="" />
                    <MenuItem value={false} primaryText="No" />
                    <MenuItem value={true} primaryText="Yes" />
                  </SelectField>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-6">
                  <DatePicker
                    name="startDate" hintText="when are you starting goal"
                    floatingLabelText="Start Date" onChange={this.handleStartDate}
                    value={this.state.startDate} fullWidth={true}
                  />
                </div>
                <div className="col-xs-6">
                  <DatePicker
                    name="endDate" hintText="when will you achieve goal"
                    floatingLabelText="End Date" onChange={this.handleEndDate}
                    value={this.state.endDate} fullWidth={true}
                  />
                </div>
              </div>
              <TextField name="notes" value={this.state.notes} onChange={this.handleChange}
                hintText="Notes" floatingLabelText="Notes" multiLine={true} rows={2} rowsMax={4}
                fullWidth={true}
              /><br/>

              <h4>Resource</h4>
              <div className="row">
                <div className="col-xs-6">
                  <TextField
                    name="title" value={this.state.title} onChange={this.handleChange}
                    hintText="Your Resource name" floatingLabelText="Resource title"
                    fullWidth={true}
                  /><br/>
                  <TextField
                    name="imageRef" value={this.state.imageRef} onChange={this.handleChange}
                    hintText="Enter the image/resource url"
                    floatingLabelText="Image url" fullWidth={true}
                  />
                </div>
                <div className="col-xs-6">
                  <TextField
                    name="res_description" value={this.state.res_description}
                    onChange={this.handleChange}
                    hintText="Describe your resource" floatingLabelText="Resource Description"fullWidth={true}
                  /><br/>
                  <TextField
                    name="videoUrl" value={this.state.videoUrl} onChange={this.handleChange}
                    hintText="Enter video url"
                    floatingLabelText="Video url" fullWidth={true}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-6">
                <h4>Milestones</h4>
                  <List>
                    {milestones}
                    <ListItem leftIcon={<Add />}>Add new</ListItem>
                  </List>

                </div>
                <div className="col-xs-6">
                <h4>Checkins</h4>
                  <List>
                    {checkins}
                    <ListItem leftIcon={<Add />}>Add new</ListItem>
                  </List>
                </div>
              </div>
            </div>
          </form>
          <div className="col-xs-12">
            <RaisedButton className="btn" label="Save Goal" secondary={true} onClick={this.handleUpdateGoal}/>
            <RaisedButton className="btn" label="Cancel" primary={true}/>
            <br/><br/>
          </div>
        </div>
    );
  }
}

export default EditGoalForm;