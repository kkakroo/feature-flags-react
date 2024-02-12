import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ToggleFeatures } from "./ToggleFeatures.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToggleFeatures />
  </React.StrictMode>,
);
