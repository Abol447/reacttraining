import { createContext, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useGetParms from "../hooks/useGetParms";

export const FilterContex = createContext();
export default function Filter({ value, option, children }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const SearchParmsHandeller = function (opt) {
    searchParams.set(value, opt);
    setSearchParams(searchParams);
  };
  return (
    <FilterContex.Provider value={{ value, SearchParmsHandeller, option }}>
      {children}
    </FilterContex.Provider>
  );
}
function FilterOpt() {
  const { option, SearchParmsHandeller, value } = useContext(FilterContex);
  const params = useGetParms(value);
  const loc = option.indexOf(params);
  console.log(loc);
  const [clicked, setClicked] = useState(loc >= 0 ? loc : 0);
  return (
    <div className="flex  border-gray-200 bg-white border-2 font-bold ">
      {option.map((item, index) => {
        return (
          <div
            onClick={() => {
              setClicked(index);
              SearchParmsHandeller(item);
            }}
            key={index}
            id={index}
            style={
              clicked === index
                ? { backgroundColor: "#2563eb", color: "white" }
                : null
            }
            className="h-full py-1 px-4 cursor-pointer"
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}

Filter.option = FilterOpt;
