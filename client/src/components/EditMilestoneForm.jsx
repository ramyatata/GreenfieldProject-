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
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Delete from 'material-ui/svg-icons/Action/delete';


class EditMilestoneForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      name: '',
      description: '',
      targetDate: '',
      dateCompleted: '',
      notes: '',
      isOpen: '',
      resourceId: '',
      title: '',
      res_description: '',
      imageRef: '',
      videoUrl: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeTargetDate = this.handleChangeTargetDate.bind(this);
    this.handleChangeCompleteDate = this.handleChangeCompleteDate.bind(this);
    this.handleUpdateMilestone = this.handleUpdateMilestone.bind(this);
    this.handleDeleteMilestone = this.handleDeleteMilestone.bind(this);
  }

  /************* lifecycle methods ****************/
  componentWillReceiveProps(nextProps){
    this.setState({
      id: nextProps.milestone._id,
      name: nextProps.milestone.name,
      description: nextProps.milestone.description,
      notes: nextProps.milestone.notes,
      targetDate: nextProps.milestone.targetDate,
      isOpen: nextProps.milestone.isOpen,
      dateCompleted: nextProps.milestone.dateCompleted,
      resourceId: nextProps.milestone.resource === undefined ? '': nextProps.milestone.resource[0]._id,
      title: nextProps.milestone.resource === undefined ? '' : nextProps.milestone.resource[0].title,
      res_description: nextProps.milestone.resource === undefined ? '' : nextProps.milestone.resource[0].description,
      imageRef: nextProps.milestone.resource === undefined ? '' : nextProps.milestone.resource[0].imageRef,
      videoUrl: nextProps.milestone.resource === undefined ? '' : nextProps.milestone.resource[0].videoUrl
    });
  }

  /*****************. handlers **************/
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
  handleUpdateMilestone(event){
    const milestone = {
      name: this.state.name,
      description: this.state.description,
      notes: this.state.notes,
      isOpen: this.state.isOpen,
      targetDate: this.state.targetDate,
      dateCompleted: this.state.dateCompleted
    };
    const resource = {
      title: this.state.title,
      description: this.state.res_description,
      imageRef: this.state.imageRef,
      videoUrl: this.state.videoUrl
    }
    this.props.serviceUpdateMilestone(this.state.id, milestone, this.state.resourceId, resource);
  }
  handleDeleteMilestone(){
    this.props.serviceDeleteMilestone(this.state.id, this.state.resourceId);
  }
  render() {
    const deleteButtonStyle = {
      marginTop: '10px',
      marginRight: '10px'
    }
    return (
      <div>
        <div className="col-xs-12">
         <h3 className="col-xs-11">Edit Milestone</h3>
         <div className="col-xs-1">
          <FloatingActionButton mini={true} style={deleteButtonStyle}><Delete/></FloatingActionButton>
         </div>
         </div>
        <form>
          <div className="container-fluid">
            <TextField name="name" value={this.state.name} onChange={this.changeHanlder}
              hintText="Your Milestone name" floatingLabelText="Name" fullWidth={true}
            /><br/>
            <TextField name="description" value={this.state.description}
              onChange = {this.handleChange}
              hintText="What do you wana do" floatingLabelText="Description" fullWidth={true}
            /><br/>
            <SelectField name="description" value={this.state.description}
              onChange = {this.handleChange}
              floatingLabelText="Milestone Completed?" fullWidth={true}>
              <MenuItem value={null} primaryText="" />
              <MenuItem value={false} primaryText="No" />
              <MenuItem value={true} primaryText="Yes" />
            </SelectField>
            <div className="row">
              <div className="col-xs-6">
                <DatePicker name="targetDate" value={this.state.targetDate}
                  onChange = {this.handleChangeTargetDate}
                  name="targetDate" hintText="what is your target date to complete"
                  floatingLabelText="Target Date" onChange={this.handleStartDate}
                  value={this.state.startDate}
                />
              </div>
              <div className="col-xs-6">
                <DatePicker name="dateCompleted" value={this.state.dateCompleted}
                  onChange = {this.handleChangeCompleteDate}
                  name="endDate" hintText="Date you completed the milestone"
                  floatingLabelText="Completed Date" onChange={this.handleEndDate}
                />
              </div>
            </div>
            <TextField name="notes" value={this.state.notes}
              onChange = {this.handleChange}
              hintText="Notes" floatingLabelText="Notes" multiLine={true} rows={3} rowsMax={5}
              fullWidth={true}
            /><br/>

            <h4>Resource</h4>
             <TextField name="title" value={this.state.title} onChange={this.handleChange}
              hintText="Your Resource name" floatingLabelText="Resource title" fullWidth={true}
            /><br/>
            <TextField name="res_description" value={this.state.res_description}
              onChange = {this.handleChange}
              hintText="Describe your resource" floatingLabelText="Resource Description"
              fullWidth={true}
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
              </div>
            </div>
          </div>
        </form>
        <div className="col-xs-12">
            <RaisedButton className="btn" label="Save Milestone" secondary={true}/>
            <RaisedButton className="btn" label="Cancel" primary={true}/>
          <br/><br/>
        </div>
      </div>
    );
  }
}

export default EditMilestoneForm;