import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../mock/normalized-mock";

const initialState = {
  entities: normalizedRestaurants.reduce((acc, item) => {
    acc[item.id] = item;

    return acc;
  }, {}),
  ids: normalizedRestaurants.map(({ id }) => id),
};

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  selectors: {
    selectRestaurantById: (state, id) => {
      return state.entities[id];
    },
    selectRestaurantsIds: (state) => state.ids,
  },
});

export const { selectRestaurantById, selectRestaurantsIds } =
  restaurantsSlice.selectors;
