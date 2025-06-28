import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function BackPageBtn() {
  const navigate = useNavigate();
  return (
    <div
      className="hover:cursor-pointer flex items-center gap-1 font-bold"
      onClick={() => navigate(-1)}
    >
      <FiArrowLeft />
      <div>Back</div>
    </div>
  );
}
