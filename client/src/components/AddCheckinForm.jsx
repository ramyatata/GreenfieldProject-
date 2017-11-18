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


class AddCheckinForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      notes: '',
      title: '',
      res_description: '',
      imageRef: '',
      videoUrl: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCreateCheckin = this.handleCreateCheckin.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  handleCreateCheckin(event){
    const checkin = {
      name: this.state.name,
      description: this.state.description,
      notes: this.state.notes
    };
    const resource = {
      title: this.state.title,
      description: this.state.res_description,
      imageRef: this.state.imageRef,
      videoUrl: this.state.videoUrl
    }
    this.props.serviceCreateCheckin(checkin, resource);
  }

  render(){
   return (
      <div>
        <div className="col-xs-12"><h3>Add New Checkin</h3></div>
          <form>
            <div className="container-fluid">
              <TextField name="name" value={this.state.name} onChange = {this.handleChange}
                hintText="Your Checkin name" floatingLabelText="Name" fullWidth={true}
              /><br/>
              <TextField name="description" value={this.state.description}
                onChange = {this.handleChange}
                hintText="What do you want to checkin" floatingLabelText="Description" fullWidth={true}
              /><br/>
              <TextField name="notes" value={this.state.notes}
                onChange = {this.handleChange}
                hintText="Notes" floatingLabelText="Notes" multiLine={true} rows={2} rowsMax={4}
                fullWidth={true}
              />
              <h4>Resource</h4>


              <div className="row">
                <div className="col-xs-6">
                  <TextField name="title" value={this.state.title} onChange = {this.handleChange}
                    hintText="Your Resource name" floatingLabelText="Resource title"
                    fullWidth={true}
                  /><br/>
                  <TextField name="imageRef" value={this.state.imageRef}
                    onChange = {this.handleChange}
                    hintText="Enter the image/resource url" floatingLabelText="Image url"
                    fullWidth={true}
                  />
                </div>
                <div className="col-xs-6">
                  <TextField name="res_description" value={this.state.res_description}
                    onChange = {this.handleChange}
                    hintText="Describe your resource" floatingLabelText="Resource Description" fullWidth={true} multiLine={true} rowsMax={2}
                  /><br/>
                  <TextField name="videoUrl" value={this.state.videoUrl}
                    onChange = {this.handleChange}
                    hintText="Enter video url" floatingLabelText="Video url" fullWidth={true}
                  />
                  <br/>
                  <br/>
                </div>
              </div>
            </div>
          </form>
          <div className="col-xs-12">
            <RaisedButton className="btn" label="Add Checkin" secondary={true}
              onClick={this.handleCreateCheckin}/>
            <RaisedButton className="btn" label="Cancel" primary={true}/>
            <br/><br/>
          </div>
      </div>
    );
  }
}

export default AddCheckinForm;