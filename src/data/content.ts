import type { Service, Technology, CaseStudy, Testimonial, Statistic } from '../types';

export const services: Service[] = [
  {
    id: 'web-dev',
    title: 'Web Engineering',
    description:
      'High-performance web platforms, SaaS products and internal tools built for scale, speed and maintainability.',
    icon: 'Globe',
    features: [
      'SaaS & product platforms',
      'Design systems & UI engineering',
      'APIs & real-time backends',
      'Performance & Core Web Vitals',
    ],
    color: 'ignite',
    span: 'span-2',
  },
  {
    id: 'mobile-dev',
    title: 'Mobile Development',
    description:
      'Native and cross-platform apps that feel effortless — from prototype to millions of installs on iOS and Android.',
    icon: 'Smartphone',
    features: [
      'React Native & Flutter',
      'Native iOS & Android',
      'Offline-first architecture',
      'App Store & Play launch',
    ],
    color: 'ignite',
    span: 'span-2',
  },
  {
    id: 'cloud-services',
    title: 'Cloud & Platform',
    description:
      'Resilient, cost-aware cloud foundations on AWS, GCP and Azure — from serverless to multi-region infrastructure.',
    icon: 'Cloud',
    features: [
      'Cloud architecture & migration',
      'Serverless & containers',
      'Cost & reliability engineering',
      'Disaster recovery',
    ],
    color: 'ignite',
    span: 'span-2',
  },
  {
    id: 'blockchain',
    title: 'Blockchain & Web3',
    description:
      'Production smart contracts, DeFi and on-chain products — audited, gas-optimised and shipped across EVM chains and Solana.',
    icon: 'Blocks',
    features: [
      'Smart contracts (Solidity / Rust)',
      'DeFi, staking & tokenomics',
      'Wallets & dApp front-ends',
      'Security reviews & audits',
    ],
    color: 'ignite',
    span: 'span-3',
    feature: true,
  },
  {
    id: 'ai-systems',
    title: 'AI & Agentic Systems',
    description:
      'Autonomous agents, copilots, RAG systems and classical ML — from LLM workflows to predictive models that run in production.',
    icon: 'Bot',
    features: [
      'AI agents & tool orchestration',
      'RAG & vector search',
      'LLM apps & copilots',
      'Predictive analytics & NLP',
      'Computer vision',
      'Evals, guardrails & MLOps',
    ],
    color: 'signal',
    span: 'span-3',
    feature: true,
  },
  {
    id: 'devops',
    title: 'DevOps & Automation',
    description:
      'Ship faster with automated CI/CD, infrastructure as code and observability baked into every release.',
    icon: 'Settings',
    features: [
      'CI/CD pipelines',
      'Infrastructure as code',
      'Kubernetes & containers',
      'Monitoring & alerting',
    ],
    color: 'ignite',
    span: 'span-3',
  },
  {
    id: 'cybersecurity',
    title: 'Security & Assurance',
    description:
      'Protect your product and users with proactive audits, penetration testing and compliance-ready practices.',
    icon: 'Shield',
    features: [
      'Security audits',
      'Penetration testing',
      'Smart-contract security',
      'Compliance readiness',
    ],
    color: 'ignite',
    span: 'span-3',
  },
];

export const technologies: Technology[] = [
  // Frontend
  { id: 'react', name: 'React', category: 'Frontend' },
  { id: 'nextjs', name: 'Next.js', category: 'Frontend' },
  { id: 'typescript', name: 'TypeScript', category: 'Frontend' },
  { id: 'vue', name: 'Vue.js', category: 'Frontend' },
  { id: 'tailwind', name: 'Tailwind', category: 'Frontend' },

  // Backend
  { id: 'nodejs', name: 'Node.js', category: 'Backend' },
  { id: 'python', name: 'Python', category: 'Backend' },
  { id: 'golang', name: 'Go', category: 'Backend' },
  { id: 'rust', name: 'Rust', category: 'Backend' },
  { id: 'graphql', name: 'GraphQL', category: 'Backend' },

  // Mobile
  { id: 'react-native', name: 'React Native', category: 'Mobile' },
  { id: 'flutter', name: 'Flutter', category: 'Mobile' },
  { id: 'swift', name: 'Swift', category: 'Mobile' },
  { id: 'kotlin', name: 'Kotlin', category: 'Mobile' },

  // Blockchain
  { id: 'solidity', name: 'Solidity', category: 'Blockchain' },
  { id: 'ethereum', name: 'Ethereum', category: 'Blockchain' },
  { id: 'solana', name: 'Solana', category: 'Blockchain' },
  { id: 'hardhat', name: 'Hardhat', category: 'Blockchain' },
  { id: 'thegraph', name: 'The Graph', category: 'Blockchain' },

  // AI / ML
  { id: 'openai', name: 'OpenAI', category: 'AI/ML' },
  { id: 'langchain', name: 'LangChain', category: 'AI/ML' },
  { id: 'pytorch', name: 'PyTorch', category: 'AI/ML' },
  { id: 'tensorflow', name: 'TensorFlow', category: 'AI/ML' },
  { id: 'pinecone', name: 'Vector DB', category: 'AI/ML' },

  // Cloud & DevOps
  { id: 'aws', name: 'AWS', category: 'Cloud' },
  { id: 'gcp', name: 'Google Cloud', category: 'Cloud' },
  { id: 'docker', name: 'Docker', category: 'DevOps' },
  { id: 'kubernetes', name: 'Kubernetes', category: 'DevOps' },
  { id: 'terraform', name: 'Terraform', category: 'DevOps' },

  // Databases
  { id: 'postgresql', name: 'PostgreSQL', category: 'Database' },
  { id: 'mongodb', name: 'MongoDB', category: 'Database' },
  { id: 'redis', name: 'Redis', category: 'Database' },
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'defi-protocol',
    title: 'DeFi Staking Protocol',
    client: 'Web3 Startup',
    industry: 'Blockchain / DeFi',
    description:
      'Designed and audited a multi-chain staking and rewards protocol with gas-optimised smart contracts and a real-time dApp dashboard.',
    image: '',
    technologies: ['Solidity', 'Hardhat', 'The Graph', 'Next.js', 'Ethers.js'],
    results: [
      { metric: '$40M+', label: 'total value locked' },
      { metric: '0', label: 'critical audit findings' },
      { metric: '38%', label: 'lower gas per txn' },
    ],
  },
  {
    id: 'ai-support-agent',
    title: 'Agentic Support Copilot',
    client: 'B2B SaaS Platform',
    industry: 'Agentic AI / LLM',
    description:
      'Built an autonomous support agent using RAG over the customer knowledge base with tool-calling, guardrails and human handoff.',
    image: '',
    technologies: ['OpenAI', 'LangChain', 'Vector DB', 'Python', 'FastAPI'],
    results: [
      { metric: '64%', label: 'tickets auto-resolved' },
      { metric: '3.5x', label: 'faster response time' },
      { metric: '92%', label: 'answer accuracy' },
    ],
  },
  {
    id: 'fintech-platform',
    title: 'Digital Banking Platform',
    client: 'FinTech Scale-up',
    industry: 'Financial Services',
    description:
      'Delivered a secure, cloud-native banking platform with real-time payments, fraud detection and a polished mobile experience.',
    image: '',
    technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Kubernetes'],
    results: [
      { metric: '99.99%', label: 'uptime' },
      { metric: '40%', label: 'faster transactions' },
      { metric: '1M+', label: 'active users' },
    ],
  },
  {
    id: 'commerce',
    title: 'Headless Commerce Engine',
    client: 'Global Retail Brand',
    industry: 'E-Commerce',
    description:
      'Re-platformed a legacy store into a headless, edge-rendered commerce engine with personalised search and sub-second loads.',
    image: '',
    technologies: ['Next.js', 'Go', 'GCP', 'Redis', 'Algolia'],
    results: [
      { metric: '2s → 0.8s', label: 'page load' },
      { metric: '35%', label: 'higher conversion' },
      { metric: '500K', label: 'SKUs indexed' },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'VP of Engineering',
    role: 'Engineering',
    company: 'US-based FinTech',
    content:
      'Indus2 embedded with our team and shipped a cloud-native platform that cut our deployment time dramatically. They treat our product like their own.',
    avatar: '',
    rating: 5,
  },
  {
    id: '2',
    name: 'Founder',
    role: 'Founder',
    company: 'Web3 Protocol',
    content:
      'Their smart-contract work was rigorous and audit-ready from day one. Gas optimisation alone saved our users a meaningful amount every month.',
    avatar: '',
    rating: 5,
  },
  {
    id: '3',
    name: 'Head of Product',
    role: 'Product',
    company: 'B2B SaaS',
    content:
      'The agentic AI copilot they built now resolves the majority of our support volume. It was thoughtfully engineered with real guardrails, not a demo.',
    avatar: '',
    rating: 5,
  },
  {
    id: '4',
    name: 'CTO',
    role: 'Technology',
    company: 'HealthTech',
    content:
      'Security and compliance were handled with genuine care. Indus2 delivered a robust platform our clinicians and patients actually trust.',
    avatar: '',
    rating: 5,
  },
];

export const statistics: Statistic[] = [
  { id: '1', value: '45', label: 'Projects Delivered', suffix: '+' },
  { id: '2', value: '12', label: 'Clients Worldwide', suffix: '+' },
  { id: '3', value: '25', label: 'Engineers & Experts', suffix: '' },
  { id: '4', value: '5', label: 'Years Building', suffix: '' },
];

export const companyInfo = {
  name: 'Indus2',
  tagline: 'Engineering ambitious software',
  description:
    'Indus2 is a product engineering studio. We design and build web, mobile, cloud, blockchain/Web3 and agentic-AI systems — turning ambitious ideas into shipped, scalable software.',
  email: 'support@indus2.tech',
  locations: 'Ahmedabad, India · Dubai, UAE',
  social: {
    linkedin: 'https://linkedin.com/company/indus2',
    twitter: 'https://twitter.com/indus2',
    github: 'https://github.com/indus2',
  },
};
