import React from 'react';

function Checkbox(props) {
  return (
    <div>
      <input type="checkbox" id="first"/>
      <label for="first">{props.name}</label>
    </div>
  )
}

export default Checkbox;
