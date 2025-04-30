import React from "react";
import { GoChevronRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getNumber, getPrice } from "../featuer/cart/CartSlice";
export default function Footer() {
  const navigate = useNavigate();
  const pizzaNumber = useSelector(getNumber);

  const Price = useSelector(getPrice);
  console.log(Price);
  return (
    <div className="bg-black text-white flex justify-between p-5 items-center fixed w-full bottom-0 ">
      <div className="font-bold flex gap-5">
        <span>{pizzaNumber} pizza</span>
        <span> {Price}$</span>
      </div>
      <div
        className="font-bold flex items-center gap-1 hover:cursor-pointer group"
        onClick={() => navigate("cart")}
      >
        <div>open card </div>
        <GoChevronRight className="fill-white text-[20px]  group-hover:pl-1 " />
      </div>
    </div>
  );
}
