export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
 // demoUrl: string;
  githubUrl: string;
  category: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'technical' | 'soft' | 'tools';
}