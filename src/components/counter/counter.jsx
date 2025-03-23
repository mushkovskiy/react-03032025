import { Button } from "../button";

export const Counter = ({ onIncrement, onDecrement, count }) => {
  return (
    <div>
      <Button onClick={onIncrement}>+</Button>
      {count}
      <Button onClick={onDecrement}>-</Button>
    </div>
  );
};
