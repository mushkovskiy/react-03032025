import { useSelector } from "react-redux";
import { Tab } from "../tab";
import { selectRestaurantById } from "../../store/entites/restaurants/slice";

export const RestaurantTabContainer = ({ restautantId, disabled, onClick }) => {
  const { name } = useSelector((state) =>
    selectRestaurantById(state, restautantId)
  );
  return <Tab title={name} onClick={onClick} disabled={disabled} />;
};
