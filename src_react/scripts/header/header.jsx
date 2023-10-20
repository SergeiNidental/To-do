import React from "react";

export function Header(props) {
  return <header className={props.className}>{props.children}</header>;
}

export function Img(props) {
  if (props.alt == "vector") {
    return (
      <img
        src={props.src}
        alt={props.alt}
        className={props.className}
        onPointerDown={props.onChangeClass}
      />
    );
  } else if (props.alt == "trash") {
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
