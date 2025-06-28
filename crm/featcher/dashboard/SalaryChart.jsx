import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
export default function SalaryChart({ data }) {
  return (
    <div className="bg-white p-4 font-bold space-y-4 rounded-2xl">
      <div className="text-xl">incom</div>
      <LineChart width={800} height={400} data={data}>
        <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
        <Line
          dataKey={"totalPrice"}
          stroke="blue"
          name="incom"
          type={"monotone"}
          strokeWidth={2}
        />
        <Line
          dataKey={"exteraPrice"}
          stroke="orange"
          name="extraPrice"
          type={"monotone"}
          strokeWidth={2}
        />
        <Tooltip />
        <XAxis dataKey={"value"} />
        <YAxis unit="$" />
      </LineChart>
    </div>
  );
}
