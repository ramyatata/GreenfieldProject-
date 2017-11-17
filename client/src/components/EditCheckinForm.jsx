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
  constructor() {
    super();
    this.state = {};
  }
  render(){
  const deleteButtonStyle = {
    marginTop: '10px',
    marginRight: '10px'
  }

   return (
      <div>
        <div className="col-xs-12">
         <h3 className="col-xs-11">Edit Checkin</h3>
         <div className="col-xs-1">
           <FloatingActionButton mini={true} style={deleteButtonStyle}><Delete/></FloatingActionButton>
         </div>
         </div>
          <form>
            <div className="container-fluid">
              <TextField
                hintText="Your Checkin name" floatingLabelText="Name" fullWidth={true}
              /><br/>
              <TextField
                hintText="What do you want to checkin" floatingLabelText="Description"
                fullWidth={true}
              /><br/>
              <TextField
                hintText="Notes" floatingLabelText="Notes" multiLine={true} rows={3} rowsMax={8}
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
            <RaisedButton className="btn" label="Save Checkin" secondary={true}/>
            <RaisedButton className="btn" label="Cancel" primary={true}/>
            <br/><br/>
          </div>
      </div>
    );
  }
}

export default EditCheckinForm;