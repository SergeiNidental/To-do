import React from "react";

export function Form(props) {
  // TODO: COMPONENT TO SEPARATE FOLDER AND FILE
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

export function Button({
  type,
  className,
  uList,
  setUList,
  inputState,
  setInputState,
  children,
}) {
  // TODO: DESCRTRUCURE {....}
  function handleClick() {
    const uListKey = uList.length + 1;

    setUList([
      ...uList,
      { key: uListKey, id: uListKey, value: inputState, checked: false },
    ]);

    setInputState("");
  }

  return (
    <button type={type} className={className} onPointerDown={handleClick}>
      Add {children}
    </button>
  );
}
