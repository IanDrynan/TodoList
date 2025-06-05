import { Project } from "./Project.js";
import { Todo } from "./Todo.js";

const projectMap = new Map();
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
//init data
function initData() {
  const inbox_project = new Project("inbox");
  //const todoMap = new Map(); hashmap of todos for all  projects?
  projectMap.set("inbox", inbox_project);
  //placeholder data including default project inbox
  const test_todo = new Todo("test", "desc", "1");
  inbox_project.addTodoToProject(test_todo);
}
function getProjectMap() {
  return projectMap;
}
export { initData, getProjectMap };