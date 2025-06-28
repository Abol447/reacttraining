import React from "react";
import Filter from "../../Public/Filter";

export default function DasboardHeader() {
  const opt = ["last 7Days", "last 15Days", "last 30Days"];
  return (
    <div className="flex items-center justify-between">
      <div className="font-bold text-3xl">Dashboard</div>
      <div className="w-fit">
        <Filter option={opt} value={"days"}>
          <Filter.option />
        </Filter>
      </div>
    </div>
  );
}
