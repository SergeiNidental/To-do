import React from "react";

import "../../../src/styles/components/__counter";

import Bar from "../components/bar";

export default function Counter({ uList }) {
  return (
    <div className="task-list__content">
      <Bar
        classCounterNumber="task-list_counter-wrapper"
        uList={uList}
        id="left"
      />
      <Bar
        classCounterNumber="task-list_counter-wrapper"
        uList={uList}
        id="right"
      />
    </div>
  );
}
