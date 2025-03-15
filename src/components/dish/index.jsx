import { useState } from "react";
import { Counter } from "../counter/counter";

const MAX_COUNT = 5;
const MIN_COUNT = 0;
export const Dish = ({ dish }) => {
  const { name } = dish;
  const [count, setCount] = useState(0);

  const onIncrement = () => setCount((prev) => (prev < 5 ? ++prev : MAX_COUNT));
  const onDecrement = () => setCount((prev) => (prev > 0 ? --prev : MIN_COUNT));

  return (
    <div style={{ display: "flex", gap: "5px", flexDirection: "column" }}>
      <p>{name}</p>
      <Counter
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        count={count}
      />
    </div>
  );
};
