import React from "react";
import { GoX } from "react-icons/go";
// pizzaId: 11,
//     name: "Spinach and Mushroom",
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
export default function CartItem({
  CartItem = {
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
}) {
  return (
    <div className="font-bold flex justify-between">
      <div className="text-xl  flex  items-center ">
        <GoX />
        <div className=" min-h-full">{CartItem.quantity}</div>
        <div className="ml-12">{CartItem.name}</div>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-xl">{CartItem.totalPrice}$</div>
        <div className="btn"> DELETE</div>
      </div>
    </div>
  );
}
