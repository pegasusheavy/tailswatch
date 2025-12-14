import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../../directives';

@Component({
  selector: 'app-typography-section',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './typography-section.component.html',
  styleUrl: './typography-section.component.scss'
})
export class TypographySectionComponent {}
