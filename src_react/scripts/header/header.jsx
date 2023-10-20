import React, { StrictMode } from "react";

export function Header(props) {
  return <header className={props.className}>{props.children}</header>;
}

export function Img(props) {
  if (props.onPointerDown) {
    return (
      <img
        src={props.src}
        alt={props.alt}
        className={props.className}
        onPointerDown={props.onPointerDown}
      />
    );
  } else {
    return <img src={props.src} alt={props.alt} className={props.className} />;
  }
}
