import React, { Component } from 'react';
import TimeInput from './TimeInput';

class DayInput extends Component {
  constructor(props) {
    super(props);
    this.day = props.day;
    this.state = {
      timesInput: [<TimeInput day={this.day} newId={1}/>]
    }
  }

  render() {
    console.log(this.state);
    const day = this.day;
    let lastIndex = 1;
    const onInput = (e) => {
      const id = e.target.id;
      if (
        id === day + lastIndex ||
        id === day + (lastIndex + 1) ||
        id === day + (lastIndex + 2) ||
        id === day + (lastIndex + 3)
      ) {
        lastIndex += 4;
        this.state.timesInput.push(<TimeInput day={day} newId={lastIndex}/>)
        this.setState(this.state);
      }
    }
    return (
      <div onInput={onInput}>
        {day}
        {this.state.timesInput}
      </div>
    );
  }
}

export default DayInput;
