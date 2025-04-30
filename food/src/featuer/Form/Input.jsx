import React from "react";

export default function Input({ lable = "lable", name, placeHolder }) {
  return (
    <div className=" grid grid-cols-2 place-items-start">
      <div className="font-bold text-xl  flex items-center justify-center">
        {lable}
      </div>
      <input
        name={name}
        placeholder={placeHolder}
        type="text"
        className="border-2 py-[1px] px-1 rounded-2xl"
      />
    </div>
  );
}
