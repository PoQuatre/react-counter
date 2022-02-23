import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const decrementCount = () => {};
  const incrementCount = () => {};

  return (
    <>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <div>
        <button>-</button>
        <button>+</button>
      </div>
    </>
  );
};

export default App;
