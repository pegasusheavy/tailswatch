import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

// Per-icon deep imports (instead of the package barrels) keep these modules
// exclusive to this lazily-loaded chunk. Importing from the barrel would let
// the bundler hoist the icon data into a shared chunk that is loaded
// eagerly alongside main.js, defeating the split.

// Navigation & UI
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons/faChevronUp';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';
import { faCog } from '@fortawesome/free-solid-svg-icons/faCog';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faThLarge } from '@fortawesome/free-solid-svg-icons/faThLarge';
import { faList } from '@fortawesome/free-solid-svg-icons/faList';
import { faGrip } from '@fortawesome/free-solid-svg-icons/faGrip';
import { faFutbol } from '@fortawesome/free-solid-svg-icons/faFutbol';

// Alerts & Status
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons/faCircleExclamation';

// Actions
import { faEdit } from '@fortawesome/free-solid-svg-icons/faEdit';
import { faSave } from '@fortawesome/free-solid-svg-icons/faSave';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons/faExternalLink';
import { faRefresh } from '@fortawesome/free-solid-svg-icons/faRefresh';
import { faSync } from '@fortawesome/free-solid-svg-icons/faSync';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons/faArrowsRotate';

// Communication
import { faMessage } from '@fortawesome/free-solid-svg-icons/faMessage';
import { faComments } from '@fortawesome/free-solid-svg-icons/faComments';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { faVideo } from '@fortawesome/free-solid-svg-icons/faVideo';

// Media
import { faImage } from '@fortawesome/free-solid-svg-icons/faImage';
import { faImages } from '@fortawesome/free-solid-svg-icons/faImages';
import { faCamera } from '@fortawesome/free-solid-svg-icons/faCamera';
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay';
import { faPause } from '@fortawesome/free-solid-svg-icons/faPause';
import { faStop } from '@fortawesome/free-solid-svg-icons/faStop';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons/faVolumeUp';
import { faVolumeMute } from '@fortawesome/free-solid-svg-icons/faVolumeMute';

// Files & Data
import { faFileAlt } from '@fortawesome/free-solid-svg-icons/faFileAlt';
import { faFolder } from '@fortawesome/free-solid-svg-icons/faFolder';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons/faFolderOpen';
import { faDatabase } from '@fortawesome/free-solid-svg-icons/faDatabase';
import { faTable } from '@fortawesome/free-solid-svg-icons/faTable';
import { faChartPie } from '@fortawesome/free-solid-svg-icons/faChartPie';

// User & Social
import { faUserMinus } from '@fortawesome/free-solid-svg-icons/faUserMinus';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons/faUserGroup';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons/faThumbsUp';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons/faThumbsDown';
import { faBookmark } from '@fortawesome/free-solid-svg-icons/faBookmark';
import { faFlag } from '@fortawesome/free-solid-svg-icons/faFlag';

// E-commerce
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping';
import { faTag } from '@fortawesome/free-solid-svg-icons/faTag';
import { faTags } from '@fortawesome/free-solid-svg-icons/faTags';
import { faReceipt } from '@fortawesome/free-solid-svg-icons/faReceipt';
import { faBox } from '@fortawesome/free-solid-svg-icons/faBox';
import { faBoxes } from '@fortawesome/free-solid-svg-icons/faBoxes';
import { faTruck } from '@fortawesome/free-solid-svg-icons/faTruck';
import { faStore } from '@fortawesome/free-solid-svg-icons/faStore';

// Security
import { faUnlock } from '@fortawesome/free-solid-svg-icons/faUnlock';
import { faKey } from '@fortawesome/free-solid-svg-icons/faKey';
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash';
import { faFingerprint } from '@fortawesome/free-solid-svg-icons/faFingerprint';

// Misc
import { faCalendar } from '@fortawesome/free-solid-svg-icons/faCalendar';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons/faCalendarDays';
import { faHourglass } from '@fortawesome/free-solid-svg-icons/faHourglass';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons/faCircleNotch';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import { faMap } from '@fortawesome/free-solid-svg-icons/faMap';
import { faCloud } from '@fortawesome/free-solid-svg-icons/faCloud';
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons/faCloudUpload';
import { faCloudDownload } from '@fortawesome/free-solid-svg-icons/faCloudDownload';
import { faSun } from '@fortawesome/free-solid-svg-icons/faSun';
import { faMoon } from '@fortawesome/free-solid-svg-icons/faMoon';
import { faDroplet } from '@fortawesome/free-solid-svg-icons/faDroplet';
import { faLeaf } from '@fortawesome/free-solid-svg-icons/faLeaf';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons/faSnowflake';

// Development
import { faTerminal } from '@fortawesome/free-solid-svg-icons/faTerminal';
import { faBug } from '@fortawesome/free-solid-svg-icons/faBug';
import { faWrench } from '@fortawesome/free-solid-svg-icons/faWrench';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons/faScrewdriverWrench';
import { faPlug } from '@fortawesome/free-solid-svg-icons/faPlug';
import { faServer } from '@fortawesome/free-solid-svg-icons/faServer';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons/faMicrochip';
import { faRobot } from '@fortawesome/free-solid-svg-icons/faRobot';

// Business
import { faBriefcase } from '@fortawesome/free-solid-svg-icons/faBriefcase';
import { faBuilding } from '@fortawesome/free-solid-svg-icons/faBuilding';
import { faIndustry } from '@fortawesome/free-solid-svg-icons/faIndustry';
import { faLandmark } from '@fortawesome/free-solid-svg-icons/faLandmark';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons/faGraduationCap';
import { faAward } from '@fortawesome/free-solid-svg-icons/faAward';
import { faCertificate } from '@fortawesome/free-solid-svg-icons/faCertificate';
import { faTrophy } from '@fortawesome/free-solid-svg-icons/faTrophy';
import { faPalette } from '@fortawesome/free-solid-svg-icons/faPalette';
import { faBrush } from '@fortawesome/free-solid-svg-icons/faBrush';

// Arrows & Directions
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons/faCircleArrowUp';
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons/faCircleArrowDown';
import { faRotate } from '@fortawesome/free-solid-svg-icons/faRotate';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons/faRotateRight';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons/faRotateLeft';

// Regular icons
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons/faHeart';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons/faStar';
import { faBookmark as farBookmark } from '@fortawesome/free-regular-svg-icons/faBookmark';
import { faCircle as farCircle } from '@fortawesome/free-regular-svg-icons/faCircle';
import { faSquare as farSquare } from '@fortawesome/free-regular-svg-icons/faSquare';
import { faEnvelope as farEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faBell as farBell } from '@fortawesome/free-regular-svg-icons/faBell';
import { faCalendar as farCalendar } from '@fortawesome/free-regular-svg-icons/faCalendar';
import { faClock as farClock } from '@fortawesome/free-regular-svg-icons/faClock';
import { faFile as farFile } from '@fortawesome/free-regular-svg-icons/faFile';
import { faFolder as farFolder } from '@fortawesome/free-regular-svg-icons/faFolder';
import { faUser as farUser } from '@fortawesome/free-regular-svg-icons/faUser';
import { faComment as farComment } from '@fortawesome/free-regular-svg-icons/faComment';
import { faComments as farComments } from '@fortawesome/free-regular-svg-icons/faComments';
import { faImage as farImage } from '@fortawesome/free-regular-svg-icons/faImage';
import { faEye as farEye } from '@fortawesome/free-regular-svg-icons/faEye';
import { faEyeSlash as farEyeSlash } from '@fortawesome/free-regular-svg-icons/faEyeSlash';
import { faCopy as farCopy } from '@fortawesome/free-regular-svg-icons/faCopy';
import { faTrashCan as farTrashCan } from '@fortawesome/free-regular-svg-icons/faTrashCan';
import { faPenToSquare as farPenToSquare } from '@fortawesome/free-regular-svg-icons/faPenToSquare';
import { faCircleCheck as farCircleCheck } from '@fortawesome/free-regular-svg-icons/faCircleCheck';
import { faCircleXmark as farCircleXmark } from '@fortawesome/free-regular-svg-icons/faCircleXmark';
import { faThumbsUp as farThumbsUp } from '@fortawesome/free-regular-svg-icons/faThumbsUp';
import { faThumbsDown as farThumbsDown } from '@fortawesome/free-regular-svg-icons/faThumbsDown';

// Brand icons
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import { faTwitch } from '@fortawesome/free-brands-svg-icons/faTwitch';
import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord';
import { faSlack } from '@fortawesome/free-brands-svg-icons/faSlack';
import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle';
import { faApple } from '@fortawesome/free-brands-svg-icons/faApple';
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons/faMicrosoft';
import { faAmazon } from '@fortawesome/free-brands-svg-icons/faAmazon';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons/faNodeJs';
import { faJs } from '@fortawesome/free-brands-svg-icons/faJs';
import { faPython } from '@fortawesome/free-brands-svg-icons/faPython';
import { faRust } from '@fortawesome/free-brands-svg-icons/faRust';
import { faGolang } from '@fortawesome/free-brands-svg-icons/faGolang';
import { faReact } from '@fortawesome/free-brands-svg-icons/faReact';
import { faAngular } from '@fortawesome/free-brands-svg-icons/faAngular';
import { faVuejs } from '@fortawesome/free-brands-svg-icons/faVuejs';
import { faDocker } from '@fortawesome/free-brands-svg-icons/faDocker';
import { faAws } from '@fortawesome/free-brands-svg-icons/faAws';
import { faNpm } from '@fortawesome/free-brands-svg-icons/faNpm';

/**
 * Registers the icons used only by the demo pages (dashboard, e-commerce,
 * forum, portfolio, saas). Loaded via dynamic import from AppComponent so the
 * SVG data ships in a lazy chunk instead of the main bundle. Icons needed by
 * the app shell and the home page are registered eagerly by
 * IconLibraryService.
 */
export function registerPageIcons(library: FaIconLibrary): void {
  // Solid icons
  library.addIcons(
    // Navigation & UI
    faBars, faChevronUp, faEllipsisV, faCog, faSearch, faThLarge, faList,
    faGrip, faFutbol,

    // Alerts & Status
    faCircleExclamation,

    // Actions
    faEdit, faSave, faExternalLink, faRefresh, faSync, faArrowLeft, faArrowsRotate,

    // Communication
    faMessage, faComments, faPaperPlane, faPhone, faVideo,

    // Media
    faImage, faImages, faCamera, faPlay, faPause, faStop, faVolumeUp, faVolumeMute,

    // Files & Data
    faFileAlt, faFolder, faFolderOpen, faDatabase, faTable, faChartPie,

    // User & Social
    faUserMinus, faUserCircle, faUserGroup, faThumbsUp, faThumbsDown,
    faBookmark, faFlag,

    // E-commerce
    faCartShopping, faTag, faTags, faReceipt, faBox, faBoxes, faTruck, faStore,

    // Security
    faUnlock, faKey, faEye, faEyeSlash, faFingerprint,

    // Misc
    faCalendar, faCalendarDays, faHourglass, faCircleNotch, faLocationDot,
    faMap, faCloud, faCloudUpload, faCloudDownload, faSun, faMoon, faDroplet,
    faLeaf, faSnowflake,

    // Development
    faTerminal, faBug, faWrench, faScrewdriverWrench, faPlug, faServer,
    faMicrochip, faRobot,

    // Business
    faBriefcase, faBuilding, faIndustry, faLandmark, faGraduationCap,
    faAward, faCertificate, faTrophy, faPalette, faBrush,

    // Arrows & Directions
    faCircleArrowUp, faCircleArrowDown, faRotate, faRotateRight, faRotateLeft
  );

  // Regular icons
  library.addIcons(
    farHeart, farStar, farBookmark, farCircle, farSquare, farEnvelope, farBell,
    farCalendar, farClock, farFile, farFolder, farUser, farComment, farComments,
    farImage, farEye, farEyeSlash, farCopy, farTrashCan, farPenToSquare,
    farCircleCheck, farCircleXmark, farThumbsUp, farThumbsDown
  );

  // Brand icons
  library.addIcons(
    faInstagram, faYoutube, faTwitch, faDiscord, faSlack, faGoogle, faApple,
    faMicrosoft, faAmazon, faNodeJs, faJs, faPython, faRust, faGolang,
    faReact, faAngular, faVuejs, faDocker, faAws, faNpm
  );
}
