import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function UrlSoret({ value }) {
  const [SelectedItem, SetSelectedItem] = useState("Alphabet");
  const [searchParams, setSearchParams] = useSearchParams();
  const SearchParmsHandeller = function (opt) {
    searchParams.set(value, opt);
    setSearchParams(searchParams);
  };
  return (
    <div>
      <select
        className="bg-white p-1 font-bold border-gray-200 border-2"
        value={SelectedItem}
        onChange={(e) => {
          SetSelectedItem(e.target.value);
          SearchParmsHandeller(e.target.value);
        }}
      >
        <option value={"Alphabet"}>Alphabet</option>
        <option value={"Ascending"}>Ascending</option>
        <option value={"Descending"}>Descending</option>
      </select>
    </div>
  );
}
