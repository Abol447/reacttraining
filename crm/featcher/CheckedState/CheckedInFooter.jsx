import React from "react";
import { useCheckedIn } from "./hooks/useCkeckedIn";
import { useParams } from "react-router-dom";

export default function CheckedInFooter({
  enable,
  breakfast,
  breakfastPrice,
  exteraPrice,
  totalPrice,
}) {
  const { useCheckIn } = useCheckedIn(
    breakfast,
    breakfastPrice,
    totalPrice,
    exteraPrice
  );
  return (
    <div>
      <button
        disabled={!enable}
        onClick={useCheckIn}
        style={!enable ? { cursor: "not-allowed" } : { cursor: "pointer" }}
        className="btn w-fit bg-blue-600 text-white rounded-2xl "
      >
        checked-In
      </button>
    </div>
  );
}
