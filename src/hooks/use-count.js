import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectAmountByDishId,
} from "../store/entites/cart/slice";

export const useCount = (id) => {
  const dispatch = useDispatch();
  useCallback(() => {}, []);
  const count = useSelector((state) => selectAmountByDishId(state, id)) || 0;
  const increment = useCallback(() => {
    dispatch(addToCart(id));
  }, [dispatch, id]);

  const decrement = useCallback(
    () => dispatch(removeFromCart(id)),
    [dispatch, id]
  );

  return {
    count,
    increment,
    decrement,
  };
};
