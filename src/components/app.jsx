import { useState } from "react";
import { restaurants } from "../mock/index";
import { Layout } from "./layout";
import { Restaurant } from "./restaurant";
import { TabList } from "./tab-list";

const DEFAULT_ACTIVE_RESTAURANT_ID = restaurants[0].id;

export const App = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    DEFAULT_ACTIVE_RESTAURANT_ID
  );
  const activeRestaurant = restaurants.find(
    ({ id }) => id === activeRestaurantId
  );
  return (
    <Layout>
      <TabList
        restaurants={restaurants}
        activeRestaurantId={activeRestaurantId}
        setActiveRestaurantId={setActiveRestaurantId}
      />
      <Restaurant restaurant={activeRestaurant} />
    </Layout>
  );
};
