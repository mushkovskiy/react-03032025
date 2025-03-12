import { Tab } from "../tab";

export const TabList = ({
  restaurants,
  setActiveRestaurantId,
  activeRestaurantId,
}) => {
  return (
    <ul style={{ display: "flex", gap: "10px" }}>
      {restaurants.map((restaurant) => (
        <Tab
          restaurant={restaurant}
          key={restaurant.id}
          activeRestaurantId={activeRestaurantId}
          onClick={() => setActiveRestaurantId(restaurant.id)}
        />
      ))}
    </ul>
  );
};
