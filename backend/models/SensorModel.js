import mongoose from "mongoose";

const sensorSchema = new mongoose.Schema(
  {
    loadcells: [Number],
    flex: {
      back: Number,
      neck: Number,
    },
    temperature: Number,
    sittingTime: Number,
    posture: String,
    alert: String,
  },
  { timestamps: true }
);

export default mongoose.model("Sensor", sensorSchema);
