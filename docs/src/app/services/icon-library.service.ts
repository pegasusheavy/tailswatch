import { Injectable } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  // Navigation & UI
  faHome,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faXmark,
  faPlus,
  faMinus,
  faCheck,
  faEllipsis,
  faGear,
  faMagnifyingGlass,

  // Alerts & Status
  faCircleCheck,
  faCircleXmark,
  faTriangleExclamation,
  faCircleInfo,
  faBell,

  // Actions
  faPen,
  faTrash,
  faDownload,
  faUpload,
  faCopy,
  faShare,
  faLink,
  faExpand,
  faCompress,
  faArrowUp,
  faArrowDown,
  faArrowRight,

  // Communication
  faEnvelope,
  faComment,

  // Files & Data
  faFile,
  faChartBar,
  faChartLine,

  // User & Social
  faUser,
  faUsers,
  faUserPlus,
  faHeart,
  faStar,

  // E-commerce
  faShoppingCart,
  faCreditCard,
  faDollarSign,

  // Security
  faLock,
  faShield,
  faShieldHalved,

  // Misc
  faClock,
  faSpinner,
  faGlobe,
  faBolt,
  faFire,

  // Development
  faCode,

  // Business
  faCrown,
  faSwatchbook,

  // Arrows & Directions
  faArrowTrendUp,
  faArrowTrendDown,
  faArrowRightFromBracket,
  faArrowRightToBracket
} from '@fortawesome/free-solid-svg-icons';

import {
  faGithub,
  faTwitter,
  faFacebook,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

/**
 * Registers only the icons rendered by the app shell (header, theme selector,
 * side nav) and the home page preview sections, so they are available before
 * first render. Icons used exclusively by the demo pages (dashboard,
 * e-commerce, forum, portfolio, saas) live in `./page-icons`, which is loaded
 * through a dynamic import from AppComponent so its SVG data stays out of the
 * main bundle.
 */
@Injectable({
  providedIn: 'root'
})
export class IconLibraryService {
  constructor(private library: FaIconLibrary) {
    this.registerIcons();
  }

  private registerIcons(): void {
    // Solid icons
    this.library.addIcons(
      // Navigation & UI
      faHome, faChevronDown, faChevronLeft, faChevronRight, faXmark, faPlus,
      faMinus, faCheck, faEllipsis, faGear, faMagnifyingGlass,

      // Alerts & Status
      faCircleCheck, faCircleXmark, faTriangleExclamation, faCircleInfo, faBell,

      // Actions
      faPen, faTrash, faDownload, faUpload, faCopy, faShare, faLink,
      faExpand, faCompress, faArrowUp, faArrowDown, faArrowRight,

      // Communication
      faEnvelope, faComment,

      // Files & Data
      faFile, faChartBar, faChartLine,

      // User & Social
      faUser, faUsers, faUserPlus, faHeart, faStar,

      // E-commerce
      faShoppingCart, faCreditCard, faDollarSign,

      // Security
      faLock, faShield, faShieldHalved,

      // Misc
      faClock, faSpinner, faGlobe, faBolt, faFire,

      // Development
      faCode,

      // Business
      faCrown, faSwatchbook,

      // Arrows & Directions
      faArrowTrendUp, faArrowTrendDown, faArrowRightFromBracket, faArrowRightToBracket
    );

    // Brand icons
    this.library.addIcons(
      faGithub, faTwitter, faFacebook, faLinkedin
    );
  }
}
