import "./style.css";
import { inbox } from "./inbox.js";
import { Project } from "./project.js";
import { Todo } from "./todo.js";

function getData() {
  if (localStorage.getItem("projects") === null) {
    localStorage.setItem("projects", JSON.stringify(["inbox"]));
  }
  const projects = JSON.parse(localStorage.getItem("projects"));

  for (let i = 0; i < projects.length; i++) {
    new Project(projects[i]);
  }

  JSON.parse(localStorage.getItem("projects"));
}
const inbox_project = new Project("inbox");
const projectMap = new Map();
projectMap.set("inbox", inbox_project);
const test_todo = new Todo("test", "desc", "1", "2020");
inbox_project.addTodoToProject(test_todo);
inbox(inbox_project);

const newTodo = document.getElementById("newTodoBtn");
newTodo.addEventListener("click", () => {
  const dialog = document.createElement("dialog");
  dialog.id = "newTodoDialog";
  document.body.appendChild(dialog);
  dialog.innerHTML = `<form>
            <label for="name">Name</label>
            <input type="text" name="name" id="name" required>
            <label for="description">Description</label>
            <input type="text" name="description" id="description">
            <label for="priority">Priority</label>
            <select id="priority">
                <option value="p1">p1</option>
                <option value="p2">p2</option>
                <option value="p3">p3</option>
            </select>
            <label for="dueDate">Due Date</label>
            <input type="date" name="dueDate" id="dueDate">
            <label for="project">Project</label>
            <select id="selectProject">
            </select>
            <button type="submit" id="confirmNewTodo">Confirm</button>
            <button type="submit" id="cancel">Cancel</button>
        </form>`;
  for (const project of projectMap.keys()) {
    const option = document.createElement("option");
    option.value = project;
    option.textContent = project;
    dialog.querySelector("#selectProject").appendChild(option);
  }
  dialog.showModal();

  const newTodoDialog = document.getElementById("newTodoDialog");
  const newTodoName = newTodoDialog.querySelector("#name");
  const newTodoDescription = newTodoDialog.querySelector("#description");
  const newTodoPriority = newTodoDialog.querySelector("#priority");
  const newTodoDueDate = newTodoDialog.querySelector("#dueDate");
  const newTodoProject = newTodoDialog.querySelector("#selectProject");
  const confirmNewTodo = newTodoDialog.querySelector("#confirmNewTodo");
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
        const todo = new Todo(
            newTodoName.value,
            newTodoDescription.value,
            newTodoPriority.value,
            newTodoDueDate.value,
            newTodoProject.value
        );
        projectMap.get(newTodoProject.value).addTodoToProject(todo);
        inbox(inbox_project);
        newTodoDialog.close();
    }
    else {
        alert("Please fill in all fields");
    }
  });
  const cancel = newTodoDialog.querySelector("#cancel");
  cancel.addEventListener("click", () => {
    newTodoDialog.close();
  });
});
