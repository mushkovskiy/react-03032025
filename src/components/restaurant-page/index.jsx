import { useRef, useState } from "react";
import { restaurants } from "../../mock";
import { Restaurant } from "../restaurant";
import { TabList } from "../tab-list";
import { ProgressBar } from "../progress-bar";

const DEFAULT_ACTIVE_RESTAURANT_ID = restaurants[0].id;

export const RestaurantPage = () => {
  const ref = useRef(null);
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    DEFAULT_ACTIVE_RESTAURANT_ID
  );
  const activeRestaurant = restaurants.find(
    ({ id }) => id === activeRestaurantId
  );

  return (
    <div ref={ref}>
      <ProgressBar ref={ref} />
      <TabList
        items={restaurants}
        activeItemId={activeRestaurantId}
        setActiveItemId={setActiveRestaurantId}
      />
      <Restaurant restaurant={activeRestaurant} />
    </div>
  );
};
