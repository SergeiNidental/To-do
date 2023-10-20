import React, { Children, StrictMode } from "react";
import { Img } from "../header/header";
import { Input } from "../addform/form";
import { useState } from "react";

export default function Task(props) {
  const uListLength = props.uList.length;
  if (uListLength == 0) return null;
  const taskList = props.uList.map((e) => (
    <li className={props.liClass} key={e.key}>
      <Input
        type="checkbox"
        id={"checkbox" + uListLength}
        className={props.inputClass}
      />
      <Label htmlFor={"checkbox" + uListLength} className={props.labelClass}>
        {e.value}
      </Label>
      <Img
        src="../src/img/vector.svg"
        alt="vector"
        className={props.vectorClass}
      />
      <Img
        src="../src/img/trash.svg"
        alt="trash"
        className={props.trashClass}
        onPointerDown={() => {
          props.setUList(props.uList.filter((object) => object.id !== e.id));
          console.log(props.uList);
        }}
      />
    </li>
  ));

  return <ul className={props.className}>{taskList}</ul>;
}

function Label(props) {
  return (
    <label htmlFor={props.htmlFor} className={props.className}>
      {props.children}
    </label>
  );
}
