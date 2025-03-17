import { useState } from "react";
import Slect from "./Slect";

function App() {
  const [from, setFrom] = useState("");
  const fromHandeller = function (e) {
    setFrom(e.target.value);
  };
  const [to, setTo] = useState("");
  const toHandeller = function (e) {
    setTo(e.target.value);
  };
  const api = async function () {
    const result = await fetch(
      `https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`
    );
    const out = await result.json();
    console.log(out);
  };
  return (
    <div className="flex gap-5 w-fit m-auto my-5">
      <Slect fromHandeller={fromHandeller} from={from} />
      <Slect toHandeller={toHandeller} to={to} />
      <button onClick={api} className="border p-1">
        excute
      </button>
    </div>
  );
}

export default App;
