import React from "react";

import "../../../src/styles/components/__counterNumber";

export default function CounterNumber({ className, uList, id }) {
  let content;
  if (id == "left") {
    content = uList ? uList.length : 0;
  } else if (id == "right") {
    if (uList.length !== 0) {
      content = uList.reduce((accum, item) => {
        if (item.checked == true) {
          return accum + 1;
        } else {
          return accum;
        }
      }, 0);
    } else {
      content = 0;
    }
  }
  return <div className="task-list_counter-wrapper">{content}</div>;
}
