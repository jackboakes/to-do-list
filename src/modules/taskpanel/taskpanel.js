import "./taskpanel.css";
import { state } from "../state.js";

function createTask(task) {
    const taskTitle = document.createElement("h2");
    taskTitle.innerText = task.title;
    taskTitle.classList.add("task-panel-task-title");

    const newTask = document.createElement("div");
    newTask.classList.add("task-panel-task");
    newTask.appendChild(taskTitle);
    return newTask;
}

function createTaskPanel(task) {
    const title = document.createElement("h1");
    title.innerText = task.title;
    const description = document.createElement("p");
    description.innerText = task.description;

    const taskView = document.createElement("div");
    taskView.classList.add("task-panel");
    taskView.append(title, description);

    task.subTasks.forEach((subTask) =>{
        const newSubTask = createTask(subTask);
        taskView.appendChild(newSubTask);
    });

    document.querySelector(".main-panel").innerText = "";
    document.querySelector(".main-panel").appendChild(taskView);
}

export { createTaskPanel };