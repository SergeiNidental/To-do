import React, { Children, StrictMode } from "react";
import { Header, Img } from "./header/header";
import { Form, Input, Button } from "./addform/form";
import Counter from "./task-list/counter";
import Preview from "./task-list/preview";

export default function App() {
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
        />
        <Button type="button" className="task-form__button font">
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
        />
      </Form>
    </>
  );
}
