import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-selector',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './theme-selector.component.html',
  styleUrl: './theme-selector.component.scss'
})
export class ThemeSelectorComponent {
  readonly themeService = inject(ThemeService);

  onThemeChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.themeService.setTheme(select.value);
  }
}
