import { Component } from '@angular/core';
import { ScrollAnimateDirective, StaggerChildrenDirective } from '../../../directives';

@Component({
  selector: 'app-borders-section',
  standalone: true,
  imports: [ScrollAnimateDirective, StaggerChildrenDirective],
  templateUrl: './borders-section.component.html',
  styleUrl: './borders-section.component.scss'
})
export class BordersSectionComponent {}

