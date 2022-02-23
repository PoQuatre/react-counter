import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";

const App = () => {
  const [count, setCount] = useState(0);

  const decrementCount = () => setCount(count - 1);
  const incrementCount = () => setCount(count + 1);

  return (
    <>
      <h1>Counter</h1>
      <Counter
        count={count}
        onAdd={incrementCount}
        onSubtract={decrementCount}
      />
    </>
  );
};

export default App;
