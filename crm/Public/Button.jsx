import React, { useContext } from "react";
import { ModalContext } from "./modal";

export default function Button({
  content = "content",
  action,
  id,
  gray = false,
  blue = false,
}) {
  return (
    <div
      onClick={() => {
        action(id);
      }}
      className="w-[100px] m-auto font-bold bg-gray-200 flex justify-center items-center py-1 rounded-2xl"
      style={
        gray
          ? { backgroundColor: "gray" }
          : blue
          ? { backgroundColor: "blue", color: "white" }
          : null
      }
    >
      {content}
    </div>
  );
}
