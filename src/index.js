import "./style.css";
import { addNewProject, addNewTodo, getData, getProjectMap} from "./dataManager.js";
import { updateDisplay, updateSidebar} from "./display.js";

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
    addNewProject(projectName);
    //generateProjectButtons();
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
      addNewTodo(newTodoProject.value, newTodoTitle.value, newTodoDescription.value, newTodoPriority.value, newTodoDueDate.value);
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
//main
function initApp() {
  getData();
  updateSidebar(getProjectMap());
  updateDisplay(getProjectMap().get("inbox"));
  setupNewProjectDialog();
  setupNewTodoDialog();
  setupCreateTodoEvent();
  setupCancelTodoEvent();
}
document.addEventListener("DOMContentLoaded", initApp());
