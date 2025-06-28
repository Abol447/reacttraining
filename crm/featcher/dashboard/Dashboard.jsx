import React from "react";
import DasboardHeader from "./DasboardHeader";
import useGetBookingBydate from "./hooks/usegetBookingBydate";
import DashboardCart from "./DashboardCart";
import { getTotalPrice } from "./function/price";
import { useBookingFilter } from "../booking/hooks/useBookingFilter";
import useGetCobin from "../../hooks/useGetCobin";
import Loading from "../../Public/Loading";
import useGetDates from "./hooks/useGetDates";
import { format, isSameDay } from "date-fns";
import SalaryChart from "./SalaryChart";
import usePiChartInput from "./hooks/usePiChartInput";
import NightChart from "./NightChart";
import { getTodayBooking } from "../../Data/request/BookingRequest";
import TodayActivity from "./TodayActivity";

export default function Dashboard() {
  const { data: booking, isLoading } = useGetBookingBydate();
  const CheckedIn = useBookingFilter(booking, "yes");
  const { data: cobin, isLoading: cobinLoad } = useGetCobin();
  const { dates } = useGetDates();
  const ChartInput = !isLoading
    ? dates.map((date) => ({
        value: format(date, "MM/dd"),
        totalPrice: booking.reduce(
          (pre, current) =>
            isSameDay(date, new Date(current.created_at))
              ? pre + current.totalPrice
              : pre,
          0
        ),
        exteraPrice: booking.reduce(
          (pre, current) =>
            isSameDay(date, new Date(current.created_at))
              ? pre + current.exteraPrice
              : pre,
          0
        ),
      }))
    : [];

  const { PiChartInput } = usePiChartInput(booking, isLoading);
  return (
    <div className="space-y-4">
      {isLoading || cobinLoad ? (
        <Loading />
      ) : (
        <>
          <DasboardHeader />
          <DashboardCart
            bookingNumber={booking.length}
            incom={"$" + getTotalPrice(booking)}
            checkedIn={CheckedIn.length}
            rate={Math.floor((booking.length / cobin.length) * 100) + "%"}
          />
          <div className="flex justify-between">
            <NightChart input={PiChartInput} />
            <TodayActivity data={booking} />
          </div>
          <SalaryChart data={ChartInput} />
        </>
      )}
    </div>
  );
}
