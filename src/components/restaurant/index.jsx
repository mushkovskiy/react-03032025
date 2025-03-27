import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../store/entites/restaurants/slice";
import { DishList } from "../dish-list";
import { ReviewForm } from "../review-form/review-form";
import { ReviewList } from "../review-list";
import styles from "./index.module.css";
export const Restaurant = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  return (
    <div className={styles.root}>
      <h1>{restaurant.name}</h1>
      <DishList menuIds={restaurant.menu} />
      <ReviewList reviewsIds={restaurant.reviews} />
      <ReviewForm />
    </div>
  );
};
