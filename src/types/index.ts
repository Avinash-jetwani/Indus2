export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  color: string;
}

export interface Technology {
  id: string;
  name: string;
  category: string;
  icon?: string;
}

export interface CaseStudyResult {
  metric: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  description: string;
  image: string;
  technologies: string[];
  results: CaseStudyResult[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface Statistic {
  id: string;
  value: string;
  label: string;
  suffix?: string;
  prefix?: string;
}
