document.body.addEventListener("pointerdown", function (event) {
  if (!event.target.closest("form") && !event.target.closest("ul")) return;

  if (event.target.closest("button")) {
    const inputAddNewTask = document.querySelector(".task-form__input-text");
    let textValueInput = inputAddNewTask.value;
    inputAddNewTask.value = "";
    if (textValueInput == "") return;

    let previewWrapper = document.querySelector(".task-list__preview-wrapper");
    previewWrapper.style.display = "none";
    let counter = document.body.querySelectorAll("li").length + 1;

    let newElement = createCheckbox(counter, textValueInput);

    let ulLastChild = document.body.querySelector("ul").lastChild;

    if (ulLastChild == null) {
      document.body.querySelector("ul").append(newElement);
    } else {
      ulLastChild.after(newElement);
    }
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
  newVector.setAttribute("src", "Src/Vector.svg");
  newVector.setAttribute("alt", "Vector");
  newVector.setAttribute("class", "task-list__vector");
  newLabel.append(newVector);

  let newTrash = document.createElement("img");
  newTrash.setAttribute("src", "Src/trash.svg");
  newTrash.setAttribute("alt", "trash");
  newTrash.setAttribute("class", "task-list__trash");
  newElement.append(newTrash);

  return newElement;
}
