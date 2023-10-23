import React from "react";

import "../../../src/styles/components/__img";

export default function Img({ src, alt, onChangeClass, onPointerDown }) {
  let PointerDown;
  let className;

  switch (alt) {
    case "logo":
      className = "header__logo";
      break;
    case "plus":
      className = "task-form__img";
      break;
    case "clipboard":
      className = "task-list__img-preview";
      break;
    case "vector":
      className = "task-list__vector";
      PointerDown = onChangeClass;
      break;
    case "trash":
      className = "task-list__trash";
      PointerDown = onPointerDown;
      break;
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
