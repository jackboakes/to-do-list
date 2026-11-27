import "./base.css";

import { default as state } from "./modules/state.js";
import { TaskFolder } from "./modules/taskfolder.js";
import { createSideBar } from "./modules/sidebar/sidebar.js";
import { createMainPanel } from "./modules/mainpanel/mainpanel.js";
import { createTaskPanel } from "./modules/taskpanel/taskpanel.js";

function initialise() {
    const today = new TaskFolder("Today");
    today.addTask("Partake in the day", "Keep today simple. Check in with yourself and take a moment to manage your stress.");

    const stringBow = today.addTask("String Odysseus Bow", "String the bow to win back your wife Penelope.");
    stringBow.addSubTask("Take the bow into your hands");
    stringBow.addSubTask("Inspect and prepare the bow");
    stringBow.addSubTask("Bend the bow with ease");
    stringBow.addSubTask("String the bow successfully");
    stringBow.addSubTask("Draw the bowstring back");

    today.addTask("Make Paper Crane", "");
    today.addTask("Throw Party for Camel", "");
    state.taskFolders.push(today);

    const hobbies = new TaskFolder("Hobbies");
    hobbies.addTask("Listen to Geese", "");
    hobbies.addTask("Degrease the Steering Wheel", "");
    hobbies.addTask("Clean Musket", "");
    state.taskFolders.push(hobbies);
}

initialise();
createSideBar();
createMainPanel();
createTaskPanel();