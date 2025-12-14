import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScrollAnimateDirective } from '../../../directives';

@Component({
  selector: 'app-navigation-section',
  standalone: true,
  imports: [ScrollAnimateDirective, FontAwesomeModule],
  templateUrl: './navigation-section.component.html',
  styleUrl: './navigation-section.component.scss'
})
export class NavigationSectionComponent {}
