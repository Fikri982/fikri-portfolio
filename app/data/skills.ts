import { Skill } from "@/app/types/skill";

export const skills: Skill[] = [
  // 🚀 Primary Stack
  {
    name: "React",
    category: "primary",
    icon: "/skills/react.svg",
    badge: "UI Library",
  },
  {
    name: "Next.js",
    category: "primary",
    icon: "/skills/nextjs.svg",
    badge: "Framework",
  },
  {
    name: "TypeScript",
    category: "primary",
    icon: "/skills/typescript.svg",
    badge: "Language",
  },
  {
    name: "Tailwind CSS",
    category: "primary",
    icon: "/skills/tailwindcss.svg",
    badge: "Styling",
  },

  // ⚙️ Backend & Data
  {
    name: "Go (Golang)",
    category: "backend",
    icon: "/skills/golang.svg",
    badge: "API & Microservices",
  },
  {
    name: "Node.js",
    category: "backend",
    icon: "/skills/nodejs.svg",
    badge: "Runtime",
  },
  {
    name: "Supabase",
    category: "backend",
    icon: "/skills/supabase.svg",
    badge: "BaaS & Auth",
  },
  {
    name: "Convex",
    category: "backend",
    icon: "/skills/convex.svg",
    badge: "Realtime BaaS",
  },
  {
    name: "PostgreSQL",
    category: "backend",
    icon: "/skills/postgresql.svg",
    badge: "Relational DB",
  },

  // 🛠️ Developer Tools
  {
    name: "Git",
    category: "tools",
    icon: "/skills/git.svg",
    badge: "Version Control",
  },
  {
    name: "GitHub",
    category: "tools",
    icon: "/skills/github-new.svg",
    badge: "Collaboration & CI",
  },
  {
    name: "Docker",
    category: "tools",
    icon: "/skills/docker.svg",
    badge: "Containerization",
  },
  {
    name: "Figma",
    category: "tools",
    icon: "/skills/figma.svg",
    badge: "UI/UX Design",
  },
  {
    name: "VS Code",
    category: "tools",
    icon: "/skills/vscode.svg",
    badge: "Code Editor",
  },
];

export const engineeringPractices = [
  { name: "Agile Scrum", badge: "Workflow" },
  { name: "RESTful APIs", badge: "Integration" },
  { name: "System Architecture", badge: "Design" },
  { name: "Code Review & Quality", badge: "Standards" },
  { name: "Cross-Team Leadership", badge: "Collaboration" },
];
