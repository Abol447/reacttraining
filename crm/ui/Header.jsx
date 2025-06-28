import React from "react";
import { IoPersonCircleOutline, IoPersonCircleSharp } from "react-icons/io5";
import { GrLogout } from "react-icons/gr";
import { MdPerson } from "react-icons/md";
import useLogout from "../featcher/Login/hooks/useLogot";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { getuserData } from "../featcher/users/function/getuserData";
import { NavLink } from "react-router-dom";
export default function Header() {
  const { logout } = useLogout();
  const userData = getuserData();

  return (
    <div className="basis-[20%] flex items-center justify-end gap-5 bg-white shadow shadow-gray-50  py-1 px-5">
      <div className="flex items-center gap-0.5 font-bold">
        <IoPersonCircleOutline className="text-5xl" />
        <div>{userData.fullname}</div>
      </div>
      <div className="flex gap-3">
        <NavLink
          to={"/profile"}
          className={({ isActive }) =>
            isActive ? "border-3 border-blue-600 rounded-2xl p-0.5" : null
          }
        >
          <MdPerson className="text-2xl" />
        </NavLink>
        <button
          onClick={logout}
          className="cursor-pointer"
          data-tooltip-id="logout"
          data-tooltip-content="logout"
        >
          <GrLogout className="text-2xl hover:text-blue-600" />
        </button>
        <Tooltip id="logout" place="bottom" />
      </div>
    </div>
  );
}
