import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeSelectorComponent } from '../../components/theme-selector/theme-selector.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

interface StatCard {
  title: string;
  value: string;
  change: string;
  changeType: 'up' | 'down' | 'neutral';
  icon: string;
}

interface Transaction {
  id: string;
  customer: string;
  email: string;
  amount: string;
  status: 'completed' | 'pending' | 'failed';
  date: string;
}

interface TeamMember {
  name: string;
  role: string;
  initials: string;
  status: 'online' | 'away' | 'offline';
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, ThemeSelectorComponent, FaIconComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  readonly stats: StatCard[] = [
    { title: 'Total Revenue', value: '$45,231.89', change: '+20.1%', changeType: 'up', icon: 'dollar' },
    { title: 'Subscriptions', value: '+2,350', change: '+180.1%', changeType: 'up', icon: 'users' },
    { title: 'Sales', value: '+12,234', change: '+19%', changeType: 'up', icon: 'cart' },
    { title: 'Active Now', value: '+573', change: '+201', changeType: 'neutral', icon: 'activity' },
  ];

  readonly transactions: Transaction[] = [
    { id: 'INV001', customer: 'Olivia Martin', email: 'olivia.martin@email.com', amount: '$1,999.00', status: 'completed', date: '2024-01-15' },
    { id: 'INV002', customer: 'Jackson Lee', email: 'jackson.lee@email.com', amount: '$39.00', status: 'completed', date: '2024-01-15' },
    { id: 'INV003', customer: 'Isabella Nguyen', email: 'isabella.nguyen@email.com', amount: '$299.00', status: 'pending', date: '2024-01-14' },
    { id: 'INV004', customer: 'William Kim', email: 'will@email.com', amount: '$99.00', status: 'completed', date: '2024-01-14' },
    { id: 'INV005', customer: 'Sofia Davis', email: 'sofia.davis@email.com', amount: '$39.00', status: 'failed', date: '2024-01-13' },
  ];

  readonly teamMembers: TeamMember[] = [
    { name: 'Olivia Martin', role: 'Product Manager', initials: 'OM', status: 'online' },
    { name: 'Jackson Lee', role: 'Engineer', initials: 'JL', status: 'online' },
    { name: 'Isabella Nguyen', role: 'Designer', initials: 'IN', status: 'away' },
    { name: 'William Kim', role: 'Marketing', initials: 'WK', status: 'offline' },
  ];

  readonly chartData = [40, 65, 45, 80, 55, 70, 85];
  readonly chartLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  sidebarOpen = true;

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }
}

