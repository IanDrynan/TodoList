import {
  getCurrentProject,
  setCurrentProject,
  getProjectMap,
} from "./dataManager.js";

function updateDisplay() {
  const project = getCurrentProject();
  const projectName = document.querySelector("#projectHeader");
  if (project.name === "inbox") {
    projectName.removeAttribute("contenteditable");
  } else {
    projectName.setAttribute("contenteditable", "plaintext-only");
  }
  projectName.textContent = project.name;

  const display = document.querySelector("#display");
  display.innerHTML = "";

  project.todos.forEach((todo) => {
    const todoDiv = document.createElement("div");
    todoDiv.className = "todo";
    todoDiv.setAttribute("data-todo-id", todo.id);
    if (todo.status) {
      todoDiv.setAttribute("data-status", "complete");
    }
    const todoHeaderDiv = document.createElement("div");
    todoHeaderDiv.className = "todoHeaderDiv";
    todoHeaderDiv.setAttribute("data-action", "expand");
    const todoToggle = document.createElement("input");
    todoToggle.classList.add("todoToggle");
    todoToggle.type = "checkbox";
    todoToggle.checked = todo.status;
    const todoTitle = document.createElement("h2");
    todoTitle.classList.add("todoTitle");
    const todoEditButton = document.createElement("button");
    todoEditButton.classList.add("todoEditButton");
    todoEditButton.setAttribute("data-action", "edit-todo");
    const todoDeleteButton = document.createElement("button");
    todoDeleteButton.classList.add("todoDeleteButton");
    todoDeleteButton.setAttribute("data-action", "delete-todo");
    const newTodoDescription = document.createElement("p");
    newTodoDescription.className = "todoDescription";
    newTodoDescription.textContent = todo.description;
    const todoDueDate = document.createElement("p");
    todoTitle.textContent = todo.title;
    const tempDate = new Date(todo.dueDate).toDateString();
    todoDueDate.textContent = tempDate !== "Invalid Date" ? tempDate : "";
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
    const projectBtn = document.createElement("button");
    projectBtn.textContent = project.name;
    projectBtn.setAttribute("data-project-id", project.id);
    const projectDeleteButton = document.createElement("button");
    projectDeleteButton.classList.add("projectDeleteButton");
    projectDeleteButton.setAttribute("data-action", "delete-project");
    projectsList.appendChild(projectBtn);
    projectBtn.addEventListener("click", () => {
      setCurrentProject(project);
      updateDisplay();
    });
  });
}
export { updateDisplay, updateSidebar };
