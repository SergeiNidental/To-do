import "../styles/index";

import logo from "../img/logo";
import plus from "../img/plus";
import clipboard from "../img/clipboard";
import vector from "../img/vector";
import trash from "../img/trash";

import "./taskFormEventListener";
import "./mainFormEventListener";
import { createCheckbox } from "./taskFormEventListener";

const localStorageDownloaded = JSON.parse(
  localStorage.getItem("saveElementStates")
);
let saveElementStates = null;

if (localStorageDownloaded.length >= 2) {
  saveElementStates = localStorageDownloaded;
  createDynamicElements(saveElementStates);
} else {
  saveElementStates = [{ leftCounter: 0 }, { rightCounter: 0 }];
}

export { saveElementStates };

function createDynamicElements(saveElementStates) {
  document.body.querySelector(
    ".task-list__left-counter > .task-list_counter-wrapper"
  ).innerText = saveElementStates[0].leftCounter;
  document.body.querySelector(
    ".task-list__right-counter > .task-list_counter-wrapper"
  ).innerText = saveElementStates[1].rightCounter;
  for (let i = 2; i < saveElementStates.length; i++) {
    let element = createCheckbox(
      i,
      saveElementStates[i].text,
      saveElementStates[i].checkboxState
    );

    const ulLastChild = document.body.querySelector("ul").lastChild;

    if (ulLastChild == null) {
      document.body.querySelector("ul").append(element);
    } else {
      ulLastChild.after(element);
    }
  }
}
