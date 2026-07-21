import { Component } from '@angular/core';
import { Teaser } from '../shared/components/teaser/teaser';
import { Button } from '../shared/components/button/button';

@Component({
  selector: 'app-new-task-component',
  imports: [Teaser, Button],
  templateUrl: './new-task-component.html',
  styleUrl: './new-task-component.css',
})
export class NewTaskComponent {}
