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
        checked={e.checked}
        onPointerDown={() => handleLabelClick(e, props.uList, props.setUList)}
      />
      <Label
        htmlFor={"checkbox" + uListLength}
        className={props.labelClass}
        onPointerDown={() => handleLabelClick(e, props.uList, props.setUList)}
      >
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
        }}
      />
    </li>
  ));

  return <ul className={props.className}>{taskList}</ul>;
}

function Label(props) {
  return (
    <label
      htmlFor={props.htmlFor}
      className={props.className}
      onPointerDown={props.onPointerDown}
    >
      {props.children}
    </label>
  );
}

function handleLabelClick(elem, list, setList) {
  const updatedList = list.map((item) => {
    if (item.id === elem.id) {
      return { ...item, checked: !elem.checked };
    }
    return item;
  });

  setList(updatedList);
}
