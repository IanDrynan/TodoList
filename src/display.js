function updateDisplay(project) {
  const display = document.querySelector("#display");
  display.innerHTML = "";

  const projectName = document.createElement("h1");
  projectName.textContent = project.name;
  display.append(projectName);

  project.todos.forEach((todo) => {
    const todoTitle = document.createElement("h2");
    const todoDescription = document.createElement("p");
    const todoPriority = document.createElement("p");
    const todoDueDate = document.createElement("p");

    todoTitle.textContent = todo.title;
    todoDescription.textContent = todo.description;
    todoPriority.textContent = todo.priority;
    todoDueDate.textContent = todo.dueDate;

    display.append(todoTitle);
    display.append(todoDescription);
    display.append(todoPriority);
    display.append(todoDueDate);
  });
}
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
