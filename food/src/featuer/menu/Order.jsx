import React from "react";
import OrderItem from "../Order.jsx/OrderItem";
import getorder from "../../data/data";
import { useLoaderData } from "react-router-dom";

// cart
// :
// [{…}]
// customer
// :
// "abol"
// estimatedDelivery
// :
// "2025-04-29T16:26:26.370Z"
// id
// :
// "XLLLEY"
// orderPrice
// :
// 15
// priority
// :
// false
// priorityPrice
// :
// 0
// status
// :
// "preparing"
export default function Order() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="mt-10 space-y-5 font-bold">
      <div className="flex justify-between ">
        <div className="text-2xl">
          {" "}
          Order {data.data.id} {data.data.status}
        </div>
        <div className="flex gap-5">
          {data.data.priority ? (
            <div className="btn_whitoutColor bg-red-600 text-white ">
              priority
            </div>
          ) : null}
          <div className="btn_whitoutColor bg-green-700 text-white">
            {data.data.status}
          </div>
        </div>
      </div>
      <div className="flex justify-between bg-gray-200 py-5 px-4 rounded-2xl">
        <div>Order shoude have arrived </div>
        <div>{data.data.estimatedDelivery}</div>
      </div>
      <div>
        <OrderItem cart={data.data.cart} />
      </div>
      <div className="w-full bg-gray-200 py-5 px-4 rounded-2xl ">
        <div> Price pizza : {data.data.orderPrice}$</div>
      </div>
      <div style={{ direction: "rtl" }}>
        {data.data.status !== "delivered" ? (
          <div className="btn text-sm font-semibold">make priority</div>
        ) : null}
      </div>
    </div>
  );
}
export async function loader({ params }) {
  return await getorder(params.id);
}
