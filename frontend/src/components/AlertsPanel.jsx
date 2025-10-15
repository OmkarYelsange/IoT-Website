import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { Card } from "./ui/card";

export default function AlertsPanel({ alert }) {
  useEffect(() => {
    if (alert && alert !== "None") {
      toast.error(alert, { duration: 6000 });
    }
  }, [alert]);

  return (
    <Card>
      <h3 className="text-lg font-semibold mb-2">Alerts</h3>
      <div className="p-2 bg-[#071026] rounded-md">
        <p className="text-sm text-gray-400">Latest</p>
        <p className="mt-2 text-base">{alert ?? "No alerts"}</p>
      </div>
    </Card>
  );
}
