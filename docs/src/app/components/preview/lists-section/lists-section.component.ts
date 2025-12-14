import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScrollAnimateDirective, StaggerChildrenDirective } from '../../../directives';

@Component({
  selector: 'app-lists-section',
  standalone: true,
  imports: [ScrollAnimateDirective, StaggerChildrenDirective, FontAwesomeModule],
  templateUrl: './lists-section.component.html',
  styleUrl: './lists-section.component.scss'
})
export class ListsSectionComponent {}
