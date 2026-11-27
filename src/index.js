import "./base.css";

import { default as state } from "./modules/state.js";
import { TaskFolder } from "./modules/taskfolder.js";
import { createSideBar } from "./modules/sidebar.js";

function initialise() {
    const today = new TaskFolder("Today");
    today.addTask("Partake in the day", "Keep today simple. Check in with yourself and take a moment to manage your stress.");
    today.addTask("String Odysseus Bow", "");
    today.addTask("Make Paper Crane", "");
    today.addTask("Throw Party for Camel", "");
    state.taskFolders.push(today);

    const hobbies = new TaskFolder("Hobbies");
    hobbies.addTask("Listen to Geese", "");
    hobbies.addTask("Degrease the Steering Wheel", "");
    hobbies.addTask("Clean Musket", "");
    state.taskFolders.push(hobbies);
}

function createMainPanel() {
    const mainPanel = document.createElement("div");
    mainPanel.classList.add("main-panel");

    document.querySelector("#content").appendChild(mainPanel);
}

function createSubTask(title) {
    const subTaskTitle = document.createElement("h2");
    subTaskTitle.innerText = title;

    const subTask = document.createElement("div");
    subTask.classList.add("sub-task");
    subTask.appendChild(subTaskTitle);
    return subTask;
}

function appendSubTaskItem(subTask, title) {
    const item = document.createElement("p");
    item.innerText = "- " + title;

    subTask.appendChild(item);
}

function createTaskView() {
    const title = document.createElement("h1");
    title.innerText = "Listen to Geese";

    const description = document.createElement("p");
    description.innerText = "Keep today simple. Check in with yourself and take a moment to manage your stress."

    const taskView = document.createElement("div");
    taskView.classList.add("task-view");
    taskView.append(title, description);

    const stringBow = createSubTask("String Odysseus Bow");
    taskView.appendChild(stringBow);
    appendSubTaskItem(stringBow, "Take the bow into your hands");
    appendSubTaskItem(stringBow, "Inspect and prepare the bow");
    appendSubTaskItem(stringBow, "Bend the bow with ease");
    appendSubTaskItem(stringBow, "String the bow successfully");
    appendSubTaskItem(stringBow, "Draw the bowstring back");

    document.querySelector(".main-panel").appendChild(taskView);
}

initialise();
createSideBar();
createMainPanel();
createTaskView();