import { Injectable, signal, computed } from '@angular/core';

export type ThemeCategory =
  | 'Base'
  | 'Bootswatch'
  | 'Material Design'
  | 'Programming'
  | 'Cloud Providers';

export interface ThemeInfo {
  id: string;
  name: string;
  description: string;
  isDark: boolean;
  category: ThemeCategory;
}

export interface ThemeGroup {
  category: ThemeCategory;
  themes: ThemeInfo[];
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly STORAGE_KEY = 'tailswatch-theme';
  private readonly THEME_LINK_ID = 'tailswatch-theme-link';

  /** Available themes - organized by category */
  readonly themes: ThemeInfo[] = [
    // Base themes
    { id: 'default', name: 'Default', description: 'Generic Tailwind CSS with no customization', isDark: false, category: 'Base' },

    // Bootswatch themes (alphabetical)
    { id: 'cerulean', name: 'Cerulean', description: 'A calm blue sky theme', isDark: false, category: 'Bootswatch' },
    { id: 'cosmo', name: 'Cosmo', description: 'An ode to Metro with vibrant blue', isDark: false, category: 'Bootswatch' },
    { id: 'cyborg', name: 'Cyborg', description: 'Jet black with electric cyan accents', isDark: true, category: 'Bootswatch' },
    { id: 'darkly', name: 'Darkly', description: 'Dark mode version of Flatly', isDark: true, category: 'Bootswatch' },
    { id: 'flatly', name: 'Flatly', description: 'Flat theme with teal accents', isDark: false, category: 'Bootswatch' },
    { id: 'journal', name: 'Journal', description: 'Crisp like a new sheet of paper', isDark: false, category: 'Bootswatch' },
    { id: 'litera', name: 'Litera', description: 'The medium is the message', isDark: false, category: 'Bootswatch' },
    { id: 'lumen', name: 'Lumen', description: 'Light and shadow', isDark: false, category: 'Bootswatch' },
    { id: 'lux', name: 'Lux', description: 'A touch of class', isDark: false, category: 'Bootswatch' },
    { id: 'materia', name: 'Materia', description: 'Material design inspired', isDark: false, category: 'Bootswatch' },
    { id: 'minty', name: 'Minty', description: 'A fresh feel', isDark: false, category: 'Bootswatch' },
    { id: 'morph', name: 'Morph', description: 'Soft neumorphism', isDark: false, category: 'Bootswatch' },
    { id: 'pulse', name: 'Pulse', description: 'A trace of purple', isDark: false, category: 'Bootswatch' },
    { id: 'quartz', name: 'Quartz', description: 'Glassmorphism aesthetic', isDark: true, category: 'Bootswatch' },
    { id: 'sandstone', name: 'Sandstone', description: 'A touch of warmth', isDark: false, category: 'Bootswatch' },
    { id: 'simplex', name: 'Simplex', description: 'Mini and minimalist', isDark: false, category: 'Bootswatch' },
    { id: 'sketchy', name: 'Sketchy', description: 'A hand-drawn look', isDark: false, category: 'Bootswatch' },
    { id: 'slate', name: 'Slate', description: 'Shades of gunmetal gray', isDark: true, category: 'Bootswatch' },
    { id: 'solar', name: 'Solar', description: 'A spin on Solarized', isDark: true, category: 'Bootswatch' },
    { id: 'spacelab', name: 'Spacelab', description: 'Silvery and sleek', isDark: false, category: 'Bootswatch' },
    { id: 'superhero', name: 'Superhero', description: 'The brave and the blue', isDark: true, category: 'Bootswatch' },
    { id: 'united', name: 'United', description: 'Ubuntu orange and unique font', isDark: false, category: 'Bootswatch' },
    { id: 'vapor', name: 'Vapor', description: 'Vaporwave aesthetic', isDark: true, category: 'Bootswatch' },
    { id: 'yeti', name: 'Yeti', description: 'A friendly foundation', isDark: false, category: 'Bootswatch' },
    { id: 'zephyr', name: 'Zephyr', description: 'Breezy and bright', isDark: false, category: 'Bootswatch' },

    // Material Design themes
    { id: 'material-light-blue', name: 'Material Light Blue', description: 'Material Design with Blue primary', isDark: false, category: 'Material Design' },
    { id: 'material-dark-blue', name: 'Material Dark Blue', description: 'Dark Material with Blue primary', isDark: true, category: 'Material Design' },
    { id: 'material-light-indigo', name: 'Material Light Indigo', description: 'Material Design with Indigo primary', isDark: false, category: 'Material Design' },
    { id: 'material-dark-indigo', name: 'Material Dark Indigo', description: 'Dark Material with Indigo primary', isDark: true, category: 'Material Design' },
    { id: 'material-light-purple', name: 'Material Light Purple', description: 'Material Design with Purple primary', isDark: false, category: 'Material Design' },
    { id: 'material-dark-purple', name: 'Material Dark Purple', description: 'Dark Material with Purple primary', isDark: true, category: 'Material Design' },
    { id: 'material-light-teal', name: 'Material Light Teal', description: 'Material Design with Teal primary', isDark: false, category: 'Material Design' },
    { id: 'material-dark-teal', name: 'Material Dark Teal', description: 'Dark Material with Teal primary', isDark: true, category: 'Material Design' },
    { id: 'material-light-green', name: 'Material Light Green', description: 'Material Design with Green primary', isDark: false, category: 'Material Design' },
    { id: 'material-dark-green', name: 'Material Dark Green', description: 'Dark Material with Green primary', isDark: true, category: 'Material Design' },
    { id: 'material-light-deeporange', name: 'Material Light Deep Orange', description: 'Material Design with Deep Orange primary', isDark: false, category: 'Material Design' },
    { id: 'material-dark-deeporange', name: 'Material Dark Deep Orange', description: 'Dark Material with Deep Orange primary', isDark: true, category: 'Material Design' },

    // Programming language-inspired themes
    { id: 'csharp', name: 'C#', description: 'C# / .NET / Visual Studio purple theme', isDark: false, category: 'Programming' },
    { id: 'evergreen', name: 'Evergreen', description: 'Node.js-inspired dark theme', isDark: true, category: 'Programming' },
    { id: 'gopher', name: 'Gopher', description: 'Go-inspired bright theme with cyan', isDark: false, category: 'Programming' },
    { id: 'java', name: 'Java', description: 'Java red-orange and blue theme', isDark: false, category: 'Programming' },
    { id: 'kernel', name: 'Kernel', description: 'C/C++ inspired battle-tested classic', isDark: true, category: 'Programming' },
    { id: 'kotlin', name: 'Kotlin', description: 'Kotlin / JetBrains orange-to-purple theme', isDark: false, category: 'Programming' },
    { id: 'oxide', name: 'Oxide', description: 'Rust-inspired dark theme with orange', isDark: true, category: 'Programming' },
    { id: 'python', name: 'Python', description: 'Python blue and yellow theme', isDark: false, category: 'Programming' },
    { id: 'typescript', name: 'TypeScript', description: 'TypeScript blue theme', isDark: false, category: 'Programming' },
    { id: 'zig', name: 'Zig', description: 'Zig golden orange theme', isDark: false, category: 'Programming' },

    // Cloud Provider themes
    { id: 'aws', name: 'AWS', description: 'Amazon Web Services orange and squid ink', isDark: false, category: 'Cloud Providers' },
    { id: 'azure', name: 'Azure', description: 'Microsoft Azure professional blue', isDark: false, category: 'Cloud Providers' },
    { id: 'gcloud', name: 'Google Cloud', description: 'Google Cloud Platform multi-color palette', isDark: false, category: 'Cloud Providers' },
    { id: 'firebase', name: 'Firebase', description: 'Google Firebase yellow and orange', isDark: false, category: 'Cloud Providers' },
    { id: 'vercel', name: 'Vercel', description: 'Vercel minimalist black and white', isDark: false, category: 'Cloud Providers' },
    { id: 'digitalocean', name: 'DigitalOcean', description: 'DigitalOcean ocean blue and teal', isDark: false, category: 'Cloud Providers' },
    { id: 'cloudflare', name: 'Cloudflare', description: 'Cloudflare orange and blue', isDark: false, category: 'Cloud Providers' },
    { id: 'netlify', name: 'Netlify', description: 'Netlify teal and dark accents', isDark: false, category: 'Cloud Providers' },
    { id: 'heroku', name: 'Heroku', description: 'Heroku classic purple', isDark: false, category: 'Cloud Providers' },
  ];

  /** Themes grouped by category */
  readonly themesByCategory = computed<ThemeGroup[]>(() => {
    const categories: ThemeCategory[] = ['Base', 'Bootswatch', 'Material Design', 'Programming', 'Cloud Providers'];
    return categories.map(category => ({
      category,
      themes: this.themes.filter(t => t.category === category)
    })).filter(group => group.themes.length > 0);
  });

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
