import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../../directives';

@Component({
  selector: 'app-tables-section',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './tables-section.component.html',
  styleUrl: './tables-section.component.scss'
})
export class TablesSectionComponent {}
