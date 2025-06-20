class Todo {
  constructor(title, description = "", priority = "p1", dueDate) {
    this._title = title;
    this._description = description;
    this._priority = priority;
    this._dueDate = dueDate;
  }
  get title() {
    return this._title;
  }
  set title(title) {
    this._title = title;
  }
  get description() {
    return this._description;
  }
  set description(description) {
    this._description = description;
  }
  get priority() {
    return this._priority;
  }
  set priority(priority) {
    this._priority = priority;
  }
  get dueDate() {
    return this._dueDate;
  }
  set dueDate(dueDate) {
    this._dueDate = dueDate;
  }
}

export { Todo };
