import React from "react";
import { GoArrowLeft } from "react-icons/go";
import CartItem from "./CartItem";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Cart() {
  const state = useSelector((state) => state);
  const navigate = useNavigate();
  return (
    <div className="py-14 space-y-4">
      <div
        onClick={() => navigate("/menu")}
        className="flex items-center text-orange-500 gap-2 font-bold "
      >
        <GoArrowLeft className="text-xl" />
        <div>Back to Menu</div>
      </div>
      <div className="font-bold text-4xl">Your Cart {state.HomeSlice.name}</div>
      <div className="space-y-5 pt-5">
        {state.Cart.map((item) => (
          <CartItem CartItem={item} />
        ))}
      </div>
      {state.Cart.length > 0 ? (
        <div className="mt-5">
          <div className="btn" onClick={() => navigate("/OrderInfo")}>
            next
          </div>
        </div>
      ) : null}
    </div>
  );
}
