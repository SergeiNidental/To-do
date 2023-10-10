export function saveNewState(elem, saveElementStates) {
  const newElement = {};
  newElement.text = elem.innerText;
  newElement.checkboxState = elem.firstElementChild.checked;
  newElement.chechboxId = elem.firstElementChild.id;
  newElement.classListCheckbox = elem.firstElementChild.classList;
  newElement.classListLabel =
    elem.firstElementChild.nextElementSibling.classList;
  newElement.classListVector =
    elem.firstElementChild.nextElementSibling.nextElementSibling.classList;
  saveElementStates.push(newElement);
  saveElementStates[0].leftCounter = document.body.querySelector(
    ".task-list__left-counter > .task-list_counter-wrapper"
  ).innerText;

  localStorage.setItem("saveElementStates", JSON.stringify(saveElementStates));
}

export function changeState(elem, saveElementStates) {
  // const savedElementsFromLocalStorage = JSON.parse(
  //   localStorage.getItem("saveElementStates")
  // );
  if (elem.tagName == "LABEL") {
    elem = elem.previousElementSibling;
  }

  if (elem.tagName == "IMG") {
    elem = elem.parentElement.firstElementChild;
  }
  saveElementStates.forEach((element) => {
    if (elem.id == element.chechboxId) {
      element.checkboxState = !elem.checked;
      element.classListCheckbox = elem.classList;
      element.classListLabel = elem.nextElementSibling.classList;
      element.classListVector =
        elem.nextElementSibling.nextElementSibling.classList;
    }
  });
  saveElementStates[1].rightCounter = document.body.querySelector(
    ".task-list__right-counter > .task-list_counter-wrapper"
  ).innerText;
  localStorage.setItem("saveElementStates", JSON.stringify(sa));
}

export function deletState(elem, saveElementStates) {
  const targetCheckbox = elem.parentElement.firstElementChild;
  // const savedElementsFromLocalStorage = JSON.parse(
  //   localStorage.getItem("saveElementStates")
  // );
  saveElementStates.forEach((element, index) => {
    if (targetCheckbox.id == element.chechboxId) {
      saveElementStates.splice(index, 1);
    }
  });
  saveElementStates[0].leftCounter -= 1;
  saveElementStates[1].rightCounter = document.querySelector(
    ".task-list__right-counter > .task-list_counter-wrapper"
  ).innerText;
  // console.log(saveElementStates);
  localStorage.setItem("saveElementStates", JSON.stringify(saveElementStates));
}
