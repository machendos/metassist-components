import React, { Component } from 'react';
import Time from './Time.jsx';

class TimeInput extends Component {

  constructor(props) {
    super(props);
    this.id = props.newId;
    this.day = props.day;
  }

  render() {
    return (
      <div>
        с
        <Time day={this.day} newId={this.id}/>
        до
        <Time day={this.day} newId={this.id + 2}/>
      </div>
    )
  }
}

export default TimeInput;
