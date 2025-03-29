import { useSelector } from "react-redux";
import { selectDishById } from "../../store/entites/dishes/slice";
import { Link } from "react-router";

export const MenuItem = ({ id }) => {
  const { name } = useSelector((state) => selectDishById(state, id));

  return <Link to={`/restaurants/dish/${id}`}>{name}</Link>;
};
