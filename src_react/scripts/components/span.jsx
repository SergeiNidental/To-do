import React from "react";

export default function Span({ className, value, children }) {
  if (children) {
    return <span className={className}>{children}</span>;
  } else {
    return <span className={className}>{value}</span>;
  }
}
