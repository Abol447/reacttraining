import React from "react";
import CartInfo from "../../Public/CartInfo";
import { FaSuitcaseRolling } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoBarChartSharp } from "react-icons/io5";
import { TiInputChecked } from "react-icons/ti";
export default function DashboardCart({
  bookingNumber,
  incom,
  checkedIn,
  rate,
}) {
  return (
    <div className="flex  w-full gap-10 mt-5">
      <CartInfo
        titr={"booking"}
        icon={<FaSuitcaseRolling className="text-4xl" />}
        number={bookingNumber}
        color={"blue"}
      />
      <CartInfo
        titr={"incom"}
        icon={<RiMoneyDollarCircleLine className="text-4xl" />}
        number={incom}
        color={"orange"}
      />
      <CartInfo
        titr={"checkedIn"}
        icon={<TiInputChecked className="text-4xl" />}
        number={checkedIn}
        color={"red"}
      />
      <CartInfo
        titr={"Occupancy Rate"}
        icon={<IoBarChartSharp className="text-4xl" />}
        number={rate}
        color={"green"}
      />
    </div>
  );
}
