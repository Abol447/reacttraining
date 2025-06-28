import { useSearchParams } from "react-router-dom";
import { getBookingByDate } from "../../../Data/request/BookingRequest";
import { getNumber } from "../../../functions/regexFn";
import { useQuery } from "@tanstack/react-query";

export default function useGetBookingBydate() {
  const [searchParams] = useSearchParams();
  let { data, isLoading, isSuccess } = useQuery({
    queryFn: async () =>
      await getBookingByDate(
        getNumber(searchParams.get("days"))
          ? getNumber(searchParams.get("days"))
          : 7
      ),
    queryKey: ["Booking", searchParams.get("days")],
  });
  return { data, isLoading, isSuccess };
}
