import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../store/entites/restaurants/slice";
import { Outlet } from "react-router";
import { TabList } from "../../components/tab-list";
import { RestaurantTabContainer } from "../../components/restautant-tab-container";

export const RestaurantsPage = () => {
  const restaurantIds = useSelector((state) => selectRestaurantsIds(state));

  return (
    <div>
      <TabList>
        {restaurantIds.map((id) => (
          <li key={id}>
            <RestaurantTabContainer restautantId={id} />
          </li>
        ))}
      </TabList>
      <Outlet />
    </div>
  );
};
