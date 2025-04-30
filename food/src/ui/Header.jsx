import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Header() {
  const state = useSelector((state) => state);
  console.log(state);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center bg-orange-400 p-5 fixed top-0 h-14 w-full z-10">
      <h1 className="font-bold text-2xl ">Fast React Pizza Co . </h1>
      <input
        value={inputValue}
        className="outline-0 border-2 rounded-2xl pl-2 py-0.5 text-white border-black "
        placeholder="search order #"
        onChange={(e) => setInputValue(() => e.target.value)}
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            navigate(`order/${inputValue}`);
            setInputValue("");
          }
        }}
      />
      {/* {state.length > 0 ? <div className="font-bold p-5">{state}</div> : null} */}
    </div>
  );
}
