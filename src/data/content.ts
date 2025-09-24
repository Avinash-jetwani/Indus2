import type { Service, Technology, CaseStudy, Testimonial, Statistic } from '../types';

export const services: Service[] = [
  {
    id: 'mobile-dev',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms.',
    icon: 'Smartphone',
    features: [
      'iOS & Android Native Apps',
      'React Native Development',
      'Flutter Applications',
      'Progressive Web Apps',
      'App Store Optimization',
      'Mobile UI/UX Design'
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Scalable, responsive web applications built with cutting-edge technologies and best practices for optimal performance.',
    icon: 'Globe',
    features: [
      'Custom Web Applications',
      'E-commerce Solutions',
      'CMS Development',
      'API Development',
      'SaaS Platforms',
      'Web Performance Optimization'
    ],
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    description: 'Comprehensive cloud solutions that ensure scalability, security, and reliability for your business infrastructure.',
    icon: 'Cloud',
    features: [
      'AWS, Azure, GCP Solutions',
      'Cloud Migration',
      'Serverless Architecture',
      'Cloud Security',
      'Container Orchestration',
      'Disaster Recovery'
    ],
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 'devops',
    title: 'DevOps & Automation',
    description: 'Streamline your development lifecycle with automated CI/CD pipelines and infrastructure as code solutions.',
    icon: 'Settings',
    features: [
      'CI/CD Pipeline Setup',
      'Infrastructure as Code',
      'Container Management',
      'Monitoring & Logging',
      'Automated Testing',
      'Security Automation'
    ],
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Leverage artificial intelligence and machine learning to transform your business with intelligent solutions.',
    icon: 'Brain',
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'Chatbot Development',
      'Data Science Solutions'
    ],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Protect your digital assets with comprehensive security solutions and threat management strategies.',
    icon: 'Shield',
    features: [
      'Security Audits',
      'Penetration Testing',
      'Vulnerability Assessment',
      'Security Compliance',
      'Incident Response',
      'Security Training'
    ],
    color: 'from-red-500 to-pink-500'
  }
];

export const technologies: Technology[] = [
  // Frontend
  { id: 'react', name: 'React', category: 'Frontend' },
  { id: 'angular', name: 'Angular', category: 'Frontend' },
  { id: 'vue', name: 'Vue.js', category: 'Frontend' },
  { id: 'nextjs', name: 'Next.js', category: 'Frontend' },
  { id: 'typescript', name: 'TypeScript', category: 'Frontend' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'Frontend' },
  
  // Backend
  { id: 'nodejs', name: 'Node.js', category: 'Backend' },
  { id: 'python', name: 'Python', category: 'Backend' },
  { id: 'java', name: 'Java', category: 'Backend' },
  { id: 'golang', name: 'Go', category: 'Backend' },
  { id: 'dotnet', name: '.NET', category: 'Backend' },
  { id: 'rust', name: 'Rust', category: 'Backend' },
  
  // Mobile
  { id: 'react-native', name: 'React Native', category: 'Mobile' },
  { id: 'flutter', name: 'Flutter', category: 'Mobile' },
  { id: 'swift', name: 'Swift', category: 'Mobile' },
  { id: 'kotlin', name: 'Kotlin', category: 'Mobile' },
  
  // Cloud & DevOps
  { id: 'aws', name: 'AWS', category: 'Cloud' },
  { id: 'azure', name: 'Azure', category: 'Cloud' },
  { id: 'gcp', name: 'Google Cloud', category: 'Cloud' },
  { id: 'docker', name: 'Docker', category: 'DevOps' },
  { id: 'kubernetes', name: 'Kubernetes', category: 'DevOps' },
  { id: 'jenkins', name: 'Jenkins', category: 'DevOps' },
  { id: 'terraform', name: 'Terraform', category: 'DevOps' },
  
  // Databases
  { id: 'postgresql', name: 'PostgreSQL', category: 'Database' },
  { id: 'mongodb', name: 'MongoDB', category: 'Database' },
  { id: 'redis', name: 'Redis', category: 'Database' },
  { id: 'mysql', name: 'MySQL', category: 'Database' },
  { id: 'elasticsearch', name: 'Elasticsearch', category: 'Database' },
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'fintech-platform',
    title: 'Digital Banking Platform',
    client: 'FinTech Innovations',
    industry: 'Financial Services',
    description: 'Developed a comprehensive digital banking platform with real-time transactions, AI-powered fraud detection, and seamless mobile experience.',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800',
    technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'],
    results: [
      '3M+ active users',
      '99.99% uptime',
      '40% reduction in transaction time',
      '60% increase in customer satisfaction'
    ]
  },
  {
    id: 'ecommerce-solution',
    title: 'E-Commerce Marketplace',
    client: 'Global Retail Corp',
    industry: 'E-Commerce',
    description: 'Built a scalable multi-vendor marketplace with advanced search, personalized recommendations, and integrated logistics management.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
    technologies: ['Next.js', 'Python', 'GCP', 'MongoDB', 'Kubernetes'],
    results: [
      '$50M+ GMV in first year',
      '500K+ products',
      '2s average page load',
      '35% increase in conversion rate'
    ]
  },
  {
    id: 'healthcare-app',
    title: 'Telemedicine Platform',
    client: 'HealthTech Solutions',
    industry: 'Healthcare',
    description: 'Created a HIPAA-compliant telemedicine platform with video consultations, prescription management, and health records integration.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
    technologies: ['React Native', 'Node.js', 'Azure', 'PostgreSQL', 'WebRTC'],
    results: [
      '100K+ consultations',
      'HIPAA compliant',
      '90% patient satisfaction',
      '50% reduction in wait times'
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechStart Inc.',
    content: 'Indus2 transformed our digital infrastructure with their cloud-first approach. Their expertise in DevOps and automation has reduced our deployment time by 70%.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'CEO',
    company: 'Global Finance Solutions',
    content: 'The mobile app developed by Indus2 exceeded our expectations. Their attention to security and user experience has made us a leader in digital banking.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Product Manager',
    company: 'E-Shop Enterprise',
    content: 'Working with Indus2 was a game-changer. They delivered a scalable e-commerce platform that handles millions of transactions seamlessly.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    rating: 5
  },
  {
    id: '4',
    name: 'David Kumar',
    role: 'Director of IT',
    company: 'Healthcare Plus',
    content: 'Their expertise in healthcare compliance and security was invaluable. Indus2 delivered a robust telemedicine solution that our patients love.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    rating: 5
  }
];

export const statistics: Statistic[] = [
  {
    id: '1',
    value: '500',
    label: 'Projects Completed',
    suffix: '+'
  },
  {
    id: '2',
    value: '150',
    label: 'Happy Clients',
    suffix: '+'
  },
  {
    id: '3',
    value: '50',
    label: 'Team Members',
    suffix: '+'
  },
  {
    id: '4',
    value: '15',
    label: 'Years of Experience',
    suffix: '+'
  }
];

export const companyInfo = {
  name: 'Indus2',
  tagline: 'Transforming Ideas into Digital Excellence',
  description: 'We are a leading IT services company specializing in cutting-edge technology solutions. From mobile and web development to cloud services and DevOps, we empower businesses to thrive in the digital age.',
  email: 'support@indus2.tech',
  phone: '+919879060420 / +971564870723',
  address: '123 Tech Boulevard, Silicon Valley, CA 94025',
  social: {
    linkedin: 'https://linkedin.com/company/indus2',
    twitter: 'https://twitter.com/indus2',
    github: 'https://github.com/indus2',
    facebook: 'https://facebook.com/indus2'
  }
};
