import React from "react";

import "../../../src/styles/components/__label";

export default function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="task-list__label">
      {children}
    </label>
  );
}
