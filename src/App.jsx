import "./App.css";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const decrementCount = () => {};
  const incrementCount = () => {};

  return (
    <>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <div className="button-group">
        <button className="decrement">-</button>
        <button className="increment">+</button>
      </div>
    </>
  );
};

export default App;
