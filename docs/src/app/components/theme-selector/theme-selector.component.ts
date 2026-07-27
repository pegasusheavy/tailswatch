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

  onSelectFocus(): void {
    const themes = this.themeService.themes;
    const index = themes.findIndex(t => t.id === this.themeService.currentThemeId());
    for (let offset = -3; offset <= 3; offset++) {
      const theme = themes[index + offset];
      if (theme && offset !== 0) {
        this.themeService.prefetchTheme(theme.id);
      }
    }
  }
}
