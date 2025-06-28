import React from "react";
import Filter from "../../Public/Filter";
import Sort from "../../Public/Sort";
const opt = ["All", "No-Discount", "Whit-Discount"];
export default function CobinsHeader({ children }) {
  return (
    <div className="flex justify-between mt-[50px] items-end w-[80%] m-auto">
      <div className="font-bold text-4xl">Cobins</div>
      <Filter value={"discount"} option={opt}>
        <Filter.option />
      </Filter>
      {children}
    </div>
  );
}
