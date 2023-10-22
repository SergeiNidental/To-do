import React from "react";

import "../../../src/styles/components/__input";

export default function Input({
  type,
  placeholder,
  id,
  checked,
  inputState,
  setInputState,
  onChangeLine,
  onChangeCheckbox,
}) {
  const className =
    type === "text" ? "task-form__input-text font" : "task-list__checkbox";
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
