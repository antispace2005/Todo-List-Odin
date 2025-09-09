export default class ToDo {
  constructor(title, description, dueDate, isImportant) {
    this.information = {
      title,
      description,
      dueDate: ((dueDate) => {
        if (dueDate instanceof Date) return dueDate;
      })(dueDate),
      isImportant: ((isImportant) => {
        if (isImportant == true) {
          return true;
        } else {
          return false;
        }
      })(isImportant),
    };
  }

  //setters
  set title(title) {
    this.information.title = title;
  }
  set description(description) {
    this.information.title = description;
  }
  set dueDate(dueDate) {
    if (dueDate instanceof Date) {
      this.information.title = dueDate;
    }
  }
  set isImportant(isImportant) {
    this.information.title = isImportant;
  }
  //getters
  get title() {
    return this.information.title;
  }

  get description() {
    return this.information.description;
  }

  get dueDate() {
    return this.information.dueDate;
  }

  get isImportant() {
    return this.information.isImportant;
  }
}
