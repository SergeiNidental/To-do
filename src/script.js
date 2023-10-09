import "./styles/__header/__header";
import "./styles/__main/__main";

import logo from "./img/logo";
import plus from "./img/plus";
import clipboard from "./img/clipboard";
import vector from "./img/vector";
import trash from "./img/trash";

// document.querySelector(".task-form").innerHTML = JSON.parse(
//   localStorage.getItem("task-form")
// );
// document.querySelector(".task-list").innerHTML = JSON.parse(
//   localStorage.getItem("task-list")
// );

let counterCompletedTask = 0;
document.body.addEventListener("pointerdown", function (event) {
  if (!event.target.closest("form") && !event.target.closest("ul")) return;
  let counterAddedTask = +document.body.querySelectorAll("li").length;
  let rightCounter = document.querySelector(
    ".task-list__right-counter > .task-list_counter-wrapper"
  );
  //add a new checkbox
  if (event.target.closest("button")) {
    const inputAddNewTask = document.querySelector(".task-form__input-text");
    let textValueInput = inputAddNewTask.value;
    inputAddNewTask.value = "";
    if (textValueInput == "") return;

    let previewWrapper = document.querySelector(".task-list__preview-wrapper");
    previewWrapper.style.display = "none";
    counterAddedTask += 1;

    //increasing of left counter number
    let leftCounter = document.querySelector(
      ".task-list__left-counter >.task-list_counter-wrapper"
    );
    leftCounter.innerText = counterAddedTask;

    let newElement = createCheckbox(counterAddedTask, textValueInput);

    let ulLastChild = document.body.querySelector("ul").lastChild;

    if (ulLastChild == null) {
      document.body.querySelector("ul").append(newElement);
    } else {
      ulLastChild.after(newElement);
    }
    saveState();
  }

  //add or remote completed task
  if (
    event.target.tagName == "LABEL" ||
    event.target.classList.contains("task-list__checkbox")
  ) {
    completedTask(event.target, rightCounter);
    saveState();
  }

  //deleting of checkbox
  if (event.target.classList.contains("task-list__trash")) {
    changeCounterDuringDeleting(
      event.target,
      document.querySelector(".task-list__preview-wrapper")
    );
    event.target.parentElement.remove();
    saveState();
  }

  //deleting of vector element
  if (event.target.classList.contains("task-list__vector")) {
    completedTask(event.target, rightCounter);
    event.target.parentElement.querySelector(
      ".task-list__checkbox"
    ).checked = false;
    saveState();
  }
});

function createCheckbox(counter, textValueInput) {
  let newElement = document.createElement("li");
  newElement.setAttribute("class", "task-list__checkbox-wrapper");

  let newInput = document.createElement("input");
  newInput.setAttribute("type", "checkbox");
  newInput.setAttribute("id", `checkbox${counter}`);
  newInput.setAttribute("class", "task-list__checkbox");
  newElement.append(newInput);

  let newLabel = document.createElement("label");
  newLabel.setAttribute("for", `checkbox${counter}`);
  newLabel.setAttribute("class", "task-list__label");
  newLabel.innerHTML = textValueInput;
  newElement.append(newLabel);

  let newVector = document.createElement("img");
  newVector.setAttribute("src", "img/vector.svg");
  newVector.setAttribute("alt", "vector");
  newVector.setAttribute("class", "task-list__vector");
  newElement.append(newVector);

  let newTrash = document.createElement("img");
  newTrash.setAttribute("src", "img/trash.svg");
  newTrash.setAttribute("alt", "trash");
  newTrash.setAttribute("class", "task-list__trash");
  newElement.append(newTrash);

  return newElement;
}

function completedTask(elem, rightCounter) {
  let previousElement = elem;
  if (elem.tagName == "LABEL") {
    previousElement = elem.previousElementSibling;
  }
  if (elem.tagName == "IMG") {
    previousElement =
      previousElement.previousElementSibling.previousElementSibling;
  }
  if (!previousElement.checked) {
    counterCompletedTask += 1;
  } else {
    counterCompletedTask -= 1;
  }
  rightCounter.innerText = counterCompletedTask;
}

function changeCounterDuringDeleting(elem, preview) {
  let leftCounter = (document.querySelector(
    ".task-list__left-counter > .task-list_counter-wrapper"
  ).innerText -= 1);
  let rightCurrentNumber = document.querySelector(
    ".task-list__right-counter > .task-list_counter-wrapper"
  );
  if (
    elem.previousElementSibling.previousElementSibling.previousElementSibling
      .checked
  ) {
    counterCompletedTask -= 1;
    rightCurrentNumber.innerText = counterCompletedTask;
  }
  if (leftCounter == 0) {
    preview.style.display = "flex";
  }
}

function saveState() {
  localStorage.setItem(
    "task-form",
    JSON.stringify(document.querySelector(".task-form").innerHTML)
  );
  localStorage.setItem(
    "task-list",
    JSON.stringify(document.querySelector(".task-list").innerHTML)
  );
}
