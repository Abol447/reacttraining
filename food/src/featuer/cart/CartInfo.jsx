import React, { useState } from "react";
import { redirect } from "react-router-dom";
import { Form } from "react-router-dom";
import { location, order } from "../../data/data";
import { useSelector } from "react-redux";
import Input from "../Form/Input";
import CustomerInfo from "../Form/CustomerInfo";
let cart = [];
export default function CartInfo() {
  cart = useSelector((state) => state.Cart);
  const [Address, setAdress] = useState("");
  const [loading, setloading] = useState(false);
  return (
    <div className="py-15 ">
      <h1 className="font-bold text-2xl ">Ready to order ? Lets Go</h1>
      <CustomerInfo>
        <Form className="space-y-2" method="post">
          <Input lable="First Name" name="customer" />
          <Input lable="Phone Number" name="phone" />
          <Input lable="Address" name="address" placeHolder={Address} />
          <div>
            <div
              onClick={async () => {
                setloading(() => true);
                const res = await location();
                console.log(res);
                setAdress(() => res.city);
                setloading(() => false);
              }}
              className="border w-fit p-2 bg-gray-50  hover:bg-gray-300 hover:cursor-pointer"
            >
              {" "}
              permission for your Address
            </div>
            {loading ? (
              <div className="text-red-600 text-sm">waite for minute</div>
            ) : null}
          </div>
          <div className="flex items-center h-8 gap-2 mt-5 font-bold">
            <input name="priority" type="checkbox" className="w-5 h-4" />
            <div className="h-full flex items-center">
              give to your order priority
            </div>
          </div>
          <button
            className="btn transition-all decoration-1 mt-5 hover:scale-110 hover:cursor-pointer "
            type="submit"
          >
            {" "}
            sumbit
          </button>
        </Form>
      </CustomerInfo>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  const neworder = {
    ...data,
    priority: data.priority === "on",
    cart: cart,
  };
  const info = await order(neworder);
  return redirect(`/order/${info.data.id}`);
}
