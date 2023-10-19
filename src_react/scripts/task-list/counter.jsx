import React, { Children, StrictMode } from "react";

export default function Counter(props) {
  return (
    <div className={props.className}>
      <Bar
        className="wrapper-left"
        classFirstSpan="task-list__left-bar"
        classSecondSpan="task-list__left-counter"
        classCounterNumber="task-list_counter-wrapper"
        uList={props.uList}
      />
      <Bar
        className="wrapper-right"
        classFirstSpan="task-list__right-bar"
        classSecondSpan="task-list__right-counter"
        classCounterNumber="task-list_counter-wrapper"
      />
    </div>
  );
}

function Bar(props) {
  return (
    <div className={props.className}>
      <Span className={props.classFirstSpan} value="Created tasks" />
      <Span className={props.classSecondSpan}>
        <CounterNumber
          className={props.classCounterNumber}
          uList={props.uList}
        />
      </Span>
    </div>
  );
}

export function Span(props) {
  if (props.children) {
    return <span className={props.className}>{props.children}</span>;
  } else {
    return <span className={props.className}>{props.value}</span>;
  }
}

function CounterNumber(props) {
  return (
    <div className={props.className}>
      {props.uList ? props.uList.length : 0}
    </div>
  );
}
