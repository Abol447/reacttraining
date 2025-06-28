import React, { useContext } from "react";
import {
  CalculateDays,
  getFoematDate,
  spliteInputDate,
} from "../../functions/DatesFn";
import Menu, { MenuContex } from "../../Public/Menu";
import { BsBuildingCheck } from "react-icons/bs";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { MdRemoveRedEye } from "react-icons/md";
import useCheckedOut from "../CheckedState/hooks/useCheckedOut";
import MenuListItem from "../../Public/MenuListItem";
import { DeleteBooking } from "../../Data/request/BookingRequest";
import useDeletBooking from "../CheckedState/hooks/useDeletBooking";
import { HiLogout } from "react-icons/hi";
export default function BookingTableRow({ info }) {
  const { checkedOut } = useCheckedOut(info.id);
  const date = CalculateDays(info.startDate);
  console.log(date);
  const navigate = useNavigate();
  const toBookingDetail = function (id) {
    navigate(`/Bookings/${id}`);
  };
  const toCheckedIn = function (id) {
    navigate(`/CheckedIn/${id}`);
  };
  const { deletCobin } = useDeletBooking(info.id);
  return (
    <>
      <td className="Row">{info.cobin?.name || "No Cobin"}</td>
      <td className="flex flex-col Row ">
        <div className="">{info.guest?.fullName || "No Cobin"}</div>
        <div className="text-gray-600 text-xs">
          {info.guest?.email || "No Cobin"}
        </div>
      </td>
      <td className="Row">
        <div className="">
          {date.time === "past"
            ? date.diffDays +
                " days ago => " +
                info.numnights +
                " night stay" || "No Cobin"
            : date.time === "future"
            ? date.diffDays +
                " days ago => " +
                info.numnights +
                " night stay" || "No Cobin"
            : null}
        </div>
        <div className="text-sm text-gray-500">
          {spliteInputDate(info.startDate || "No Cobin") +
            "--" +
            spliteInputDate(info.endDate || "No Cobin")}
        </div>
      </td>
      <td className="Row ">
        <div
          style={
            info.status === "checked-in"
              ? { backgroundColor: "green" }
              : info.status === "checked-out"
              ? { backgroundColor: "skyblue" }
              : { backgroundColor: "silver" }
          }
          className=" p-1 rounded-2xl"
        >
          {info.status}
        </div>
      </td>
      <td className="Row">{info.totalPrice}</td>
      <td className="Row">
        <Menu>
          <Menu.toggle />
          <Menu.list>
            <MenuListItem
              fn={() => toBookingDetail(info.id)}
              icon={<MdRemoveRedEye />}
              lable={"booking details"}
            />
            <MenuListItem
              fn={() => deletCobin()}
              icon={<RiDeleteBin2Fill />}
              lable={"Delete Booking"}
            />
            {info.status === "unconfirmed" ? (
              <MenuListItem
                fn={() => toCheckedIn(info.id)}
                icon={<BsBuildingCheck />}
                lable={"Checed-In"}
              />
            ) : null}
            {info.status === "checked-in" ? (
              <MenuListItem
                fn={checkedOut}
                icon={<HiLogout />}
                lable={"Checed-Out"}
              />
            ) : null}
          </Menu.list>
        </Menu>
      </td>
    </>
  );
}
