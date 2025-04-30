import React from "react";
import { GrClose } from "react-icons/gr";

export default function OrderItem({ cart }) {
  console.log(cart);
  return (
    <div>
      {cart.map((item) => {
        return (
          <div className="px-2 border-t-1  border-t-gray-500">
            <div className="flex justify-between mt-2">
              <div className="flex gap-[30px] ">
                <div className="flex items-center text-lg">
                  <GrClose />
                  {item.quantity}
                </div>
                <div> {item.name}</div>
              </div>
              <div> {item.totalPrice} $</div>
            </div>
            {/* <div className="text-gray-500">
              {item.ingredients.map((item) => item)}
            </div> */}
          </div>
        );
      })}
    </div>
  );
}
