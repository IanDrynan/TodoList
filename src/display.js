import { getCurrentProject, getProjectMap, getInboxID } from "./dataManager.js";

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
export { updateDisplay, updateSidebar };
