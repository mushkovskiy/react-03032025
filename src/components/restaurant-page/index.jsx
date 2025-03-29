import { useRef, useState } from "react";
import { restaurants } from "../../mock";
import { Restaurant } from "../restaurant";
import { TabList } from "../tab-list";
import { ProgressBar } from "../progress-bar";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../store/entites/restaurants/slice";
import { RestaurantTabContainer } from "../restautant-tab-container";
import { Cart } from "../cart";

const DEFAULT_ACTIVE_RESTAURANT_ID = restaurants[0].id;

export const RestaurantPage = () => {
  const ref = useRef(null);
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    DEFAULT_ACTIVE_RESTAURANT_ID
  );
  const restaurantIds = useSelector((state) => selectRestaurantsIds(state));

  return (
    <div ref={ref}>
      <ProgressBar ref={ref} />
      <TabList>
        {restaurantIds.map((id) => (
          <li key={id}>
            <RestaurantTabContainer
              restautantId={id}
              disabled={id === activeRestaurantId}
              onClick={() => setActiveRestaurantId(id)}
            />
          </li>
        ))}
      </TabList>

      <Restaurant restaurantId={activeRestaurantId} />
      <Cart />
    </div>
  );
};
