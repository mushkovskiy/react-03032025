import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./entites/cart/slice";
import { restaurantsSlice } from "./entites/restaurants/slice";
import { usersSlice } from "./entites/users/slice";
import { reviewsSlice } from "./entites/reviews/slice";
import { dishesSlice } from "./entites/dishes/slice";

export const store = configureStore({
  reducer: {
    [restaurantsSlice.name]: restaurantsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [dishesSlice.name]: dishesSlice.reducer,
  },
});
