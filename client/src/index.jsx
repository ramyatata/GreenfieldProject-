import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import _ from 'underscore';

class App extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>Hello Elvies !!</div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));