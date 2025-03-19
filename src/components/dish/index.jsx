import { useState } from "react";

const MAX_COUNT = 5;
const MIN_COUNT = 0;
export const Dish = ({ dish }) => {
  const { name } = dish;
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => (prev < 5 ? ++prev : MAX_COUNT));
  const decrement = () => setCount((prev) => (prev > 0 ? --prev : MIN_COUNT));

  return (
    <div style={{ display: "flex", gap: "5px", flexDirection: "column" }}>
      <p>{name}</p>
      <div>
        <button onClick={increment}>+</button>
        {count}
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
};
