import { Component } from '@angular/core';
import { ScrollAnimateDirective, StaggerChildrenDirective } from '../../../directives';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-tooltips-section',
  standalone: true,
  imports: [ScrollAnimateDirective, StaggerChildrenDirective, FaIconComponent],
  templateUrl: './tooltips-section.component.html',
  styleUrl: './tooltips-section.component.scss'
})
export class TooltipsSectionComponent {}

