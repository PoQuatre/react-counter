const Counter = ({ count, onAdd, onSubtract }) => {
  return (
    <div>
      <h2>{count}</h2>
      <div className="button-group">
        <button className="decrement" onClick={onSubtract}>
          -
        </button>
        <button className="increment" onClick={onAdd}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
