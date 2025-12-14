import { Component } from '@angular/core';
import { ScrollAnimateDirective, StaggerChildrenDirective } from '../../../directives';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-stats-section',
  standalone: true,
  imports: [ScrollAnimateDirective, StaggerChildrenDirective, FaIconComponent],
  templateUrl: './stats-section.component.html',
  styleUrl: './stats-section.component.scss'
})
export class StatsSectionComponent {}

