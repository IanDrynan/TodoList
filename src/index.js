import "./style.css";
import { initData, getProjectMap} from "./dataManager.js";
import { updateDisplay } from "./display.js";
import { Project } from "./Project.js";
import { Todo } from "./Todo.js";



//New Todo button
function setupNewTodoDialog() {
  const dialog = document.getElementById("newTodoDialog");
  const newTodo = document.getElementById("newTodoBtn");
  newTodo.addEventListener("click", () => {
    for (const project of getProjectMap().keys()) {
      const option = document.createElement("option");
      option.value = project;
      option.textContent = project;
      dialog.querySelector("#selectProject").appendChild(option);
    }
    dialog.showModal();
  });
}
//New Project button
function setupNewProjectDialog() {
  const newProjectBtn = document.getElementById("newProjectBtn");
  newProjectBtn.addEventListener("click", () => {
    const projectName = prompt("Enter project name");
    getProjectMap().set(projectName, new Project(projectName));
    generateProjectButtons();
  });
}
//New Todo creation
function setupCreateTodoEvent() {
  const newTodoDialog = document.getElementById("newTodoDialog");
  const newTodoTitle = newTodoDialog.querySelector("#todoTitle");
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
        newTodoTitle.value,
        newTodoDescription.value,
        newTodoPriority.value,
        newTodoDueDate.value
      );
      getProjectMap().get(newTodoProject.value).addTodoToProject(todo);
      //update ui
      updateDisplay(getProjectMap().get(newTodoProject.value));
      newTodoDialog.close();
    } else {
      alert("Please fill in all fields");
    }
  });
}
//Cancel new todo
function setupCancelTodoEvent() {
  const cancel = newTodoDialog.querySelector("#cancel");
  cancel.addEventListener("click", (event) => {
    event.preventDefault();
    newTodoDialog.close();
  });
}
//Generate project buttons in sidebar. Should this be moved out?
function generateProjectButtons() {
  const projectsList = document.querySelector("#sidebar ul");
  projectsList.innerHTML = "";
  getProjectMap().keys().forEach((project) => {
    const projectBtn = document.createElement("button");
    projectBtn.textContent = project;
    projectBtn.id = project;
    projectsList.appendChild(projectBtn);
    projectBtn.addEventListener("click", () => {
      updateDisplay(getProjectMap().get(project));
    });
  });
}
//main
function initApp() {
  initData();
  generateProjectButtons();
  setupNewProjectDialog();
  setupNewTodoDialog();
  setupCreateTodoEvent();
  setupCancelTodoEvent();
}
document.addEventListener("DOMContentLoaded", initApp());
