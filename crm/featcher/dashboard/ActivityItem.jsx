import React from "react";

export default function ActivityItem({ data }) {
  return (
    <div className="flex items-center gap-8 ">
      <div
        style={
          data.status === "checked-in"
            ? { backgroundColor: "green" }
            : data.status === "checked-out"
            ? { backgroundColor: "skyblue" }
            : { backgroundColor: "gray" }
        }
        className=" grow w-[120px] py-1 px-2 rounded-2xl justify-center flex items-center text-white font-bold"
      >
        {data.status}
      </div>
      <div className="grow">{data.guest.fullName}</div>
      <div className="grow">{data.numnights}night</div>
      <div className="btn grow w-[150px] text-center rounded-2xl bg-blue-600">
        {data.status === "checked-in" ? "checked-out" : "checked-in"}
      </div>
    </div>
  );
}
