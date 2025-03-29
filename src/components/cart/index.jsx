import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/entites/cart/slice";
import { CartMenuItem } from "../cart-menu-item";

export const Cart = () => {
  const items = useSelector(selectCartItems);

  if (!items.length) {
    return null;
  }

  return (
    <ul>
      {items.map(({ id, amount }) => (
        <li key={id}>
          <CartMenuItem menuItemId={id} amount={amount} />
        </li>
      ))}
    </ul>
  );
};
