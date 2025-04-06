import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getDishByRestaurantId } from "./async-thunk/get-dish-by-restaurant-id";

export const entityAdapter = createEntityAdapter();

const initialState = entityAdapter.getInitialState();

export const dishesSlice = createSlice({
  name: "dishes",
  initialState,
  extraReducers: (builder) =>
    builder.addCase(getDishByRestaurantId.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    }),
});

const selectDishesSlice = (state) => state.dishes;

export const {
  selectById: selectDishById,
  selectIds: selectDishesIds,
  selectAll: selectAllDishes,
  selectTotal: selectDishesTotal,
} = entityAdapter.getSelectors(selectDishesSlice);
