import React from "react";

export default function InputContainer({ name = "lable", children }) {
  return (
    <div className="flex gap-12">
      <div className="font-bold basis-[40%]">{name}</div>
      {children}
    </div>
  );
}
