"use client";
import { useSelector } from "react-redux";
import { Review } from "../review";
import { getReviewsByRestaurantId } from "../../store/entites/reviews/async-thunk/get-reviews-by-restaurant-id";
import { useRequest } from "../../hooks/use-request";
import { selectReviewsIds } from "../../store/entites/reviews/slice";

export const ReviewList = ({ id }) => {
  const requestStatus = useRequest(getReviewsByRestaurantId, id);

  const reviewIds = useSelector((state) => selectReviewsIds(state, id));

  if (requestStatus === "pending" || requestStatus === "idle") {
    return "loading...";
  }

  if (requestStatus === "rejected") {
    return "error";
  }
  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviewIds.map((id) => (
          <li key={id}>
            <Review reviewId={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
