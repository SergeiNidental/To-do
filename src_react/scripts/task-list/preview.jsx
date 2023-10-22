import React from "react"; // TODO: che za import done

import { Img } from "../header/header";
import { Span } from "../task-list/counter";

import clipboard from "../../../src/img/clipboard";

export default function Preview({
  className,
  classNameWrapper,
  classNameImgWrapper,
  uList,
}) {
  return (
    <div className={className}>
      <div
        className={classNameWrapper}
        style={{ display: uList.length > 0 ? "none" : "flex" }} // TODO huynya, delay modificatorom, use classNames
      >
        <div className={classNameImgWrapper}>
          <Img
            src={clipboard} // TODO: import inline done
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
