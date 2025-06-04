const main = document.querySelector("#main");
const mainBtns = document.querySelector("#mainBtns");
const display = document.querySelector("#display");

const updateDisplay = (project) => {
  display.innerHTML = "";
  project.todos.forEach((todo) => {
    const todoDiv = document.createElement("div");
    const todoTitle = document.createElement("h3");
    const todoDescription = document.createElement("p");
    const todoPriority = document.createElement("p");
    const todoDueDate = document.createElement("p");
    todoTitle.innerHTML = todo.title;
    todoDescription.innerHTML = todo.description;
    todoPriority.innerHTML = todo.priority;
    todoDueDate.innerHTML = todo.dueDate;
    display.append(todoDiv);
    todoDiv.append(todoTitle);
    todoDiv.append(todoDescription);
    todoDiv.append(todoPriority);
    todoDiv.append(todoDueDate);
  });
};

export { updateDisplay };
