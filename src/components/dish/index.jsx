import { useState } from "react";

export const Dish = ({ dish }) => {
  const { name } = dish;
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => (prev < 5 ? ++prev : 5));
  const decrement = () => setCount((prev) => (prev > 0 ? --prev : 0));

  return (
    <div style={{ display: "flex", gap: "5px", flexDirection: "column" }}>
      <p>{name}</p>
      <div>
        <button onClick={increment}>+</button>
        {`${count}`}
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
};
