export default class Project {
  constructor(title) {
    this.title = title;
    this.content = [];
  }

  addItem(item) {
    this.content.push(item);
  }
  get ContentCount() {
    return this.content.length;
  }
}
