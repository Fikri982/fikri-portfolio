"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/app/types/project";
import { CaseStudy } from "@/app/types/caseStudy";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import PageLoader from "@/app/components/ui/PageLoader";
import { usePageLoader } from "@/app/hooks/usePageLoader";

interface ProjectDetailsClientProps {
  project: Project;
  study: CaseStudy | null;
}

export default function ProjectDetailsClient({ project, study }: ProjectDetailsClientProps) {
  const isLoading = usePageLoader(600);

  // Retrieve case study text or fallbacks
  const studyData = study || {
    overview: project.longDescription || project.description,
    challenge: "Developing a scalable frontend with clean architecture that balances state management and responsive styles.",
    features: [
      "Interactive User Interfaces: Tailored components adapting to user inputs.",
      "Optimized Assets: Fast rendering speeds and lightweight code blocks."
    ],
    roleContribution: `Served as the developer responsible for implementing modules, translating requirements, and refining layout codes.`,
    techDecisions: "Built using Next.js and Tailwind CSS to ensure robust styles and fast client transitions.",
    outcomeImpact: [
      "Delivered a functional deployment meeting all required client-facing specifications.",
      "Minimized frontend rendering times by removing redundant react states."
    ],
  };

  // Parse longDescription into paragraphs and list items
  const parseDescriptionContent = (text: string) => {
    return text.split("\n").map((line, idx) => {
      const trimmed = line.trim();
      if (trimmed.startsWith("•")) {
        return (
          <li key={idx} className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed mb-3">
            <span className="text-accent mt-1.5 shrink-0 text-xs">✦</span>
            <span>{trimmed.substring(1).trim()}</span>
          </li>
        );
      }
      if (trimmed === "") return null;
      return (
        <p key={idx} className="text-text-secondary text-sm leading-relaxed mb-4">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <>
      <PageLoader isLoading={isLoading} />
      <Navbar />
      
      <main className="min-h-screen pt-28 pb-16 relative bg-background px-6">
        {/* Glow overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 10%, rgba(59, 130, 246, 0.03) 0%, transparent 60%)",
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Breadcrumbs / Back button */}
          <div className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-accent text-sm font-mono hover:underline cursor-pointer"
            >
              ← Back to Archive
            </Link>
          </div>

          {/* Project Title & Short Description */}
          <div className="mb-12 max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-text-primary mb-4 leading-tight">
              {project.title}
            </h1>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Project Image Frame */}
          <div className="relative w-full h-75 md:h-125 rounded-3xl overflow-hidden border border-border/10 mb-12 shadow-2xl bg-background-card">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-contain"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>

          {/* Two Column Layout: Main Body vs Info Table */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Case Study Details (Spans 8 columns on desktop) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* 1. Overview */}
              <section id="overview" className="glass-card rounded-2xl p-6 md:p-8 border-glow border-glow-hover scroll-mt-28">
                <h2 className="text-lg font-heading font-bold text-text-primary mb-4 flex items-center gap-2 border-b border-border/10 pb-3">
                  <span className="text-accent font-mono text-sm">01.</span> Project Overview
                </h2>
                <div className="text-text-secondary text-sm leading-relaxed space-y-4">
                  {parseDescriptionContent(studyData.overview)}
                </div>
              </section>

              {/* 2. Challenge */}
              <section id="challenge" className="glass-card rounded-2xl p-6 md:p-8 border-glow border-glow-hover scroll-mt-28">
                <h2 className="text-lg font-heading font-bold text-text-primary mb-4 flex items-center gap-2 border-b border-border/10 pb-3">
                  <span className="text-accent font-mono text-sm">02.</span> The Challenge
                </h2>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {studyData.challenge}
                </p>
              </section>

              {/* 3. Features */}
              <section id="features" className="glass-card rounded-2xl p-6 md:p-8 border-glow border-glow-hover scroll-mt-28">
                <h2 className="text-lg font-heading font-bold text-text-primary mb-4 flex items-center gap-2 border-b border-border/10 pb-3">
                  <span className="text-accent font-mono text-sm">03.</span> Core Features
                </h2>
                <ul className="space-y-4">
                  {studyData.features.map((feat, idx) => {
                    const [title, desc] = feat.split(":");
                    return (
                      <li key={idx} className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed">
                        <span className="text-accent mt-1.5 shrink-0 text-xs">✦</span>
                        <div>
                          <strong className="text-text-primary font-bold">{title}</strong>
                          {desc && <span>: {desc}</span>}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </section>

              {/* 4. Role */}
              <section id="role" className="glass-card rounded-2xl p-6 md:p-8 border-glow border-glow-hover scroll-mt-28">
                <h2 className="text-lg font-heading font-bold text-text-primary mb-4 flex items-center gap-2 border-b border-border/10 pb-3">
                  <span className="text-accent font-mono text-sm">04.</span> My Role & Responsibilities
                </h2>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {studyData.roleContribution}
                </p>
              </section>

              {/* 5. Tech Stack decisions */}
              <section id="tech" className="glass-card rounded-2xl p-6 md:p-8 border-glow border-glow-hover scroll-mt-28">
                <h2 className="text-lg font-heading font-bold text-text-primary mb-4 flex items-center gap-2 border-b border-border/10 pb-3">
                  <span className="text-accent font-mono text-sm">05.</span> Tech Stack & Design Decisions
                </h2>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {studyData.techDecisions}
                </p>
              </section>

              {/* 6. Outcome */}
              <section id="outcome" className="glass-card rounded-2xl p-6 md:p-8 border-glow border-glow-hover scroll-mt-28">
                <h2 className="text-lg font-heading font-bold text-text-primary mb-4 flex items-center gap-2 border-b border-border/10 pb-3">
                  <span className="text-accent font-mono text-sm">06.</span> Outcomes & Impact
                </h2>
                <ul className="space-y-3">
                  {studyData.outcomeImpact.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed">
                      <span className="text-accent mt-1.5 shrink-0 text-xs">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Right Column: Meta Information Sidebar Table (Spans 4 columns on desktop) */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              
              {/* Metadata Panel */}
              <div className="glass-card rounded-3xl p-6 md:p-8 border-glow border-glow-hover space-y-6">
                
                {/* Meta Fields Table */}
                <div className="space-y-4 font-mono text-xs">
                  <div className="flex justify-between py-2 border-b border-border/5">
                    <span className="text-text-muted">TYPE</span>
                    <span className="text-text-primary font-bold text-right">{project.type}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/5">
                    <span className="text-text-muted">ROLE</span>
                    <span className="text-text-primary font-bold text-right">{project.role}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/5">
                    <span className="text-text-muted">BUILT</span>
                    <span className="text-text-primary font-bold text-right">{project.year}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/5">
                    <span className="text-text-muted">STATUS</span>
                    <span className="text-accent font-bold text-right">{project.status}</span>
                  </div>
                </div>

                {/* Role Tags List */}
                {project.roleTags && project.roleTags.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-mono text-text-muted uppercase tracking-wider">Roles</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.roleTags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-accent text-background text-xs font-semibold tracking-wide font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack List */}
                <div className="space-y-3">
                  <h4 className="text-[10px] font-mono text-text-muted uppercase tracking-wider">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-accent-dim text-accent text-xs font-semibold tracking-wide font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Call To Actions */}
                <div className="flex flex-col gap-3 pt-4 border-t border-border/10">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-xl bg-accent text-background font-medium text-xs font-heading text-center hover:bg-accent/90 transition-all duration-300 shadow-md shadow-accent/5 cursor-pointer"
                    >
                      Visit Live Website
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-xl border border-border text-text-primary font-medium text-xs font-heading text-center hover:border-border-hover hover:bg-surface transition-all duration-300 cursor-pointer"
                    >
                      GitHub Repository
                    </a>
                  )}
                </div>
              </div>

              {/* Sidebar TOC - On This Page */}
              <div className="glass-card rounded-2xl p-6 border-glow border-glow-hover hidden lg:block">
                <h4 className="text-xs font-mono text-text-muted uppercase tracking-wider mb-4">On this page</h4>
                <div className="space-y-2 text-xs font-mono">
                  <a href="#overview" className="block text-text-secondary hover:text-accent transition-colors duration-200">
                    • 01. Project Overview
                  </a>
                  <a href="#challenge" className="block text-text-secondary hover:text-accent transition-colors duration-200">
                    • 02. The Challenge
                  </a>
                  <a href="#features" className="block text-text-secondary hover:text-accent transition-colors duration-200">
                    • 03. Core Features
                  </a>
                  <a href="#role" className="block text-text-secondary hover:text-accent transition-colors duration-200">
                    • 04. My Role
                  </a>
                  <a href="#tech" className="block text-text-secondary hover:text-accent transition-colors duration-200">
                    • 05. Tech Decisions
                  </a>
                  <a href="#outcome" className="block text-text-secondary hover:text-accent transition-colors duration-200">
                    • 06. Outcomes & Impact
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
