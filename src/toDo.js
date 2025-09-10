import { generateID } from "./basicFunctions";
export default class ToDo {
  constructor(title, description, dueDate, priority, color) {
    this.id = generateID();

    this.title = String(title);

    this.description = String(description);

    this.setDueDate = dueDate instanceof Date ? dueDate : null;

    this.priority = priority == undefined ? 0 : priority;

    this.done = false;

    this.color = color == undefined ? "#FFFFFF" : String(color);
  }

  //setters

  set setDueDate(dueDate) {
    if (dueDate instanceof Date) {
      this.dueDate = dueDate;
    }
  }

  getFromObj({ id, title, description, dueDate, priority, color }) {
    this.id = id;

    this.title = String(title);

    this.description = String(description);

    this.setDueDate = dueDate instanceof Date ? dueDate : null;

    this.priority = priority == undefined ? 0 : priority;

    this.done = false;

    this.color = color == undefined ? "#FFFFFF" : String(color);
  }
}
