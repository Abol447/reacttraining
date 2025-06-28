import { useMutation } from "@tanstack/react-query";
import { Checkedin } from "../../../Data/request/BookingRequest";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

export const useCheckedIn = function (
  breakfast,
  breakfastPrice,
  totalPrice,
  exteraPrice
) {
  const params = useParams();
  const navigate = useNavigate();
  const { mutate: useCheckIn } = useMutation({
    mutationFn: () => {
      if (breakfast)
        Checkedin(params.BookingId, {
          status: "checked-in",
          ispaid: true,
          hasBreakfast: true,
          exteraPrice: exteraPrice + breakfastPrice,
          totalPrice: totalPrice + breakfastPrice,
        });
      else Checkedin(params.BookingId, { status: "checked-in", ispaid: true });
    },
    onSuccess: () => {
      toast.success(`Booking ${params.BookingId} is Checked-In`);
      navigate(-1);
    },
  });
  return { useCheckIn };
};
