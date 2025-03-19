import { DishList } from "../dish-list";
import { ReviewList } from "../review-list";

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <h1>{restaurant.name}</h1>
      <DishList menu={restaurant.menu} />
      <ReviewList reviews={restaurant.reviews} />
    </div>
  );
};
