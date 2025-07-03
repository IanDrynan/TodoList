import { Project } from "./Project.js";
import { Todo } from "./Todo.js";

const projectMap = new Map();
let currentProject = ""; //object of current displayed project
export function getCurrentProject() {
  return currentProject;
}
export function setCurrentProject(projectID) {
  currentProject = projectMap.get(projectID);
}
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
    //Need to recreate all projects and todos to restore methods
    for (let project of projects) {
      project = project[1];
      addNewProject(project._name, project._id);
      const renewTodos = project._todos;
      for (let todo of renewTodos) {
        addNewTodo(
          project._id,
          todo[1]._title,
          todo[1]._description,
          todo[1]._priority,
          todo[1]._dueDate,
          todo[1]._status,
          todo[1]._id,
        );
      }
    }
  }
  setCurrentProjectToInbox();
}
function convertProjectMap(map) {
  const convertedProjectMap = Array.from(map.entries()).map(([projectID, projectObj]) => {
    const convertedTodoMap = {...projectObj};
    convertedTodoMap._todos = Array.from(convertedTodoMap._todos.entries());
    return [projectID, convertedTodoMap];
  });
  return convertedProjectMap;
}
function saveData() {
  console.log("saving");
  const dataToStore = convertProjectMap(projectMap);
  localStorage.setItem(
    "projects",
    JSON.stringify(dataToStore)
  );
}
export function addNewProject(name, id) {
  const newProject = new Project(name, id);
  projectMap.set(newProject.id, newProject);
  saveData();
}
export function addNewTodo(projectID, title, desc, pri, date, status, todoID) {
  const newTodo = new Todo(title, desc, pri, date, status, todoID);
  projectMap.get(projectID).addTodoToProject(newTodo);
  saveData();
}
export function deleteTodo(projectID, todoID) {
  projectMap.get(projectID).removeTodoFromProject(todoID);
  saveData();
}
export function toggleTodoStatus(projectID, todoID) {
  projectMap.get(projectID).getTodoById(todoID).toggleStatus();
  saveData();
}
export function deleteProject(projectID) {
  projectMap.delete(projectID);
  saveData();
}
export function setCurrentProjectToInbox() {
  currentProject = projectMap.values().next().value;
}
export function getInboxID() {
  return projectMap.values().next().value.id;
}