import { MenuList } from "../../../../components/menu-list";

export default async function MenuPage({ params }) {
  const { id } = await params;
  return <MenuList id={id} />;
}
