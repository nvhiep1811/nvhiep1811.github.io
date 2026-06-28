export interface SocialLink {
  name: string;
  url: string;
}

export interface Profile {
  name: string;
  title: string;
  email: string;
  location: string;
  phone: string;
  gpa: string;
  toeic: string;
  availability: string;
  about: string;
  socials: {
    github: SocialLink;
    linkedin: SocialLink;
    email: SocialLink;
  };
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  title: string;
  role: string;
  date: string;
  repository: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  featured: boolean;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  gpa: string;
}

export interface Certification {
  name: string;
  score: string;
  date: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}
