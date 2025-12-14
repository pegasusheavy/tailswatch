import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../../directives';

@Component({
  selector: 'app-spacing-section',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './spacing-section.component.html',
  styleUrl: './spacing-section.component.scss'
})
export class SpacingSectionComponent {
  spacingScale = [
    { name: '0', value: '0px' },
    { name: '0.5', value: '0.125rem (2px)' },
    { name: '1', value: '0.25rem (4px)' },
    { name: '2', value: '0.5rem (8px)' },
    { name: '3', value: '0.75rem (12px)' },
    { name: '4', value: '1rem (16px)' },
    { name: '5', value: '1.25rem (20px)' },
    { name: '6', value: '1.5rem (24px)' },
    { name: '8', value: '2rem (32px)' },
    { name: '10', value: '2.5rem (40px)' },
    { name: '12', value: '3rem (48px)' },
    { name: '16', value: '4rem (64px)' },
  ];
}

