import Display from "./display";
import ToDoApp from "./toDoApp";
import "./style.css";
//Get Data From Local Storage section logic here

let isNewUser = true;

let app = new ToDoApp();

let jsonfiletest = JSON.parse(`{
  "projectsList": [
    {
      "title": "default",
      "content": [
        {
          "id": "mfd0rgs226kh0bjdiza",
          "title": "Title",
          "description": "Example Desc",
          "dueDate": "2025-09-09T20:44:46.897Z",
          "isImportant": false,
          "done": false,
          "color": "#FFFFFF"
        },
        {
          "id": "mfd0rgs2tid50s4psh8",
          "title": "d",
          "description": "fsf",
          "isImportant": 2,
          "done": false,
          "color": "#FFFFFF"
        }
      ]
    },
    {
      "title": "hello",
      "content": [
        {
          "id": "mfd0rgs2gti7zi2ven",
          "title": "asas",
          "description": "asfas",
          "isImportant": 4,
          "done": false,
          "color": "#FFFFFF"
        }
      ]
    },
    { "title": "hell2o", "content": [] }
  ]
}
`);
let test = new ToDoApp(jsonfiletest);
test.saveJSON();

let test2 = new ToDoApp();
test2.loadJSON();
console.log(test2);

const domManger = new Display(test2);
