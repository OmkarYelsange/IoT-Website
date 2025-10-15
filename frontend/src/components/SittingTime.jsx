import React from "react";

export default function SittingTime({ time }) {
  const t = time ?? 0;
  const warn = t >= 60; // 60 minutes threshold
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Sitting Time</h3>
      <div className="p-4 bg-[#081226] rounded-xl">
        <p className="text-sm text-gray-400">Continuous</p>
        <p
          className={`text-3xl font-bold mt-2 ${
            warn ? "text-rose-400" : "text-green-300"
          }`}
        >
          {t} min
        </p>
        <p className="text-sm mt-2 text-gray-400">
          {warn ? "Consider taking a break" : "Within normal range"}
        </p>
      </div>
    </div>
  );
}
