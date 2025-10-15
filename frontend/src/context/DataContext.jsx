import React, { createContext, useContext, useState, useEffect } from "react";
import { io } from "socket.io-client";
import axios from "axios";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [sensorData, setSensorData] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // --- Initialize Socket.IO connection ---
    const socket = io("http://localhost:5000", {
      transports: ["websocket"],
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 2000,
    });

    socket.on("connect", () => {
      console.log("✅ Connected to socket:", socket.id);
      setIsConnected(true);
    });

    socket.on("sensorUpdate", (data) => {
      console.log("📡 Real-time data received:", data);
      setSensorData(data);
    });

    socket.on("disconnect", () => {
      console.log("❌ Disconnected from socket");
      setIsConnected(false);
    });

    // Cleanup
    return () => socket.disconnect();
  }, []);

  useEffect(() => {
    // --- Fallback polling every 10 seconds ---
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/latest");
        if (res.data) {
          setSensorData(res.data);
          console.log("📦 Fetched from /api/latest:", res.data);
        } else {
          // Use demo data if backend empty
          const demo = await axios.get("http://localhost:5000/api/demo");
          setSensorData(demo.data);
          console.log("🧩 Using demo data:", demo.data);
        }
      } catch (err) {
        console.warn("⚠️ Backend unreachable, using demo data");
        setSensorData({
          loadcells: [12.3, 13.1, 11.8, 12.6],
          flex: { back: 45, neck: 38 },
          temperature: 27.5,
          sittingTime: 47,
          posture: "Leaning Left",
          alert: "Incorrect posture detected",
        });
      }
    };

    fetchData(); // initial fetch
    const interval = setInterval(fetchData, 10000); // every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <DataContext.Provider value={{ sensorData, isConnected }}>
      {children}
    </DataContext.Provider>
  );
};

export const useSensorData = () => useContext(DataContext);
