import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';
import { ScrollAnimateDirective } from '../../../directives';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  readonly themeService = inject(ThemeService);
}
