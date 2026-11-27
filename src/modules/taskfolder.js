class SubTaskItem {
    title;
    constructor(title) {
        this.id = crypto.randomUUID();
    }
}

class SubTask {
    title;
    checked = false;
    constructor(title) {
        this.id = crypto.randomUUID();
    }
}

class Task {
    title;
    description;
    subTasks = [];
    constructor(title, description) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
    }
}

class TaskFolder {
    tasks = [];
    title;
    constructor(title) {
        this.id = crypto.randomUUID();
        this.title = title;
    }

    addTask(title, description) {
        const task = new Task(title, description);
        this.tasks.push(task);
    }
}




export { TaskFolder };