import { Component } from '@angular/core';
import { ScrollAnimateDirective, StaggerChildrenDirective } from '../../../directives';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-animations-section',
  standalone: true,
  imports: [ScrollAnimateDirective, StaggerChildrenDirective, FaIconComponent],
  templateUrl: './animations-section.component.html',
  styleUrl: './animations-section.component.scss'
})
export class AnimationsSectionComponent {}

