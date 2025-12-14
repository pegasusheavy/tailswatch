import { Component, inject } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { ThemeSelectorComponent } from './components/theme-selector/theme-selector.component';
import { ThemeService } from './services/theme.service';
import { IconLibraryService } from './services/icon-library.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ThemeSelectorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly themeService = inject(ThemeService);
  private readonly router = inject(Router);

  // Initialize icon library on app startup
  private readonly iconLibrary = inject(IconLibraryService);

  get isFullPageLayout(): boolean {
    const fullPageRoutes = ['/dashboard', '/ecommerce', '/portfolio', '/forum', '/saas'];
    return fullPageRoutes.includes(this.router.url);
  }
}
