import React from "react";
import { SunMoon } from "lucide-react";
import { Card } from "./ui/card";

export default function Navbar() {
  return (
    <nav className="w-full bg-transparent p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-sky-600 flex items-center justify-center text-black font-bold">
            SC
          </div>
          <div>
            <h1 className="text-xl font-semibold">Smart Chair Dashboard</h1>
            <p className="text-sm text-gray-400">
              Real-time posture & sensor monitoring
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-400">Live</span>
          <div className="p-2 rounded-lg bg-[#071127]">
            <SunMoon size={18} />
          </div>
        </div>
      </div>
    </nav>
  );
}
