import "./taskpanel.css";
import { default as state } from "../state.js";

function createTask(task) {
    const taskTitle = document.createElement("h2");
    taskTitle.innerText = task.title;
    taskTitle.classList.add("task-panel-task-title");

    const newTask = document.createElement("div");
    newTask.classList.add("task-panel-task");
    newTask.appendChild(taskTitle);
    return newTask;
}

function createTaskPanel() {
    const title = document.createElement("h1");
    const description = document.createElement("p");

    state.taskFolders.forEach((folder) => {
        folder.tasks.forEach((task) => {
            if(task.title === "String Odysseus Bow") {
                title.innerText = task.title;
                description.innerText = task.description;
            }
        })
    });

    const taskView = document.createElement("div");
    taskView.classList.add("task-panel");
    taskView.append(title, description);

    state.taskFolders.forEach((folder) => {
        folder.tasks.forEach((task) => {
            if(task.title === "String Odysseus Bow") {
                task.subTasks.forEach((subTask) =>{
                    const newSubTask = createTask(subTask);
                    taskView.appendChild(newSubTask);
                });
            }
        });
    });
    
    document.querySelector(".main-panel").appendChild(taskView);
}

export { createTaskPanel };