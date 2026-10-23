export type App = {
  slug: string;
  name: string;
  tagline: string;
  bullets: [string, string, string];
  description: string;
  icon: string;
  screenshots: string[];
  platforms: string[];
  appStoreUrl: string;
  featured: boolean;
};

export const APPS: App[] = [
  {
    slug: 'treasure-life',
    name: 'Treasure Life',
    tagline: 'Life Countdown',
    bullets: [
      'Your life as a dot timeline',
      'Home and Lock Screen widgets',
      'Apple Watch and iPhone Duo',
    ],
    description:
      'A calm countdown that turns your life, this year, this month, this week, and today into dots you can see at a glance. Your birth date stays on your device.',
    icon: '/assets/treasure-life-logo.webp',
    screenshots: [
      '/assets/treasure-life-screenshot-1.webp',
      '/assets/treasure-life-screenshot-2.webp',
      '/assets/treasure-life-screenshot-3.webp',
    ],
    platforms: ['iOS', 'iPadOS', 'watchOS'],
    appStoreUrl: 'https://apps.apple.com/us/app/treasure-life/id6741671694',
    featured: true,
  },
  {
    slug: 'riskm',
    name: 'RiskM',
    tagline: 'Trading Utility',
    bullets: [
      'Position sizing workflow',
      'Risk-aware inputs',
      'Fast native calculations',
    ],
    description:
      'A focused trading utility that turns risk, capital, and entry assumptions into quick position-sizing decisions.',
    icon: '/assets/riskm-logo.webp',
    screenshots: [
      '/assets/riskm-screenshot-1.webp',
      '/assets/riskm-screenshot-2.webp',
      '/assets/riskm-screenshot-3.webp',
    ],
    platforms: ['iOS'],
    appStoreUrl:
      'https://apps.apple.com/us/app/riskm-manage-trading-risk/id6737332775',
    featured: false,
  },
  {
    slug: 'tomorrow',
    name: 'Tomorrow',
    tagline: 'Focus & Productivity',
    bullets: ['Daily task reset', 'Simple archive model', 'Low-friction planning'],
    description:
      'A minimal planning app designed around one useful list per day instead of a sprawling task-management system.',
    icon: '/assets/tomorrow-logo.webp',
    screenshots: [
      '/assets/tomorrow-screenshot-1.webp',
      '/assets/tomorrow-screenshot-2.webp',
      '/assets/tomorrow-screenshot-3.webp',
    ],
    platforms: ['iOS'],
    appStoreUrl:
      'https://apps.apple.com/us/app/tomorrow-optimized-to-do-list/id1533441215',
    featured: false,
  },
  {
    slug: 'persona',
    name: 'Persona',
    tagline: 'MBTI Growth',
    bullets: ['Quiz-led onboarding', 'Personalized guidance', 'Daily reflection loops'],
    description:
      'A personality-growth app with onboarding, mood inputs, and practical daily prompts shaped around MBTI-style reflection.',
    icon: '/assets/persona-logo.webp',
    screenshots: [
      '/assets/persona-screenshot-1.webp',
      '/assets/persona-screenshot-2.webp',
      '/assets/persona-screenshot-3.webp',
    ],
    platforms: ['iOS'],
    appStoreUrl:
      'https://apps.apple.com/us/app/persona-mbti-growth-mastery/id6745158056',
    featured: false,
  },
  {
    slug: 'contactsweeper',
    name: 'ContactSweeper',
    tagline: 'Contact Cleaner',
    bullets: [
      'Contacts permission flow',
      'Duplicate cleanup tools',
      'On-device processing',
    ],
    description:
      'A contacts utility for cleaning duplicate or messy address-book data while keeping processing on the device.',
    icon: '/assets/contactsweeper-logo.webp',
    screenshots: [
      '/assets/contactsweeper-screenshot-1.webp',
      '/assets/contactsweeper-screenshot-2.webp',
      '/assets/contactsweeper-screenshot-3.webp',
    ],
    platforms: ['iOS'],
    appStoreUrl:
      'https://apps.apple.com/us/app/contactsweeper-clean-merge/id6749838639',
    featured: false,
  },
];

export const SOCIALS = {
  email: 'mailto:russellongdev@gmail.com',
  linkedin: 'https://linkedin.com/in/russellry',
  appstore: 'https://apps.apple.com/us/developer/russell-ong/id1533441487',
};
