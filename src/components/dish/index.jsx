import { Counter } from "../counter/counter";
import { useCount } from "../../hooks/use-count";
import { useSelector } from "react-redux";
import { selectDishById } from "../../store/entites/dishes/slice";
import { useParams } from "react-router";

export const Dish = () => {
  const { id } = useParams();
  const { name } = useSelector((state) => selectDishById(state, id));
  const { count, increment, decrement } = useCount(id);

  return (
    <div style={{ display: "flex", gap: "5px", flexDirection: "column" }}>
      <p>{name}</p>
      <Counter onIncrement={increment} onDecrement={decrement} count={count} />
    </div>
  );
};
