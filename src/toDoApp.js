import Project from "./projects";
import ToDo from "./toDo";

export default class ToDoApp {
  constructor(SavedAppData) {
    this.projectsList = [];

    this.initApp();
    //loads Prev App if there is
    if (SavedAppData != undefined) {
      this.loadProjectListJSON(SavedAppData["projectsList"]);
    }
  }

  loadProjectListJSON(data) {
    this.projectsList = [];

    for (const project of data) {
      this.addProject(project.title);
      for (const toDoObj of project.content) {
        let tempToDo = new ToDo();
        console.log(toDoObj);
        tempToDo.getFromObj(toDoObj);
        this.addToDoToProject(tempToDo, project.title);
      }
    }
  }
  createExampleProject() {
    let Example = new Project("default");
    let ExampleTodo = new ToDo(
      "Title",
      "Example Desc",
      new Date(Date.now()),
      false
    );
    Example.addItem(ExampleTodo);
    return Example;
  }
  addProject(name) {
    for (const project of this.projectsList) {
      if (project.title == name) {
        return 1;
      }
    }
    this.projectsList.push(new Project(name));
    return 0;
  }

  addToDoToProject(toDo, projectName) {
    for (let i = 0; i < this.projectsList.length; i++) {
      if (this.projectsList[i].title == projectName) {
        this.projectsList[i].addItem(toDo);

        return 0;
      }
    }
    return 1;
  }

  removeProject(projectName) {
    for (let i = 0; i < this.projectsList.length; i++) {
      if (this.projectsList[i].title == projectName) {
        this.projectsList.slice(i, 1);
        return 0;
      }
    }
    return 1;
  }

  removeToDo(id) {
    for (let i = 0; i < this.projectsList.length; i++) {
      for (let j = 0; i < this.projectsList[i].content.length; i++) {
        if (this.projectsList[i].content[j].id == id) {
          this.projectsList[i].content.slice(j, 1);
          return 0;
        }
      }
    }
    return 1;
  }

  initApp() {
    this.projectsList.push(this.createExampleProject());
  }
}
