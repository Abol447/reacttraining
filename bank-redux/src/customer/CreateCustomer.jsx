import Input from "../Input";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Error from "../function/Error";
import { useState } from "react";

export default function CreateCustomer() {
  const customer = useSelector((state) => state["customer"]);
  const navigate = useNavigate();
  const [error, seterror] = useState(false);
  const errorHandle = function () {
    seterror((pre) => !pre);
  };
  return (
    <div
      id="newCustomer"
      onKeyDown={(e) => {
        {
          e.code == "Enter"
            ? customer.id != "" && customer.name != ""
              ? navigate("operation")
              : errorHandle()
            : "";
        }
      }}
      className="font-mono flex flex-col gap-4 h-[300px] justify-between w-[500px] m-auto p-5 bg-gray-300 rounded-2xl"
    >
      <div className="text-2xl font-bold text-center mt-4">
        create new customer
      </div>
      <form className="flex flex-col gap-5">
        <Input lable="customer full name" id={"name"} cattegori={"customer"} />
        <Input lable="national ID" id={"id"} cattegori={"customer"} />
      </form>
      <button
        onClick={(e) => {
          e.preventDefault();
          {
            customer.id != "" && customer.name != ""
              ? navigate("operation")
              : errorHandle();
          }
        }}
        className="mx-auto buttom w-[50%]"
      >
        create new customer
      </button>
      {error ? <Error info={customer} /> : ""}
    </div>
  );
}
