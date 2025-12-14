import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScrollAnimateDirective, StaggerChildrenDirective } from '../../../directives';

@Component({
  selector: 'app-alerts-section',
  standalone: true,
  imports: [ScrollAnimateDirective, StaggerChildrenDirective, FontAwesomeModule],
  templateUrl: './alerts-section.component.html',
  styleUrl: './alerts-section.component.scss'
})
export class AlertsSectionComponent {}
