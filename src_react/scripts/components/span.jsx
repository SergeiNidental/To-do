import React from "react";

import "../../../src/styles/components/__span";

export default function Span({ id, value, children }) {
  let currentClass;

  switch (id) {
    case "left":
      currentClass = "task-list__left-bar";
      break;
    case "right":
      currentClass = "task-list__right-bar";
      break;
    case "preview":
      currentClass = "task-list__text";
      break;
    case "empty":
      currentClass = "";
      break;
  }
  return <span className={currentClass}>{children ? children : value}</span>;
}
