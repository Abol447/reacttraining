import React from "react";

export default function CartInfo({ icon, titr, number, color }) {
  return (
    <div className="flex items-center font-bold  w-[200px]  grow bg-white rounded-2 xl h-[100px]  justify-evenly rounded-2xl">
      <div
        style={{ backgroundColor: color }}
        className=" p-4 text-white rounded-full"
      >
        {icon}
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="w-[100px] whitespace-pre-wrap text-center text-sm font-bold">
          {titr}
        </div>
        <div>{number}</div>
      </div>
    </div>
  );
}
