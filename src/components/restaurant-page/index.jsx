import { useState } from "react";
import { restaurants } from "../../mock";
import { Restaurant } from "../restaurant";
import { TabList } from "../tab-list";

const DEFAULT_ACTIVE_RESTAURANT_ID = restaurants[0].id;

export const RestaurantPage = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    DEFAULT_ACTIVE_RESTAURANT_ID
  );
  const activeRestaurant = restaurants.find(
    ({ id }) => id === activeRestaurantId
  );
  return (
    <>
      <TabList
        items={restaurants}
        activeItemId={activeRestaurantId}
        setActiveItemId={setActiveRestaurantId}
      />
      <Restaurant restaurant={activeRestaurant} />
    </>
  );
};
