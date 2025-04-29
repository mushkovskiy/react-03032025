import { useSelector } from "react-redux";
import { selectDishById } from "../../store/entites/dishes/slice";
import Link from "next/link";
export const MenuItem = ({ id }) => {
  const { name } = useSelector((state) => selectDishById(state, id));

  return <Link href={`/dish/${id}`}>{name}</Link>;
};
