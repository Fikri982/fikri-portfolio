import { projects } from "@/app/data/projects";
import { caseStudies } from "@/app/data/caseStudies";
import ProjectDetailsClient from "@/app/components/projects/ProjectDetailsClient";

export async function generateStaticParams() {
  return projects
    .filter((p) => !p.hidden)
    .map((p) => ({
      id: p.id,
    }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id && !p.hidden);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6">
        <h1 className="text-4xl font-heading font-bold text-text-primary mb-4">Project Not Found</h1>
        <p className="text-text-secondary">Please check the URL or return home.</p>
      </div>
    );
  }

  const study = caseStudies[project.id] || null;

  return <ProjectDetailsClient project={project} study={study} />;
}
