import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../mock/normalized-mock";

const initialState = {
  entities: normalizedDishes.reduce((acc, item) => {
    acc[item.id] = item;

    return acc;
  }, {}),
  ids: normalizedDishes.map(({ id }) => id),
};

export const dishesSlice = createSlice({
  name: "dishes",
  initialState,
  selectors: {
    selectDishById: (state, id) => state.entities[id],
    selectDishesIds: (state) => state.ids,
  },
});

export const { selectDishById, selectDishesIds } = dishesSlice.selectors;
