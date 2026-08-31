export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  roleTags?: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  hidden?: boolean;
  role: string;
  type: string;
  year: string;
  status: string;
}
