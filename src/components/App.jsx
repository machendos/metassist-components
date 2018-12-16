import React from 'react';
import Checkbox from './Checkbox';
import DayInput from './DayInput';

function App() {
  return (
    <div>
      <Checkbox caption="wont to choose a day?" data={[<DayInput day="monday" />, <DayInput day="tuesday"/>]} />
    </div>
  )
}

export default App;
