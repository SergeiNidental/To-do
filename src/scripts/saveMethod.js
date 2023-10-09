export default function saveState() {
  localStorage.setItem(
    "task-form",
    JSON.stringify(document.querySelector(".task-form").innerHTML)
  );
  localStorage.setItem(
    "task-list",
    JSON.stringify(document.querySelector(".task-list").innerHTML)
  );
}
