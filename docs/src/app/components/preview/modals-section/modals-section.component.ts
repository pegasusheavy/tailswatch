import { Component, signal } from '@angular/core';
import { ScrollAnimateDirective } from '../../../directives';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-modals-section',
  standalone: true,
  imports: [ScrollAnimateDirective, FaIconComponent],
  templateUrl: './modals-section.component.html',
  styleUrl: './modals-section.component.scss'
})
export class ModalsSectionComponent {
  showModal = signal(false);
  showSlideOver = signal(false);
  showAlert = signal(false);
  showBottomSheet = signal(false);

  // Animation states
  modalClosing = signal(false);
  slideOverClosing = signal(false);
  alertClosing = signal(false);
  bottomSheetClosing = signal(false);

  openModal() {
    this.showModal.set(true);
    this.modalClosing.set(false);
  }

  closeModal() {
    this.modalClosing.set(true);
    setTimeout(() => {
      this.showModal.set(false);
      this.modalClosing.set(false);
    }, 200);
  }

  openSlideOver() {
    this.showSlideOver.set(true);
    this.slideOverClosing.set(false);
  }

  closeSlideOver() {
    this.slideOverClosing.set(true);
    setTimeout(() => {
      this.showSlideOver.set(false);
      this.slideOverClosing.set(false);
    }, 300);
  }

  openAlert() {
    this.showAlert.set(true);
    this.alertClosing.set(false);
  }

  closeAlert() {
    this.alertClosing.set(true);
    setTimeout(() => {
      this.showAlert.set(false);
      this.alertClosing.set(false);
    }, 200);
  }

  openBottomSheet() {
    this.showBottomSheet.set(true);
    this.bottomSheetClosing.set(false);
  }

  closeBottomSheet() {
    this.bottomSheetClosing.set(true);
    setTimeout(() => {
      this.showBottomSheet.set(false);
      this.bottomSheetClosing.set(false);
    }, 300);
  }
}
