import React from "react";
import { useSensorData } from "../context/DataContext";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Dashboard() {
  const { sensorData } = useSensorData();

  if (!sensorData) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-400 text-lg animate-pulse">
        Waiting for live data...
      </div>
    );
  }

  const { loadcells, flex, temperature, sittingTime, posture, alert } =
    sensorData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100 p-6">
      <motion.h1
        className="text-3xl font-semibold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Smart Chair Live Dashboard
      </motion.h1>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Posture */}
        <motion.div whileHover={{ scale: 1.03 }}>
          <Card className="bg-gray-900/60 backdrop-blur-xl border-none shadow-[0_0_15px_rgba(0,255,255,0.1)] hover:shadow-[0_0_25px_rgba(0,255,255,0.3)] transition-all">
            <CardHeader>
              <CardTitle className="text-cyan-400">Posture</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-semibold">{posture}</p>
              {alert && (
                <p className="mt-2 text-red-400 text-sm animate-pulse">
                  {alert}
                </p>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Temperature */}
        <motion.div whileHover={{ scale: 1.03 }}>
          <Card className="bg-gray-900/60 backdrop-blur-xl border-none shadow-[0_0_15px_rgba(255,160,0,0.1)] hover:shadow-[0_0_25px_rgba(255,160,0,0.3)] transition-all">
            <CardHeader>
              <CardTitle className="text-amber-400">Temperature</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-semibold">{temperature} °C</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Sitting Time */}
        <motion.div whileHover={{ scale: 1.03 }}>
          <Card className="bg-gray-900/60 backdrop-blur-xl border-none shadow-[0_0_15px_rgba(0,255,0,0.1)] hover:shadow-[0_0_25px_rgba(0,255,0,0.3)] transition-all">
            <CardHeader>
              <CardTitle className="text-green-400">Sitting Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-semibold">{sittingTime} mins</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Load Cells */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="col-span-1 md:col-span-2 lg:col-span-3"
        >
          <Card className="bg-gray-900/60 backdrop-blur-xl border-none shadow-[0_0_20px_rgba(0,200,255,0.15)] hover:shadow-[0_0_30px_rgba(0,200,255,0.3)] transition-all">
            <CardHeader>
              <CardTitle className="text-cyan-300">Load Cell Sensors</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {loadcells.map((val, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-gray-800/60 rounded-xl text-center backdrop-blur-md border border-gray-700/40 hover:border-cyan-400/50 transition-all"
                >
                  <p className="text-gray-400">Sensor {i + 1}</p>
                  <p className="text-lg font-bold text-cyan-300">{val} kg</p>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
