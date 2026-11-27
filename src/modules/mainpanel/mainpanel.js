import "./mainpanel.css";

function createMainPanel() {
    const mainPanel = document.createElement("div");
    mainPanel.classList.add("main-panel");

    document.querySelector("#content").appendChild(mainPanel);
}

export { createMainPanel };