import React from "react";
import { useSetting } from "../../hooks/useSetting";

export default function PaidCheck({
  value,
  setValue,
  breaffast,
  setbreakfast,
  breafastPrice,
  totalPrice,
}) {
  return (
    <div>
      <div className="bg-white flex items-center gap-3 p-3 font-bold">
        <input
          style={value ? { scale: "150%" } : null}
          disabled={value}
          type="checkbox"
          checked={value}
          onChange={setValue}
        />
        <div>
          {"Confirmed Payment" + "TotalPrice $" + (totalPrice + breafastPrice)}
        </div>
      </div>
      <div>
        <div className="bg-white flex items-center gap-3 p-3 font-bold">
          <input
            disabled={breaffast}
            style={breaffast ? { scale: "150%" } : null}
            type="checkbox"
            checked={breaffast}
            onChange={() => {
              setbreakfast((pre) => !pre);
              breaffast ? null : setValue();
            }}
          />
          <div>{"breakfastPrice" + ":" + " $" + breafastPrice}</div>
        </div>
      </div>
    </div>
  );
}
