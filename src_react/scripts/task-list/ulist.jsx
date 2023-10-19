import React, { Children, StrictMode } from "react";
import { Img } from "../header/header";
import { Input } from "../addform/form";
import { useState } from "react";

export default function Ulist(props) {
  return (
    <ul className={props.className}>
      <Task />
    </ul>
  );
}

function Task() {
  return (
    <li className="task-list__checkbox-wrapper">
      <Input
        type="checkbox"
        // id={"checkbox" + liLength}
        className="task-list__checkbox"
      />
      <Label htmlFor="checkbox1" className="task-list__label">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quae
        iure ex doloremque, voluptate quibusdam veritatis facilis reiciendis
        adipisci facere temporibus quis fuga ratione optio modi dolor atque
        laudantium cum?
      </Label>
      <Img
        src="../src/img/vector.svg"
        alt="vector"
        className="task-list__vector"
      />
      <Img
        src="../src/img/trash.svg"
        alt="trash"
        className="task-list__trash"
      />
    </li>
  );
}

function Label(props) {
  return (
    <label htmlFor={props.htmlFor} className={props.className}>
      {props.children}
    </label>
  );
}
