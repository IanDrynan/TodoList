/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/Project.js
class Project {
  constructor(name, id) {
    this._id = id || crypto.randomUUID();
    this._name = name;
    this._todos = new Map();
  }
  get id() {
    return this._id;
  }
  set id(id) {
    this._id = id;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }
  get todos() {
    return this._todos;
  }
  set todos(todos) {
    this._todos = todos;
  }
  addTodoToProject(todo) {
    this._todos.set(todo.id, todo);
  }
  removeTodoFromProject(todoID) {
    this._todos.delete(todoID);
  }
  getTodoById(id) {
    return this._todos.get(id);
  }
}


;// ./src/Todo.js
class Todo {
  constructor(title, description = "", priority = "p1", dueDate, status, id) {
    this._id = id || crypto.randomUUID();
    this._title = title;
    this._description = description;
    this._priority = priority;
    this._dueDate = dueDate;
    this._status = status || false;
  }
  get id() {
    return this._id;
  }
  set id(id) {
    this._id = id;
  }
  get title() {
    return this._title;
  }
  set title(title) {
    this._title = title;
  }
  get description() {
    return this._description;
  }
  set description(description) {
    this._description = description;
  }
  get priority() {
    return this._priority;
  }
  set priority(priority) {
    this._priority = priority;
  }
  get dueDate() {
    return this._dueDate;
  }
  set dueDate(dueDate) {
    this._dueDate = dueDate;
  }
  get status() {
    return this._status;
  }
  set status(status) {
    this._status = status;
  }
  toggleStatus() {
    this._status = !this._status;
  }
}



;// ./src/dataManager.js



const projectMap = new Map();
let currentProject = ""; //object of current displayed project
function getCurrentProject() {
  return currentProject;
}
function setCurrentProject(projectID) {
  currentProject = projectMap.get(projectID);
}
function getProjectMap() {
  return projectMap;
}
function changeProjectName(id, newName) {
  projectMap.get(id).name = newName;
  saveData();
}
//init data
function initData() {
  const inbox_project = new Project("inbox");
  projectMap.set(inbox_project.id, inbox_project);

  //placeholder data including default project inbox
  const test_todo = new Todo("title", "desc", "1");
  inbox_project.addTodoToProject(test_todo);
}
function getData() {
  if (localStorage.getItem("projects") === null) {
    initData();
  } else {
    const projects = JSON.parse(localStorage.getItem("projects"));
    //Need to recreate all projects and todos to restore methods
    for (let project of projects) {
      project = project[1];
      addNewProject(project._name, project._id);
      const renewTodos = project._todos;
      for (let todo of renewTodos) {
        addNewTodo(
          project._id,
          todo[1]._title,
          todo[1]._description,
          todo[1]._priority,
          todo[1]._dueDate,
          todo[1]._status,
          todo[1]._id,
        );
      }
    }
  }
  setCurrentProjectToInbox();
}
function convertProjectMap(map) {
  const convertedProjectMap = Array.from(map.entries()).map(([projectID, projectObj]) => {
    const convertedTodoMap = {...projectObj};
    convertedTodoMap._todos = Array.from(convertedTodoMap._todos.entries());
    return [projectID, convertedTodoMap];
  });
  return convertedProjectMap;
}
function saveData() {
  console.log("saving");
  const dataToStore = convertProjectMap(projectMap);
  localStorage.setItem(
    "projects",
    JSON.stringify(dataToStore)
  );
}
function addNewProject(name, id) {
  const newProject = new Project(name, id);
  projectMap.set(newProject.id, newProject);
  saveData();
}
function addNewTodo(projectID, title, desc, pri, date, status, todoID) {
  const newTodo = new Todo(title, desc, pri, date, status, todoID);
  projectMap.get(projectID).addTodoToProject(newTodo);
  saveData();
}
function deleteTodo(projectID, todoID) {
  projectMap.get(projectID).removeTodoFromProject(todoID);
  saveData();
}
function toggleTodoStatus(projectID, todoID) {
  projectMap.get(projectID).getTodoById(todoID).toggleStatus();
  saveData();
}
function deleteProject(projectID) {
  projectMap.delete(projectID);
  saveData();
}
function setCurrentProjectToInbox() {
  currentProject = projectMap.values().next().value;
}
function getInboxID() {
  return projectMap.values().next().value.id;
}
function getTodoByID(projectID, todoID) {
  return projectMap.get(projectID).getTodoById(todoID);
}
;// ./src/display.js


function updateDisplay() {
  const project = getCurrentProject();
  const projectName = document.querySelector("#projectHeader");
  if (project.id === getInboxID()) {
    projectName.removeAttribute("contenteditable");
  } else {
    projectName.setAttribute("contenteditable", "plaintext-only");
  }
  projectName.textContent = project.name;

  const display = document.querySelector("#display");
  display.innerHTML = "";

  project.todos.forEach((todo) => {
    //Parent Todo div for each todo w/ todo id
    const todoDiv = document.createElement("div");
    todoDiv.className = "todo";
    todoDiv.setAttribute("data-todo-id", todo.id);
    todoDiv.setAttribute("data-project-id", project.id);
    if (todo.status) {
      todoDiv.setAttribute("data-status", "complete");
    }
    //Parent div for todo header for toggle, title, edit, delete
    const todoHeaderDiv = document.createElement("div");
    todoHeaderDiv.className = "todoHeaderDiv";
    todoHeaderDiv.setAttribute("data-action", "expand");

    const todoToggle = document.createElement("input");
    todoToggle.classList.add("todoToggle");
    todoToggle.type = "checkbox";
    todoToggle.checked = todo.status;

    const todoTitle = document.createElement("h2");
    todoTitle.classList.add("todoTitle");
    todoTitle.textContent = todo.title;

    const todoEditButton = document.createElement("button");
    todoEditButton.classList.add("todoEditButton");
    todoEditButton.setAttribute("data-action", "edit-todo");

    const todoDeleteButton = document.createElement("button");
    todoDeleteButton.classList.add("todoDeleteButton");
    todoDeleteButton.setAttribute("data-action", "delete-todo");

    //Description
    const newTodoDescription = document.createElement("p");
    newTodoDescription.className = "todoDescription";
    newTodoDescription.textContent = todo.description;

    //Due Date
    const todoDueDate = document.createElement("p");
    const tempDate = new Date(todo.dueDate).toDateString();
    todoDueDate.textContent = tempDate !== "Invalid Date" ? tempDate : "";

    //Append elements to display
    display.append(todoDiv);
    todoDiv.append(todoHeaderDiv);
    todoHeaderDiv.append(todoToggle);
    todoHeaderDiv.append(todoTitle);
    todoHeaderDiv.append(todoEditButton);
    todoHeaderDiv.append(todoDeleteButton);
    todoDiv.append(newTodoDescription);
    todoDiv.append(todoDueDate);
  });
}
function updateSidebar() {
  const projectMap = getProjectMap();
  const projectsList = document.querySelector("#sidebar ul");
  projectsList.innerHTML = "";
  projectMap.values().forEach((project) => {
    //Parent project div for each project w/ project id
    const projectDiv = document.createElement("div");
    projectDiv.className = "project";
    projectDiv.setAttribute("data-project-id", project.id);
    if (project.id === getCurrentProject().id) {
      projectDiv.classList.add("selected");
    }

    const projectBtn = document.createElement("button");
    projectBtn.classList.add("projectButton");
    projectBtn.textContent = project.name;
    projectBtn.setAttribute("data-action", "select-project");

    let projectDeleteButton;
    if (project.id !== getInboxID()) {
      //Delete Button + svg icon
      projectDeleteButton = document.createElement("button");
      projectDeleteButton.classList.add("projectDeleteButton");
      projectDeleteButton.setAttribute("data-action", "delete-project");

      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("height", "24");
      svg.setAttribute("width", "24");
      svg.setAttribute("viewBox", "0 -960 960 960");
      svg.setAttribute("fill", "currentColor");
      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      path.setAttribute(
        "d",
        "M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
      );
      svg.appendChild(path);
      projectDeleteButton.appendChild(svg);
    }
    projectsList.appendChild(projectDiv);
    projectDiv.appendChild(projectBtn);
    if (project.id !== getInboxID()) {
      projectDiv.appendChild(projectDeleteButton);
    }
  });
}


;// ./src/index.js




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
    newTodoProject.value = getCurrentProject().id;
    newTodoTitle.dataset.todoId = "";
    dialog.showModal();
  });
}
function populateProjectSelector() {
  const options = document.getElementById("selectProject");
  options.innerHTML = "";
  const projectMap = getProjectMap();
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
          setCurrentProject(projectID);
          updateDisplay();
          break;
        case "delete-project":
          if (
            confirm(
              "Are you sure you want to delete this project and all of its todos?"
            )
          ) {
            deleteProject(projectID);
            setCurrentProjectToInbox();
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
            const todo = getTodoByID(projectID, todoID);
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
              deleteTodo(
                getCurrentProject().id,
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
  setupClickEventsForSidebar();
  setupClickEventsForDisplay();
  setupBlurEventsForDisplay();
  setupChangeEventsForDisplay();
}
document.addEventListener("DOMContentLoaded", initApp());


/******/ })()
;
//# sourceMappingURL=app.bundle.js.map