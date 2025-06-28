import { format, isSameDay, startOfDay, startOfToday } from "date-fns";
import React from "react";
import ActivityItem from "./ActivityItem";

export default function TodayActivity({ data }) {
  const todayBooking = data.filter(
    (item) =>
      (isSameDay(format(startOfToday(), "yyyy/MM/dd"), item.endDate) &&
        item.status === "checked-in") ||
      (isSameDay(format(startOfToday(), "yyyy/MM/dd"), item.startDate) &&
        item.status === "unconfirmed")
  );
  return (
    <div className="w-[600px] space-y-6 font-bold p-4 rounded-2xl bg-white">
      <div className="text-xl">Today Activity</div>
      <div className="space-y-4">
        {todayBooking.map((item) => (
          <ActivityItem data={item} />
        ))}
      </div>
    </div>
  );
}
