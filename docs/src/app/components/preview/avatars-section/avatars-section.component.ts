import { Component } from '@angular/core';
import { ScrollAnimateDirective, StaggerChildrenDirective } from '../../../directives';

@Component({
  selector: 'app-avatars-section',
  standalone: true,
  imports: [ScrollAnimateDirective, StaggerChildrenDirective],
  templateUrl: './avatars-section.component.html',
  styleUrl: './avatars-section.component.scss'
})
export class AvatarsSectionComponent {}
