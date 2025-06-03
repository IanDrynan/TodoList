class Todo {
  constructor(title, description = "", priority = "p1", dueDate) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
  }
  updateTitle(newTitle) {
    this.title = newTitle;
  }
  updateDescription(newDescription) {
    this.description = newDescription;
  }
  updatePriority(newPriority) {
    this.priority = newPriority;
  }
  updateDueDate(newDueDate) {
    this.dueDate = newDueDate;
  }
}

export { Todo };
