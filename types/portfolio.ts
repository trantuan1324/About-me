export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  isCurrent?: boolean;
  type: 'Full-time' | 'Internship' | 'Contract' | 'Part-time';
  responsibilities: string[];
  technologies: string[];
  highlights?: string[];
}

export interface SkillItem {
  name: string;
  level: number; // 0 - 100
  iconName: string;
  description?: string;
  isFeatured?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export interface ProjectArchitectureHighlight {
  title: string;
  description: string;
  icon?: string;
}

export interface ProjectTechChoice {
  tech: string;
  reason: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  version?: string;
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  technologies: string[];
  highlights: string[];
  techChoices: ProjectTechChoice[];
  architectureHighlights: ProjectArchitectureHighlight[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  scores?: {
    skill: string;
    level: string;
  }[];
  credentialUrl?: string;
  badge?: string;
}

export interface CSFPrinciple {
  letter: 'C' | 'S' | 'F';
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  traits: string[];
}

export interface ContactInfo {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  bio: string;
  typedSkills: string[];
}
