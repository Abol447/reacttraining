import React, { useState } from "react";

export default function Slider({ data, lenght }) {
  const [start, setStart] = useState(0);
  //   const render = function (start) {
  //     for (let i = start; i < start + lenght <= data.length(); i++) {
  //       return <div>{data[i]}</div>;
  //     }
  //   };
  const nextHandeller = function () {
    setStart((pre) => pre + 1);
    console.log(1);
  };
  const preHandeller = function () {
    setStart((pre) => pre - 1);
  };
  return (
    <div className="flex items-center gap-2 my-2 w-[300px] justify-between ">
      <button
        className="border px-0.5 h-[40px] w-[40px] bg-gray-200 rounded-[100%] font-bold flex items-center justify-center"
        onClick={(e) => {
          e.preventDefault();
          preHandeller();
        }}
      >
        pre
      </button>
      <div className="flex gap-1 overflow-clip w-[120px]">
        {data.slice(start, start + lenght).map((item, index) => (
          <div
            className="border w-5 p-4 flex items-center justify-center"
            key={start + index}
          >
            {item}
          </div>
        ))}
      </div>
      <button
        className="border px-0.5 h-[40px] w-[40px] bg-gray-200 rounded-[100%] font-bold flex items-center"
        onClick={(e) => {
          e.preventDefault();
          start <= 5 ? nextHandeller() : null;
        }}
      >
        next
      </button>
    </div>
  );
}
