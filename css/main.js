let inputElement = document.querySelector("input");
let formElement = document.querySelector("form");
let listElement = document.querySelector("ul");
let totalTasksElement = document.querySelector("#total-tasks");

let taskList = ["buy groceries", "car service"];

function deleteItem(e) {
  let task = e.target.parentElement.previousElementSibling.innerHTML;
  let index = taskList.indexOf(task);
  if (index !== -1) {
    taskList.splice(index, 1);
  }
  populateList();
}
function populateList() {
  listElement.innerHTML = "";
  taskList.forEach(function (item) {
    let newItem = document.createElement("li");
    // add new span for text
    let span = document.createElement("span");
    span.innerHTML = item;
    newItem.appendChild(span);

    // add delete button
    let anchorElement = document.createElement("a");
    anchorElement.classList.add("delete");
    anchorElement.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    newItem.appendChild(anchorElement);

    anchorElement.addEventListener("click", (e) => deleteItem(e));

    // add li to ul
    listElement.appendChild(newItem);
  });

  totalTasksElement.innerHTML = taskList.length;
}

populateList();

function doesNotHaveWiteSpace(s) {
  let stringWhiteSpace = s.trim();
  return stringWhiteSpace.length > 0;
}

function addTask() {
  if (
    inputElement.value &&
    doesNotHaveWiteSpace(inputElement.value) &&
    !taskList.includes(inputElement.value)
  ) {
    taskList.push(inputElement.value);
    populateList();
  }
  inputElement.value = "";
}

formElement.addEventListener("submit", function (e) {
  e.preventDefault();
  addTask();
});
