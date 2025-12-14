import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { ThemeSelectorComponent } from '../../components/theme-selector/theme-selector.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

interface PricingPlan {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-saas',
  standalone: true,
  imports: [RouterModule, DecimalPipe, ThemeSelectorComponent, FaIconComponent],
  templateUrl: './saas.component.html',
  styleUrl: './saas.component.scss'
})
export class SaasComponent {
  mobileMenuOpen = signal(false);
  billingPeriod = signal<'monthly' | 'annual'>('monthly');
  faqOpen = signal<number | null>(null);

  features: Feature[] = [
    { icon: '⚡', title: 'Lightning Fast', description: 'Built on cutting-edge infrastructure for sub-millisecond response times globally.' },
    { icon: '🔒', title: 'Enterprise Security', description: 'SOC 2 Type II certified with end-to-end encryption and advanced threat protection.' },
    { icon: '🔄', title: 'Real-time Sync', description: 'Instant synchronization across all devices and team members, always up to date.' },
    { icon: '📊', title: 'Advanced Analytics', description: 'Deep insights with AI-powered dashboards and customizable reporting.' },
    { icon: '🔌', title: 'Seamless Integrations', description: 'Connect with 200+ tools including Slack, Notion, GitHub, and Salesforce.' },
    { icon: '🤖', title: 'AI-Powered', description: 'Smart automation and predictions powered by state-of-the-art machine learning.' },
  ];

  plans: PricingPlan[] = [
    {
      name: 'Starter',
      price: 0,
      period: 'forever',
      description: 'Perfect for individuals and small projects',
      features: ['Up to 3 projects', '1 GB storage', 'Basic analytics', 'Email support', 'API access'],
      cta: 'Start Free'
    },
    {
      name: 'Pro',
      price: 29,
      period: 'per month',
      description: 'For growing teams and businesses',
      features: ['Unlimited projects', '100 GB storage', 'Advanced analytics', 'Priority support', 'Custom integrations', 'Team collaboration', 'SSO authentication'],
      highlighted: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: 99,
      period: 'per month',
      description: 'For large organizations with custom needs',
      features: ['Everything in Pro', 'Unlimited storage', 'Dedicated account manager', '24/7 phone support', 'Custom contracts', 'SLA guarantees', 'On-premise deployment'],
      cta: 'Contact Sales'
    }
  ];

  testimonials: Testimonial[] = [
    { quote: 'FlowSync transformed how our team collaborates. We\'ve seen a 40% increase in productivity since switching.', author: 'Sarah Chen', role: 'VP of Engineering', company: 'TechCorp', avatar: '👩‍💼' },
    { quote: 'The best investment we made this year. The AI features alone have saved us countless hours.', author: 'Marcus Johnson', role: 'CEO', company: 'StartupXYZ', avatar: '👨‍💼' },
    { quote: 'Finally, a tool that actually delivers on its promises. The integrations are seamless.', author: 'Emily Rodriguez', role: 'Product Lead', company: 'InnovateCo', avatar: '👩‍🔬' },
  ];

  stats = [
    { value: '10M+', label: 'Active Users' },
    { value: '50K+', label: 'Companies' },
    { value: '99.99%', label: 'Uptime' },
    { value: '150+', label: 'Countries' },
  ];

  logos = [
    { name: 'Quantum', icon: 'Q', style: 'gradient' },
    { name: 'Nexus', icon: '◇', style: 'outline' },
    { name: 'Pulse', icon: '●', style: 'solid' },
    { name: 'Helix', icon: '⬡', style: 'gradient' },
    { name: 'Orbit', icon: '◐', style: 'solid' },
    { name: 'Apex', icon: '△', style: 'outline' },
  ];

  faqs = [
    { question: 'How does the free trial work?', answer: 'Start with a 14-day free trial of our Pro plan. No credit card required. At the end of your trial, choose the plan that works best for you.' },
    { question: 'Can I change plans later?', answer: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any payments.' },
    { question: 'What payment methods do you accept?', answer: 'We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and wire transfers for annual Enterprise plans.' },
    { question: 'Is my data secure?', answer: 'Yes! We\'re SOC 2 Type II certified, use AES-256 encryption at rest and TLS 1.3 in transit. Your data is backed up daily across multiple regions.' },
    { question: 'Do you offer discounts for startups?', answer: 'Yes! We offer 50% off for eligible startups through our FlowSync for Startups program. Apply through our website.' },
  ];

  toggleMenu() {
    this.mobileMenuOpen.update(v => !v);
  }

  toggleFaq(index: number) {
    this.faqOpen.update(current => current === index ? null : index);
  }

  getPrice(plan: PricingPlan): number {
    if (plan.price === 0) return 0;
    return this.billingPeriod() === 'annual' ? Math.floor(plan.price * 0.8) : plan.price;
  }
}

