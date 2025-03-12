export const Tab = ({ restaurant, onClick, activeRestaurantId }) => {
  const disabled = restaurant.id === activeRestaurantId;
  return (
    <button disabled={disabled} onClick={onClick}>
      {restaurant.name}
    </button>
  );
};
