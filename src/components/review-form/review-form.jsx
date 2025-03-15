import { useReducer } from "react";
import { Counter } from "../counter/counter";

const MAX_COUNT = 5;
const MIN_COUNT = 0;
const DEFAULT_FORM_VALUE = {
  name: "",
  review: "",
  rating: 5,
};

const SET_NAME = "SET_NAME";
const SET_REVIEW = "SET_REVIEW";
const SET_INCREMENT_RATING = "SET_INCREMENT_RATING";
const SET_DECREMENT_RATING = "SET_DECREMENT_RATING";
const CLEAR_FORM = "CLEAR_FORM";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_NAME:
      return { ...state, name: payload };
    case SET_REVIEW:
      return { ...state, review: payload };
    case SET_INCREMENT_RATING:
      return {
        ...state,
        rating: state.rating >= MAX_COUNT ? MAX_COUNT : state.rating + 1,
      };
    case SET_DECREMENT_RATING:
      return {
        ...state,
        rating: state.rating > MIN_COUNT ? state.rating - 1 : MIN_COUNT,
      };
    case CLEAR_FORM:
      return DEFAULT_FORM_VALUE;
    default:
      return state;
  }
};
export const ReviewForm = () => {
  const [form, disatch] = useReducer(reducer, DEFAULT_FORM_VALUE);
  let { name, review, rating } = form;

  const setName = (name) => disatch({ type: SET_NAME, payload: name });
  const setReview = (review) => disatch({ type: SET_REVIEW, payload: review });
  const setIncrementRating = () => disatch({ type: SET_INCREMENT_RATING });
  const setDecrementRating = () => disatch({ type: SET_DECREMENT_RATING });
  const clearForm = () => disatch({ type: CLEAR_FORM });

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
      <button onClick={clearForm}>Clear</button>
    </div>
  );
};
