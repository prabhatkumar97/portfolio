export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubLink: string;
  liveLink?: string;
  period: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  link: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  icon?: string;
  image?:string;
  link?:string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  grade: string;
  period: string;
  location: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}