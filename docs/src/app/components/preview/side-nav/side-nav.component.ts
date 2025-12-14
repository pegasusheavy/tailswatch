import { Component } from '@angular/core';

interface NavItem {
  id: string;
  label: string;
}

@Component({
  selector: 'app-side-nav',
  standalone: true,
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  readonly navItems: NavItem[] = [
    { id: 'colors', label: 'Colors' },
    { id: 'typography', label: 'Typography' },
    { id: 'spacing', label: 'Spacing' },
    { id: 'buttons', label: 'Buttons' },
    { id: 'dropdowns', label: 'Dropdowns' },
    { id: 'cards', label: 'Cards' },
    { id: 'forms', label: 'Forms' },
    { id: 'alerts', label: 'Alerts & Badges' },
    { id: 'tables', label: 'Tables' },
    { id: 'progress', label: 'Progress' },
    { id: 'avatars', label: 'Avatars' },
    { id: 'lists', label: 'Lists' },
    { id: 'navigation', label: 'Navigation' },
    { id: 'modals', label: 'Modals' },
    { id: 'tooltips', label: 'Tooltips' },
    { id: 'shadows', label: 'Shadows' },
    { id: 'borders', label: 'Borders' },
    { id: 'grid', label: 'Grid & Layout' },
    { id: 'skeletons', label: 'Skeletons' },
    { id: 'stats', label: 'Stats' },
    { id: 'animations', label: 'Animations' },
    { id: 'code', label: 'Code Blocks' },
  ];
}
