import React, { StrictMode } from "react";
export default function Addform() {
  return (
    <form className="task-form">
      <input
        type="text"
        className="task-form__input-text font"
        placeholder="Add a new task"
      />
      <button type="button" className="task-form__button font">
        Add{" "}
        <img src="../src/img/plus.svg" alt="plus" className="task-form__img" />
      </button>
    </form>
  );
}
