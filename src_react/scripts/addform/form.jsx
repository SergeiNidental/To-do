import React from "react";

export function Form({ className, children }) {
  // TODO: COMPONENT TO SEPARATE FOLDER AND FILE
  return <form className={className}>{children}</form>;
}

export function Input({
  type,
  className,
  placeholder,
  id,
  checked,
  inputState,
  setInputState,
  onChangeLine,
  onChangeCheckbox,
}) {
  if (id) {
    return (
      <input
        type={type}
        className={className}
        id={id}
        checked={checked}
        onChange={onChangeCheckbox}
      />
    );
  } else {
    return (
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        onChange={onChangeLine}
        value={inputState}
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
  // TODO: DESCRTRUCURE {....} done
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
