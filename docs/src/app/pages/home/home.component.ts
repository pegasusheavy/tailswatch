import { Component } from '@angular/core';
import {
  HeroSectionComponent,
  ColorsSectionComponent,
  TypographySectionComponent,
  ButtonsSectionComponent,
  CardsSectionComponent,
  FormsSectionComponent,
  AlertsSectionComponent,
  TablesSectionComponent,
  ProgressSectionComponent,
  AvatarsSectionComponent,
  ListsSectionComponent,
  NavigationSectionComponent,
  CodeSectionComponent,
  SideNavComponent,
  // New sections
  ShadowsSectionComponent,
  BordersSectionComponent,
  GridSectionComponent,
  ModalsSectionComponent,
  TooltipsSectionComponent,
  SkeletonsSectionComponent,
  StatsSectionComponent,
  AnimationsSectionComponent,
  SpacingSectionComponent,
  DropdownsSectionComponent
} from '../../components/preview';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSectionComponent,
    ColorsSectionComponent,
    TypographySectionComponent,
    ButtonsSectionComponent,
    CardsSectionComponent,
    FormsSectionComponent,
    AlertsSectionComponent,
    TablesSectionComponent,
    ProgressSectionComponent,
    AvatarsSectionComponent,
    ListsSectionComponent,
    NavigationSectionComponent,
    CodeSectionComponent,
    SideNavComponent,
    // New sections
    ShadowsSectionComponent,
    BordersSectionComponent,
    GridSectionComponent,
    ModalsSectionComponent,
    TooltipsSectionComponent,
    SkeletonsSectionComponent,
    StatsSectionComponent,
    AnimationsSectionComponent,
    SpacingSectionComponent,
    DropdownsSectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
