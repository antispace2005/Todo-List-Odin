export default class Display {
  constructor(todoApp) {
    this.shownProject = "default";
    this.todoApp = todoApp;
    this.projectsListContainer = document.getElementById("projectsList");
    this.toDosListDom = document.getElementById("toDosList");

    this.projectsList = document.createElement("ol");
    this.projectsListContainer.appendChild(this.projectsList);

    this.updateNavBarProjects();

    this.showToDosOfProject("default");
  }

  #projectClick(projectTitle) {
    this.showToDosOfProject(projectTitle);
    this.shownProject = projectTitle;
    this.updateNavBarProjects();
  }

  updateNavBarProjects() {
    this.projectsList.innerHTML = "";
    for (const projectTitle of this.todoApp.getProjectsNames()) {
      let projectTitleElement = document.createElement("li");
      projectTitleElement.innerText = projectTitle;
      this.projectsList.appendChild(projectTitleElement);
      if (projectTitle == this.shownProject) {
        projectTitleElement.style["filter"] = "brightness(90%)";
      }
      projectTitleElement.addEventListener("click", () => {
        this.#projectClick(projectTitle);
      });
    }
  }
  showToDosOfProject(projectName) {
    this.toDosListDom.innerHTML = "";
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
    const id = toDo.id;
    const done = toDo.done;
    // Create container for the to-do item
    const toDoItemLi = document.createElement("li");
    const toDoItemDiv = document.createElement("div");

    toDoItemDiv.classList.add("toDoItem");
    toDoItemLi.classList.add("toDoLi");
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

    priorityDiv.classList.add("toDoPriority");
    priorityDiv.textContent = `Priority: ${priority}`;

    //Done
    const checkboxContainer = document.createElement("div"); // Wrapper div

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = done;
    checkbox.id = "taskCheckbox"; // Unique ID

    const label = document.createElement("label");
    label.textContent = "Done: "; // This is the visible text
    label.htmlFor = "taskCheckbox"; // Links label to checkbox

    // Append label and checkbox to the container
    checkboxContainer.appendChild(label);
    checkboxContainer.appendChild(checkbox);

    checkbox.addEventListener("change", () => {
      this.todoApp.switchToDo(id);
      this.#projectClick(this.shownProject);
    });
    // Append all elements to the container
    toDoItemDiv.appendChild(titleDiv);
    toDoItemDiv.appendChild(descriptionDiv);
    toDoItemDiv.appendChild(dueDateDiv);
    toDoItemDiv.appendChild(priorityDiv);
    toDoItemDiv.appendChild(checkboxContainer);

    // Finally, append the to-do item to the main list container
    toDoItemLi.appendChild(toDoItemDiv);
    this.toDosListDom.appendChild(toDoItemLi);
  }
}
