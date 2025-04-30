import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, getCart } from "../cart/CartSlice";
const style =
  "border rounded-full w-5 h-5 mb-1 flex items-center justify-center bg-orange-400";
export default function CardBtn({ num, id }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  console.log(data);
  return (
    <div className="flex items-center gap-4">
      <div className={style} onClick={() => dispatch(increase(id))}>
        +
      </div>
      <div>{num}</div>
      <div className={style} onClick={() => dispatch(decrease(id))}>
        -
      </div>
    </div>
  );
}
