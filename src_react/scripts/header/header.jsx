import React, { StrictMode } from "react";

export function Header(props) {
  return <header className={props.className}>{props.children}</header>;
}

export function Img(props) {
  return <img src={props.src} alt={props.alt} className={props.className} />;
}
