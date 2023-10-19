import React, { StrictMode } from "react";
import App from "./app";
import { createRoot } from "react-dom/client";
import "../../src/styles/index";
import logo from "../../src/img/logo";
import plus from "../../src/img/plus";
import clipboard from "../../src/img/clipboard";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
