import "./style.css";
import * as dataManager from "./dataManager.js";
import { updateDisplay, updateSidebar } from "./display.js";

//New Todo button
function setupNewTodoDialog() {
  const dialog = document.getElementById("newTodoDialog");
  const newTodoTitle = newTodoDialog.querySelector("#todoTitle");
  const newTodoDescription = newTodoDialog.querySelector("#description");
  const newTodoPriority = newTodoDialog.querySelector("#priority");
  const newTodoDueDate = newTodoDialog.querySelector("#dueDate");
  const newTodoProject = newTodoDialog.querySelector("#selectProject");

  const newTodo = document.getElementById("newTodoBtn");
  newTodo.addEventListener("click", () => {
    populateProjectSelector();
    newTodoTitle.value = "";
    newTodoDescription.value = "";
    newTodoPriority.value = "";
    newTodoDueDate.value = "";
    newTodoProject.value = dataManager.getCurrentProject().id;
    newTodoTitle.dataset.todoId = "";
    dialog.showModal();
  });
}
function populateProjectSelector() {
  const options = document.getElementById("selectProject");
  options.innerHTML = "";
  const projectMap = dataManager.getProjectMap();
  for (const project of projectMap.keys()) {
    const option = document.createElement("option");
    option.value = project;
    option.textContent = projectMap.get(project).name;
    options.appendChild(option);
  }
}
//New Project button
function setupNewProjectDialog() {
  const newProjectBtn = document.getElementById("newProjectBtn");
  newProjectBtn.addEventListener("click", () => {
    const projectName = prompt("Enter project name");
    dataManager.addNewProject(projectName);
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
      dataManager.addNewTodo(
        newTodoProject.value,
        newTodoTitle.value,
        newTodoDescription.value,
        newTodoPriority.value,
        newTodoDueDate.value,
        false,
        newTodoTitle.dataset.todoId
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
function setupClickEventsForSidebar() {
  const sidebar = document.querySelector("#sidebar");
  sidebar.addEventListener("click", (event) => {
    const actionElement = event.target.closest("[data-action]");
    if (actionElement) {
      const action = actionElement.dataset.action;
      const projectID = actionElement
        .closest("[data-project-id]")
        .getAttribute("data-project-id");
      switch (action) {
        case "select-project":
          dataManager.setCurrentProject(projectID);
          updateDisplay();
          break;
        case "delete-project":
          if (
            confirm(
              "Are you sure you want to delete this project and all of its todos?"
            )
          ) {
            dataManager.deleteProject(projectID);
            dataManager.setCurrentProjectToInbox();
            updateSidebar();
            updateDisplay();
          }
          break;
      }
    }
  });
}
function setupClickEventsForDisplay() {
  const display = document.querySelector("#display");
  display.addEventListener("click", (event) => {
    if (event.target.closest(".todoToggle")) {
      return;
    }
    const actionElement = event.target.closest("[data-action]");

    if (actionElement) {
      const todoID = actionElement
        .closest("[data-todo-id]")
        .getAttribute("data-todo-id");
      const projectID =
        actionElement.closest("[data-project-id]").dataset.projectId;
      const action = actionElement.dataset.action;
      if (todoID) {
        switch (action) {
          case "expand":
            const content = actionElement.nextElementSibling;
            if (content.style.maxHeight) {
              content.style.maxHeight = null;
            } else {
              content.style.maxHeight = content.scrollHeight + "px";
            }
            break;
          case "edit-todo":
            populateProjectSelector();
            const todo = dataManager.getTodoByID(projectID, todoID);
            const newTodoDialog = document.getElementById("newTodoDialog");
            const newTodoTitle = newTodoDialog.querySelector("#todoTitle");
            newTodoTitle.dataset.todoId = todoID;
            const newTodoDescription =
              newTodoDialog.querySelector("#description");
            const newTodoPriority = newTodoDialog.querySelector("#priority");
            const newTodoDueDate = newTodoDialog.querySelector("#dueDate");
            const newTodoProject =
              newTodoDialog.querySelector("#selectProject");

            if (todo) {
              newTodoTitle.value = todo.title;
              newTodoDescription.value = todo.description;
              newTodoPriority.value = todo.priority;
              newTodoDueDate.value = todo.dueDate;
              newTodoProject.value = projectID;
            }
            newTodoDialog.showModal();
            break;
          case "delete-todo":
            if (confirm("Are you sure you want to delete this todo?")) {
              dataManager.deleteTodo(
                dataManager.getCurrentProject().id,
                todoID
              );
              updateDisplay();
            }

            break;
        }
      }
    }
  });
}
function setupBlurEventsForDisplay() {
  const projectHeader = document.querySelector("#projectHeader");
  projectHeader.addEventListener("blur", (event) => {
    const newName = event.target.textContent.trim();
    dataManager.changeProjectName(dataManager.getCurrentProject().id, newName);
    updateSidebar();
  });
  projectHeader.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      event.target.blur();
    }
  });
}
function setupChangeEventsForDisplay() {
  const display = document.querySelector("#display");
  display.addEventListener("change", (event) => {
    const toggle = event.target.closest(".todoToggle");
    if (toggle) {
      const todo = toggle.closest(".todo");
      if (!todo) {
        return;
      }
      const todoId = todo.dataset.todoId;
      const project = dataManager.getCurrentProject();
      dataManager.toggleTodoStatus(project.id, todoId);

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
  dataManager.getData();
  updateDisplay();
  updateSidebar();
  setupNewProjectDialog();
  setupNewTodoDialog();
  setupCreateTodoEvent();
  setupCancelTodoEvent();
  setupClickEventsForSidebar();
  setupClickEventsForDisplay();
  setupBlurEventsForDisplay();
  setupChangeEventsForDisplay();
}
document.addEventListener("DOMContentLoaded", initApp());

