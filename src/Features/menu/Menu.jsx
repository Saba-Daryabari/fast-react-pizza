import { use } from "react";
import { getMenu } from "../../Services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import Menuitem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  return <ul>{menu.map(pizza => <Menuitem key={pizza.id} pizza={pizza} />)}</ul>;
}

export async function loader() {
  // fetch menu data from server
  const menu = await getMenu();
  return menu
}
export default Menu;
