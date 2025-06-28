import React from "react";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

export default function NightChart({ input }) {
  return (
    <div className="bg-white w-fit p-4 rounded-2xl">
      <div className="font-bold text-xl">stay deuration summery</div>
      <PieChart width={500} height={250}>
        <Pie
          data={input}
          cx={120}
          cy={100}
          nameKey={"night"}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {input?.map((entry) => (
            <Cell key={entry.night + "night"} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          align="left"
          width={"150px"}
          verticalAlign="middle"
          iconType="circle"
        />
      </PieChart>
    </div>
  );
}
