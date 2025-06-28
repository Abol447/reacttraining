import React, { Children, createContext, useContext, useState } from "react";
import {
  FiAlignJustify,
  FiMoreHorizontal,
  FiMoreVertical,
} from "react-icons/fi";
import { IoCloseCircleOutline } from "react-icons/io5";
export const MenuContex = createContext();
export default function Menu({ children }) {
  const [Open, setOpen] = useState(false);
  return (
    <MenuContex.Provider value={{ Open, setOpen }}>
      <div
        className=" relative  w-fit flex p-2 flex-col gap-2"
        style={Open ? { boxShadow: "1px black 1px" } : null}
      >
        {children}
      </div>
    </MenuContex.Provider>
  );
}
export function MenuToggle() {
  const { Open, setOpen } = useContext(MenuContex);
  return (
    <div>
      {!Open ? (
        <FiMoreVertical
          onClick={() => setOpen((pre) => !pre)}
          className="text-2xl "
        />
      ) : (
        <FiMoreHorizontal
          className="text-2xl"
          onClick={() => setOpen((pre) => !pre)}
        />
      )}
    </div>
  );
}
export function MenuList({ children }) {
  const { Open } = useContext(MenuContex);
  return Open ? (
    <div className="right-3 min-w-[52px] absolute top-7 z-10 bg-gray-50 shadow shadow-gray-500">
      {children}
    </div>
  ) : null;
}

Menu.toggle = MenuToggle;
Menu.list = MenuList;
