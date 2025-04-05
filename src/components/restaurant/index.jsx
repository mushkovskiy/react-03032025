import { useDispatch, useSelector } from "react-redux";
import { ReviewForm } from "../review-form/review-form";
import styles from "./index.module.css";
import { Link, Outlet, useParams } from "react-router";
import { getRestaurantById } from "../../store/entites/restaurant/async-thunk/get-restaurant-by-id";
import { useRequest } from "../../hooks/use-request";
import {
  selectRestaurant,
  selectRestaurantByRestautantId,
} from "../../store/entites/restaurant/slice";

export const Restaurant = () => {
  const { id } = useParams();
  const requestStatus = useRequest(getRestaurantById, id);
  const restaurant = useSelector((state) =>
    selectRestaurantByRestautantId(state, id)
  );
  console.log("requestStatus", requestStatus);
  if (requestStatus === "pending") {
    return "loadingInRestaurant...";
  }

  if (requestStatus === "rejected") {
    return "error";
  }

  return (
    <div className={styles.root}>
      <h1>{restaurant?.name}</h1>
      <div style={{ display: "flex", gap: "5px" }}>
        <Link to="menu">Menu</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <Outlet />
      <ReviewForm />
    </div>
  );
};
