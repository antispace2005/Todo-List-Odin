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
    this.saveJSON();
    return 0;
  }

  addToDoToProject(toDo, projectName) {
    for (let i = 0; i < this.projectsList.length; i++) {
      if (this.projectsList[i].title == projectName) {
        this.projectsList[i].addItem(toDo);
        this.saveJSON();
        return 0;
      }
    }
    return 1;
  }

  removeProject(projectName) {
    for (let i = 0; i < this.projectsList.length; i++) {
      if (this.projectsList[i].title == projectName) {
        this.projectsList.splice(i, 1);
        this.saveJSON();
        return 0;
      }
    }
    return 1;
  }

  removeToDo(id) {
    for (let i = 0; i < this.projectsList.length; i++) {
      for (let j = 0; i < this.projectsList[i].content.length; i++) {
        if (this.projectsList[i].content[j].id == id) {
          this.projectsList[i].content.splice(j, 1);
          this.saveJSON();
          return 0;
        }
      }
    }
    return 1;
  }

  initApp() {
    this.projectsList.push(this.createExampleProject());
    this.loadJSON();
  }

  saveJSON() {
    localStorage["todoapp"] = JSON.stringify(this);
  }
  loadJSON() {
    if (localStorage["todoapp"] != undefined) {
      this.loadProjectListJSON(
        JSON.parse(localStorage["todoapp"])["projectsList"]
      );
    }
  }

  getProjectsNames() {
    let output = [];
    for (const project of this.projectsList) {
      output.push(project.title);
    }
    return output;
  }
}
