import { Counter } from "../counter/counter";
import { useForm } from "../../hooks/use-form";
import { Button } from "../button";

export const ReviewForm = () => {
  const {
    form,
    clearForm,
    setDecrementRating,
    setIncrementRating,
    setName,
    setReview,
  } = useForm();
  let { name, review, rating } = form;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "300px",
      }}
    >
      <form>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label htmlFor="username">Name</label>
          <input
            type="text"
            id="username"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label htmlFor="review">Review</label>
          <textarea
            id="review"
            onChange={(event) => setReview(event.target.value)}
            value={review}
          />
        </div>
      </form>
      <Counter
        count={rating}
        onIncrement={setIncrementRating}
        onDecrement={setDecrementRating}
      />
      <Button onClick={clearForm}>Clear</Button>
    </div>
  );
};
