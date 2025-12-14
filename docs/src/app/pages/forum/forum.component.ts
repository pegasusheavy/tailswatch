import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DecimalPipe } from '@angular/common';
import { ThemeSelectorComponent } from '../../components/theme-selector/theme-selector.component';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  threads: number;
  posts: number;
  lastPost: {
    title: string;
    author: string;
    time: string;
  };
}

interface Thread {
  id: number;
  title: string;
  author: string;
  authorAvatar: string;
  authorRole: string;
  category: string;
  replies: number;
  views: number;
  lastReply: {
    author: string;
    time: string;
  };
  isPinned?: boolean;
  isHot?: boolean;
  isLocked?: boolean;
  tags?: string[];
}

interface Post {
  id: number;
  author: string;
  avatar: string;
  role: string;
  joinDate: string;
  postCount: number;
  content: string;
  time: string;
  likes: number;
  isOP?: boolean;
}

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [RouterModule, DecimalPipe, ThemeSelectorComponent, FaIconComponent],
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.scss'
})
export class ForumComponent {
  mobileMenuOpen = signal(false);
  currentView = signal<'categories' | 'threads' | 'thread'>('categories');
  selectedCategory = signal<string | null>(null);
  selectedThread = signal<Thread | null>(null);
  searchOpen = signal(false);

  categories: Category[] = [
    {
      id: 'general',
      name: 'General Discussion',
      description: 'Talk about anything and everything',
      icon: '💬',
      threads: 1243,
      posts: 15782,
      lastPost: { title: 'Welcome to our community!', author: 'Admin', time: '2 min ago' }
    },
    {
      id: 'help',
      name: 'Help & Support',
      description: 'Get help from the community',
      icon: '❓',
      threads: 892,
      posts: 8934,
      lastPost: { title: 'How do I reset my password?', author: 'NewUser42', time: '15 min ago' }
    },
    {
      id: 'announcements',
      name: 'Announcements',
      description: 'Official news and updates',
      icon: '📢',
      threads: 156,
      posts: 2341,
      lastPost: { title: 'Version 2.0 is here!', author: 'Admin', time: '1 hour ago' }
    },
    {
      id: 'showcase',
      name: 'Showcase',
      description: 'Share your projects and creations',
      icon: '🎨',
      threads: 567,
      posts: 4521,
      lastPost: { title: 'My new portfolio site', author: 'DesignPro', time: '3 hours ago' }
    },
    {
      id: 'tutorials',
      name: 'Tutorials & Guides',
      description: 'Learn from community tutorials',
      icon: '📚',
      threads: 324,
      posts: 2876,
      lastPost: { title: 'Complete CSS Grid Guide', author: 'CodeMaster', time: '5 hours ago' }
    },
    {
      id: 'offtopic',
      name: 'Off Topic',
      description: 'Non-related discussions',
      icon: '🎮',
      threads: 2156,
      posts: 34521,
      lastPost: { title: 'What games are you playing?', author: 'Gamer99', time: '30 min ago' }
    },
  ];

  threads: Thread[] = [
    { id: 1, title: '📌 Community Guidelines - Please Read!', author: 'Admin', authorAvatar: '👑', authorRole: 'Administrator', category: 'general', replies: 45, views: 12453, lastReply: { author: 'Moderator', time: '1 day ago' }, isPinned: true },
    { id: 2, title: '📌 Introduce Yourself Here!', author: 'Admin', authorAvatar: '👑', authorRole: 'Administrator', category: 'general', replies: 892, views: 45123, lastReply: { author: 'NewMember', time: '5 min ago' }, isPinned: true },
    { id: 3, title: 'What\'s your favorite CSS framework?', author: 'DevGuru', authorAvatar: '🧑‍💻', authorRole: 'Senior Member', category: 'general', replies: 156, views: 3421, lastReply: { author: 'TailwindFan', time: '20 min ago' }, isHot: true, tags: ['css', 'frameworks', 'poll'] },
    { id: 4, title: 'Best practices for responsive design in 2025', author: 'DesignPro', authorAvatar: '🎨', authorRole: 'Member', category: 'general', replies: 78, views: 2156, lastReply: { author: 'WebDev101', time: '1 hour ago' }, tags: ['responsive', 'design'] },
    { id: 5, title: 'How I built a SaaS in 30 days', author: 'StartupFounder', authorAvatar: '🚀', authorRole: 'VIP Member', category: 'general', replies: 234, views: 8976, lastReply: { author: 'Entrepreneur', time: '2 hours ago' }, isHot: true, tags: ['saas', 'startup', 'guide'] },
    { id: 6, title: 'Dark mode vs Light mode - The eternal debate', author: 'UIExpert', authorAvatar: '🌓', authorRole: 'Member', category: 'general', replies: 312, views: 5432, lastReply: { author: 'DarkModeLover', time: '45 min ago' }, tags: ['ui', 'themes'] },
    { id: 7, title: 'Weekly coding challenge #42', author: 'CodeMaster', authorAvatar: '💻', authorRole: 'Moderator', category: 'general', replies: 67, views: 1234, lastReply: { author: 'ChallengeWinner', time: '3 hours ago' }, tags: ['challenge', 'coding'] },
    { id: 8, title: 'Is TypeScript worth learning in 2025?', author: 'JSNinja', authorAvatar: '🥷', authorRole: 'Member', category: 'general', replies: 189, views: 4567, lastReply: { author: 'TSFan', time: '1 hour ago' }, isHot: true, tags: ['typescript', 'javascript'] },
  ];

  posts: Post[] = [
    { id: 1, author: 'DevGuru', avatar: '🧑‍💻', role: 'Senior Member', joinDate: 'Jan 2020', postCount: 1234, content: 'Hey everyone! I\'ve been thinking about this topic for a while and wanted to get your opinions.\n\nWhat\'s your favorite CSS framework and why? I\'ve been using Tailwind CSS for the past year and absolutely love it. The utility-first approach really clicked with me.\n\nWhat about you all? Bootstrap? Bulma? Something else entirely?', time: '2 hours ago', likes: 42, isOP: true },
    { id: 2, author: 'TailwindFan', avatar: '💨', role: 'Member', joinDate: 'Mar 2022', postCount: 567, content: 'Tailwind CSS all the way! 🎉\n\nThe developer experience is unmatched. Once you get used to the utility classes, you can build UIs so much faster. Plus, the new v4 features are amazing!\n\nThe only downside is the HTML can get a bit verbose, but with component extraction, it\'s not really an issue.', time: '1 hour ago', likes: 28 },
    { id: 3, author: 'BootstrapVet', avatar: '🅱️', role: 'Veteran', joinDate: 'Dec 2018', postCount: 2341, content: 'I still prefer Bootstrap for quick prototypes. Been using it for years and the component library is mature.\n\nThat said, I\'ve been experimenting with Tailwind on side projects and I can see the appeal. Different tools for different jobs!', time: '45 min ago', likes: 15 },
    { id: 4, author: 'CSSPurist', avatar: '✨', role: 'Member', joinDate: 'Jun 2021', postCount: 432, content: 'Hot take: Just use vanilla CSS with custom properties! 😄\n\nWith modern CSS features like `:has()`, container queries, and the cascade layers, you don\'t really need a framework anymore. It\'s worth learning the fundamentals first.', time: '30 min ago', likes: 23 },
  ];

  onlineUsers = [
    { name: 'Admin', avatar: '👑', status: 'online' },
    { name: 'DevGuru', avatar: '🧑‍💻', status: 'online' },
    { name: 'DesignPro', avatar: '🎨', status: 'away' },
    { name: 'CodeMaster', avatar: '💻', status: 'online' },
    { name: 'NewUser42', avatar: '👤', status: 'online' },
  ];

  stats = {
    members: 12453,
    threads: 5338,
    posts: 68975,
    newest: 'ReactFan2025'
  };

  toggleMobileMenu() {
    this.mobileMenuOpen.update(v => !v);
  }

  viewCategory(categoryId: string) {
    this.selectedCategory.set(categoryId);
    this.currentView.set('threads');
  }

  viewThread(thread: Thread) {
    this.selectedThread.set(thread);
    this.currentView.set('thread');
  }

  goBack() {
    if (this.currentView() === 'thread') {
      this.currentView.set('threads');
      this.selectedThread.set(null);
    } else {
      this.currentView.set('categories');
      this.selectedCategory.set(null);
    }
  }

  getCategoryName(id: string): string {
    return this.categories.find(c => c.id === id)?.name ?? '';
  }
}

