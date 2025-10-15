import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";

export default function PostureCard({ posture }) {
  const postureImg =
    {
      Good: "/src/assets/posture/good.png",
      "Leaning Left": "/src/assets/posture/lean.png",
      "Leaning Right": "/src/assets/posture/lean.png",
      Slouching: "/src/assets/posture/slouch.png",
    }[posture] || "/src/assets/posture/good.png";

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Card className="text-center">
        <h3 className="text-lg font-semibold mb-3">Posture</h3>
        <div className="flex items-center gap-4 justify-center">
          <img
            src={postureImg}
            alt={posture}
            className="w-28 h-28 object-contain rounded-lg"
          />
        </div>
        <p className="text-2xl font-bold mt-3">{posture}</p>
      </Card>
    </motion.div>
  );
}
