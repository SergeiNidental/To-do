export function saveNewState(elem, saveElementStates) {
  const newElement = {};
  newElement.text = elem.innerText;
  newElement.checkboxState = elem.firstElementChild.checked;
  newElement.chechboxId = elem.firstElementChild.id;
  newElement.styleCheckbox = elem.firstElementChild.style;
  newElement.styleLabel = elem.firstElementChild.nextElementSibling.style;
  newElement.styleVector =
    elem.firstElementChild.nextElementSibling.nextElementSibling.style;
  saveElementStates.push(newElement);
  saveElementStates[0].leftCounter = document.body.querySelector(
    ".task-list__left-counter > .task-list_counter-wrapper"
  ).innerText;

  localStorage.setItem("saveElementStates", JSON.stringify(saveElementStates));
}

export function changeState(elem, saveElementStates) {
  if (elem.tagName == "LABEL") {
    elem = elem.previousElementSibling;
  }

  if (elem.tagName == "IMG") {
    elem = elem.parentElement.firstElementChild;
  }
  saveElementStates.forEach((element) => {
    if (elem.id == element.chechboxId) {
      element.checkboxState = !elem.checked;
      element.styleCheckbox = elem.style;
      element.styleLabel = elem.nextElementSibling.style;
      element.styleVector = elem.nextElementSibling.nextElementSibling.style;
    }
  });
  saveElementStates[1].rightCounter = document.body.querySelector(
    ".task-list__right-counter > .task-list_counter-wrapper"
  ).innerText;
  localStorage.setItem("saveElementStates", JSON.stringify(saveElementStates));
}

export function deletState(elem, saveElementStates) {
  const targetCheckbox = elem.parentElement.firstElementChild;

  saveElementStates.forEach((element, index) => {
    if (targetCheckbox.id == element.chechboxId) {
      saveElementStates.splice(index, 1);
    }
  });
  saveElementStates[0].leftCounter -= 1;
  saveElementStates[1].rightCounter = document.querySelector(
    ".task-list__right-counter > .task-list_counter-wrapper"
  ).innerText;

  localStorage.setItem("saveElementStates", JSON.stringify(saveElementStates));
}
