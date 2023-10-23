import React from "react"; // TODO: che za import done

import Img from "../components/img";
import Span from "../components/span";

import "../../../src/styles/components/__preview";

import clipboard from "../../../src/img/clipboard";

export default function Preview({ uList }) {
  const previewWrapper =
    uList.length > 0 ? "hidden" : "task-list__preview-wrapper";

  return (
    <div className="task-list__preview">
      <div
        className={previewWrapper} // TODO huynya, delay modificatorom, use classNames done
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
