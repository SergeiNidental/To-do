import React, { StrictMode } from "react";

export function Form(props) {
  return <form className={props.className}>{props.children}</form>;
}

export function Input(props) {
  return (
    <input
      type={props.type}
      className={props.className}
      placeholder={props.placeholder}
    />
  );
}

export function Button(props) {
  return (
    <button type={props.type} className={props.className}>
      Add {props.children}
    </button>
  );
}
