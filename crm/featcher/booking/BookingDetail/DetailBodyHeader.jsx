import React from "react";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { CalculateDays, getMonthName } from "../../../functions/DatesFn";

export default function DetailBodyHeader({
  nightStay,
  cobinName,
  startDate,
  endDate,
}) {
  const { diffDays, time } = CalculateDays(startDate);

  return (
    <div className="bg-blue-600 text-white flex justify-between px-3 h-[70px] items-center rounded-t-2xl">
      <div className="flex gap-5  items-center font-bold">
        <HiOutlineHomeModern className="text-2xl" />
        <div>
          <div>{nightStay + " nights in Cobin " + cobinName}</div>
        </div>
      </div>
      <div>
        <div>
          {getMonthName(startDate) +
            " (" +
            (time === "past"
              ? diffDays + " days ago"
              : time === "future"
              ? "in" + diffDays + "days"
              : "") +
            ") -- " +
            getMonthName(endDate)}
        </div>
      </div>
    </div>
  );
}
