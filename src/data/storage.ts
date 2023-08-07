import {ITask} from "./types";

export class TaskStorage {
    tasks: ITask[] = [];

    constructor() {
        const savedTasks = localStorage.getItem('tasks')
        if (savedTasks) {
            this.tasks = JSON.parse(savedTasks);
        }
    }

    public updateTasks(tasks: ITask[]): ITask[] {
        this.tasks = tasks;
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
        return this.tasks;
    }

    public getTasks(): ITask[] {
        return this.tasks;
    }
}