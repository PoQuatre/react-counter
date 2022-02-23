import "./App.css";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const decrementCount = () => setCount(count - 1);
  const incrementCount = () => setCount(count + 1);

  return (
    <>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <div className="button-group">
        <button className="decrement" onClick={decrementCount}>
          -
        </button>
        <button className="increment" onClick={incrementCount}>
          +
        </button>
      </div>
    </>
  );
};

export default App;
