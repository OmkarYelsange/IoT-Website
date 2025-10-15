import cors from "cors";
import dotenv from "dotenv";
import { router as dataRoutes } from "./routes/dataRoutes.js";
import connectDB from "./config/db.js";
import express from "express";
import http from "http";
import { Server as IOServer } from "socket.io";
import Sensor from "./models/SensorModel.js"; // ✅ Import model

dotenv.config();

const app = express();
const server = http.createServer(app);

const io = new IOServer(server, {
  cors: {
    origin: ["http://localhost:5173"], // React frontend
    methods: ["GET", "POST"],
  },
});

app.locals.io = io;

// Middleware
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use("/api", dataRoutes);

app.get("/", (req, res) => res.json({ status: "Smart Chair API running" }));

// ==============================
// 🔌 SOCKET.IO SETUP
// ==============================
io.on("connection", (socket) => {
  console.log("✅ Socket connected:", socket.id);

  // Send latest data when user first connects
  sendLatestData(socket);

  socket.on("disconnect", () => {
    console.log("❌ Socket disconnected:", socket.id);
  });
});

// ==============================
// 📡 Emit Data Every 10 Seconds
// ==============================
setInterval(async () => {
  try {
    const latestData = await Sensor.findOne().sort({ createdAt: -1 });

    if (latestData) {
      io.emit("sensorUpdate", latestData);
      console.log("📡 Sent live data:", latestData);
    } else {
      // fallback demo data
      const demoData = getDemoData();
      io.emit("sensorUpdate", demoData);
      console.log("⚙️ Sent demo data:", demoData);
    }
  } catch (error) {
    console.error("❌ Error fetching sensor data:", error);
    io.emit("sensorUpdate", getDemoData());
  }
}, 10000); // every 10 seconds

// ==============================
// 📊 Helper Functions
// ==============================
async function sendLatestData(socket) {
  try {
    const latestData = await Sensor.findOne().sort({ createdAt: -1 });
    if (latestData) socket.emit("sensorUpdate", latestData);
    else socket.emit("sensorUpdate", getDemoData());
  } catch {
    socket.emit("sensorUpdate", getDemoData());
  }
}

function getDemoData() {
  return {
    weight: Math.floor(Math.random() * 100) + " kg",
    posture: ["Good", "Lean Forward", "Slouch", "Crossed Legs"][
      Math.floor(Math.random() * 4)
    ],
    sittingTime: `${Math.floor(Math.random() * 60)} mins`,
    temperature: `${20 + Math.random() * 10} °C`,
    vibration: Math.random() > 0.5 ? "Active" : "Idle",
    timestamp: new Date().toISOString(),
  };
}

// ==============================
// ⚡️ Start Server
// ==============================
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
