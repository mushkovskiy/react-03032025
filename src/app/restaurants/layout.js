import { RestaurantsPage } from "../../components/pages/restaurants-page";

export default function RestaurantsLayout({ children }) {
  return (
    <div>
      <RestaurantsPage />
      {children}
    </div>
  );
}
