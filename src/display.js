export default class Display {
  constructor(todoApp) {
    this.todoApp = todoApp;
    this.projectsListContainer = document.getElementById("projectsList");
    this.toDosListDom = document.getElementById("toDosList");

    this.projectsList = document.createElement("ol");

    this.updateNavBarProjects();

    this.projectsListContainer.appendChild(this.projectsList);
    this.showToDosOfProject("default");
  }

  updateNavBarProjects() {
    for (const projectTitle of this.todoApp.getProjectsNames()) {
      let projectTitleElement = document.createElement("li");
      projectTitleElement.innerText = projectTitle;
      projectsList.appendChild(projectTitleElement);
    }
  }
  showToDosOfProject(projectName) {
    const toDos = this.todoApp.getToDosOfProject(projectName);
    if (toDos == undefined) {
      return 1;
    }
    for (const toDo of toDos) {
      this.displayToDo(toDo);
    }
    return 0;
  }

  displayToDo(toDo) {
    const title = toDo.title;
    const description = toDo.description;
    const dueDate = toDo.dueDate;
    const priority = toDo.priority;
    const color = toDo.color;

    // Create container for the to-do item
    const toDoItemLi = document.createElement("li");
    const toDoItemDiv = document.createElement("div");

    toDoItemDiv.classList.add("toDoItem");
    toDoItemDiv.style.borderLeft = `5px solid ${color}`;

    // Title
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("toDoTitle");
    titleDiv.textContent = title;

    // Description
    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("toDoDescription");
    descriptionDiv.textContent = description;

    // Due Date
    const dueDateDiv = document.createElement("div");
    dueDateDiv.classList.add("toDoDueDate");
    dueDateDiv.textContent = `Due: ${dueDate}`;

    // Priority
    const priorityDiv = document.createElement("div");
    priorityDiv.classList.add("toDoPriority");
    priorityDiv.textContent = `Priority: ${priority}`;

    // Append all elements to the container
    toDoItemDiv.appendChild(titleDiv);
    toDoItemDiv.appendChild(descriptionDiv);
    toDoItemDiv.appendChild(dueDateDiv);
    toDoItemDiv.appendChild(priorityDiv);

    // Finally, append the to-do item to the main list container
    toDoItemLi.appendChild(toDoItemDiv);
    this.toDosListDom.appendChild(toDoItemLi);
  }
}
