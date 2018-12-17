import React, { Component } from 'react';

class Time extends Component {
  constructor(props) {
    super(props);
    this.day = props.day;
    this.newId = props.newId;
  }

  render() {
    const id1 = this.day + this.newId;
    const id2 = this.day + (this.newId + 1);
    return (
      <div>
        <input id={id1} type="text"></input>
        :
        <input id={id2} type="text"></input>
      </div>
    )
  }
}

export default Time;
