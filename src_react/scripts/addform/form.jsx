import React, { StrictMode } from "react";
import { useState } from "react";

export function Form(props) {
  return <form className={props.className}>{props.children}</form>;
}

export function Input(props) {
  function handleOnChange(e) {
    props.setInputState(e.target.value);
  }

  return (
    <input
      type={props.type}
      className={props.className}
      placeholder={props.placeholder}
      onChange={handleOnChange}
      value={props.inputState}
    />
  );
}

export function Button(props) {
  function handleClick() {
    const uListKey = props.uList.length + 1;
    props.setUList([
      ...props.uList,
      { key: uListKey, value: props.inputState },
    ]);
    props.setInputState("");
  }

  return (
    <button
      type={props.type}
      className={props.className}
      onPointerDown={handleClick}
    >
      Add {props.children}
    </button>
  );
}
