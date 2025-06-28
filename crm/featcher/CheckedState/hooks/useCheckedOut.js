import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import React from "react";
import { Checkedin, getBooking } from "../../../Data/request/BookingRequest";
import toast from "react-hot-toast";

export default function useCheckedOut(id) {
  const query = useQueryClient();
  const { mutate: checkedOut } = useMutation({
    mutationFn: () => Checkedin(id, { status: "checked-out" }),
    onSuccess: () => {
      toast.success(`cobin #${id} checked-out`);
      query.invalidateQueries({
        queryKey: ["Booking"],
        queryfn: getBooking,
      });
    },
  });
  return { checkedOut };
}
