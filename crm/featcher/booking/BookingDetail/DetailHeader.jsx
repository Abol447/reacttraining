import React from "react";
import BackPageBtn from "../../../Public/BackPageBtn";

export default function DetailHeader({ id, status }) {
  return (
    <div className="flex items-center justify-between rounded-2xl">
      <div className="flex gap-4 items-center">
        <div className="font-bold text-3xl">{"Booking" + " #" + id}</div>
        <div
          style={
            status === "checked-in"
              ? { backgroundColor: "green" }
              : status === "checked-out"
              ? { backgroundColor: "skyblue" }
              : { backgroundColor: "silver" }
          }
          className=" py-1 px-2 rounded-2xl w-fit flex items-center text-white font-bold"
        >
          {status}
        </div>
      </div>
      <div>
        <BackPageBtn />
      </div>
    </div>
  );
}
