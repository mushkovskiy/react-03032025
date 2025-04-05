import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDishByRestaurantId = createAsyncThunk(
  "dishes/getDishByRestaurantId",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
    );

    const result = await response.json();

    if (!result || result.length === 0) {
      return rejectWithValue("no dishes found");
    }

    return result;
  }
);
