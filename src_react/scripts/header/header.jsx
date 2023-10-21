import React from "react";

export function Header(props) {
  return <header className={props.className}>{props.children}</header>;
}

export function Img(props) {
  let onPointerDown;

  if (props.alt === "vector") {
    onPointerDown = props.onChangeClass;
  }

  if (props.alt === "trash") {
    onPointerDown = props.onPointerDown;
  }

  return (
    <img
      src={props.src}
      alt={props.alt}
      className={props.className}
      onPointerDown={onPointerDown}
    />
  );
}
