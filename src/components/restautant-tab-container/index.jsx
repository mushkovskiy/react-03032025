import { useSelector } from "react-redux";
import { Tab } from "../tab";
import { selectRestaurantById } from "../../store/entites/restaurants/slice";
import { useNavigate, useParams } from "react-router";

export const RestaurantTabContainer = ({ restautantId }) => {
  const { id } = useParams;
  const navigate = useNavigate();
  const { name } = useSelector((state) =>
    selectRestaurantById(state, restautantId)
  );

  const handleTabClick = () => {
    navigate(`/restaurants/${restautantId}`);
  };
  const disabled = restautantId === id;
  return <Tab title={name} onClick={handleTabClick} disabled={disabled} />;
};
