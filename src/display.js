import { getCurrentProject, setCurrentProject, getProjectMap } from "./dataManager.js";

function updateDisplay() {
  const project = getCurrentProject();
  const projectName = document.querySelector("#projectHeader");
  if(project.name != "inbox") {
    projectName.setAttribute("contenteditable", "plaintext-only");
  }
  projectName.textContent = project.name;

  const display = document.querySelector("#display");
  display.innerHTML = "";

  project.todos.forEach((todo) => {
    const todoDiv = document.createElement("div");
    todoDiv.className = "todo";
    const todoHeaderDiv = document.createElement("div");
    todoHeaderDiv.className = "todoHeaderDiv";
    todoHeaderDiv.setAttribute("data-action", "expand");
    const todoToggle = document.createElement("input");
    todoToggle.type = "checkbox";
    const todoTitle = document.createElement("h2");
    todoTitle.classList.add("todoTitle");
    const todoEditButton = document.createElement("button");
    todoEditButton.textContent = "Edit";
    todoEditButton.setAttribute("data-action", "edit");
    const todoDeleteButton = document.createElement("button");
    todoDeleteButton.textContent = "Delete";
    todoDeleteButton.setAttribute("data-action", "delete");
    const newTodoDescription = document.createElement("p");
    newTodoDescription.className = "todoDescription";
    newTodoDescription.textContent = todo.description;
    const todoDueDate = document.createElement("p");
    todoTitle.textContent = todo.title;
    const tempDate = new Date(todo.dueDate).toDateString();
    todoDueDate.textContent = tempDate !== "Invalid Date" ? tempDate : "";
    display.append(todoDiv);
    todoDiv.append(todoHeaderDiv);
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
    projectsList.appendChild(projectBtn);
    projectBtn.addEventListener("click", () => {
      setCurrentProject(project);
      updateDisplay();
    });
  });
}
export { updateDisplay, updateSidebar };
