"use client";
import { Counter } from "../counter/counter";
import { useCount } from "../../hooks/use-count";
import { useSelector } from "react-redux";
import { selectDishById } from "../../store/entites/dishes/slice";

export const Dish = ({ dishId }) => {
  console.log("dishId", dishId);
  const { name } = useSelector((state) => selectDishById(state, dishId));
  const { count, increment, decrement } = useCount(dishId);

  return (
    <div style={{ display: "flex", gap: "5px", flexDirection: "column" }}>
      <p>{name}</p>
      <Counter onIncrement={increment} onDecrement={decrement} count={count} />
    </div>
  );
};
