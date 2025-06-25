import { Project } from "./Project.js";
import { Todo } from "./Todo.js";

let currentProject = ""; //object of current displayed project
export function getCurrentProject() {
  return currentProject;
}
export function setCurrentProject(project) {
  currentProject = project;
}
const projectMap = new Map();
export function getProjectMap() {
  return projectMap;
}
export function changeProjectName(id, newName) {
  projectMap.get(id).name = newName;
  saveData();
}
//init data
function initData() {
  const inbox_project = new Project("inbox");
  projectMap.set(inbox_project.id, inbox_project);

  //placeholder data including default project inbox
  const test_todo = new Todo("title", "desc", "1");
  inbox_project.addTodoToProject(test_todo);
}
export function getData() {
  if (localStorage.getItem("projects") === null) {
    initData();
  } else {
    const projects = JSON.parse(localStorage.getItem("projects"));
    console.log(projects);
    //Need to recreate all projects and todos to restore methods
    for (let project in projects) {
      console.log(project);
      addNewProject(projects[project]._name, projects[project]._id);
      const renewTodos = projects[project]._todos;
      for (let todo in renewTodos) {
        addNewTodo(
          projects[project]._id,
          renewTodos[todo]._title,
          renewTodos[todo]._description,
          renewTodos[todo]._priority,
          renewTodos[todo]._dueDate
        );
      }
    }
  }
  setCurrentProject(projectMap.values().next().value);
}
function saveData() {
  console.log("saving");
  localStorage.setItem(
    "projects",
    JSON.stringify(Object.fromEntries(projectMap))
  );
}
export function addNewProject(name, id) {
  const newProject = new Project(name, id);
  projectMap.set(newProject.id, newProject);
  saveData();
}
export function addNewTodo(projectID, title, desc, pri, date) {
  const newTodo = new Todo(title, desc, pri, date);
  projectMap.get(projectID).addTodoToProject(newTodo);
  saveData();
}
