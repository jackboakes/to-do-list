import "./sidebar.css";
import { state, SIDEBAR_FOLDER, SIDEBAR_TASK } from "../state.js";
import PubSub from 'pubsub-js';

function createTaskFolder(taskFolder) {
    const folderTitle = document.createElement("h2");
    folderTitle.innerText = taskFolder.title;
    folderTitle.classList.add("task-folder-title");

    const folder = document.createElement("div");
    folder.classList.add("task-folder");
    folder.dataset.id = taskFolder.id;

    folderTitle.addEventListener("click", e => {

    });

    folder.append(folderTitle);
    return folder;
}

function createTask(task) {
    const title = document.createElement("p");
    title.innerText = `- ${task.title}`;

    const sidebarTask = document.createElement("div");
    sidebarTask.classList.add("side-bar-task");
    sidebarTask.dataset.id = task.id;
    sidebarTask.addEventListener("click", e => {
        PubSub.publish(SIDEBAR_TASK, task);
    });

    sidebarTask.append(title);
    return sidebarTask;
}

function createSideBar() {
    const header = document.createElement("header");
    const title = document.createElement("p");
    title.classList.add("side-bar-title");
    title.innerText = "Jack Boakes";
    header.appendChild(title);

    const addButton = document.createElement("button");
    addButton.innerText = "+ Add task folder";

    const sideBar = document.createElement("div");
    sideBar.classList.add("side-bar");
    sideBar.append(header, addButton);

    state.taskFolders.forEach((folder) => {
        const taskFolder = createTaskFolder(folder);
        folder.tasks.forEach((task) => {
            taskFolder.appendChild(createTask(task));
        });
        sideBar.appendChild(taskFolder);
    });

    document.querySelector("#content").appendChild(sideBar);
}

export { createSideBar };