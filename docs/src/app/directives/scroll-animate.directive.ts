import { Directive, ElementRef, Input, OnInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { createSharedObserver } from './shared-observer';

export type AnimationType =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'zoom-in'
  | 'zoom-out'
  | 'bounce-in'
  | 'flip-up';

const scrollAnimateObserver = createSharedObserver({
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

@Directive({
  selector: '[appScrollAnimate]',
  standalone: true
})
export class ScrollAnimateDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);

  @Input('appScrollAnimate') animation: AnimationType = 'fade-up';
  @Input() animateDelay: number = 0;
  @Input() animateOnce: boolean = true;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const element = this.el.nativeElement as HTMLElement;

    // Set initial state
    element.style.opacity = '0';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    element.style.transitionDelay = `${this.animateDelay}ms`;

    // Set initial transform based on animation type
    this.setInitialTransform(element);

    // Register with the shared observer
    scrollAnimateObserver.observe(element, (entry) => {
      if (entry.isIntersecting) {
        this.animateIn(element);
        if (this.animateOnce) {
          scrollAnimateObserver.release(element);
        }
      }
    });
  }

  ngOnDestroy(): void {
    scrollAnimateObserver.release(this.el.nativeElement as HTMLElement);
  }

  private setInitialTransform(element: HTMLElement): void {
    switch (this.animation) {
      case 'fade-up':
        element.style.transform = 'translateY(40px)';
        break;
      case 'fade-down':
        element.style.transform = 'translateY(-40px)';
        break;
      case 'fade-left':
        element.style.transform = 'translateX(40px)';
        break;
      case 'fade-right':
        element.style.transform = 'translateX(-40px)';
        break;
      case 'zoom-in':
        element.style.transform = 'scale(0.9)';
        break;
      case 'zoom-out':
        element.style.transform = 'scale(1.1)';
        break;
      case 'bounce-in':
        element.style.transform = 'translateY(60px) scale(0.95)';
        break;
      case 'flip-up':
        element.style.transform = 'perspective(1000px) rotateX(10deg) translateY(30px)';
        break;
    }
  }

  private animateIn(element: HTMLElement): void {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0) translateX(0) scale(1) rotateX(0)';
  }

}
