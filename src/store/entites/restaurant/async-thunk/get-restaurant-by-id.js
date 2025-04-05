import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRestaurantById = createAsyncThunk(
  "restaurant/getRestaurantById",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/restaurant/${restaurantId}`
    );

    const result = await response.json();

    if (!result) {
      return rejectWithValue("no data");
    }

    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
      const state = getState();

      if (
        state.restaurant &&
        state.restaurant.ids &&
        state.restaurant.ids.includes(restaurantId)
      ) {
        return false;
      }

      return true;
    },
  }
);
