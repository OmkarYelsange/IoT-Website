// run: npm run seed
import mongoose from "mongoose";
import dotenv from "dotenv";
import Sensor from "../models/SensorModel.js";

dotenv.config();

const run = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error("MONGO_URI missing");
    await mongoose.connect(uri);
    console.log("Connected to DB for seeding");

    const demo = [
      {
        loadcells: [10.1, 11.5, 12.2, 9.8],
        flex: { back: 42, neck: 36 },
        temperature: 28.1,
        sittingTime: 10,
        posture: "Good",
        alert: "None",
      },
      {
        loadcells: [12.3, 13.1, 11.8, 12.6],
        flex: { back: 45, neck: 38 },
        temperature: 27.5,
        sittingTime: 47,
        posture: "Leaning Left",
        alert: "Incorrect posture detected",
      },
      {
        loadcells: [9.8, 9.9, 10.2, 10.0],
        flex: { back: 60, neck: 55 },
        temperature: 26.8,
        sittingTime: 120,
        posture: "Slouching",
        alert: "Sitting too long",
      },
    ];

    await Sensor.insertMany(demo);
    console.log("✅ Demo data seeded");
    mongoose.disconnect();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

run();
