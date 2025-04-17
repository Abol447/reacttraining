import React, { useContext } from "react";
import Input from "./Input";
import "./App.css";
import { Mycontext } from "./Cereatcontext";

export default function CreateCustomer() {
  const { dispatch } = useContext(Mycontext);
  return (
    <div
      id="newCustomer"
      className="font-mono flex flex-col gap-4  w-[80%] m-auto p-5 bg-gray-300 rounded-2xl"
    >
      <div className="text-2xl font-bold">create new customer</div>
      <form className="flex flex-col gap-2">
        <Input lable="customer full name" id={"name"} />
        <Input lable="national ID" id={"id"} />
      </form>
      <button className="buttom w-[20%]">create new customer</button>
    </div>
  );
}
