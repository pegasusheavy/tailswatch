import { Component, signal, computed } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeSelectorComponent } from '../../components/theme-selector/theme-selector.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  badge?: string;
  colors?: string[];
}

interface CartItem {
  product: Product;
  quantity: number;
}

@Component({
  selector: 'app-ecommerce',
  standalone: true,
  imports: [RouterModule, ThemeSelectorComponent, FaIconComponent],
  templateUrl: './ecommerce.component.html',
  styleUrl: './ecommerce.component.scss'
})
export class EcommerceComponent {
  sidebarOpen = signal(false);
  cartOpen = signal(false);
  selectedCategory = signal<string>('all');
  searchQuery = signal('');
  cartItems = signal<CartItem[]>([]);

  categories = [
    { id: 'all', name: 'All Products', icon: 'th-large' },
    { id: 'electronics', name: 'Electronics', icon: 'microchip' },
    { id: 'clothing', name: 'Clothing', icon: 'user' },
    { id: 'home', name: 'Home & Garden', icon: 'home' },
    { id: 'sports', name: 'Sports', icon: 'futbol' },
  ];

  products: Product[] = [
    { id: 1, name: 'Wireless Headphones Pro', price: 199, originalPrice: 249, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop', category: 'electronics', rating: 4.5, reviews: 128, badge: 'Sale', colors: ['#1a1a1a', '#f5f5f5', '#3b82f6'] },
    { id: 2, name: 'Premium Cotton T-Shirt', price: 49, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop', category: 'clothing', rating: 4.8, reviews: 256, colors: ['#1a1a1a', '#f5f5f5', '#22c55e', '#ef4444'] },
    { id: 3, name: 'Smart Home Speaker', price: 129, image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=400&h=400&fit=crop', category: 'electronics', rating: 4.3, reviews: 89, badge: 'New' },
    { id: 4, name: 'Running Sneakers', price: 159, originalPrice: 199, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop', category: 'sports', rating: 4.6, reviews: 342, badge: 'Sale', colors: ['#1a1a1a', '#f5f5f5', '#f97316'] },
    { id: 5, name: 'Smart Watch Series X', price: 299, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop', category: 'electronics', rating: 4.7, reviews: 567, badge: 'Best Seller' },
    { id: 6, name: 'Ceramic Plant Pot Set', price: 45, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop', category: 'home', rating: 4.4, reviews: 78 },
    { id: 7, name: 'Yoga Mat Premium', price: 79, image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop', category: 'sports', rating: 4.9, reviews: 203 },
    { id: 8, name: 'Denim Jacket Classic', price: 89, originalPrice: 120, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop', category: 'clothing', rating: 4.5, reviews: 156, badge: 'Sale', colors: ['#1e40af', '#1a1a1a'] },
    { id: 9, name: 'Bluetooth Earbuds', price: 79, image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop', category: 'electronics', rating: 4.2, reviews: 445 },
    { id: 10, name: 'LED Desk Lamp', price: 59, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop', category: 'home', rating: 4.6, reviews: 167, badge: 'New' },
    { id: 11, name: 'Fitness Tracker Band', price: 49, image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop', category: 'sports', rating: 4.1, reviews: 289 },
    { id: 12, name: 'Wool Sweater', price: 129, image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop', category: 'clothing', rating: 4.7, reviews: 98, colors: ['#92400e', '#1e3a5f', '#4a5568'] },
  ];

  filteredProducts = computed(() => {
    let filtered = this.products;
    const category = this.selectedCategory();
    const query = this.searchQuery().toLowerCase();

    if (category !== 'all') {
      filtered = filtered.filter(p => p.category === category);
    }

    if (query) {
      filtered = filtered.filter(p => p.name.toLowerCase().includes(query));
    }

    return filtered;
  });

  cartTotal = computed(() => {
    return this.cartItems().reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  });

  cartCount = computed(() => {
    return this.cartItems().reduce((sum, item) => sum + item.quantity, 0);
  });

  toggleSidebar() {
    this.sidebarOpen.update(v => !v);
  }

  toggleCart() {
    this.cartOpen.update(v => !v);
  }

  setCategory(category: string) {
    this.selectedCategory.set(category);
  }

  addToCart(product: Product) {
    const items = this.cartItems();
    const existing = items.find(item => item.product.id === product.id);

    if (existing) {
      this.cartItems.set(items.map(item =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      this.cartItems.set([...items, { product, quantity: 1 }]);
    }
  }

  removeFromCart(productId: number) {
    this.cartItems.set(this.cartItems().filter(item => item.product.id !== productId));
  }

  updateQuantity(productId: number, delta: number) {
    this.cartItems.set(this.cartItems().map(item => {
      if (item.product.id === productId) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  }

  getRatingStars(rating: number): string[] {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push('full');
      } else if (i - rating < 1 && i - rating > 0) {
        stars.push('half');
      } else {
        stars.push('empty');
      }
    }
    return stars;
  }
}
