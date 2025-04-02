import { useParams } from "react-router";
import { Dish } from "../dish";
import styles from "./index.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../store/entites/restaurants/slice";
import { MenuItem } from "../menu-item";
export const MenuList = () => {
  const { id } = useParams();
  const { menu } = useSelector((state) => selectRestaurantById(state, id));

  return (
    <div className={styles.root}>
      <h3>Menu</h3>
      <ul className={styles.list}>
        {menu.map((id) => (
          <li key={id}>
            <MenuItem id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
