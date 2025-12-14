import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeSelectorComponent } from '../../components/theme-selector/theme-selector.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

interface Photo {
  id: number;
  title: string;
  category: string;
  aspect: 'portrait' | 'landscape' | 'square';
  image: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterModule, ThemeSelectorComponent, FaIconComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  menuOpen = signal(false);
  lightboxOpen = signal(false);
  selectedPhoto = signal<Photo | null>(null);
  selectedCategory = signal('all');

  categories = [
    { id: 'all', name: 'All Work' },
    { id: 'portraits', name: 'Portraits' },
    { id: 'landscape', name: 'Landscape' },
    { id: 'street', name: 'Street' },
    { id: 'events', name: 'Events' },
  ];

  photos: Photo[] = [
    { id: 1, title: 'Golden Hour Portrait', category: 'portraits', aspect: 'portrait', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop' },
    { id: 2, title: 'Mountain Sunrise', category: 'landscape', aspect: 'landscape', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop' },
    { id: 3, title: 'Urban Shadows', category: 'street', aspect: 'square', image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=600&fit=crop' },
    { id: 4, title: 'Wedding Ceremony', category: 'events', aspect: 'landscape', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop' },
    { id: 5, title: 'Studio Session', category: 'portraits', aspect: 'portrait', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop' },
    { id: 6, title: 'Ocean at Dusk', category: 'landscape', aspect: 'landscape', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop' },
    { id: 7, title: 'City Lights', category: 'street', aspect: 'portrait', image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&h=800&fit=crop' },
    { id: 8, title: 'Corporate Event', category: 'events', aspect: 'landscape', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop' },
    { id: 9, title: 'Natural Light Portrait', category: 'portraits', aspect: 'square', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=600&fit=crop' },
    { id: 10, title: 'Desert Storm', category: 'landscape', aspect: 'landscape', image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&h=600&fit=crop' },
    { id: 11, title: 'Rain Reflections', category: 'street', aspect: 'landscape', image: 'https://images.unsplash.com/photo-1428592953211-077101b2021b?w=800&h=600&fit=crop' },
    { id: 12, title: 'Birthday Celebration', category: 'events', aspect: 'square', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=600&fit=crop' },
  ];

  testimonials = [
    { name: 'Sarah Johnson', role: 'Bride', text: 'Alex captured our wedding day perfectly. Every photo tells a story and brings back beautiful memories.', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
    { name: 'Michael Chen', role: 'CEO, TechStart', text: 'Professional, creative, and incredibly easy to work with. Our corporate headshots have never looked better.', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop' },
    { name: 'Emma Wilson', role: 'Model', text: 'Working with Alex is always a pleasure. They have a unique eye for composition and lighting.', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
  ];

  // Profile photo for the about section
  profileImage = 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=600&h=750&fit=crop';

  get filteredPhotos() {
    if (this.selectedCategory() === 'all') {
      return this.photos;
    }
    return this.photos.filter(p => p.category === this.selectedCategory());
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  setCategory(category: string) {
    this.selectedCategory.set(category);
  }

  openLightbox(photo: Photo) {
    this.selectedPhoto.set(photo);
    this.lightboxOpen.set(true);
  }

  closeLightbox() {
    this.lightboxOpen.set(false);
    this.selectedPhoto.set(null);
  }

  navigatePhoto(direction: number) {
    const current = this.selectedPhoto();
    if (!current) return;

    const filtered = this.filteredPhotos;
    const currentIndex = filtered.findIndex(p => p.id === current.id);
    const newIndex = (currentIndex + direction + filtered.length) % filtered.length;
    this.selectedPhoto.set(filtered[newIndex]);
  }
}
