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
  return (
    <div className="wrapper-both">
      <Span className={classFirstSpan} value="Created tasks" />
      <Span className={classSecondSpan}>
        <CounterNumber className={classCounterNumber} uList={uList} id={id} />
      </Span>
    </div>
  );
}
