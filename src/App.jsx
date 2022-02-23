import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";

const App = () => {
  const [firstCount, setFirstCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);

  const decrementFirstCount = () => {
    setFirstCount(Math.max(0, firstCount - 1));
  };
  const incrementFirstCount = () => {
    const value = Math.min(100, firstCount + 1);
    setFirstCount(value);
    value > secondCount && setSecondCount(value);
  };

  const decrementSecondCount = () => {
    const value = Math.max(0, secondCount - 1);
    setSecondCount(value);
    value < firstCount && setFirstCount(value);
  };
  const incrementSecondCount = () => {
    setSecondCount(Math.min(100, secondCount + 1));
  };

  return (
    <>
      <h1>Counter</h1>
      <Counter
        count={firstCount}
        onAdd={incrementFirstCount}
        onSubtract={decrementFirstCount}
      />
      <Counter
        count={secondCount}
        onAdd={incrementSecondCount}
        onSubtract={decrementSecondCount}
      />
    </>
  );
};

export default App;
