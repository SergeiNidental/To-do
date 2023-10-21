import React, { useCallback } from "react";
import { Img } from "../header/header";
import { Input } from "../addform/form";

export default function Task(props) {
  const uListLength = props.uList.length;

  if (uListLength === 0) return null; // TODO: stric compare === done

  const handleLabelClick = useCallback(
    (elem, list, setList) => {
      const updatedList = list.map((item) => {
        if (item.id === elem.id) {
          return { ...item, checked: !elem.checked };
        }
        return item;
      }, []);

      setList(updatedList);
    },
    [props.uList, props.setUList]
  );

  const handleDelete = useCallback(
    (e) => {
      const updatedList = props.uList.filter((object) => object.id !== e.id);
      props.setUList(updatedList);
    },
    [props.uList]
  );

  const taskList = props.uList.map((e, index) => {
    return (
      <li className={props.liClass} key={e.key}>
        <Input
          type="checkbox"
          id={`checkbox-${index}`}
          className={props.inputClass}
          checked={e.checked}
          onChangeCheckbox={() =>
            handleLabelClick(e, props.uList, props.setUList)
          } // TODO: usecallback done
        />
        <Label htmlFor={`checkbox-${index}`} className={props.labelClass}>
          {" "}
          {/* TODO: ``  done*/}
          {e.value}
        </Label>
        <Img
          src="../src/img/vector.svg"
          alt="vector"
          className={props.vectorClass}
          onChangeClass={() => handleLabelClick(e, props.uList, props.setUList)} // TODO: usecallback done
        />
        <Img
          src="../src/img/trash.svg"
          alt="trash"
          className={props.trashClass}
          onPointerDown={
            () => handleDelete(e)
            // TODO: usecallback done
          }
        />
      </li>
    );
  });

  return <ul className={props.className}>{taskList}</ul>;
}

function Label(props) {
  return (
    <label htmlFor={props.htmlFor} className={props.className}>
      {props.children}
    </label>
  );
}
