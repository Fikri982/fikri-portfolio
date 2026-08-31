"use client";

import { motion } from "framer-motion";
import { educationList } from "@/app/data/education";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function EducationSection() {
  return (
    <section id="education" className="section-padding relative">
      {/* Background radial highlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(59, 130, 246, 0.02) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
            Academics
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary">
            Education <span className="gradient-text">History</span>
          </h2>
        </motion.div>

        {/* Education List */}
        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {educationList.map((edu) => (
            <motion.div
              key={edu.id}
              className="group glass-card rounded-2xl p-8 flex flex-col justify-between border-glow border-glow-hover transition-all duration-300"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <div>
                {/* Header info */}
                <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-heading font-bold text-text-primary group-hover:text-accent transition-colors">
                      {edu.school}
                    </h3>
                    <p className="text-accent text-sm font-mono mt-1">
                      {edu.degree}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-text-muted font-mono mb-6">
                  <span>{edu.period}</span>
                  <span>{edu.location}</span>
                </div>

                {/* Score / GPA if any */}
                {edu.gpaOrScore && (
                  <div className="mb-4 inline-block px-3 py-1 rounded-lg bg-accent-dim/10 border border-accent/20 text-accent text-xs font-mono font-semibold">
                    {edu.gpaOrScore}
                  </div>
                )}

                {/* Relevant Coursework */}
                {edu.courses && (
                  <div className="space-y-2">
                    <h4 className="text-text-primary text-xs font-semibold uppercase tracking-wider">
                      Relevant Coursework
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.courses.map((course) => (
                        <span
                          key={course}
                          className="px-2 py-0.5 rounded-md bg-surface text-text-secondary text-xs border border-border/10"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Honors & Awards */}
                {edu.honors && (
                  <div className="space-y-2">
                    <h4 className="text-text-primary text-xs font-semibold uppercase tracking-wider">
                      Honors & Achievements
                    </h4>
                    <ul className="space-y-1.5">
                      {edu.honors.map((honor, hIdx) => (
                        <li
                          key={hIdx}
                          className="flex items-start gap-2 text-text-secondary text-xs md:text-sm"
                        >
                          <span className="text-accent text-xs mt-1 shrink-0">
                            ★
                          </span>
                          <span>{honor}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
