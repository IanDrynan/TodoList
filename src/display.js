function updateDisplay(project) {
  const display = document.querySelector("#display");
  display.innerHTML = "";

  const projectName = document.createElement("h1");
  projectName.textContent = project.name;
  display.append(projectName);

  project.todos.forEach((todo) => {
    const todoDiv = document.createElement("div");
    const todoTitle = document.createElement("h2");
    const todoDueDate = document.createElement("p");
    todoTitle.textContent = todo.title;
    const tempDate = new Date(todo.dueDate).toDateString();
    todoDueDate.textContent = tempDate !== "Invalid Date" ? tempDate : "";

    display.append(todoDiv);
    todoDiv.append(todoTitle);
    todoDiv.append(todoDueDate);
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
