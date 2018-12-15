import React, { Component } from 'react';

class Checkbox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      checked: false
    }
    this.caption = props.caption;
    this.data = props.data;
  }

  render() {
    console.log.call(this, this.state.open);
    return (
      <div>
        <input type="checkbox" id="first" onClick = {this.clickReaction} />
        <label htmlFor="first">{this.caption}</label><br />
        
      </div>
    )
  }

}


export default Checkbox;
