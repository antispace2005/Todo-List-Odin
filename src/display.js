export default class Display {
  constructor(todoApp) {
    this.todoApp = todoApp;
    this.projectsListContainer = document.getElementById("projectsList");
    this.toDosListDom = document.getElementById("toDosList");

    this.projectsList = document.createElement("ol");
    this.updateNavBarProjects();

    this.projectsListContainer.appendChild(this.projectsList);
  }

  updateNavBarProjects() {
    for (const projectTitle of this.todoApp.getProjectsNames()) {
      let projectTitleElement = document.createElement("li");
      projectTitleElement.innerText = projectTitle;
      projectsList.appendChild(projectTitleElement);
    }
  }
}
