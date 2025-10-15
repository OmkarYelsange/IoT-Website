import Sensor from "../models/SensorModel.js";

/**
 * 🔹 POST /api/data
 * Save a sensor payload and emit to sockets
 */
export const addData = async (req, res) => {
  try {
    const payload = req.body;
    if (!payload || Object.keys(payload).length === 0) {
      return res.status(400).json({ error: "No payload provided" });
    }

    // Save incoming sensor data
    const doc = new Sensor(payload);
    await doc.save();

    // Emit the new data to all connected clients
    const io = req.app.locals.io;
    if (io) {
      io.emit("sensorUpdate", doc);
      console.log("📡 Live data emitted:", doc);
    }

    return res.status(201).json({ message: "Data saved", data: doc });
  } catch (err) {
    console.error("❌ addData error:", err);
    return res.status(500).json({ error: err.message });
  }
};

/**
 * 🔹 GET /api/latest
 * Fetch the latest sensor entry or fallback demo
 */
export const getLatest = async (req, res) => {
  try {
    const latest = await Sensor.findOne().sort({ createdAt: -1 }).lean();

    if (latest) return res.json(latest);
    return res.json(getDemoData());
  } catch (err) {
    console.error("❌ getLatest error:", err);
    return res.status(500).json({ error: err.message });
  }
};

/**
 * 🔹 GET /api/history?limit=50
 * Retrieve recent data history (default limit: 50)
 */
export const getHistory = async (req, res) => {
  try {
    const limit = Math.min(parseInt(req.query.limit || "50", 10), 500);
    const docs = await Sensor.find()
      .sort({ createdAt: -1 })
      .limit(limit)
      .lean();
    return res.json(docs.reverse());
  } catch (err) {
    console.error("❌ getHistory error:", err);
    return res.status(500).json({ error: err.message });
  }
};

/**
 * 🔹 GET /api/demo
 * Return a demo dataset
 */
export const getDemo = async (req, res) => {
  return res.json(getDemoData());
};

/**
 * 🔹 Helper: Demo Data Generator
 */
function getDemoData() {
  return {
    weight: `${Math.floor(Math.random() * 80 + 40)} kg`,
    posture: [
      "Good",
      "Leaning Left",
      "Leaning Right",
      "Slouching",
      "Crossed Legs",
    ][Math.floor(Math.random() * 5)],
    sittingTime: `${Math.floor(Math.random() * 90)} mins`,
    temperature: `${(20 + Math.random() * 10).toFixed(1)} °C`,
    vibration: Math.random() > 0.5 ? "Active" : "Idle",
    alert:
      Math.random() > 0.7 ? "Incorrect posture detected" : "Normal posture",
    createdAt: new Date(),
  };
}
