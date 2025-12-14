import { Injectable, signal, computed } from '@angular/core';

export interface ThemeInfo {
  id: string;
  name: string;
  description: string;
  isDark: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly STORAGE_KEY = 'tailswatch-theme';
  private readonly THEME_LINK_ID = 'tailswatch-theme-link';

  /** Available themes - Bootswatch-inspired + custom themes */
  readonly themes: ThemeInfo[] = [
    // Default
    { id: 'default', name: 'Default', description: 'Generic Tailwind CSS with no customization', isDark: false },

    // Bootswatch themes (alphabetical)
    { id: 'cerulean', name: 'Cerulean', description: 'A calm blue sky theme', isDark: false },
    { id: 'cosmo', name: 'Cosmo', description: 'An ode to Metro with vibrant blue', isDark: false },
    { id: 'cyborg', name: 'Cyborg', description: 'Jet black with electric cyan accents', isDark: true },
    { id: 'darkly', name: 'Darkly', description: 'Dark mode version of Flatly', isDark: true },
    { id: 'flatly', name: 'Flatly', description: 'Flat theme with teal accents', isDark: false },
    { id: 'journal', name: 'Journal', description: 'Crisp like a new sheet of paper', isDark: false },
    { id: 'litera', name: 'Litera', description: 'The medium is the message', isDark: false },
    { id: 'lumen', name: 'Lumen', description: 'Light and shadow', isDark: false },
    { id: 'lux', name: 'Lux', description: 'A touch of class', isDark: false },
    { id: 'materia', name: 'Materia', description: 'Material design inspired', isDark: false },
    { id: 'minty', name: 'Minty', description: 'A fresh feel', isDark: false },
    { id: 'morph', name: 'Morph', description: 'Soft neumorphism', isDark: false },
    { id: 'pulse', name: 'Pulse', description: 'A trace of purple', isDark: false },
    { id: 'quartz', name: 'Quartz', description: 'Glassmorphism aesthetic', isDark: true },
    { id: 'sandstone', name: 'Sandstone', description: 'A touch of warmth', isDark: false },
    { id: 'simplex', name: 'Simplex', description: 'Mini and minimalist', isDark: false },
    { id: 'sketchy', name: 'Sketchy', description: 'A hand-drawn look', isDark: false },
    { id: 'slate', name: 'Slate', description: 'Shades of gunmetal gray', isDark: true },
    { id: 'solar', name: 'Solar', description: 'A spin on Solarized', isDark: true },
    { id: 'spacelab', name: 'Spacelab', description: 'Silvery and sleek', isDark: false },
    { id: 'superhero', name: 'Superhero', description: 'The brave and the blue', isDark: true },
    { id: 'united', name: 'United', description: 'Ubuntu orange and unique font', isDark: false },
    { id: 'vapor', name: 'Vapor', description: 'Vaporwave aesthetic', isDark: true },
    { id: 'yeti', name: 'Yeti', description: 'A friendly foundation', isDark: false },
    { id: 'zephyr', name: 'Zephyr', description: 'Breezy and bright', isDark: false },

    // Custom programming-inspired themes
    { id: 'evergreen', name: 'Evergreen', description: 'Node.js-inspired dark theme', isDark: true },
    { id: 'gopher', name: 'Gopher', description: 'Go-inspired bright theme with cyan', isDark: false },
    { id: 'kernel', name: 'Kernel', description: 'C/C++ inspired battle-tested classic', isDark: true },
    { id: 'oxide', name: 'Oxide', description: 'Rust-inspired dark theme with orange', isDark: true },

    // Material Design themes
    { id: 'material-light-blue', name: 'Material Light Blue', description: 'Material Design with Blue primary', isDark: false },
    { id: 'material-dark-blue', name: 'Material Dark Blue', description: 'Dark Material with Blue primary', isDark: true },
    { id: 'material-light-indigo', name: 'Material Light Indigo', description: 'Material Design with Indigo primary', isDark: false },
    { id: 'material-dark-indigo', name: 'Material Dark Indigo', description: 'Dark Material with Indigo primary', isDark: true },
    { id: 'material-light-purple', name: 'Material Light Purple', description: 'Material Design with Purple primary', isDark: false },
    { id: 'material-dark-purple', name: 'Material Dark Purple', description: 'Dark Material with Purple primary', isDark: true },
    { id: 'material-light-teal', name: 'Material Light Teal', description: 'Material Design with Teal primary', isDark: false },
    { id: 'material-dark-teal', name: 'Material Dark Teal', description: 'Dark Material with Teal primary', isDark: true },
    { id: 'material-light-green', name: 'Material Light Green', description: 'Material Design with Green primary', isDark: false },
    { id: 'material-dark-green', name: 'Material Dark Green', description: 'Dark Material with Green primary', isDark: true },
    { id: 'material-light-deeporange', name: 'Material Light Deep Orange', description: 'Material Design with Deep Orange primary', isDark: false },
    { id: 'material-dark-deeporange', name: 'Material Dark Deep Orange', description: 'Dark Material with Deep Orange primary', isDark: true },
  ];

  /** Currently active theme ID */
  readonly currentThemeId = signal<string>(this.loadSavedTheme());

  /** Currently active theme info (computed for reactivity) */
  readonly currentTheme = computed<ThemeInfo>(() => {
    const id = this.currentThemeId();
    return this.themes.find(t => t.id === id) ?? this.themes[0];
  });

  constructor() {
    // Load the saved theme on startup
    this.loadTheme(this.currentThemeId());
  }

  /**
   * Switch to a different theme by ID
   */
  setTheme(themeId: string): void {
    const theme = this.themes.find(t => t.id === themeId);
    if (!theme) {
      console.warn(`Theme "${themeId}" not found`);
      return;
    }

    this.currentThemeId.set(themeId);
    this.loadTheme(themeId);
    this.saveTheme(themeId);
  }

  /**
   * Dynamically load a theme CSS file
   */
  private loadTheme(themeId: string): void {
    // Skip if running on server (SSR)
    if (typeof document === 'undefined') return;

    // Remove existing theme link if present
    const existingLink = document.getElementById(this.THEME_LINK_ID);
    if (existingLink) {
      existingLink.remove();
    }

    // Don't add a link for default theme (it's already injected)
    if (themeId === 'default') {
      this.updateColorScheme(themeId);
      return;
    }

    // Create new link element for the theme
    const link = document.createElement('link');
    link.id = this.THEME_LINK_ID;
    link.rel = 'stylesheet';
    link.href = `${themeId}.css`;

    // Add to head
    document.head.appendChild(link);

    // Update color-scheme
    this.updateColorScheme(themeId);
  }

  private updateColorScheme(themeId: string): void {
    const theme = this.themes.find(t => t.id === themeId);
    if (theme && typeof document !== 'undefined') {
      document.documentElement.style.colorScheme = theme.isDark ? 'dark' : 'light';
    }
  }

  private loadSavedTheme(): string {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      // Validate saved theme exists
      if (saved && this.themes.some(t => t.id === saved)) {
        return saved;
      }
    }
    return 'default';
  }

  private saveTheme(themeId: string): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.STORAGE_KEY, themeId);
    }
  }
}
