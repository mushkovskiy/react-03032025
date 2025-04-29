import { useSelector } from "react-redux";
import { Tab } from "../tab";
import { selectRestaurantById } from "../../store/entites/restaurants/slice";
import { useRouter, usePathname } from "next/navigation";

export const RestaurantTabContainer = ({ restautantId }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { name } = useSelector((state) =>
    selectRestaurantById(state, restautantId)
  );

  const handleTabClick = () => {
    router.push(`/restaurants/${restautantId}`);
  };
  const disabled = pathname === `/restaurants/${restautantId}`;
  return <Tab title={name} onClick={handleTabClick} disabled={disabled} />;
};
