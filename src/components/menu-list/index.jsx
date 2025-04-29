"use client";
import styles from "./index.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../store/entites/restaurants/slice";
import { MenuItem } from "../menu-item";
import { useRequest } from "../../hooks/use-request";
import { getDishByRestaurantId } from "../../store/entites/dishes/async-thunk/get-dish-by-restaurant-id";
export const MenuList = ({ id }) => {
  const requestStatus = useRequest(getDishByRestaurantId, id);

  const { menu } = useSelector((state) => selectRestaurantById(state, id));

  if (requestStatus === "idle" || requestStatus === "pending") {
    return "loadingInMenuList...";
  }

  if (requestStatus === "rejected") {
    return "error";
  }
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
