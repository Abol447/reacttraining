import React from "react";
import { menuitem } from "../../data/data";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
const Menu = React.memo(function () {
  return (
    <div className="">
      <MenuItem />
    </div>
  );
});
export default Menu;
export function loader() {
  return menuitem();
}
