import { Injectable, signal } from '@angular/core';
import { tasks } from '../shared/data/tasks';
import { Task } from '../shared/models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  taskList = tasks;
  todos = signal<Task[]>(this.taskList);

  getAllTasks() {
    return this.todos;
  }

  addNewTask(taskName: string) {
    const newTaskObject = {
      id: this.taskList.length + 1,
      name: taskName,
      status: 'incomplete',
      checked: false,
    };

    this.taskList.push(newTaskObject);
  }
}
