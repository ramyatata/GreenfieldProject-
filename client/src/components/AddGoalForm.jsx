import React from 'react';
import ReactDOM from 'react-dom';
// import { Grid, Row, Col } from 'react-flexbox-grid';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import Toggle from 'material-ui/Toggle';


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
    alert(event.target.name, event.target.value);
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        <IconButton tooltip="Add Social Event" onClick={this.handleOpen}>
          <ContentAdd color={"#FFF"}/>
        </IconButton>
        <Dialog
          title="Add New Goal"
          open={this.state.open}
          modal={false}
          onRequestClose={this.handleClose}
          actions={actions}
          onChange={this.handleChange}>
          <form>
            <TextField hintText="Goal Name" fullWidth={true}/><br />
            <TextField hintText="Description" fullWidth={true}/><br />
            <TextField hintText="Estimated Hours" fullWidth={true}/><br /><br />
            <Toggle
            name="isOpen"
            value={this.state.isOpen}
            label="Goal completed"
            onToggle={this.handleToggle}
            fullWidth={true}
            />
            <DatePicker name="startDate" floatingLabelText="Start Date" onChange={this.handleStartDate} value={this.state.startDate}/>
            <DatePicker name="endDate" floatingLabelText="Start Date" onChange={this.handleEndDate} value={this.state.endDate}/>
            <TextField
              hintText="Notes"
              multiLine={true}
              rows={4}
              rowsMax={8}
              fullWidth={true}/>
          </form>
        </Dialog>
      </div>
    );
  }
}



// name: String,
//   description: String,
//   startDate: Date,
//   endDate: Date,
//   estimatedHours: Number,
//   estimatedEndDate: Date,
//   isOpen: {type: Boolean, default: true},
//   color: String,
//   dateCreated: {type: Date, default: Date.now},
//   notes: String,
//   milestone: [{type: Schema.Types.ObjectId, ref: Milestone}],
//   checkin: [{type: Schema.Types.ObjectId, ref: CheckIn}],
//   resource: [{type: Schema.Types.ObjectId, ref: Resource}]

export default AddGoalForm;