export function saveNewState(elem, saveElementStates) {
  const newElement = {};
  newElement.text = elem.innerText;
  newElement.checkboxState = elem.firstElementChild.checked;
  newElement.chechboxId = elem.firstElementChild.id;
  saveElementStates.push(newElement);
  saveElementStates[0].leftCounter = document.body.querySelector(
    ".task-list__left-counter > .task-list_counter-wrapper"
  ).innerText;

  localStorage.setItem("saveElementStates", JSON.stringify(saveElementStates));
}

export function changeState(elem) {
  const savedElementsFromLocalStorage = JSON.parse(
    localStorage.getItem("saveElementStates")
  );
  if (elem.tagName == "LABEL") {
    elem = elem.previousElementSibling;
  }
  savedElementsFromLocalStorage.forEach((element) => {
    if (elem.id == element.chechboxId) {
      element.checkboxState = !elem.checked;
    }
  });
  savedElementsFromLocalStorage[1].rightCounter = document.body.querySelector(
    ".task-list__right-counter > .task-list_counter-wrapper"
  ).innerText;
  localStorage.setItem(
    "saveElementStates",
    JSON.stringify(savedElementsFromLocalStorage)
  );
}
