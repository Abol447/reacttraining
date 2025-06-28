import React, { useEffect } from "react";
import { checkUser } from "../functions/checkUser";
import { replace, useNavigate } from "react-router-dom";

export default function Auth({ children }) {
  const navigate = useNavigate();
  const flag = checkUser();
  useEffect(() => {
    if (!flag) navigate("/login", replace(true));
  }, [navigate, flag]);
  return <>{children}</>;
}
