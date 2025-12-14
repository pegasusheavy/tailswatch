import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../../directives';

@Component({
  selector: 'app-grid-section',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './grid-section.component.html',
  styleUrl: './grid-section.component.scss'
})
export class GridSectionComponent {}

