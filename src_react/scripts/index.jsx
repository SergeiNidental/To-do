import React, { StrictMode } from "react";
import App from "./app";
import { createRoot } from "react-dom/client";
import "../../src/styles/index";
import { logo, plus } from "../../src/img/logo";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
