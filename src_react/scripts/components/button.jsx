import React from "react";

import "../../../src/styles/components/__button";

export default function Button({
  type,
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
    <button
      type={type}
      className="task-form__button"
      onPointerDown={handleClick}
    >
      Add {children}
    </button>
  );
}
