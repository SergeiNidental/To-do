import React, { StrictMode } from "react";
import { useState } from "react";

export function Form(props) {
  const [Ulist, setUlist] = useState([]);

  return <form className={props.className} {...Ulist, setUlist}>{props.children}</form>;
}

export function Input(props) {
  const [inputState, setInputState] = useState("");

  function handleOnChange(e) {
    setInputState(e.target.value);
  }

  return (
    <input
      type={props.type}
      className={props.className}
      placeholder={props.placeholder}
      onChange={handleOnChange}
      value={inputState}
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
