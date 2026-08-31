export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tags?: string[];
  type: "work" | "organization" | "freelance";
}
