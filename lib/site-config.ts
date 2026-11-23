export type SocialPlatform = {
  id: string;
  label: string;
  handle: string;
  url: string;
  followers: number;
  followersDisplay: string;
  metricLabel: string;
};

export type ProjectCategory =
  | 'full-stack'
  | 'business'
  | 'ai-cloud'
  | 'all';

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  urlLabel: string;
  category: Exclude<ProjectCategory, 'all'>;
  tags: string[];
  architecture: string[];
  features: string[];
  summary: string;
  accent: 'cyan' | 'gold';
};

export type TimelineItem = {
  id: string;
  year: string;
  title: string;
  description: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  accent: 'cyan' | 'gold';
};

export type BentoItem = {
  id: string;
  title: string;
  description: string;
  accent: 'cyan' | 'gold';
  span?: 'wide' | 'tall' | 'normal';
};

export const siteConfig = {
  name: 'Widmison Francois',
  shortName: 'WF.',
  domain: 'https://widmisonfrancois.com',
  email: 'widmisonfrancois@royoltechnology.com',
  location: 'Florida, US',
  locationShort: 'Florida',
  jobTitle: 'Full-Stack Web Developer & AI Digital Marketing Strategist',
  headline:
    'Building High-Performance Web Applications & AI-Powered Digital Growth Engines.',
  subheadline:
    'Widmison Francois combines production full-stack engineering (Next.js, Python, FastAPI) with data-driven digital marketing—shipping custom web platforms like Mex509 and scaling Royol Technology past 1 Million+ cross-platform followers with generative AI workflows.',
  availability:
    'Open for Web Engineering, AI Growth & Brand Partnerships',
  eyebrow:
    'Florida • Full-Stack Web Developer & AI Growth Architect',
  alumniOf: {
    name: 'Palm Beach State College',
    program: 'Computer Programming',
    year: '2020',
  },
  organization: {
    name: 'Royol Technology',
    url: 'https://royoltechnology.com',
    linksUrl: 'https://links.royoltechnology.com',
  },
  knowsAbout: [
    'Full-Stack Web Development',
    'Next.js',
    'TypeScript',
    'Python',
    'FastAPI',
    'Technical SEO',
    'AI Digital Marketing',
    'Social Media Growth Strategy',
    'Generative AI Video Production',
    'Fiber-Optic Networking',
  ] as const,
  sameAs: [
    'https://royoltechnology.com',
    'https://links.royoltechnology.com',
    'https://tiktok.com/@royoltechnology',
    'https://www.youtube.com/@royoltechnology',
    'https://facebook.com/royoltechnology',
    'https://instagram.com/royoltechnology',
    'https://x.com/royoltechnology',
  ] as const,
  heroProof: [
    {
      id: 'fullstack',
      value: 'Full-Stack',
      label: 'Next.js, Python & Cloud Apps',
    },
    {
      id: 'audience',
      value: '1.01M+',
      label: 'Total Social Audience Built w/ AI',
    },
    {
      id: 'tiktok',
      value: '650K',
      label: 'TikTok Community (@royoltechnology)',
    },
    {
      id: 'seo',
      value: '100/100',
      label: 'Technical SEO & Performance Focus',
    },
  ],
  nav: [
    { href: '#work', label: 'Web Builds' },
    { href: '#ai-growth', label: '1M+ AI Growth' },
    { href: '#journey', label: 'Journey' },
    { href: '#beyond-code', label: 'Ecosystem' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ],
  socials: [
    {
      id: 'tiktok',
      label: 'TikTok',
      handle: '@royoltechnology',
      url: 'https://tiktok.com/@royoltechnology',
      followers: 650000,
      followersDisplay: '650K+',
      metricLabel: 'followers',
    },
    {
      id: 'facebook',
      label: 'Facebook',
      handle: 'royoltechnology',
      url: 'https://facebook.com/royoltechnology',
      followers: 258000,
      followersDisplay: '258K+',
      metricLabel: 'followers',
    },
    {
      id: 'youtube',
      label: 'YouTube',
      handle: '@royoltechnology',
      url: 'https://www.youtube.com/@royoltechnology',
      followers: 93000,
      followersDisplay: '93K+',
      metricLabel: 'subscribers',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      handle: '@royoltechnology',
      url: 'https://instagram.com/royoltechnology',
      followers: 16000,
      followersDisplay: '16K+',
      metricLabel: 'followers',
    },
  ] as SocialPlatform[],
  totalAudience: {
    value: 1017000,
    display: '1,017,000+',
    label: 'Combined cross-platform followers',
  },
  projects: [
    {
      id: 'mex509',
      title: 'Mex509 International Logistics Platform',
      subtitle: 'Full-stack shipping & logistics for US, Haiti & Dominican Republic',
      url: 'https://mex509.com',
      urlLabel: 'mex509.com',
      category: 'full-stack',
      tags: ['Next.js', 'TypeScript', 'Pricing Engine', 'i18n', 'OTP Auth'],
      architecture: [
        'Dynamic LBS zone pricing',
        'Mileage-based pickup engine',
        '4-language localization',
        'OTP-secured admin dashboards',
      ],
      features: [
        'Per-pound (LBS) zone pricing calculators across US–Haiti–DR routes',
        'Automated mileage-based pickup pricing for last-mile coordination',
        'Localization in English, Haitian Creole, French, and Spanish',
        'WhatsApp country routing for customer ops',
        'OTP-secured admin and staff dashboards',
        'Referral tracking for growth loops',
      ],
      summary:
        'Widmison Francois engineered Mex509 as a production logistics web application—pricing, localization, secure ops dashboards, and cross-border customer workflows in one platform.',
      accent: 'cyan',
    },
    {
      id: 'royol-hub',
      title: 'Royol Technology Digital Hub & AI Automation',
      subtitle: 'Agency flagship with secure intake, dashboards & AI comms',
      url: 'https://royoltechnology.com',
      urlLabel: 'royoltechnology.com',
      category: 'full-stack',
      tags: ['Next.js', 'Resend', 'Twilio', 'Admin Dashboards', 'AI Comms'],
      architecture: [
        'Secure client intake',
        'Custom admin dashboards',
        'Transactional email (Resend)',
        'AI-backed Twilio messaging',
      ],
      features: [
        'Real-time secure client intake forms',
        'Custom admin dashboards for agency operations',
        'Transactional email pipelines via Resend',
        'AI-backed customer communication with Twilio',
        'Brand + conversion UX tuned for high-intent leads',
      ],
      summary:
        'The Royol Technology flagship hub consolidates client intake, operations dashboards, and AI-assisted communication into a single engineering surface.',
      accent: 'gold',
    },
    {
      id: 'commercial-portals',
      title: 'Commercial Service & Security Web Platforms',
      subtitle: 'High-converting client sites and operational portals',
      url: 'https://royoltechnology.com',
      urlLabel: 'Client portals',
      category: 'business',
      tags: ['Responsive UI', 'Dashboards', 'Payments', 'Local SEO'],
      architecture: [
        'Client/job dashboards',
        'Payment workflows',
        'Local SEO foundations',
        'Conversion-first UX',
      ],
      features: [
        'Responsive UI/UX for commercial cleaning and security brands',
        'Client and job management dashboards',
        'Payment workflow integrations',
        'Local SEO structure for South Florida service markets',
      ],
      summary:
        'Custom operational portals and marketing sites built for service businesses that need both conversion rate and day-to-day operational clarity.',
      accent: 'cyan',
    },
    {
      id: 'neural-audio',
      title: 'Neural Audio & AI Studio Web Tools',
      subtitle: 'Python / FastAPI / Gradio interfaces for audio AI',
      url: 'https://royoltechnology.com',
      urlLabel: 'Studio tools',
      category: 'ai-cloud',
      tags: ['Python', 'FastAPI', 'Gradio', 'RVC', 'Stem Separation'],
      architecture: [
        'Stem separation pipelines',
        'RVC voice/instrument modeling',
        'Custom dataset training',
        'Gradio operator UI',
      ],
      features: [
        'Web interfaces for audio stem separation',
        'RVC voice and instrument modeling workflows',
        'Custom dataset training tooling',
        'Operator-friendly Gradio UIs over FastAPI backends',
      ],
      summary:
        'Hands-on AI studio tooling that turns neural audio research workflows into usable web interfaces for production creative work.',
      accent: 'gold',
    },
  ] as Project[],
  projectFilters: [
    { id: 'all', label: 'All' },
    { id: 'full-stack', label: 'Full-Stack Platforms' },
    { id: 'business', label: 'Business & Client Portals' },
    { id: 'ai-cloud', label: 'AI & Cloud Tools' },
  ] as { id: ProjectCategory; label: string }[],
  playbook: [
    {
      id: 'video',
      step: '01',
      title: 'Generative AI Video',
      description:
        'Produce high-retention short-form video at scale with AI-assisted scripting, editing, and visual pipelines tuned for platform-native formats.',
    },
    {
      id: 'audio',
      step: '02',
      title: 'AI Audio & Cultural Resonance',
      description:
        'Layer neural audio, voice, and culturally resonant hooks so content lands with the communities Royol Technology actually serves.',
    },
    {
      id: 'seo',
      step: '03',
      title: 'Algorithmic SEO & Syndication',
      description:
        'Syndicate across TikTok, YouTube, Facebook, and Instagram with metadata, hooks, and distribution timing informed by retention data.',
    },
    {
      id: 'monetize',
      step: '04',
      title: 'Monetization & Funnel Conversion',
      description:
        'Convert attention into agency inbound, brand partnerships, and product demand with landing systems engineered for trust and speed.',
    },
  ],
  timeline: [
    {
      id: 'college',
      year: '2020',
      title: 'Palm Beach State College',
      description:
        'Widmison Francois graduated from Palm Beach State College in 2020 with Computer Programming, grounding full-stack engineering fundamentals that still shape every production build.',
    },
    {
      id: 'founding',
      year: '2020',
      title: 'Founding Royol Technology',
      description:
        'Started Royol Technology in 2020 as a digital growth and engineering studio—pairing custom web platforms with AI-driven content systems.',
    },
    {
      id: 'mex509-fiber',
      year: '2024–2025',
      title: 'Mex509 & Fiber Infrastructure',
      description:
        'Shipped Mex509 logistics platforms and gained hands-on fiber-optic network experience—bridging software systems with physical infrastructure.',
    },
    {
      id: 'ai-media',
      year: '2025–2026',
      title: '1M+ AI Media Engine',
      description:
        'Scaled Royol Technology past 1,017,000+ combined followers using generative AI video/audio pipelines, retention analytics, and cross-platform syndication.',
    },
  ] as TimelineItem[],
  bento: [
    {
      id: 'engineering',
      title: 'Full-Stack Engineering',
      description:
        'Next.js, TypeScript, Python, and FastAPI systems built for real operators—pricing engines, dashboards, auth, and localization included.',
      accent: 'cyan',
      span: 'wide',
    },
    {
      id: 'marketing',
      title: 'Digital Marketing & Technical SEO',
      description:
        'Entity SEO, performance budgets, and distribution systems that turn engineering into measurable attention and inbound.',
      accent: 'gold',
      span: 'normal',
    },
    {
      id: 'fiber',
      title: 'Physical Network & Fiber Tech',
      description:
        'Hands-on fiber-optic and network infrastructure experience that informs how software meets the physical edge.',
      accent: 'cyan',
      span: 'normal',
    },
    {
      id: 'audio',
      title: 'AI Audio & Creative Direction',
      description:
        'Custom neural audio pipelines, RVC modeling, and creative direction that power culturally resonant media at scale.',
      accent: 'gold',
      span: 'wide',
    },
  ] as BentoItem[],
  services: [
    {
      id: 'web-engineering',
      title: 'Custom Web Engineering',
      description:
        'Production Next.js / TypeScript / Python platforms—logistics systems, client portals, admin dashboards, and conversion-ready marketing sites.',
      deliverables: [
        'Full-stack app architecture',
        'Secure dashboards & auth',
        'Performance + technical SEO',
      ],
      accent: 'cyan',
    },
    {
      id: 'ai-growth',
      title: 'AI Growth Systems',
      description:
        'End-to-end audience engines: generative video/audio pipelines, syndication playbooks, and funnel conversion for brands that need reach with retention.',
      deliverables: [
        'AI content pipelines',
        'Cross-platform syndication',
        'Inbound conversion funnels',
      ],
      accent: 'gold',
    },
    {
      id: 'brand-partnerships',
      title: 'Brand Partnerships',
      description:
        'Collaborate with product, media, and service brands that want Royol Technology’s engineering depth plus a proven 1M+ distribution footprint.',
      deliverables: [
        'Campaign co-builds',
        'Audience sponsorships',
        'Technical brand systems',
      ],
      accent: 'cyan',
    },
  ] as Service[],
  architectureModes: {
    builder: {
      id: 'builder',
      label: 'Builder',
      title: 'Full-Stack Architecture',
      accent: 'cyan' as const,
      points: [
        'Next.js + TypeScript application shells',
        'Python / FastAPI services and pricing engines',
        'OTP auth, dashboards, and operational workflows',
        'Localization, payments, and performance budgets',
      ],
    },
    growth: {
      id: 'growth',
      label: 'Growth Marketer',
      title: 'AI Distribution Architecture',
      accent: 'gold' as const,
      points: [
        'Generative video + neural audio pipelines',
        'Retention-informed hook and format testing',
        'Cross-platform syndication to 1M+ reach',
        'Landing systems that convert attention to revenue',
      ],
    },
  },
  formspreeEndpoint: '',
  web3formsAccessKey: '',
} as const;

export type SiteConfig = typeof siteConfig;
