import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EcommerceComponent } from './pages/ecommerce/ecommerce.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ForumComponent } from './pages/forum/forum.component';
import { SaasComponent } from './pages/saas/saas.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'ecommerce', component: EcommerceComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'saas', component: SaasComponent },
  { path: '**', redirectTo: '' }
];
