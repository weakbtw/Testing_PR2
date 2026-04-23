class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        if (task.trim() === '') {
            return false;
        }
        this.tasks.push(task);
        return true;
    }

    deleteTask(index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks.splice(index, 1);
            return true;
        }
        return false;
    }

    getTaskCount() {
        return this.tasks.length;
    }
}

module.exports = TodoList;
