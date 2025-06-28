import React from "react";
import Filter from "../../Public/Filter";
import UrlSoret from "../../Public/UrlSoret";

const opt = ["All", "Checked-in", "Checked-out", "unconfirmed"];
export default function BookingHeader() {
  return (
    <div className="w-[85%] m-auto flex justify-between">
      <div className="text-3xl font-bold w-fit">Bookings Table</div>
      <Filter value={"status"} option={opt}>
        <Filter.option />
      </Filter>
      <UrlSoret value={"sort"} />
    </div>
  );
}
