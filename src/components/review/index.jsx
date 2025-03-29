import { useSelector } from "react-redux";
import { selectUserById } from "../../store/entites/users/slice";
import { selectReviewById } from "../../store/entites/reviews/slice";

export const Review = ({ reviewId }) => {
  const { text, userId } = useSelector((state) =>
    selectReviewById(state, reviewId)
  );
  const { name } = useSelector((state) => selectUserById(state, userId));
  return (
    <div>
      <p>{`Author: ${name}`}</p>
      <p>{`Review: ${text}`}</p>
    </div>
  );
};
