import "./sidebar.css";
import { default as state } from "../state.js";

function createTaskFolder(taskFolder) {
    const folderTitle = document.createElement("p");
    folderTitle.innerText = taskFolder.title;

    const folder = document.createElement("div");
    folder.classList.add("task-folder");
    folder.append(folderTitle);
    return folder;
}

function createTask(task) {
    const title = document.createElement("p");
    title.innerText = `- ${task.title}`;

    return title;
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