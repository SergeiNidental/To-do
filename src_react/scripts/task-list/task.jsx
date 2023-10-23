import React, { useCallback } from "react";
import Img from "../components/img";
import Input from "../components/input";
import Label from "../components/label";

import "../../../src/styles/components/__task";

import vector from "../../../src/img/vector";
import trash from "../../../src/img/trash";

export default function Task({ uList, setUList }) {
  const uListLength = uList.length;

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
    [uList, setUList]
  );

  const handleDelete = useCallback(
    (e) => {
      const updatedList = uList.filter((object) => object.id !== e.id);
      setUList(updatedList);
    },
    [uList]
  );

  const taskList = uList.map((e, index) => {
    return (
      <li className="task-list__checkbox-wrapper" key={e.key}>
        <Input
          type="checkbox"
          id={`checkbox-${index}`}
          checked={e.checked}
          onChangeCheckbox={() => handleLabelClick(e, uList, setUList)} // TODO: usecallback done
        />
        <Label htmlFor={`checkbox-${index}`}>
          {" "}
          {/* TODO: ``  done*/}
          {e.value}
        </Label>
        <Img
          src={vector}
          alt="vector"
          onChangeClass={() => handleLabelClick(e, uList, setUList)} // TODO: usecallback done
        />
        <Img
          src={trash}
          alt="trash"
          onPointerDown={
            () => handleDelete(e)
            // TODO: usecallback done
          }
        />
      </li>
    );
  });

  return <ul className="task-list__ul">{taskList}</ul>;
}
