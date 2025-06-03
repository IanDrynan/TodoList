class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }
  addTodoToProject(todo) {
    this.todos.push(todo);
  }
  removeTodoFromProject(todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }
}
export { Project };
