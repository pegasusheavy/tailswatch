import { Component } from '@angular/core';
import { ScrollAnimateDirective, StaggerChildrenDirective } from '../../../directives';

@Component({
  selector: 'app-progress-section',
  standalone: true,
  imports: [ScrollAnimateDirective, StaggerChildrenDirective],
  templateUrl: './progress-section.component.html',
  styleUrl: './progress-section.component.scss'
})
export class ProgressSectionComponent {}
