class Project {
  constructor(name, id) {
    this._id = id || crypto.randomUUID();
    this._name = name;
    this._todos = new Map();
  }
  get id() {
    return this._id;
  }
  set id(id) {
    this._id = id;
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
    this._todos.set(todo.id, todo);
  }
  removeTodoFromProject(todoID) {
    this._todos.delete(todoID);
  }
  getTodoById(id) {
    return this._todos.get(id);
  }
}
export { Project };
