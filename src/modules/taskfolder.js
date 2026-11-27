class SubTaskItem {
    title;
    constructor(title) {
        this.id = crypto.randomUUID();
        this.title = title;
    }
}

class SubTask {
    title;
    checked = false;
    constructor(title) {
        this.id = crypto.randomUUID();
        this.title = title;
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

    addSubTask(title) {
        const subTask = new SubTask(title);
        this.subTasks.push(subTask);
        return subTask;
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
        return task;
    }
}




export { TaskFolder };