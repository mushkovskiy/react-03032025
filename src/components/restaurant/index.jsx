import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../store/entites/restaurants/slice";
import { ReviewForm } from "../review-form/review-form";
import styles from "./index.module.css";
import { Outlet, useNavigate, useParams } from "react-router";
import { Tab } from "../tab";
export const Restaurant = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  const handleMenuTabClick = () => navigate("menu");
  const handleReviewsTabClick = () => navigate("reviews");
  return (
    <div className={styles.root}>
      <h1>{restaurant.name}</h1>
      <div style={{ display: "flex", gap: "5px" }}>
        <Tab title={"Menu"} onClick={handleMenuTabClick} />
        <Tab title={"Reviews"} onClick={handleReviewsTabClick} />
      </div>
      <Outlet />
      <ReviewForm />
    </div>
  );
};
