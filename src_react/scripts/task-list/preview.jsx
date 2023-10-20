import React, { Children, StrictMode } from "react";
import { Img } from "../header/header";
import { Span } from "../task-list/counter";

export default function Preview(props) {
  return (
    <div className={props.className}>
      <div
        className={props.classNameWrapper}
        style={{ display: props.uList.length > 0 ? "none" : "flex" }}
      >
        <div className={props.classNameImgWrapper}>
          <Img
            src="../src/img/clipboard.svg"
            alt="clipboard"
            className="task-list__img-preview"
          />
        </div>
        <Span className="task-list__text">
          You don't have any registered tasks yet <br />
          <p className="task-list__second-paragrah task-list__second-paragrah_thin-font">
            Create tasks and organize your tasks
          </p>
        </Span>
      </div>
    </div>
  );
}
