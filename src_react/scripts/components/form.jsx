import React from "react";

import "../../../src/styles/components/__form";

export default function Form({ isQuestForm, children }) {
  // TODO: COMPONENT TO SEPARATE FOLDER AND FILE done
  const className = isQuestForm ? "task-form" : "task-list";
  return <form className={className}>{children}</form>;
}
