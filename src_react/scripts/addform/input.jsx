import React from "react";

export default function Input({
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
