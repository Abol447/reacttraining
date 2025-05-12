import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function SideBarLink({
  page,
  icon,
  path,
  id,
  selected,
  setSelected,
}) {
  return (
    <Link to={path}>
      <li
        className={`SideBarLi${selected === id ? " bg-gray-200" : ""}`}
        onClick={() => setSelected(() => id)}
      >
        {icon}
        <div>{page}</div>
      </li>
    </Link>
  );
}
