class Project {
  constructor(name) {
    this._name = name;
    this._todos = [];
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }
  get todos() {
    return this._todos;
  }
  set todos(todos) {
    this._todos = todos;
  }
  addTodoToProject(todo) {
    this._todos.push(todo);
  }
  removeTodoFromProject(todo) {
    this._todos.splice(this._todos.indexOf(todo), 1);
  }
}
export { Project };
