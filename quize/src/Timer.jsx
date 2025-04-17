import { useEffect, useState } from "react";
import Button from "./Button";

function Timer({ secends }) {
  const [localsec, setLocalsec] = useState(secends);
  useEffect(() => {
    const Interval = setInterval(() => {
      if (localsec == 0) {
        clearInterval(Interval);
      } else {
        setLocalsec((pre) => pre - 1);
      }
    }, 1000);
    return () => clearInterval(Interval);
  }, [localsec]);
  return (
    <Button
      text={
        Math.floor(localsec / 60) +
        ":" +
        (localsec % 60).toString().padStart(2, "0")
      }
    />
  );
}

export default Timer;
