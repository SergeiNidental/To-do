import React from "react";

import Bar from "../components/bar";

export default function Counter({ className, uList }) {
  return (
    <div className={className}>
      <Bar
        className="wrapper-left"
        classFirstSpan="task-list__left-bar"
        classSecondSpan="task-list__left-counter"
        classCounterNumber="task-list_counter-wrapper"
        uList={uList}
        id="left"
      />
      <Bar
        className="wrapper-right"
        classFirstSpan="task-list__right-bar"
        classSecondSpan="task-list__right-counter"
        classCounterNumber="task-list_counter-wrapper"
        uList={uList}
        id="right"
      />
    </div>
  );
}
