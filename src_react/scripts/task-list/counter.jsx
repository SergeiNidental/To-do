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
        id="left"
      />
      <Bar
        className="wrapper-right"
        classFirstSpan="task-list__right-bar"
        classSecondSpan="task-list__right-counter"
        classCounterNumber="task-list_counter-wrapper"
        uList={props.uList}
        id="right"
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
          id={props.id}
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
  let content;
  if (props.id == "left") {
    content = props.uList ? props.uList.length : 0;
  } else if (props.id == "right") {
    if (props.uList.length !== 0) {
      content = props.uList.reduce((accum, item) => {
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
  return <div className={props.className}>{content}</div>;
}
