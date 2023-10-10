import { saveNewState } from "./saveMethod";
import { saveElementStates } from "./index";
const taskForm = document.body.querySelector(".task-form");

taskForm.addEventListener("pointerdown", function (event) {
  if (!event.target.closest("form")) return;

  //add a new checkbox
  if (event.target.closest("button")) {
    let counterAddedTask = +document.body.querySelectorAll("li").length;
    const inputAddNewTask = document.querySelector(".task-form__input-text");
    let textValueInput = inputAddNewTask.value;
    inputAddNewTask.value = "";
    if (textValueInput == "") return;

    const previewWrapper = document.querySelector(
      ".task-list__preview-wrapper"
    );
    previewWrapper.style.display = "none";
    counterAddedTask += 1;

    //increasing of left counter number
    const leftCounter = document.querySelector(
      ".task-list__left-counter >.task-list_counter-wrapper"
    );
    leftCounter.innerText = counterAddedTask;

    let newElement = createCheckbox(counterAddedTask, textValueInput);

    const ulLastChild = document.body.querySelector("ul").lastChild;

    if (ulLastChild == null) {
      document.body.querySelector("ul").append(newElement);
    } else {
      ulLastChild.after(newElement);
    }
    saveNewState(newElement, saveElementStates);
  }
});

export function createCheckbox(counter, textValueInput, state) {
  const newElement = document.createElement("li");
  newElement.setAttribute("class", "task-list__checkbox-wrapper");

  const newInput = document.createElement("input");
  newInput.setAttribute("type", "checkbox");
  newInput.setAttribute("id", `checkbox${counter}`);
  newInput.setAttribute("class", "task-list__checkbox");
  if (state) {
    newInput.checked = state;
  }
  newElement.append(newInput);

  const newLabel = document.createElement("label");
  newLabel.setAttribute("for", `checkbox${counter}`);
  newLabel.setAttribute("class", "task-list__label");
  newLabel.innerHTML = textValueInput;
  newElement.append(newLabel);

  const newVector = document.createElement("img");
  newVector.setAttribute("src", "./img/vector.svg");
  newVector.setAttribute("alt", "vector");
  newVector.setAttribute("class", "task-list__vector");
  newElement.append(newVector);

  const newTrash = document.createElement("img");
  newTrash.setAttribute("src", "./img/trash.svg");
  newTrash.setAttribute("alt", "trash");
  newTrash.setAttribute("class", "task-list__trash");
  newElement.append(newTrash);

  return newElement;
}
