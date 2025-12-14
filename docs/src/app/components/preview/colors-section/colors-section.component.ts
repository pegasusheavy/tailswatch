import { Component } from '@angular/core';
import { ScrollAnimateDirective, StaggerChildrenDirective } from '../../../directives';

@Component({
  selector: 'app-colors-section',
  standalone: true,
  imports: [ScrollAnimateDirective, StaggerChildrenDirective],
  templateUrl: './colors-section.component.html',
  styleUrl: './colors-section.component.scss'
})
export class ColorsSectionComponent {
  readonly colorShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
}
