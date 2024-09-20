import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="container">
      <h1>Counter App</h1>
      <div className="counter">
        <h2>{count}</h2>
      </div>
      <div className="buttons">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
      <br></br>
      <br></br>
      <p>
      Developed by Dost Muhammad Sani
      </p>
    </div>
   
  );
}

export default App;
