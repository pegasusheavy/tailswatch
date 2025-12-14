import { Component, signal } from '@angular/core';
import { ScrollAnimateDirective, StaggerChildrenDirective } from '../../../directives';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-dropdowns-section',
  standalone: true,
  imports: [ScrollAnimateDirective, StaggerChildrenDirective, FaIconComponent],
  templateUrl: './dropdowns-section.component.html',
  styleUrl: './dropdowns-section.component.scss'
})
export class DropdownsSectionComponent {
  dropdown1Open = signal(false);
  dropdown2Open = signal(false);
  dropdown3Open = signal(false);

  toggleDropdown1() {
    this.dropdown1Open.update(v => !v);
    this.dropdown2Open.set(false);
    this.dropdown3Open.set(false);
  }

  toggleDropdown2() {
    this.dropdown2Open.update(v => !v);
    this.dropdown1Open.set(false);
    this.dropdown3Open.set(false);
  }

  toggleDropdown3() {
    this.dropdown3Open.update(v => !v);
    this.dropdown1Open.set(false);
    this.dropdown2Open.set(false);
  }
}

