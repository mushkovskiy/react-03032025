export const Counter = ({ onIncrement, onDecrement, count }) => {
  return (
    <div>
      <button onClick={onIncrement}>+</button>
      {count}
      <button onClick={onDecrement}>-</button>
    </div>
  );
};
