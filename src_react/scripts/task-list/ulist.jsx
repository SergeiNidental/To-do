import React from "react";
import { Img } from "../header/header";
import { Input } from "../addform/form";

export default function Task(props) {
  const uListLength = props.uList.length;
  if (uListLength == 0) return null;
  let firstId = 0;
  const taskList = props.uList.map((e) => {
    ++firstId;
    return (
      <li className={props.liClass} key={e.key}>
        <Input
          type="checkbox"
          id={"checkbox" + firstId}
          className={props.inputClass}
          checked={e.checked}
          onChangeCheckbox={() =>
            handleLabelClick(e, props.uList, props.setUList)
          }
        />
        <Label
          htmlFor={"checkbox" + firstId}
          className={props.labelClass}
          onPointerDown={() => handleLabelClick(e, props.uList, props.setUList)}
        >
          {e.value}
        </Label>
        <Img
          src="../src/img/vector.svg"
          alt="vector"
          className={props.vectorClass}
          onChangeClass={() => handleLabelClick(e, props.uList, props.setUList)}
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
    );
  });

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
