import React from "react"; // TODO: che za import done

import Img from "../components/img";
import Span from "../components/span";

import "../../../src/styles/components/__preview";

import clipboard from "../../../src/img/clipboard";

export default function Preview({ uList }) {
  return (
    <div className="task-list__preview">
      <div
        className="task-list__preview-wrapper"
        style={{ display: uList.length > 0 ? "none" : "flex" }} // TODO huynya, delay modificatorom, use classNames
      >
        <div className="task-list__preview-img">
          <Img
            src={clipboard} // TODO: import inline done
            alt="clipboard"
          />
        </div>
        <Span className="task-list__text" id={"preview"}>
          You don't have any registered tasks yet <br />
          <p className="task-list__second-paragrah task-list__second-paragrah_thin-font">
            Create tasks and organize your tasks
          </p>
        </Span>
      </div>
    </div>
  );
}
