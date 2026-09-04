"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/app/data/projects";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import PageLoader from "@/app/components/ui/PageLoader";
import { usePageLoader } from "@/app/hooks/usePageLoader";

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function ProjectsArchive() {
  const [searchQuery, setSearchQuery] = useState("");
  const isLoading = usePageLoader();

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      if (p.hidden) return false;
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchTitle = p.title.toLowerCase().includes(query);
        const matchDesc = p.description.toLowerCase().includes(query);
        const matchTags = p.tags.some((t) => t.toLowerCase().includes(query));
        const matchRoleTags = p.roleTags?.some((t) => t.toLowerCase().includes(query));
        return matchTitle || matchDesc || matchTags || matchRoleTags;
      }
      return true;
    });
  }, [searchQuery]);

  return (
    <>
      <PageLoader isLoading={isLoading} />
      <Navbar />
      <main className="min-h-screen pt-28 pb-16 relative px-6 bg-background">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 10%, rgba(59, 130, 246, 0.03) 0%, transparent 50%)",
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col gap-4 mb-12">
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-text-primary">
              Projects <span className="gradient-text">Archive</span>
            </h1>
            <p className="text-text-secondary text-base md:text-lg max-w-xl">
              A comprehensive collection of applications, student organization platforms, and code experimentations I&apos;ve built.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            <div className="relative w-full md:max-w-sm">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search projects by name or tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-background-card border border-border text-text-primary text-sm focus:border-accent focus:outline-none transition-all duration-300 placeholder:text-text-muted"
              />
            </div>
          </div>

          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              <motion.div
                key={searchQuery}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={gridVariants}
                initial="hidden"
                animate="visible"
              >
                {filteredProjects.map((project) => (
                  <Link href={`/projects/${project.id}`} key={project.id} className="block h-full cursor-pointer">
                    <motion.div
                      className="group glass-card rounded-2xl overflow-hidden border-glow border-glow-hover transition-all duration-300 flex flex-col h-full"
                      variants={cardVariants}
                      whileHover={{ y: -6, scale: 1.01 }}
                      layout
                    >
                      <div className="relative overflow-hidden h-48 shrink-0 bg-background-card">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                          <span className="px-4 py-2 rounded-xl bg-background-card/90 text-accent text-xs font-mono font-bold tracking-wider border border-accent/20">
                            View Detail
                          </span>
                        </div>
                      </div>

                      <div className="p-6 flex flex-col grow justify-between">
                        <div>
                          <h3 className="text-lg font-heading font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                            {project.description}
                          </p>
                        </div>
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
                  </Link>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <p className="text-text-secondary text-base">No projects match your search query.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </>
  );
}
