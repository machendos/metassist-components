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
    const body = this.state.open ? <div>{this.data.map(el => <p>{el}</p>)}</div> : <div></div>
    return (
      <div>
        <input type="checkbox" id="first" onClick = {this.clickReaction} />
        <label htmlFor="first">{this.caption}</label><br />
        {body}
        
      </div>
    )
  }

  clickReaction = () => {
    console.log.call(this, 'TRANS:', this.open);
    this.setState({
      open: !this.state.open,
      checked: !this.checked
    })
  }

}


export default Checkbox;
