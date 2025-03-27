import { Review } from "../review";

export const ReviewList = ({ reviewsIds }) => {
  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviewsIds.map((id) => (
          <li key={id}>
            <Review reviewId={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
