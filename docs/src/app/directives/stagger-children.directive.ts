import { Directive, ElementRef, Input, OnInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { createSharedObserver } from './shared-observer';

const staggerObserver = createSharedObserver({
  threshold: 0.1,
  rootMargin: '0px 0px -30px 0px'
});

@Directive({
  selector: '[appStaggerChildren]',
  standalone: true
})
export class StaggerChildrenDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);

  @Input() staggerDelay: number = 100;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const element = this.el.nativeElement as HTMLElement;
    const children = element.children;

    // Set initial state for all children
    Array.from(children).forEach((child, index) => {
      const el = child as HTMLElement;
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
      el.style.transitionDelay = `${index * this.staggerDelay}ms`;
    });

    // Register with the shared observer
    staggerObserver.observe(element, (entry) => {
      if (entry.isIntersecting) {
        this.animateChildren(element);
        staggerObserver.release(element);
      }
    });
  }

  ngOnDestroy(): void {
    staggerObserver.release(this.el.nativeElement as HTMLElement);
  }

  private animateChildren(element: HTMLElement): void {
    const children = element.children;
    Array.from(children).forEach((child) => {
      const el = child as HTMLElement;
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }
}
