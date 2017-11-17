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
    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose}/>,
      <FlatButton label="Add Goal" primary={true} onClick={this.handleClose}/>,
    ];

    const deleteButtonStyle = {
      marginTop: '10px',
      marginRight: '10px'
    }

    return (
      <div>
        <div className="col-xs-12">
         <h3 className="col-xs-11">Edit Goal</h3>
         <div className="col-xs-1">
           <FloatingActionButton mini={true} style={deleteButtonStyle}><Delete/></FloatingActionButton>
         </div>
         </div>
          <form>
            <div className="container-fluid">
              <TextField
                hintText="Your goal name" floatingLabelText="Name" fullWidth={true}
              /><br/>
              <TextField
                hintText="What do you wana do" floatingLabelText="Description" fullWidth={true}
              /><br/>
              <div className="row">
                <div className="col-xs-6">
                  <TextField
                    hintText="Estimated Hours to complete goal" floatingLabelText="Hours"
                  />
                </div>
                <div className="col-xs-6">
                  <SelectField
                    floatingLabelText="Goal Completed?" value={this.state.value}
                    onChange={this.handleChange} >
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
                    value={this.state.startDate}
                  />
                </div>
                <div className="col-xs-6">
                  <DatePicker
                    name="endDate" hintText="when will you achieve goal"
                    floatingLabelText="End Date" onChange={this.handleEndDate} value={this.state.endDate}
                  />
                </div>
              </div>
              <TextField
                hintText="Notes" floatingLabelText="Notes" multiLine={true} rows={3} rowsMax={5}
                fullWidth={true}
              /><br/>

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
                </div>
              </div>
              <div className="row">
                <div className="col-xs-6">
                <h4>Milestones</h4>
                  <List>
                    <ListItem primaryText="milestone 1" leftIcon={<Edit/>}></ListItem>
                    <ListItem primaryText="milestone 2" leftIcon={<Edit/>}></ListItem>
                    <ListItem primaryText="milestone 3" leftIcon={<Edit/>}></ListItem>
                    <ListItem leftIcon={<Add />}>Add new</ListItem>
                  </List>

                </div>
                <div className="col-xs-6">
                <h4>Checkins</h4>
                  <List>
                    <ListItem primaryText="checkin 1" leftIcon={<Edit/>}></ListItem>
                    <ListItem primaryText="checkin 2" leftIcon={<Edit/>}></ListItem>
                    <ListItem primaryText="checkin 3" leftIcon={<Edit/>}></ListItem>
                    <ListItem leftIcon={<Add />}>Add new</ListItem>
                  </List>
                </div>
              </div>
            </div>
          </form>
          <div className="col-xs-12">
            <RaisedButton className="btn" label="Save Goal" secondary={true}/>
            <RaisedButton className="btn" label="Cancel" primary={true}/>
            <br/><br/>
          </div>
        </div>
    );
  }
}

export default EditGoalForm;