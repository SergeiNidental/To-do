import { createRoot } from "react-dom/client";
import React, { StrictMode } from "react";

import "../../src/styles/common_rules/__main";

import App from "./app";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
