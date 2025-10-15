import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { DataProvider } from "./context/DataContext";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <App />
      <Toaster position="top-right" />
    </DataProvider>
  </React.StrictMode>
);
