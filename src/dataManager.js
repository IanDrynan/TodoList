import { Project } from "./Project.js";
import { Todo } from "./Todo.js";

const projectMap = new Map();
export function getProjectMap() {
  return projectMap;
}
//init data
function initData() {
  const inbox_project = new Project("inbox");
  projectMap.set("inbox", inbox_project);

  //placeholder data including default project inbox
  const test_todo = new Todo("test", "desc", "1");
  inbox_project.addTodoToProject(test_todo);
}
export function getData() {
  if (localStorage.getItem("projects") === null) {
    initData();
  }
  const projects = JSON.parse(localStorage.getItem("projects"));
  //Need to recreate all projects and todos to restore methods
  for (let project in projects) {
    addNewProject(project);
    const renewTodos = projects[project]._todos;
    for (let todo in renewTodos) {
      addNewTodo(project, renewTodos[todo]._title, renewTodos[todo]._description, renewTodos[todo]._priority, renewTodos[todo]._dueDate);
    }
  }
}
function saveData() {
  console.log("saving");
  localStorage.setItem("projects", JSON.stringify(Object.fromEntries(projectMap)));
}
export function addNewProject(name) {
  const newProject = new Project(name);
  projectMap.set(name, newProject);
  saveData();
}
export function addNewTodo(project = "inbox", title, desc, pri, date) {
  const newTodo = new Todo(title, desc, pri, date);
  projectMap.get(project).addTodoToProject(newTodo);
  saveData();
}