"use client";
import { useSelector } from "react-redux";
import { ReviewForm } from "../review-form/review-form";
import styles from "./index.module.css";

import { useRequest } from "../../hooks/use-request";
import { selectRestaurantByRestautantId } from "../../store/entites/restaurant/slice";
import { getRestaurantById } from "../../store/entites/restaurant/async-thunk/get-restaurant-by-id";
import Link from "next/link";

export const Restaurant = ({ id }) => {
  const requestStatus = useRequest(getRestaurantById, id);
  const restaurant = useSelector((state) =>
    selectRestaurantByRestautantId(state, id)
  );
  if (requestStatus === "pending") {
    return "loadingInRestaurant...";
  }

  if (requestStatus === "rejected") {
    return "error";
  }

  if (!restaurant) {
    return "restaurant not found";
  }
  return (
    <div className={styles.root}>
      <h1>{restaurant.name}</h1>
      <div style={{ display: "flex", gap: "5px" }}>
        <Link href={`/restaurants/${id}/menu`}>Menu</Link>
        <Link href={`/restaurants/${id}/reviews`}>Reviews</Link>
      </div>
      <ReviewForm />
    </div>
  );
};
