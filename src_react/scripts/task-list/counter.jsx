import React from "react";

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

function Bar({
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

export function Span({ className, value, children }) {
  if (children) {
    return <span className={className}>{children}</span>;
  } else {
    return <span className={className}>{value}</span>;
  }
}

function CounterNumber({ className, uList, id }) {
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
  return <div className={className}>{content}</div>;
}
