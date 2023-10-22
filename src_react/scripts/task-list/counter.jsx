import React from "react";

import "../../../src/styles/components/__counter";

import Bar from "../components/bar";

export default function Counter({ uList }) {
  return (
    <div className="task-list__content">
      <Bar
        classFirstSpan="task-list__left-bar"
        classSecondSpan="task-list__left-counter"
        classCounterNumber="task-list_counter-wrapper"
        uList={uList}
        id="left"
      />
      <Bar
        classFirstSpan="task-list__right-bar"
        classSecondSpan="task-list__right-counter"
        classCounterNumber="task-list_counter-wrapper"
        uList={uList}
        id="right"
      />
    </div>
  );
}
