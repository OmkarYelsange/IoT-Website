import express from "express";
import Sensor from "../models/SensorModel.js";

export const router = express.Router();

router.post("/data", async (req, res) => {
  try {
    const sensorData = new Sensor(req.body);
    await sensorData.save();

    // 🔥 Emit the new data to all connected clients
    const io = req.app.locals.io;
    io.emit("sensorUpdate", req.body);

    console.log("📡 Sent to socket clients:", req.body);
    res.status(200).json({ success: true, data: req.body });
  } catch (error) {
    console.error("❌ Error saving data:", error);
    res.status(500).json({ error: error.message });
  }
});
