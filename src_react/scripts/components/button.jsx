import React from "react";

export default function Button({
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
