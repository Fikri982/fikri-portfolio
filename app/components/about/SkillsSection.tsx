"use client";

import { motion } from "framer-motion";
import { skills, engineeringPractices } from "@/app/data/skills";

const bentoCardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function SkillsSection() {
  const primarySkills = skills.filter((s) => s.category === "primary");
  const backendSkills = skills.filter((s) => s.category === "backend");
  const toolsSkills = skills.filter((s) => s.category === "tools");

  return (
    <section id="skills" className="section-padding relative">
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(59, 130, 246, 0.02) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3 font-mono">
            Tech Stack
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* Bento Tile 1: 🚀 Primary Stack (Spans 7 cols on LG) */}
          <motion.div
            className="lg:col-span-7 glass-card rounded-3xl p-6 md:p-8 border-glow border-glow-hover flex flex-col justify-between"
            variants={bentoCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent">
                  🚀 Primary Stack
                </span>
                <span className="text-[10px] font-mono text-text-muted bg-surface border border-border/10 px-2.5 py-1 rounded-full">
                  Core
                </span>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-lg">
                The technologies I use most to build modern, scalable, and user-centered web applications.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {primarySkills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-surface/60 border border-border/10 hover:border-accent/30 rounded-2xl p-3.5 flex flex-col items-center justify-center text-center gap-2 transition-all duration-300 hover:-translate-y-1 group"
                >
                  {skill.icon && (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-8 h-8 object-contain transition-transform group-hover:scale-110"
                      loading="lazy"
                    />
                  )}
                  <span className="text-xs font-semibold text-text-primary">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bento Tile 2: ⚙️ Backend & Data (Spans 5 cols on LG) */}
          <motion.div
            className="lg:col-span-5 glass-card rounded-3xl p-6 md:p-8 border-glow border-glow-hover flex flex-col justify-between"
            variants={bentoCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent">
                  ⚙️ Backend & Data
                </span>
                <span className="text-[10px] font-mono text-text-muted bg-surface border border-border/10 px-2.5 py-1 rounded-full">
                  APIs & DB
                </span>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                Backend technologies, APIs, and databases I integrate to build reliable and data-driven applications.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {backendSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-surface/60 border border-border/10 hover:border-accent/30 rounded-2xl p-3.5 flex flex-col items-center justify-center text-center gap-2 transition-all duration-300 hover:-translate-y-1 group"
                >
                  {skill.icon && (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-7 h-7 object-contain transition-transform group-hover:scale-110"
                      loading="lazy"
                    />
                  )}
                  <span className="text-xs font-semibold text-text-primary truncate w-full">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bento Tile 3: 🛠️ Developer Tools (Spans 5 cols on LG) */}
          <motion.div
            className="lg:col-span-5 glass-card rounded-3xl p-6 md:p-8 border-glow border-glow-hover flex flex-col justify-between"
            variants={bentoCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent">
                  🛠️ Developer Tools
                </span>
                <span className="text-[10px] font-mono text-text-muted bg-surface border border-border/10 px-2.5 py-1 rounded-full">
                  Workflow
                </span>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                Tools that support my daily development workflow, collaboration, and design process.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {toolsSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-surface/60 border border-border/10 hover:border-accent/30 rounded-2xl p-3.5 flex flex-col items-center justify-center text-center gap-2 transition-all duration-300 hover:-translate-y-1 group"
                >
                  {skill.icon && (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-7 h-7 object-contain transition-transform group-hover:scale-110"
                      loading="lazy"
                    />
                  )}
                  <span className="text-xs font-semibold text-text-primary whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bento Tile 4: 💡 Engineering Practices (Spans 7 cols on LG) */}
          <motion.div
            className="lg:col-span-7 glass-card rounded-3xl p-6 md:p-8 border-glow border-glow-hover flex flex-col justify-between"
            variants={bentoCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent">
                  💡 Engineering Practices
                </span>
                <span className="text-[10px] font-mono text-text-muted bg-surface border border-border/10 px-2.5 py-1 rounded-full">
                  Principles
                </span>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                Development principles and workflows I apply to deliver maintainable, collaborative, and high-quality software.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {engineeringPractices.map((practice) => (
                <div
                  key={practice.name}
                  className="bg-surface/60 border border-border/10 hover:border-accent/30 rounded-xl px-4 py-2.5 flex items-center gap-2.5 transition-all duration-300 hover:-translate-y-0.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs font-semibold text-text-primary">
                    {practice.name}
                  </span>
                  <span className="text-[9px] font-mono text-text-muted bg-background/50 px-2 py-0.5 rounded-md border border-border/10">
                    {practice.badge}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
