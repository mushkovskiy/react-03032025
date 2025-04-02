import { createSlice, createSelector } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    addToCart: (state, { payload }) => {
      state[payload] = (state[payload] || 0) + 1;
    },
    removeFromCart: (state, { payload }) => {
      if (!state[payload]) {
        return state;
      }

      state[payload] = state[payload] - 1;

      if (state[payload] <= 0) {
        delete state[payload];
      }
    },
  },
  selectors: {
    selectAmountByDishId: (state, id) => state[id],
  },
});

export const { selectAmountByDishId, selectCartItemById } = cartSlice.selectors;

export const { addToCart, removeFromCart } = cartSlice.actions;

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector([selectCart], (cart) =>
  Object.keys(cart).reduce((acc, id) => {
    acc.push({ id, amount: cart[id] });

    return acc;
  }, [])
);
