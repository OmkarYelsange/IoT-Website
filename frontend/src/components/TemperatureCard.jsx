import React from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export default function TemperatureCard({ temp }) {
  const t = temp ?? "-";
  const warning = temp >= 30;
  return (
    <Card>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-1">Temperature</h3>
          <p className="text-sm text-gray-400">Room Temp</p>
        </div>
        <div>
          <Badge variant={warning ? "danger" : "success"}>
            {warning ? "High" : "Normal"}
          </Badge>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <div
          className={`p-4 rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold ${
            warning ? "bg-red-600/30" : "bg-cyan-500/10"
          }`}
        >
          {t}°
        </div>
        <div>
          <p className="text-lg font-semibold">{t} °C</p>
          <p className="text-sm text-gray-400 mt-1">
            {warning ? "High temperature" : "Within normal range"}
          </p>
        </div>
      </div>
    </Card>
  );
}
