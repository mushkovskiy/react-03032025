import { RestaurantContainer } from "../../../components/restaurant-container";
export default async function RestaurantLayout({ children, params }) {
  const { id } = await params;
  return (
    <div>
      <RestaurantContainer id={id} />
      {children}
    </div>
  );
}
