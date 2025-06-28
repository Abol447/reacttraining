import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  DeleteBooking,
  getBooking,
} from "../../../Data/request/BookingRequest";
import toast from "react-hot-toast";

export default function useDeletBooking(id) {
  const queryclient = useQueryClient();
  const { mutate: deletCobin } = useMutation({
    mutationFn: () => DeleteBooking(id),
    onSuccess: () => {
      toast.success(`Booking #${id} Deleted`);
      queryclient.invalidateQueries({
        queryKey: ["Booking"],
        queryfn: getBooking,
      });
    },
  });
  return { deletCobin };
}
