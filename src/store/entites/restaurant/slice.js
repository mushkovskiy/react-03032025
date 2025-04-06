import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getRestaurantById } from "./async-thunk/get-restaurant-by-id";

export const entityAdapter = createEntityAdapter();

const initialState = entityAdapter.getInitialState();

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  extraReducers: (builder) =>
    builder.addCase(getRestaurantById.fulfilled, (state, { payload }) => {
      entityAdapter.upsertOne(state, payload);
    }),
});

const selectRestaurantSlice = (state) => state.restaurant;

export const { selectAll, selectById: selectRestaurantByRestautantId } =
  entityAdapter.getSelectors(selectRestaurantSlice);
export const selectRestaurant = (state) => selectAll(state)[0];
