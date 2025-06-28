import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";
export default function Layout() {
  return (
    <div className="flex h-lvh font-mono bg-gray-50">
      <div className="basis-[20%] bg-white p-3">
        <SideBar />
      </div>
      <div className="flex flex-col h-full w-full">
        <Header />
        <div className="overflow-auto h-dvw">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
