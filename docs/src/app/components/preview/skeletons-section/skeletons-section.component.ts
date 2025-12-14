import { Component } from '@angular/core';
import { ScrollAnimateDirective, StaggerChildrenDirective } from '../../../directives';

@Component({
  selector: 'app-skeletons-section',
  standalone: true,
  imports: [ScrollAnimateDirective, StaggerChildrenDirective],
  templateUrl: './skeletons-section.component.html',
  styleUrl: './skeletons-section.component.scss'
})
export class SkeletonsSectionComponent {}

