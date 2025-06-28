import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getBooking } from "../../../Data/request/BookingRequest";
import { useBookingFilter } from "./useBookingFilter";
import { useBookingSort } from "./useBookingSoret";

export default function useGetBooking() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("sort");
  let { data, isSuccess, isLoading } = useQuery({
    queryFn: getBooking,
    queryKey: ["Booking", query],
  });
  data = useBookingFilter(data);
  data = useBookingSort(data);
  return { data, isLoading, isSuccess };
}
