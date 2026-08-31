"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/app/data/projects";
import { Project } from "@/app/types/project";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function ProjectsSection() {
  const featured = projects.filter((p) => p.featured && !p.hidden);

  return (
    <section id="projects" className="section-padding relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(59, 130, 246, 0.02) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Featured Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featured.map((project) => (
            <Link href={`/projects/${project.id}`} key={project.id} className="block h-full cursor-pointer">
              <ProjectCard
                project={project}
                featured
              />
            </Link>
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium border border-border text-text-primary hover:border-border-hover hover:bg-surface transition-all duration-300 cursor-pointer"
          >
            <span>View All Projects</span>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <motion.div
      className="group glass-card rounded-2xl overflow-hidden border-glow border-glow-hover transition-all duration-300 flex flex-col h-full"
      variants={cardVariants}
      whileHover={{ y: -6, scale: 1.01 }}
    >
      {/* Image Container */}
      <div className={`relative overflow-hidden shrink-0 bg-background-card ${featured ? "h-52 md:h-60" : "h-44"}`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"}
        />
        {/* Hover Overlay indicator */}
        <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
          <span className="px-4 py-2 rounded-xl bg-background-card/90 text-accent text-xs font-mono font-bold tracking-wider border border-accent/20">
            View Detail
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col grow justify-between">
        <div>
          <h3 className="text-lg font-heading font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>
        </div>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.roleTags?.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-accent text-background text-xs font-semibold tracking-wide"
            >
              {tag}
            </span>
          ))}
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-accent-dim text-accent text-xs font-semibold tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
