import React, {useState} from 'react';
import Room from './Room'
import './App.css';

function App() {
  let [count, setCount]=useState(0);
  let [isMorning, setMorning]=useState(true);
  return (
    <div className={`box ${isMorning ? 'dayLight' : ''}`}>
      <h1>Day Time = {isMorning ? 'Morning' : 'Night'}</h1>
      <Room counter={count}/>
      <button onClick={() => setCount(++count)
      }>
          update counter
        </button>
        <button onClick={() => setMorning(!isMorning)}>Update Day</button>
    </div>
  );
}

export default App;
