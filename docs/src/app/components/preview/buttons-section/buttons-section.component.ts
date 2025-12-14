import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScrollAnimateDirective, StaggerChildrenDirective } from '../../../directives';

@Component({
  selector: 'app-buttons-section',
  standalone: true,
  imports: [ScrollAnimateDirective, StaggerChildrenDirective, FontAwesomeModule],
  templateUrl: './buttons-section.component.html',
  styleUrl: './buttons-section.component.scss'
})
export class ButtonsSectionComponent {}
