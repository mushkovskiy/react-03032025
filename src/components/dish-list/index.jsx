import { Dish } from "../dish";
import styles from "./index.module.css";
export const DishList = ({ menuIds }) => {
  return (
    <div className={styles.root}>
      <h3>Dishes</h3>
      <ul className={styles.list}>
        {menuIds.map((id) => (
          <li key={id}>
            <Dish dishId={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
