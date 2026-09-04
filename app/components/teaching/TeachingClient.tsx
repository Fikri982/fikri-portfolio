"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import PageLoader from "@/app/components/ui/PageLoader";
import { usePageLoader } from "@/app/hooks/usePageLoader";
import { teachingMaterials, coursePartners } from "@/app/data/teaching";
import { TeachingMaterial } from "@/app/types/teaching";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function TeachingClient() {
  const isLoading = usePageLoader();
  const [activeMaterial, setActiveMaterial] = useState<TeachingMaterial | null>(
    null,
  );

  const courses = Array.from(new Set(teachingMaterials.map((m) => m.course)));

  return (
    <>
      <PageLoader isLoading={isLoading} />
      <Navbar />

      <main className="min-h-screen pt-24 md:pt-28 pb-12 md:pb-16 relative px-4 sm:px-6 bg-background">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 10%, rgba(59, 130, 246, 0.03) 0%, transparent 50%)",
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col gap-3 md:gap-4 mb-8 md:mb-12">
            <p className="text-accent text-sm font-medium tracking-widest uppercase">
              Teaching
            </p>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-text-primary">
              Practicum <span className="gradient-text">Materials</span>
            </h1>
            <p className="text-text-secondary text-base md:text-lg max-w-2xl">
              Slides developed together with fellow practicum assistants during my time as a Practicum Assistant for Algorithm & Computer Programming, covering fundamental programming concepts through object-oriented design.
            </p>
          </div>

          {courses.map((course) => (
            <div key={course} className="mb-8 md:mb-12">
              <div className="mb-3 pb-2 border-b border-border/10">
                <h2 className="text-lg font-heading font-bold text-text-primary">
                  {course}
                </h2>
                {coursePartners[course] && (
                  <p className="text-text-muted text-xs font-mono mt-1">
                    Co-developed with practicum partner {coursePartners[course]}
                  </p>
                )}
              </div>
              <motion.div
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {teachingMaterials
                  .filter((m) => m.course === course)
                  .map((material) => (
                    <motion.button
                      key={material.id}
                      variants={cardVariants}
                      onClick={() => setActiveMaterial(material)}
                      className="group glass-card rounded-2xl p-5 md:p-6 border-glow border-glow-hover transition-all duration-300 text-left cursor-pointer flex flex-col gap-3 md:gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-accent-dim text-accent flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shrink-0">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-heading font-bold text-text-primary group-hover:text-accent transition-colors">
                          {material.topic}
                        </h3>
                        {material.preparedBy && (
                          <p className="text-accent text-[11px] font-mono mt-1">
                            Slides prepared by {material.preparedBy}
                          </p>
                        )}
                        <p className="text-text-muted text-xs font-mono mt-1">
                          View slides →
                        </p>
                      </div>
                    </motion.button>
                  ))}
              </motion.div>
            </div>
          ))}
        </div>
      </main>

      <Footer />

      <AnimatePresence>
        {activeMaterial && (
          <motion.div
            className="fixed inset-0 z-9999 bg-background/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveMaterial(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl h-[85vh] glass-card rounded-2xl border-glow overflow-hidden flex flex-col"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-3 border-b border-border/10 shrink-0">
                <div className="min-w-0 pr-4">
                  <h3 className="text-sm font-heading font-bold text-text-primary truncate">
                    {activeMaterial.topic}
                  </h3>
                  {activeMaterial.preparedBy && (
                    <p className="text-accent text-[11px] font-mono mt-0.5">
                      Slides prepared by {activeMaterial.preparedBy}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => setActiveMaterial(null)}
                  aria-label="Close"
                  className="text-text-muted hover:text-accent transition-colors cursor-pointer shrink-0 text-xl leading-none"
                >
                  ✕
                </button>
              </div>
              <iframe
                src={`https://drive.google.com/file/d/${activeMaterial.driveFileId}/preview`}
                className="w-full grow"
                allow="autoplay"
                title={activeMaterial.topic}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
