import React, { useState, useEffect, useCallback } from "react";

import { Header, Img } from "./header/header";
import Form from "./addform/form";
import Counter from "./task-list/counter";
import Preview from "./task-list/preview";
import Task from "./task-list/ulist";
import Input from "./addform/input";
import Button from "./addform/button";

import logo from "../../src/img/logo";
import plus from "../../src/img/plus";

export default function App() {
  const [uList, setUList] = useState([]);
  const [inputState, setInputState] = useState("");

  useEffect(() => {
    const uListstored = JSON.parse(localStorage.getItem("uList"));
    const inputStatestored = JSON.parse(localStorage.getItem("inputState"));
    if (uListstored && uListstored.length > 0) {
      setUList(uListstored);
    }
    if (inputStatestored && inputStatestored !== "") {
      setInputState(inputStatestored);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("uList", JSON.stringify(uList));
    localStorage.setItem("inputState", JSON.stringify(inputState));
  }, [uList, inputState]);

  const handleOnChangeLine = useCallback(
    (e) => {
      setInputState(e.target.value);
    },
    [inputState]
  );
  return (
    <>
      <Header className="header">
        <Img src={logo} alt="logo" className="header__logo" />
      </Header>
      <Form className="task-form">
        <Input
          type="text"
          className="task-form__input-text font"
          placeholder="Add a new task"
          inputState={inputState}
          setInputState={setInputState}
          onChangeLine={handleOnChangeLine} // TODO: USECALLBACK done
        />
        <Button
          type="button"
          className="task-form__button font"
          uList={uList}
          setUList={setUList}
          inputState={inputState}
          setInputState={setInputState}
        >
          <Img src={plus} alt="plus" className="task-form__img" />
        </Button>
      </Form>
      <Form className="task-list">
        <Counter className="task-list__content" uList={uList} />
        <Preview
          className="task-list__preview"
          classNameWrapper="task-list__preview-wrapper"
          classNameImgWrapper="task-list__preview-img"
          uList={uList}
        />
        <Task
          className="task-list__ul"
          liClass="task-list__checkbox-wrapper"
          inputClass="task-list__checkbox"
          labelClass="task-list__label"
          vectorClass="task-list__vector"
          trashClass="task-list__trash"
          uList={uList}
          setUList={setUList}
        />
      </Form>
    </>
  );
}
