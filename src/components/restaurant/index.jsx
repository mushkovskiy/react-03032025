import { DishList } from "../dish-list";
import { ReviewForm } from "../review-form/review-form";
import { ReviewList } from "../review-list";

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <h1>{restaurant.name}</h1>
      <DishList menu={restaurant.menu} />
      <ReviewList reviews={restaurant.reviews} />
      <ReviewForm />
    </div>
  );
};
