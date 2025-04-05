import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../store/entites/restaurants/slice";
import { Outlet } from "react-router";
import { TabList } from "../../components/tab-list";
import { RestaurantTabContainer } from "../../components/restautant-tab-container";
import { getRestaurants } from "../../store/entites/restaurants/async-thunk/get-restaurants";
import { useEffect } from "react";
import { useRequest } from "../../hooks/use-request";

export const RestaurantsPage = () => {
  const requestStatus = useRequest(getRestaurants);
  const dispatch = useDispatch();
  const restaurantIds = useSelector((state) => selectRestaurantsIds(state));

  if (requestStatus === "pending") {
    return "loadingInRestaurantsPage...";
  }

  if (requestStatus === "rejected") {
    return "error";
  }

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
