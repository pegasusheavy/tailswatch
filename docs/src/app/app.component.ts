import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { ThemeSelectorComponent } from './components/theme-selector/theme-selector.component';
import { ThemeService } from './services/theme.service';
import { IconLibraryService } from './services/icon-library.service';

const FULL_PAGE_ROUTES = ['/dashboard', '/ecommerce', '/portfolio', '/forum', '/saas'];

/**
 * True when the given pathname is one of the full-page demo routes.
 * Matched by suffix so it works under any base href (e.g. /tailswatch/).
 */
export function isFullPageRoute(pathname: string): boolean {
  const normalized = pathname.replace(/\/$/, '');
  return FULL_PAGE_ROUTES.some((route) => normalized.endsWith(route));
}

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
  private readonly faLibrary = inject(FaIconLibrary);

  // Initialize icon library on app startup
  private readonly iconLibrary = inject(IconLibraryService);

  // Icons used only by the full-page demo routes live in a lazy chunk
  // (services/page-icons.ts) so their SVG data stays out of main.js. The
  // router outlets wait on this flag so those routes never render before
  // their icons are registered.
  readonly pageIconsReady = signal(false);

  // True when the app was loaded directly on a full-page demo route, in which
  // case the initial outlet activation must also wait for the page icons.
  readonly startedOnFullPageRoute =
    typeof window !== 'undefined' && isFullPageRoute(window.location.pathname);

  constructor() {
    import('./services/page-icons')
      .then(({ registerPageIcons }) => {
        registerPageIcons(this.faLibrary);
        this.pageIconsReady.set(true);
      })
      .catch((err) => {
        console.error('page-icons chunk failed to load', err);
        this.pageIconsReady.set(true);
      });
  }

  get isFullPageLayout(): boolean {
    return FULL_PAGE_ROUTES.includes(this.router.url);
  }
}
