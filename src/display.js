function updateDisplay(project) {
  const display = document.querySelector("#display");
  display.innerHTML = "";
  project.todos.forEach((todo) => {
    const todoDiv = document.createElement("div");
    const projectName = document.createElement("h2");
    const todoTitle = document.createElement("h3");
    const todoDescription = document.createElement("p");
    const todoPriority = document.createElement("p");
    const todoDueDate = document.createElement("p");
    projectName.textContent = project.name;
    todoTitle.textContent = todo.title;
    todoDescription.textContent = todo.description;
    todoPriority.textContent = todo.priority;
    todoDueDate.textContent = todo.dueDate;
    display.append(todoDiv);
    todoDiv.append(projectName);
    todoDiv.append(todoTitle);
    todoDiv.append(todoDescription);
    todoDiv.append(todoPriority);
    todoDiv.append(todoDueDate);
  });
};
function updateSidebar(projectMap) {
  const projectsList = document.querySelector("#sidebar ul");
  projectsList.innerHTML = "";
  projectMap.keys().forEach((project) => {
    const projectBtn = document.createElement("button");
    projectBtn.textContent = project;
    projectBtn.id = project;
    projectsList.appendChild(projectBtn);
    projectBtn.addEventListener("click", () => {
      updateDisplay(projectMap.get(project));
    });
  });
}
export { updateDisplay, updateSidebar };
