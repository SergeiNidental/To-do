import React, { useCallback } from "react";
import Img from "../components/img";
import Input from "../components/input";
import Label from "../components/label";

import vector from "../../../src/img/vector";
import trash from "../../../src/img/trash";

export default function Task({
  className,
  liClass,
  inputClass,
  labelClass,
  vectorClass,
  trashClass,
  uList,
  setUList,
}) {
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
      <li className={liClass} key={e.key}>
        <Input
          type="checkbox"
          id={`checkbox-${index}`}
          checked={e.checked}
          onChangeCheckbox={() => handleLabelClick(e, uList, setUList)} // TODO: usecallback done
        />
        <Label htmlFor={`checkbox-${index}`} className={labelClass}>
          {" "}
          {/* TODO: ``  done*/}
          {e.value}
        </Label>
        <Img
          src={vector}
          alt="vector"
          className={vectorClass}
          onChangeClass={() => handleLabelClick(e, uList, setUList)} // TODO: usecallback done
        />
        <Img
          src={trash}
          alt="trash"
          className={trashClass}
          onPointerDown={
            () => handleDelete(e)
            // TODO: usecallback done
          }
        />
      </li>
    );
  });

  return <ul className={className}>{taskList}</ul>;
}
