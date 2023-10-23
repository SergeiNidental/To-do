import React, { useState, useEffect, useCallback } from "react";

import Header from "./header/header";
import Form from "./components/form";
import Counter from "./task-list/counter";
import Preview from "./task-list/preview";
import Task from "./task-list/task";
import Input from "./components/input";
import Button from "./components/button";
import Img from "./components/img";

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
      <Header>
        <Img src={logo} alt="logo" />
      </Header>
      <Form isQuestForm={true}>
        <Input
          type="text"
          placeholder="Add a new task"
          inputState={inputState}
          setInputState={setInputState}
          onChangeLine={handleOnChangeLine} // TODO: USECALLBACK done
        />
        <Button
          type="button"
          uList={uList}
          setUList={setUList}
          inputState={inputState}
          setInputState={setInputState}
        >
          <Img src={plus} alt="plus" />
        </Button>
      </Form>
      <Form isQuestForm={false}>
        <Counter uList={uList} />
        <Preview uList={uList} />
        <Task
          className="task-list__ul"
          liClass="task-list__checkbox-wrapper"
          labelClass="task-list__label"
          uList={uList}
          setUList={setUList}
        />
      </Form>
    </>
  );
}
