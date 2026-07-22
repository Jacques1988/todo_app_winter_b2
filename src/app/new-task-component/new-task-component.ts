import {
  Component,
  ElementRef,
  viewChild,
  effect,
  inject,
} from '@angular/core';
import { Teaser } from '../shared/components/teaser/teaser';
import { Button } from '../shared/components/button/button';
import { TaskService } from '../services/task-service';

@Component({
  selector: 'app-new-task-component',
  imports: [Teaser, Button],
  templateUrl: './new-task-component.html',
  styleUrl: './new-task-component.css',
})
export class NewTaskComponent {
  taskService = inject(TaskService);
  newTaskInputField = viewChild<ElementRef<HTMLInputElement>>('newTaskInput');

  addNewTask() {
    const newTaskName = this.newTaskInputField()!.nativeElement.value;
    this.taskService.addNewTask(newTaskName);
    this.newTaskInputField()!.nativeElement.value = '';
  }
}
