import { FiDollarSign } from "react-icons/fi";

export default function DetailBodyFooter({
  totalPrice,
  cobinPrice,
  breakfastPrice,
  ispaid,
}) {
  return (
    <div
      style={
        ispaid
          ? { backgroundColor: "forestgreen" }
          : { backgroundColor: "#fde68a" }
      }
      className="flex justify-between items-center  h-[70px] font-bold w-[80%] m-auto px-4 rounded-2xl"
    >
      <div className="flex gap-5 items-center">
        <div className="flex gap-1">
          <FiDollarSign className="text-2xl" />
          <div>Total Price</div>
        </div>
        <div>
          {"$" +
            totalPrice +
            " (" +
            "$" +
            cobinPrice +
            " Cobin + " +
            "$" +
            breakfastPrice +
            " exteraPrice" +
            ") "}
        </div>
      </div>
      <div>{ispaid ? "ISPAIDE" : "WILL PAY AT PROPERTY"}</div>
    </div>
  );
}
