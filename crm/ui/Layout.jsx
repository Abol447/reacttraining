import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
export default function Layout() {
  return (
    <div className="flex h-lvh font-mono">
      <div className="basis-[20%] bg-neutral-50 p-3">
        <SideBar />
      </div>
      <div className="flex flex-col h-full w-full">
        <div className="basis-[10%] bg-amber-200">HEADER</div>
        <div className="overflow-auto h-dvw">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
