export interface Education {
  id: string;
  school: string;
  degree: string;
  period: string;
  location: string;
  courses?: string[];
  gpaOrScore?: string;
  honors?: string[];
}
