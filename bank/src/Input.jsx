import React, { useContext } from "react";
import { Mycontext } from "./Cereatcontext";
export default function Input({ lable, placeholder, id }) {
  const { info, dispatch } = useContext(Mycontext);
  return (
    <div className="flex gap-1 items-center">
      <div>{lable}</div>
      <input
        value={info[id]}
        onChange={(e) => {
          dispatch({ payload: e.target.value, type: id });
        }}
        placeholder={placeholder}
        type="text"
        className="border-gray-400 border-2 pl-2 w-[200px] py-1 rounded-2xl bg-gray-50"
      />
    </div>
  );
}
