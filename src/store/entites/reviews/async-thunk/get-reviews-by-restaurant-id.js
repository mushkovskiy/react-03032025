import { createAsyncThunk } from "@reduxjs/toolkit";

export const getReviewsByRestaurantId = createAsyncThunk(
  "reviews/getReviewsByRestaurantId",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );

    if (!response.ok) {
      return rejectWithValue("Failed to fetch reviews");
    }

    const result = await response.json();

    if (!result || result.length === 0) {
      return rejectWithValue("No reviews found");
    }

    return result;
  }
);
