import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../store/entites/restaurants/slice";
import { ReviewForm } from "../review-form/review-form";
import styles from "./index.module.css";
import { Link, Outlet, useParams } from "react-router";

export const Restaurant = () => {
  const { id } = useParams();
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  return (
    <div className={styles.root}>
      <h1>{restaurant.name}</h1>
      <div style={{ display: "flex", gap: "5px" }}>
        <Link to="menu">Menu</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <Outlet />
      <ReviewForm />
    </div>
  );
};
