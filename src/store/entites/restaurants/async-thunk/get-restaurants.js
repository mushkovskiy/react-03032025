import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRestaurants = createAsyncThunk(
  "restaurants/getRestaurants",
  async (_, { rejectWithValue }) => {
    const response = await fetch("http://localhost:3001/api/restaurants");

    const result = await response.json();

    if (!result.length) {
      return rejectWithValue("no data");
    }

    return result;
  },
  {
    condition: (_, { getState }) => {
      const state = getState();
      return !(
        state.restaurants &&
        state.restaurants.ids &&
        state.restaurants.ids.length > 0
      );
    },
  }
);
