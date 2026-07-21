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
}
