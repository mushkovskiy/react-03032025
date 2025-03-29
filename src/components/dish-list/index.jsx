import { Dish } from "../dish";
import styles from "./index.module.css";
export const DishList = ({ menu }) => {
  return (
    <div className={styles.root}>
      <h3>Dishes</h3>
      <ul className={styles.list}>
        {menu.map((dish) => (
          <li key={dish.id}>
            <Dish dish={dish} />
          </li>
        ))}
      </ul>
    </div>
  );
};
