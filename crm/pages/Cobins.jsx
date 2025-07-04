import React, { createContext, useState } from "react";
import Table from "../featcher/cobins/Table";
import CobinsHeader from "../featcher/cobins/CobinsHeader";
import Sort from "../Public/Sort";
export const CobinSortCx = createContext();
export default function Cobins() {
  const [sortOp, SetSortOp] = useState("Alphabet");
  return (
    <CobinSortCx.Provider value={{ sortOp, SetSortOp }}>
      <div className="mt-5 ">
        <CobinsHeader>
          <Sort />
        </CobinsHeader>
        <Table />
      </div>
    </CobinSortCx.Provider>
  );
}
