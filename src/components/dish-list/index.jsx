import { Dish } from "../dish";

export const DishList = ({ menu }) => {
  return (
    <ul>
      {menu.map((dish) => (
        <li key={dish.id}>
          <Dish dish={dish} />
        </li>
      ))}
    </ul>
  );
};
