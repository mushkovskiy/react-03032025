import { useSelector } from "react-redux";
import { Review } from "../review";
import { useParams } from "react-router";
import { selectRestaurantById } from "../../store/entites/restaurants/slice";

export const ReviewList = () => {
  const { id } = useParams();
  const { reviews } = useSelector((state) => selectRestaurantById(state, id));
  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((id) => (
          <li key={id}>
            <Review reviewId={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
