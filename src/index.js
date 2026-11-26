import "./base.css";

function createFolder(title) {
    const folder = document.createElement("div");
    folder.classList.add("task-folder");
    const folderTitle = document.createElement("h2");
    folderTitle.innerText = title;

    folder.append(folderTitle);

    return folder;
}

function appendFolder(folder, title) {
    const taskTitle = document.createElement("p");
    taskTitle.innerText = "- " + title;
    folder.appendChild(taskTitle);
}

function createSideBar() {
    const header = document.createElement("header");
    const title = document.createElement("p");
    title.innerText = "Jack Boakes";
    header.appendChild(title);

    const addButton = document.createElement("button");
    addButton.innerText = "+ Add task";

    const folder = createFolder("Hobbies");
    appendFolder(folder, "Listen to Geese");
    appendFolder(folder, "Degrease the Steering Wheel");
    appendFolder(folder, "Clean the Musket");

    const today = createFolder("Today");
    appendFolder(today, "String Odysseus Bow");
    appendFolder(today, "Throw Party for Camel");
    appendFolder(today, "Make Paper Crane");

    const sideBar = document.createElement("div");
    sideBar.classList.add("side-bar");
    sideBar.append(header, addButton, today, folder);
    document.querySelector("#content").appendChild(sideBar);
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
    description.innerText = "Keep today simple. Check in with yourself and take a moment to manage your stress levels."

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

createSideBar();
createMainPanel();
createTaskView();