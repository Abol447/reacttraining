import React, { useContext } from "react";
import { CobinSortCx } from "../pages/Cobins";

export default function Sort() {
  const { sortOp: SelectedItem, SetSortOp } = useContext(CobinSortCx);
  //   const [SelectedItem, SetSelectedItem] = useState("Alphabet");
  return (
    <select
      className="bg-white p-1 font-bold border-gray-200 border-2"
      value={SelectedItem}
      onChange={(e) => SetSortOp(e.target.value)}
    >
      <option value={"Alphabet"}>Alphabet</option>
      <option value={"Ascending"}>Ascending</option>
      <option value={"Descending"}>Descending</option>
    </select>
  );
}
