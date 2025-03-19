import { useRef, useState } from "react";
import { restaurants } from "../../mock";
import { Restaurant } from "../restaurant";
import { TabList } from "../tab-list";
import { useScrollProgress } from "../../hooks/use-scroll-progress";
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
  const { scrolledDistancePersentage } = useScrollProgress(ref);

  return (
    <div ref={ref}>
      <ProgressBar progress={scrolledDistancePersentage} />
      <TabList
        items={restaurants}
        activeItemId={activeRestaurantId}
        setActiveItemId={setActiveRestaurantId}
      />
      <Restaurant restaurant={activeRestaurant} />
      <Restaurant restaurant={activeRestaurant} />
      <Restaurant restaurant={activeRestaurant} />
      <Restaurant restaurant={activeRestaurant} />
      <Restaurant restaurant={activeRestaurant} />
      <Restaurant restaurant={activeRestaurant} />
      <Restaurant restaurant={activeRestaurant} />
      <Restaurant restaurant={activeRestaurant} />
      <Restaurant restaurant={activeRestaurant} />
    </div>
  );
};
