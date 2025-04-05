import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getReviewsByRestaurantId } from "./async-thunk/get-reviews-by-restaurant-id";

export const entityAdapter = createEntityAdapter();

const initialState = entityAdapter.getInitialState();

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  extraReducers: (builder) =>
    builder.addCase(
      getReviewsByRestaurantId.fulfilled,
      (state, { payload }) => {
        entityAdapter.setAll(state, payload);
      }
    ),
});

const selectReviewsSlice = (state) => state.reviews;

export const {
  selectById: selectReviewById,
  selectIds: selectReviewsIds,
  selectAll: selectAllReviews,
} = entityAdapter.getSelectors(selectReviewsSlice);
