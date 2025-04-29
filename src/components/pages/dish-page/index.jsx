import { useParams } from "react-router";
import { Dish } from "../../dish";

export const DishPage = ({ id }) => {
  return <Dish dishId={id} />;
};
