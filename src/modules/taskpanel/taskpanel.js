import "./taskpanel.css";

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

function createTaskPanel() {
    const title = document.createElement("h1");
    title.innerText = "Listen to Geese";

    const description = document.createElement("p");
    description.innerText = "Keep today simple. Check in with yourself and take a moment to manage your stress."

    const taskView = document.createElement("div");
    taskView.classList.add("task-panel");
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

export { createTaskPanel };