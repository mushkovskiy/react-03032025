import { useParams } from "react-router";
import { Dish } from "../../components/dish";

export const DishPage = () => {
  const { id } = useParams();

  return <Dish dishId={id} />;
};
