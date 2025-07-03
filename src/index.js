import "./style.css";
import {
  addNewProject,
  addNewTodo,
  getData,
  getProjectMap,
  changeProjectName,
  getCurrentProject,
  toggleTodoStatus,
} from "./dataManager.js";
import { updateDisplay, updateSidebar } from "./display.js";

//New Todo button
function setupNewTodoDialog() {
  const dialog = document.getElementById("newTodoDialog");
  const newTodo = document.getElementById("newTodoBtn");
  newTodo.addEventListener("click", () => {
    const options = dialog.querySelector("#selectProject");
    options.innerHTML = "";
    const projectMap = getProjectMap();
    for (const project of projectMap.keys()) {
      const option = document.createElement("option");
      option.value = project;
      option.textContent = projectMap.get(project).name;
      options.appendChild(option);
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
    updateSidebar();
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
  const confirmNewTodo = newTodoDialog.querySelector("#todoFormSubmit");
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
      addNewTodo(
        newTodoProject.value,
        newTodoTitle.value,
        newTodoDescription.value,
        newTodoPriority.value,
        newTodoDueDate.value
      );
      //update ui
      updateDisplay();
      newTodoDialog.close();
    } else {
      alert("Please fill in all fields");
    }
  });
}
//Cancel new todo
function setupCancelTodoEvent() {
  const cancel = newTodoDialog.querySelector("#todoFormCancel");
  cancel.addEventListener("click", (event) => {
    event.preventDefault();
    newTodoDialog.close();
  });
}
function setupClickEvents() {
  const display = document.querySelector("#display");
  display.addEventListener("click", (event) => {
    if (
      event.target.closest(".todoToggle") ||
      event.target.closest(".todoDeleteButton")
    ) {
      return;
    }
    const actionElement = event.target.closest("[data-action]");
    if (actionElement) {
      const action = actionElement.dataset.action;
      switch (action) {
        case "expand":
          const content = actionElement.nextElementSibling;
          if (content.style.maxHeight) {
            content.style.maxHeight = null;
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
          }
          break;
        case "edit":
          break;
        case "delete":
          break;
      }
    }
  });
}
function setupBlurEvents() {
  const projectHeader = document.querySelector("#projectHeader");
  projectHeader.addEventListener("blur", (event) => {
    const newName = event.target.textContent.trim();
    changeProjectName(getCurrentProject().id, newName);
    updateSidebar();
  });
  projectHeader.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      event.target.blur();
    }
  });
}
function setupChangeEvents() {
  const display = document.querySelector("#display");
  display.addEventListener("change", (event) => {
    const toggle = event.target.closest(".todoToggle");
    if (toggle) {
      const todo = toggle.closest(".todo");
      if (!todo) {
        return;
      }
      const todoId = todo.dataset.todoId;
      const project = getCurrentProject();
      toggleTodoStatus(project.id, todoId);

      const complete = toggle.checked;

      if (complete) {
        todo.setAttribute("data-status", "complete");
      } else {
        todo.setAttribute("data-status", "incomplete");
      }
    }
  });
}
//main
function initApp() {
  getData();
  updateDisplay();
  updateSidebar();
  setupNewProjectDialog();
  setupNewTodoDialog();
  setupCreateTodoEvent();
  setupCancelTodoEvent();
  setupClickEvents();
  setupBlurEvents();
  setupChangeEvents();
}
document.addEventListener("DOMContentLoaded", initApp());

//todo:
//edit details
//delete todo
//project:
//create project same as todo
//change http address
//delete project
