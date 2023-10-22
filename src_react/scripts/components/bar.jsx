import React from "react";
import CounterNumber from "./counterNumber";
import Span from "./span";

export default function Bar({
  className,
  classFirstSpan,
  classSecondSpan,
  classCounterNumber,
  uList,
  id,
}) {
  return (
    <div className={className}>
      <Span className={classFirstSpan} value="Created tasks" />
      <Span className={classSecondSpan}>
        <CounterNumber className={classCounterNumber} uList={uList} id={id} />
      </Span>
    </div>
  );
}
