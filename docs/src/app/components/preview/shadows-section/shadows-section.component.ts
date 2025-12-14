import { Component } from '@angular/core';
import { ScrollAnimateDirective, StaggerChildrenDirective } from '../../../directives';

@Component({
  selector: 'app-shadows-section',
  standalone: true,
  imports: [ScrollAnimateDirective, StaggerChildrenDirective],
  templateUrl: './shadows-section.component.html',
  styleUrl: './shadows-section.component.scss'
})
export class ShadowsSectionComponent {}

