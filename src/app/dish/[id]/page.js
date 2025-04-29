import { DishPage } from "../../../components/pages/dish-page";

export default async function Page({ params }) {
  const { id } = await params;
  return <DishPage id={id} />;
}
