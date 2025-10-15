import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { Card } from "./ui/card";

export default function SensorChart({ loadcells = [0, 0, 0, 0] }) {
  const data = loadcells.map((v, i) => ({
    name: `Cell ${i + 1}`,
    value: Math.round(v * 100) / 100,
  }));
  return (
    <Card>
      <h3 className="text-lg font-semibold mb-3">
        Load Distribution (4 load cells)
      </h3>
      <div style={{ width: "100%", height: 220 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#9aa4b2" />
            <YAxis stroke="#9aa4b2" />
            <Tooltip />
            <Bar dataKey="value" radius={[6, 6, 0, 0]} fill="#06b6d4">
              <LabelList dataKey="value" position="top" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
