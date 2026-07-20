import { Component } from '@angular/core';
import { Teaser } from '../components/teaser/teaser';
import { Task } from './task/task';

@Component({
  selector: 'app-task-list-component',
  imports: [Teaser, Task],
  templateUrl: './task-list-component.html',
  styleUrl: './task-list-component.css',
})
export class TaskListComponent {}
