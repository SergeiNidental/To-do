import React, { Children, StrictMode } from "react";
import { Header, Img } from "./header/header";
import { Form, Input, Button } from "./addform/form";
import Counter from "./task-list/counter";
import Preview from "./task-list/preview";
import Ulist from "./task-list/ulist";
import "../../src/fonts/Inter-VariableFont_slnt_wght.ttf";
import { useState } from "react";

export default function App() {
  const [uList, setUList] = useState([]);
  const [inputState, setInputState] = useState("");

  return (
    <>
      <Header className="header">
        <Img src="../src/img/logo.svg" alt="logo" className="header__logo" />
      </Header>
      <Form className="task-form">
        <Input
          type="text"
          className="task-form__input-text font"
          placeholder="Add a new task"
          inputState={inputState}
          setInputState={setInputState}
        />
        <Button
          type="button"
          className="task-form__button font"
          uList={uList}
          setUList={setUList}
          inputState={inputState}
        >
          <Img
            src="../src/img/plus.svg"
            alt="plus"
            className="task-form__img"
          />
        </Button>
      </Form>
      <Form className="task-list">
        <Counter className="task-list__content" />
        <Preview
          className="task-list__preview"
          classNameWrapper="task-list__preview-wrapper"
          classNameImgWrapper="task-list__preview-img"
          uList={uList}
        />
        <Ulist className="task-list__ul" />
      </Form>
    </>
  );
}
