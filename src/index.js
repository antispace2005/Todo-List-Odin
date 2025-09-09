import ToDo from "./toDo";
import Project from "./projects";
let projectsList = [];

//Get Data From Local Storage section logic here

let isNewUser = true;

//initialize new User
const init = (function () {
  if (isNewUser) {
    projectsList.push(new Project("default"));
    projectsList[0].addToList(
      new ToDo("Title", "Example Desc", new Date(2025, 1, 1), false)
    );
  }
})();

console.log(projectsList);
