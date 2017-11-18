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
import Delete from 'material-ui/svg-icons/Action/delete';


class EditCheckinForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      name: '',
      description: '',
      notes: '',
      resourceId: '',
      title: '',
      res_description: '',
      imageRef: '',
      videoUrl: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleUpdateCheckin = this.handleUpdateCheckin.bind(this);
    this.handleDeleteCheckin = this.handleDeleteCheckin.bind(this);
  }

  /************* lifecycle methods ****************/
  componentWillReceiveProps(nextProps){
    this.setState({
      id: nextProps.checkin._id,
      name: nextProps.checkin.name,
      description: nextProps.checkin.description,
      notes: nextProps.checkin.notes,
      resourceId: nextProps.checkin.resource === undefined ? '': nextProps.checkin.resource[0]._id,
      title: nextProps.checkin.resource === undefined ? '' : nextProps.checkin.resource[0].title,
      res_description: nextProps.checkin.resource === undefined ? '' : nextProps.checkin.resource[0].description,
      imageRef: nextProps.checkin.resource === undefined ? '' : nextProps.checkin.resource[0].imageRef,
      videoUrl: nextProps.checkin.resource === undefined ? '' : nextProps.checkin.resource[0].videoUrl
    });
  }

  /***************** handlers **************/
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  handleUpdateCheckin(event){
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
    this.props.serviceUpdateCheckin(this.state.id, checkin, this.state.resourceId, resource);
  }
  handleDeleteCheckin(){
    this.props.serviceDeleteCheckin(this.state.id, this.state.resourceId);
  }

  render() {
    const deleteButtonStyle = {
      marginTop: '10px',
      marginRight: '10px'
    }

    return (
      <div>
        <div className="col-xs-12">
         <h3 className="col-xs-11">Edit Checkin</h3>
         <div className="col-xs-1">
            <FloatingActionButton mini={true} style={deleteButtonStyle}
              onClick={this.handleDeleteCheckin}>
              <Delete />
            </FloatingActionButton>
         </div>
         </div>
          <form>
            <div className="container-fluid">
              <TextField name="name" value={this.state.name} onChange = {this.handleChange}
                hintText="Your Checkin name" floatingLabelText="Name" fullWidth={true}
              /><br/>
              <TextField name="description" value={this.state.description} onChange = {this.handleChange}
                hintText="What do you want to checkin" floatingLabelText="Description"
                fullWidth={true}
              /><br/>
              <TextField name="notes" value={this.state.notes} onChange = {this.handleChange}
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
                    hintText="Describe your resource"
                    floatingLabelText="Resource Description" fullWidth={true}
                  /><br/>
                  <TextField name="videoUrl" value={this.state.videoUrl} onChange = {this.handleChange}
                    hintText="Enter video url" floatingLabelText="Video url" fullWidth={true}
                  />
                  <br/>
                  <br/>
                </div>
              </div>
            </div>
          </form>
          <div className="col-xs-12">
            <RaisedButton className="btn" label="Save Checkin" secondary={true}
              onClick={this.handleUpdateCheckin}/>
            <RaisedButton className="btn" label="Cancel" primary={true}/>
            <br/><br/>
          </div>
      </div>
    );
  }
}

export default EditCheckinForm;