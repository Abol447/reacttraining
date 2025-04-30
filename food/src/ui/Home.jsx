import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { newName } from "./HomeSlice";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const navigate = useNavigate();
  return (
    <div className="font-bold p-5 mt-10 m-auto w-fit gap-2 flex flex-col items-center justify-between">
      <div className="text-4xl">The Best Pizza</div>
      <div className="text-2xl text-orange-400">
        Straight out of oven , Straight to you
      </div>
      <div>Welcom please start with telling your name</div>
      <input
        value={name}
        onChange={(e) => setName(() => e.target.value)}
        className=" border-2 mt-2 px-3 py-1 bg-gray-50 rounded-2xl shadow-2xl shadow-white border-gray-200"
        type="text"
        placeholder="your full name"
      />
      {name.length > 0 ? (
        <div
          onClick={() => {
            dispatch(newName(name));
            navigate("menu");
          }}
          className="btn mt-4"
        >
          Go to Menu
        </div>
      ) : null}
    </div>
  );
}
