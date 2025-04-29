import { useSelector } from "react-redux";
import { selectDishById } from "../../store/entites/dishes/slice";

export const CartMenuItem = ({ menuItemId, amount }) => {
  const { name } = useSelector((state) => {
    return selectDishById(state, menuItemId);
  });
  return (
    <div>
      {name} - {amount}
    </div>
  );
};
