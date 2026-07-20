import { Component } from '@angular/core';
import { Teaser } from '../shared/components/teaser/teaser';

@Component({
  selector: 'app-header-component',
  imports: [Teaser],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
})
export class HeaderComponent {}
