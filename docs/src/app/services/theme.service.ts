import { Injectable, signal, computed } from '@angular/core';

export type ThemeCategory =
  | 'Base'
  | 'Bootswatch'
  | 'Material Design'
  | 'Programming'
  | 'Cloud Providers'
  | 'NFL'
  | 'NBA'
  | 'Motorsports';

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
    { id: 'javascript', name: 'JavaScript', description: 'JavaScript yellow theme', isDark: false, category: 'Programming' },
    { id: 'kernel', name: 'Kernel', description: 'C/C++ inspired battle-tested classic', isDark: true, category: 'Programming' },
    { id: 'kotlin', name: 'Kotlin', description: 'Kotlin / JetBrains orange-to-purple theme', isDark: false, category: 'Programming' },
    { id: 'oxide', name: 'Oxide', description: 'Rust-inspired dark theme with orange', isDark: true, category: 'Programming' },
    { id: 'python', name: 'Python', description: 'Python blue and yellow theme', isDark: false, category: 'Programming' },
    { id: 'typescript', name: 'TypeScript', description: 'TypeScript blue theme', isDark: false, category: 'Programming' },
    { id: 'wasm', name: 'WebAssembly', description: 'WebAssembly purple theme', isDark: false, category: 'Programming' },
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

    // NFL Team themes - AFC East
    { id: 'nfl-bills', name: 'Buffalo Bills', description: 'Bills Blue and Red', isDark: false, category: 'NFL' },
    { id: 'nfl-dolphins', name: 'Miami Dolphins', description: 'Dolphins Aqua and Orange', isDark: false, category: 'NFL' },
    { id: 'nfl-patriots', name: 'New England Patriots', description: 'Patriots Navy, Red, and Silver', isDark: false, category: 'NFL' },
    { id: 'nfl-jets', name: 'New York Jets', description: 'Jets Green', isDark: false, category: 'NFL' },

    // NFL Team themes - AFC North
    { id: 'nfl-ravens', name: 'Baltimore Ravens', description: 'Ravens Purple and Gold', isDark: false, category: 'NFL' },
    { id: 'nfl-bengals', name: 'Cincinnati Bengals', description: 'Bengals Orange and Black', isDark: false, category: 'NFL' },
    { id: 'nfl-browns', name: 'Cleveland Browns', description: 'Browns Brown and Orange', isDark: false, category: 'NFL' },
    { id: 'nfl-steelers', name: 'Pittsburgh Steelers', description: 'Steelers Black and Gold', isDark: false, category: 'NFL' },

    // NFL Team themes - AFC South
    { id: 'nfl-texans', name: 'Houston Texans', description: 'Texans Deep Steel Blue and Red', isDark: false, category: 'NFL' },
    { id: 'nfl-colts', name: 'Indianapolis Colts', description: 'Colts Royal Blue', isDark: false, category: 'NFL' },
    { id: 'nfl-jaguars', name: 'Jacksonville Jaguars', description: 'Jaguars Teal and Gold', isDark: false, category: 'NFL' },
    { id: 'nfl-titans', name: 'Tennessee Titans', description: 'Titans Navy and Light Blue', isDark: false, category: 'NFL' },

    // NFL Team themes - AFC West
    { id: 'nfl-broncos', name: 'Denver Broncos', description: 'Broncos Orange and Navy', isDark: false, category: 'NFL' },
    { id: 'nfl-chiefs', name: 'Kansas City Chiefs', description: 'Chiefs Red and Gold', isDark: false, category: 'NFL' },
    { id: 'nfl-raiders', name: 'Las Vegas Raiders', description: 'Raiders Silver and Black', isDark: false, category: 'NFL' },
    { id: 'nfl-chargers', name: 'Los Angeles Chargers', description: 'Chargers Powder Blue and Gold', isDark: false, category: 'NFL' },

    // NFL Team themes - NFC East
    { id: 'nfl-cowboys', name: 'Dallas Cowboys', description: 'Cowboys Navy and Silver', isDark: false, category: 'NFL' },
    { id: 'nfl-giants', name: 'New York Giants', description: 'Giants Blue and Red', isDark: false, category: 'NFL' },
    { id: 'nfl-eagles', name: 'Philadelphia Eagles', description: 'Eagles Midnight Green', isDark: false, category: 'NFL' },
    { id: 'nfl-commanders', name: 'Washington Commanders', description: 'Commanders Burgundy and Gold', isDark: false, category: 'NFL' },

    // NFL Team themes - NFC North
    { id: 'nfl-bears', name: 'Chicago Bears', description: 'Bears Navy and Orange', isDark: false, category: 'NFL' },
    { id: 'nfl-lions', name: 'Detroit Lions', description: 'Lions Honolulu Blue and Silver', isDark: false, category: 'NFL' },
    { id: 'nfl-packers', name: 'Green Bay Packers', description: 'Packers Green and Gold', isDark: false, category: 'NFL' },
    { id: 'nfl-vikings', name: 'Minnesota Vikings', description: 'Vikings Purple and Gold', isDark: false, category: 'NFL' },

    // NFL Team themes - NFC South
    { id: 'nfl-falcons', name: 'Atlanta Falcons', description: 'Falcons Red and Black', isDark: false, category: 'NFL' },
    { id: 'nfl-panthers', name: 'Carolina Panthers', description: 'Panthers Blue, Black, and Silver', isDark: false, category: 'NFL' },
    { id: 'nfl-saints', name: 'New Orleans Saints', description: 'Saints Gold and Black', isDark: false, category: 'NFL' },
    { id: 'nfl-buccaneers', name: 'Tampa Bay Buccaneers', description: 'Buccaneers Red and Pewter', isDark: false, category: 'NFL' },

    // NFL Team themes - NFC West
    { id: 'nfl-cardinals', name: 'Arizona Cardinals', description: 'Cardinals Cardinal Red', isDark: false, category: 'NFL' },
    { id: 'nfl-rams', name: 'Los Angeles Rams', description: 'Rams Royal Blue and Sol Gold', isDark: false, category: 'NFL' },
    { id: 'nfl-49ers', name: 'San Francisco 49ers', description: '49ers Red and Gold', isDark: false, category: 'NFL' },
    { id: 'nfl-seahawks', name: 'Seattle Seahawks', description: 'Seahawks Navy and Action Green', isDark: false, category: 'NFL' },

    // NBA Team themes - Atlantic Division
    { id: 'nba-celtics', name: 'Boston Celtics', description: 'Celtics Green and Gold', isDark: false, category: 'NBA' },
    { id: 'nba-nets', name: 'Brooklyn Nets', description: 'Nets Black and White', isDark: false, category: 'NBA' },
    { id: 'nba-knicks', name: 'New York Knicks', description: 'Knicks Blue and Orange', isDark: false, category: 'NBA' },
    { id: 'nba-76ers', name: 'Philadelphia 76ers', description: '76ers Blue and Red', isDark: false, category: 'NBA' },
    { id: 'nba-raptors', name: 'Toronto Raptors', description: 'Raptors Red and Black', isDark: false, category: 'NBA' },

    // NBA Team themes - Central Division
    { id: 'nba-bulls', name: 'Chicago Bulls', description: 'Bulls Red and Black', isDark: false, category: 'NBA' },
    { id: 'nba-cavaliers', name: 'Cleveland Cavaliers', description: 'Cavaliers Wine and Gold', isDark: false, category: 'NBA' },
    { id: 'nba-pistons', name: 'Detroit Pistons', description: 'Pistons Blue and Red', isDark: false, category: 'NBA' },
    { id: 'nba-pacers', name: 'Indiana Pacers', description: 'Pacers Navy and Gold', isDark: false, category: 'NBA' },
    { id: 'nba-bucks', name: 'Milwaukee Bucks', description: 'Bucks Green and Cream', isDark: false, category: 'NBA' },

    // NBA Team themes - Southeast Division
    { id: 'nba-hawks', name: 'Atlanta Hawks', description: 'Hawks Red, Black, and Gold', isDark: false, category: 'NBA' },
    { id: 'nba-hornets', name: 'Charlotte Hornets', description: 'Hornets Purple and Teal', isDark: false, category: 'NBA' },
    { id: 'nba-heat', name: 'Miami Heat', description: 'Heat Red, Black, and Yellow', isDark: false, category: 'NBA' },
    { id: 'nba-magic', name: 'Orlando Magic', description: 'Magic Blue and Black', isDark: false, category: 'NBA' },
    { id: 'nba-wizards', name: 'Washington Wizards', description: 'Wizards Navy and Red', isDark: false, category: 'NBA' },

    // NBA Team themes - Northwest Division
    { id: 'nba-nuggets', name: 'Denver Nuggets', description: 'Nuggets Navy and Gold', isDark: false, category: 'NBA' },
    { id: 'nba-timberwolves', name: 'Minnesota Timberwolves', description: 'Timberwolves Navy, Blue, and Green', isDark: false, category: 'NBA' },
    { id: 'nba-thunder', name: 'Oklahoma City Thunder', description: 'Thunder Blue and Orange', isDark: false, category: 'NBA' },
    { id: 'nba-trailblazers', name: 'Portland Trail Blazers', description: 'Blazers Red and Black', isDark: false, category: 'NBA' },
    { id: 'nba-jazz', name: 'Utah Jazz', description: 'Jazz Navy, Yellow, and Green', isDark: false, category: 'NBA' },

    // NBA Team themes - Pacific Division
    { id: 'nba-warriors', name: 'Golden State Warriors', description: 'Warriors Blue and Gold', isDark: false, category: 'NBA' },
    { id: 'nba-clippers', name: 'LA Clippers', description: 'Clippers Red and Blue', isDark: false, category: 'NBA' },
    { id: 'nba-lakers', name: 'Los Angeles Lakers', description: 'Lakers Purple and Gold', isDark: false, category: 'NBA' },
    { id: 'nba-suns', name: 'Phoenix Suns', description: 'Suns Purple and Orange', isDark: false, category: 'NBA' },
    { id: 'nba-kings', name: 'Sacramento Kings', description: 'Kings Purple and Gray', isDark: false, category: 'NBA' },

    // NBA Team themes - Southwest Division
    { id: 'nba-mavericks', name: 'Dallas Mavericks', description: 'Mavericks Blue and Navy', isDark: false, category: 'NBA' },
    { id: 'nba-rockets', name: 'Houston Rockets', description: 'Rockets Red', isDark: false, category: 'NBA' },
    { id: 'nba-grizzlies', name: 'Memphis Grizzlies', description: 'Grizzlies Navy and Beale Street Blue', isDark: false, category: 'NBA' },
    { id: 'nba-pelicans', name: 'New Orleans Pelicans', description: 'Pelicans Navy, Gold, and Red', isDark: false, category: 'NBA' },
    { id: 'nba-spurs', name: 'San Antonio Spurs', description: 'Spurs Silver and Black', isDark: false, category: 'NBA' },

    // Motorsports themes
    { id: 'f1', name: 'Formula 1', description: 'F1 Racing Red and Black', isDark: false, category: 'Motorsports' },
  ];

  /** Themes grouped by category */
  readonly themesByCategory = computed<ThemeGroup[]>(() => {
    const categories: ThemeCategory[] = ['Base', 'Bootswatch', 'Material Design', 'Programming', 'Cloud Providers', 'NFL', 'NBA', 'Motorsports'];
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
