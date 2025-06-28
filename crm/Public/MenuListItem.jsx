import React, { useContext } from "react";
import { MenuContex } from "./Menu";
import { HiLogout } from "react-icons/hi";
export default function MenuListItem({ fn, icon, lable }) {
  const { setOpen } = useContext(MenuContex);
  return (
    <div
      className="menuItem"
      onClick={() => {
        fn();
        setOpen();
      }}
    >
      {icon}
      <div>{lable}</div>
    </div>
  );
}
