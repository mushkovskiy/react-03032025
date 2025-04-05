import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getRestaurants } from "./async-thunk/get-restaurants";

export const entityAdapter = createEntityAdapter();

const initialState = entityAdapter.getInitialState();

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  extraReducers: (builder) =>
    builder.addCase(getRestaurants.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    }),
});

const selectRestaurantsSlice = (state) => state.restaurants;

export const {
  selectIds: selectRestaurantsIds,
  selectById: selectRestaurantById,
  selectTotal: selectRestaurantsTotal,
} = entityAdapter.getSelectors(selectRestaurantsSlice);
