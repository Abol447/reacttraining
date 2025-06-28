import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBookingById } from "../../../Data/request/BookingRequest";

export default function useGetBookingById() {
  const params = useParams();
  const { data, isLoading } = useQuery({
    queryFn: () => getBookingById(params.BookingId),
    queryKey: ["BookingDetail", params.BookingId],
  });
  return { data, isLoading };
}
