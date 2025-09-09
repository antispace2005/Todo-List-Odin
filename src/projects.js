export default class Project {
  constructor(title) {
    this.title = title;
    this.list = [];
  }

  addToList(item) {
    this.list.push(item);
  }
}
