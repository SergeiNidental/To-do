import React from "react";

import "../../../src/styles/components/__span";

export default function Span({ id, value, children }) {
  let currentClass = children
    ? ""
    : id === "left"
    ? "task-list__left-bar"
    : "task-list__right-bar";
  return <span className={currentClass}>{children ? children : value}</span>;
}
