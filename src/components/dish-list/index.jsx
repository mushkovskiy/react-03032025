import { Dish } from "../dish";

export const DishList = ({ menu }) => {
  return (
    <>
      <h3>Dishes</h3>
      <ul>
        {menu.map((dish) => (
          <li key={dish.id}>
            <Dish dish={dish} />
          </li>
        ))}
      </ul>
    </>
  );
};
