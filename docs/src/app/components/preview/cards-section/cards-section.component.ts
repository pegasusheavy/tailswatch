import { Component } from '@angular/core';
import { ScrollAnimateDirective, StaggerChildrenDirective } from '../../../directives';

@Component({
  selector: 'app-cards-section',
  standalone: true,
  imports: [ScrollAnimateDirective, StaggerChildrenDirective],
  templateUrl: './cards-section.component.html',
  styleUrl: './cards-section.component.scss'
})
export class CardsSectionComponent {}
