export const Review = ({ review }) => {
  return (
    <div>
      <p>{`Author: ${review.user}`}</p>
      <p>{`Review: ${review.text}`}</p>
    </div>
  );
};
