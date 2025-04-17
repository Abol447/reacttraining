import React, { useContext } from "react";
import Input from "./Input";
import { Mycontext } from "./Cereatcontext";
export default function Opration() {
  const { info, dispatch } = useContext(Mycontext);
  return (
    <div className="font-mono flex flex-col gap-4  w-[80%] m-auto p-5 bg-gray-300 rounded-2xl">
      <div className="flex gap-1 items-center">
        <Input lable={"Deposit"} id={"deposit"} />
        <select
          onChange={(e) =>
            dispatch({ type: "currency", payload: e.target.value })
          }
          value={info.currency}
          className="w-[100px] border-2 rounded-xl px-2 py-1 border-gray-500"
        >
          <option value="us doller">us doller</option>
          <option value="euru">euru</option>
        </select>
        <button className="buttom w-[100px] ">deposit</button>
      </div>
      <div className="flex gap-1 items-center">
        <Input lable={"whitdraw"} id={"whitdraw"} />
        <button className="buttom w-[100px]">df</button>
      </div>
      <div className="flex gap-1 items-center">
        <Input
          lable={"request loan"}
          placeholder={"loan amount"}
          id={"loanamount"}
        />
        <Input placeholder={"loan pupose"} id={"loanpurpes"} />
        <button className="buttom"> request laon</button>
      </div>
      <div className="flex gap-1 items-center">
        <div>pay back X$</div>
        <button className="buttom"> pay loan</button>
      </div>
    </div>
  );
}
