import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScrollAnimateDirective } from '../../../directives';

@Component({
  selector: 'app-forms-section',
  standalone: true,
  imports: [ScrollAnimateDirective, FontAwesomeModule],
  templateUrl: './forms-section.component.html',
  styleUrl: './forms-section.component.scss'
})
export class FormsSectionComponent {}
