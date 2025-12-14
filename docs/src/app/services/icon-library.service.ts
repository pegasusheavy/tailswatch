import { Injectable } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  // Navigation & UI
  faHome,
  faBars,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faXmark,
  faPlus,
  faMinus,
  faCheck,
  faEllipsisV,
  faEllipsis,
  faCog,
  faGear,
  faSearch,
  faMagnifyingGlass,
  faThLarge,
  faList,
  faGrip,
  faFutbol,

  // Alerts & Status
  faCircleCheck,
  faCircleXmark,
  faTriangleExclamation,
  faCircleInfo,
  faCircleExclamation,
  faBell,

  // Actions
  faEdit,
  faPen,
  faTrash,
  faDownload,
  faUpload,
  faSave,
  faCopy,
  faShare,
  faLink,
  faExternalLink,
  faExpand,
  faCompress,
  faRefresh,
  faSync,
  faArrowUp,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowsRotate,

  // Communication
  faEnvelope,
  faMessage,
  faComment,
  faComments,
  faPaperPlane,
  faPhone,
  faVideo,

  // Media
  faImage,
  faImages,
  faCamera,
  faPlay,
  faPause,
  faStop,
  faVolumeUp,
  faVolumeMute,

  // Files & Data
  faFile,
  faFileAlt,
  faFolder,
  faFolderOpen,
  faDatabase,
  faTable,
  faChartBar,
  faChartLine,
  faChartPie,

  // User & Social
  faUser,
  faUsers,
  faUserPlus,
  faUserMinus,
  faUserCircle,
  faUserGroup,
  faHeart,
  faStar,
  faThumbsUp,
  faThumbsDown,
  faBookmark,
  faFlag,

  // E-commerce
  faShoppingCart,
  faCartShopping,
  faCreditCard,
  faDollarSign,
  faTag,
  faTags,
  faReceipt,
  faBox,
  faBoxes,
  faTruck,
  faStore,

  // Security
  faLock,
  faUnlock,
  faKey,
  faShield,
  faShieldHalved,
  faEye,
  faEyeSlash,
  faFingerprint,

  // Misc
  faCalendar,
  faCalendarDays,
  faClock,
  faHourglass,
  faSpinner,
  faCircleNotch,
  faLocationDot,
  faMap,
  faGlobe,
  faCloud,
  faCloudUpload,
  faCloudDownload,
  faSun,
  faMoon,
  faBolt,
  faFire,
  faDroplet,
  faLeaf,
  faSnowflake,

  // Development
  faCode,
  faTerminal,
  faBug,
  faWrench,
  faScrewdriverWrench,
  faPlug,
  faServer,
  faMicrochip,
  faRobot,

  // Business
  faBriefcase,
  faBuilding,
  faIndustry,
  faLandmark,
  faGraduationCap,
  faAward,
  faCertificate,
  faTrophy,
  faCrown,
  faPalette,
  faBrush,
  faSwatchbook,

  // Arrows & Directions
  faArrowTrendUp,
  faArrowTrendDown,
  faArrowRightFromBracket,
  faArrowRightToBracket,
  faCircleArrowUp,
  faCircleArrowDown,
  faRotate,
  faRotateRight,
  faRotateLeft
} from '@fortawesome/free-solid-svg-icons';

import {
  faHeart as farHeart,
  faStar as farStar,
  faBookmark as farBookmark,
  faCircle as farCircle,
  faSquare as farSquare,
  faEnvelope as farEnvelope,
  faBell as farBell,
  faCalendar as farCalendar,
  faClock as farClock,
  faFile as farFile,
  faFolder as farFolder,
  faUser as farUser,
  faComment as farComment,
  faComments as farComments,
  faImage as farImage,
  faEye as farEye,
  faEyeSlash as farEyeSlash,
  faCopy as farCopy,
  faTrashCan as farTrashCan,
  faPenToSquare as farPenToSquare,
  faCircleCheck as farCircleCheck,
  faCircleXmark as farCircleXmark,
  faThumbsUp as farThumbsUp,
  faThumbsDown as farThumbsDown
} from '@fortawesome/free-regular-svg-icons';

import {
  faGithub,
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
  faTwitch,
  faDiscord,
  faSlack,
  faGoogle,
  faApple,
  faMicrosoft,
  faAmazon,
  faNodeJs,
  faJs,
  faPython,
  faRust,
  faGolang,
  faReact,
  faAngular,
  faVuejs,
  faDocker,
  faAws,
  faNpm
} from '@fortawesome/free-brands-svg-icons';

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
      faHome, faBars, faChevronDown, faChevronLeft, faChevronRight, faChevronUp,
      faXmark, faPlus, faMinus, faCheck, faEllipsisV, faEllipsis, faCog, faGear,
      faSearch, faMagnifyingGlass, faThLarge, faList, faGrip, faFutbol,

      // Alerts & Status
      faCircleCheck, faCircleXmark, faTriangleExclamation, faCircleInfo,
      faCircleExclamation, faBell,

      // Actions
      faEdit, faPen, faTrash, faDownload, faUpload, faSave, faCopy, faShare,
      faLink, faExternalLink, faExpand, faCompress, faRefresh, faSync,
      faArrowUp, faArrowDown, faArrowLeft, faArrowRight, faArrowsRotate,

      // Communication
      faEnvelope, faMessage, faComment, faComments, faPaperPlane, faPhone, faVideo,

      // Media
      faImage, faImages, faCamera, faPlay, faPause, faStop, faVolumeUp, faVolumeMute,

      // Files & Data
      faFile, faFileAlt, faFolder, faFolderOpen, faDatabase, faTable,
      faChartBar, faChartLine, faChartPie,

      // User & Social
      faUser, faUsers, faUserPlus, faUserMinus, faUserCircle, faUserGroup,
      faHeart, faStar, faThumbsUp, faThumbsDown, faBookmark, faFlag,

      // E-commerce
      faShoppingCart, faCartShopping, faCreditCard, faDollarSign, faTag, faTags,
      faReceipt, faBox, faBoxes, faTruck, faStore,

      // Security
      faLock, faUnlock, faKey, faShield, faShieldHalved, faEye, faEyeSlash, faFingerprint,

      // Misc
      faCalendar, faCalendarDays, faClock, faHourglass, faSpinner, faCircleNotch,
      faLocationDot, faMap, faGlobe, faCloud, faCloudUpload, faCloudDownload,
      faSun, faMoon, faBolt, faFire, faDroplet, faLeaf, faSnowflake,

      // Development
      faCode, faTerminal, faBug, faWrench, faScrewdriverWrench, faPlug,
      faServer, faMicrochip, faRobot,

      // Business
      faBriefcase, faBuilding, faIndustry, faLandmark, faGraduationCap,
      faAward, faCertificate, faTrophy, faCrown, faPalette, faBrush, faSwatchbook,

      // Arrows & Directions
      faArrowTrendUp, faArrowTrendDown, faArrowRightFromBracket, faArrowRightToBracket,
      faCircleArrowUp, faCircleArrowDown, faRotate, faRotateRight, faRotateLeft
    );

    // Regular icons
    this.library.addIcons(
      farHeart, farStar, farBookmark, farCircle, farSquare, farEnvelope, farBell,
      farCalendar, farClock, farFile, farFolder, farUser, farComment, farComments,
      farImage, farEye, farEyeSlash, farCopy, farTrashCan, farPenToSquare,
      farCircleCheck, farCircleXmark, farThumbsUp, farThumbsDown
    );

    // Brand icons
    this.library.addIcons(
      faGithub, faTwitter, faFacebook, faInstagram, faLinkedin, faYoutube,
      faTwitch, faDiscord, faSlack, faGoogle, faApple, faMicrosoft, faAmazon,
      faNodeJs, faJs, faPython, faRust, faGolang, faReact, faAngular, faVuejs,
      faDocker, faAws, faNpm
    );
  }
}

