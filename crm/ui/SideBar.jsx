import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaCalendarDay } from "react-icons/fa6";
import { HiHomeModern } from "react-icons/hi2";
import { HiMiniUsers } from "react-icons/hi2";
import { IoSettingsSharp } from "react-icons/io5";
import SideBarLink from "./SideBarLink";
export default function SideBar() {
  const pages = [
    { page: "Home", icon: <IoHome />, path: "/home" },
    { page: "Bookings", icon: <FaCalendarDay />, path: "/bookings" },
    { page: "Cobins", icon: <HiHomeModern />, path: "/cobins" },
    { page: "Users", icon: <HiMiniUsers />, path: "/users" },
    { page: "Setting", icon: <IoSettingsSharp />, path: "/setting" },
  ];
  const [selectedPage, setSelectedPage] = useState(0);
  return (
    <div className="text-gray-600">
      <div className="w-[90%] m-auto mt-5 ">
        <img src="./Data/image/logo-light.png" alt="logo" />
      </div>
      <ul className="flex flex-col gap-5 mt-8">
        {pages.map((page, index) => {
          return (
            <SideBarLink
              selected={selectedPage}
              setSelected={setSelectedPage}
              key={index}
              icon={page.icon}
              id={index}
              page={page.page}
              path={page.path}
            />
          );
        })}
      </ul>
    </div>
  );
}
