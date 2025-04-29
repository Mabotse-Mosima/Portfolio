export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  projectUrl: string;
  githubUrl: string;
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface Tool {
  name: string;
  level: string;
  icon: string;
}

export interface Publication {
  id: number;
  title: string;
  journal: string;
  year: number;
  description: string;
  paperUrl: string;
  codeUrl: string;
}

export interface Education {
  institution: string;
  degree: string;
  years: string;
}

export interface Experience {
  position: string;
  company: string;
  years: string;
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  about: string;
  location: string;
  email: string;
  phone: string;
  resumeUrl: string;
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  tools: Tool[];
  projects: Project[];
  publications: Publication[];
  socials: Social[];
}
