import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";

export default function DetailBodyMain({
  guestNum,
  UserName,
  UserGmail,
  UserNId,
  hasBreakfast,
  children,
  creat_at,
}) {
  console.log(UserName);
  return (
    <div className="space-y-4 bg-white py-4 px-3">
      {" "}
      <div className="flex items-end gap-3 font-bold">
        <div>
          <IoPersonOutline className="text-2xl flex items-center h-full" />
        </div>
        <div className="flex items-center gap-5  h-[20px]">
          <div className="text-center">{UserName}</div>
          {guestNum > 0 ? <div>{"+" + guestNum + " Guests"}</div> : null}
          <li className="text-gray-500">{UserGmail}</li>
          <li className="text-gray-500">{UserNId}</li>
        </div>
      </div>
      <div className="font-bold flex gap-3">
        <IoMdCheckmarkCircleOutline className="text-2xl" />
        <div className="flex gap-2">
          <div>Breakfast included?</div>
          <div>{hasBreakfast ? "Yes" : "No"}</div>
        </div>
      </div>
      {children}
      <div className="mt-4 text-right text-gray-500">
        {"Booked " + creat_at.split(".")[0]}
      </div>
    </div>
  );
}
