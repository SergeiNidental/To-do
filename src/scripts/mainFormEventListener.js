import { saveNewState } from "./saveMethod";
import { saveElementStates } from "./index";
import { changeState } from "./saveMethod";
import { deletState } from "./saveMethod";
let counterCompletedTask = 0;

const taskListCheckbox = document.body.querySelector(".task-list__ul");

taskListCheckbox.addEventListener("pointerdown", function (event) {
  if (!event.target.closest("li")) return;
  let rightCounter = document.querySelector(
    ".task-list__right-counter > .task-list_counter-wrapper"
  );
  if (
    event.target.tagName == "LABEL" ||
    event.target.classList.contains("task-list__checkbox")
  ) {
    completedTask(event.target, rightCounter);
    changeState(event.target);
  }

  //deleting of checkbox
  if (event.target.classList.contains("task-list__trash")) {
    changeCounterDuringDeleting(
      event.target,
      document.querySelector(".task-list__preview-wrapper")
    );
    deletState(event.target);
    event.target.parentElement.remove();
  }

  //deleting of vector element
  if (event.target.classList.contains("task-list__vector")) {
    completedTask(event.target, rightCounter);
    changeState(event.target);
    event.target.parentElement.querySelector(
      ".task-list__checkbox"
    ).checked = false;
  }
});

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
