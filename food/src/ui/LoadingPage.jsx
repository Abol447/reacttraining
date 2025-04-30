import React from "react";

export default function LoadingPage() {
  return (
    <div
      className="translate-x-[-50%] translate-y-[-50%] font-bold z-10 w-full h-full top-[50%] left-[50%] absolute 
     bg-gray-400  opacity-80 overflow-hidden text-6xl flex items-center justify-center text-black"
    >
      loading...
    </div>
  );
}
