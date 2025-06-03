import "./style.css";
import { display } from "./display.js";
import { Project } from "./project.js";
import { Todo } from "./todo.js";

function getData() {
  if (localStorage.getItem("projects") === null) {
    localStorage.setItem("projects", JSON.stringify(["inbox"]));
  }
  const projects = JSON.parse(localStorage.getItem("projects"));

  for (let i = 0; i < projects.length; i++) {
    new Project(projects[i]);
  }

  JSON.parse(localStorage.getItem("projects"));
}
//init data
const inbox_project = new Project("inbox");
const projectMap = new Map();
projectMap.set("inbox", inbox_project);
//placeholder data including default project inbox
const test_todo = new Todo("test", "desc", "1");
inbox_project.addTodoToProject(test_todo);
display(inbox_project);
//New Todo button event listener
const dialog = document.getElementById("newTodoDialog");
const newTodo = document.getElementById("newTodoBtn");
newTodo.addEventListener("click", () => {
  for (const project of projectMap.keys()) {
    const option = document.createElement("option");
    option.value = project;
    option.textContent = project;
    dialog.querySelector("#selectProject").appendChild(option);
  }
  dialog.showModal();
});
//Create new todo from dialog
const newTodoDialog = document.getElementById("newTodoDialog");
const newTodoName = newTodoDialog.querySelector("#name");
const newTodoDescription = newTodoDialog.querySelector("#description");
const newTodoPriority = newTodoDialog.querySelector("#priority");
const newTodoDueDate = newTodoDialog.querySelector("#dueDate");
const newTodoProject = newTodoDialog.querySelector("#selectProject");
const confirmNewTodo = newTodoDialog.querySelector("#confirmNewTodo");
confirmNewTodo.addEventListener("click", (event) => {
  event.preventDefault();
  const requiredFields = newTodoDialog.querySelectorAll("[required]");
  let valid = true;
  requiredFields.forEach((field) => {
    if (!field.value) {
      valid = false;
    }
  });
  if (valid) {
    const todo = new Todo(
      newTodoName.value,
      newTodoDescription.value,
      newTodoPriority.value,
      newTodoDueDate.value
    );
    projectMap.get(newTodoProject.value).addTodoToProject(todo);
    //update ui
    newTodoDialog.close();
  } else {
    alert("Please fill in all fields");
  }
});
//Cancel new todo
const cancel = newTodoDialog.querySelector("#cancel");
cancel.addEventListener("click", (event) => {
  event.preventDefault();
  newTodoDialog.close();
});
