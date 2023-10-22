import React from "react";

export default function Img({
  src,
  alt,
  className,
  onChangeClass,
  onPointerDown,
}) {
  let PointerDown;

  if (alt === "vector") {
    PointerDown = onChangeClass;
  }

  if (alt === "trash") {
    PointerDown = onPointerDown;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onPointerDown={PointerDown}
    />
  );
}
