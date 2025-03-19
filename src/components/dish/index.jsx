import { useState } from "react";
import { Counter } from "../counter/counter";
import { useCount } from "../../hooks/use-count";

export const Dish = ({ dish }) => {
  const { name } = dish;
  const { count, onIncrement, onDecrement } = useCount();

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
