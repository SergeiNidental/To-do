import React from "react";

import "../../../src/styles/components/__bar";

import CounterNumber from "./counterNumber";
import Span from "./span";

export default function Bar({
  classFirstSpan,
  classSecondSpan,
  classCounterNumber,
  uList,
  id,
}) {
  const value = id === "left" ? "Created tasks" : "Completed tasks";
  return (
    <div className="wrapper-both">
      <Span id={id} value={value} />
      <Span>
        <CounterNumber className={classCounterNumber} uList={uList} id={id} />
      </Span>
    </div>
  );
}
