import React from "react";

export function Form(props) {
  return <form className={props.className}>{props.children}</form>;
}

export function Input(props) {
  if (props.id) {
    return (
      <input
        type={props.type}
        className={props.className}
        id={props.id}
        checked={props.checked}
        onChange={props.onChangeCheckbox}
      />
    );
  } else {
    return (
      <input
        type={props.type}
        className={props.className}
        placeholder={props.placeholder}
        onChange={props.onChangeLine}
        value={props.inputState}
      />
    );
  }
}

export function Button(props) {
  function handleClick() {
    const uListKey = props.uList.length + 1;
    props.setUList([
      ...props.uList,
      { key: uListKey, id: uListKey, value: props.inputState, checked: false },
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
