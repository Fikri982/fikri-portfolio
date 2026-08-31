"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "@/app/data/experience";

const COMPANY_GROUPS: Record<string, string> = {
  "OMITS 19TH": "OMITS",
  "OMITS 18TH": "OMITS",
  "GERIGI X UKM EXPO ITS 2026": "PKKMB ITS",
  "Mathematics ITS": "Mathematics ITS",
  "SRE ITS": "SRE ITS",
  "FUTUREST 2026": "FUTUREST",
  "PETROLIDA 2026": "PETROLIDA",
  "INI LHO ITS! 2026 X FORDA CERBERUS": "Ini Lho ITS!",
  "INI LHO ITS! 2026": "Ini Lho ITS!",
  "VI-ROSE ITS ROBOTICS TEAM INTERNSHIP": "VI-ROSE Robotics"
};

const GROUPS = [
  "OMITS",
  "PKKMB ITS",
  "Ini Lho ITS!",
  "Mathematics ITS",
  "SRE ITS",
  "FUTUREST",
  "PETROLIDA",
  "VI-ROSE Robotics"
];

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState("OMITS");

  const activeExperiences = experiences.filter(
    (exp) => (COMPANY_GROUPS[exp.company] || exp.company) === activeTab
  );

  return (
    <section id="experience" className="section-padding relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(59, 130, 246, 0.02) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
            Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary">
           Building Through{" "}
            <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row min-h-105 gap-8 md:gap-12 mt-10">
          <div className="relative md:w-1/4 shrink-0">
            <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-border/30 scrollbar-none relative">
              {GROUPS.map((group) => {
                const isActive = activeTab === group;
                return (
                  <button
                    key={group}
                    onClick={() => setActiveTab(group)}
                    className={`relative px-5 py-3 md:py-3.5 text-left text-xs md:text-sm font-mono tracking-wider transition-all duration-300 whitespace-nowrap w-full focus:outline-none cursor-pointer ${
                      isActive
                        ? "text-accent bg-accent-dim/5 font-semibold"
                        : "text-text-secondary hover:text-accent hover:bg-accent-dim/5"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        className="absolute left-0 bottom-0 md:bottom-0 md:top-0 h-0.5 md:h-auto w-full md:w-0.5 bg-accent"
                        layoutId="active-experience-bar"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {group}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grow md:pl-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="space-y-12"
              >
                {activeExperiences.map((exp, idx) => {
                  const points = exp.description
                    .split("\n")
                    .map((line) => line.trim())
                    .filter(Boolean);

                  return (
                    <div
                      key={exp.id}
                      className={idx > 0 ? "pt-10 border-t border-border/20" : ""}
                    >
                      <div>
                        <h3 className="text-lg md:text-xl font-heading font-bold text-text-primary flex flex-wrap items-baseline gap-1.5">
                          <span>{exp.role}</span>
                          <span className="text-accent font-semibold">
                            @ {exp.company}
                          </span>
                        </h3>
                        <span className="text-xs md:text-sm font-mono text-text-muted mt-1.5 mb-6 block">
                          {exp.period}
                        </span>
                      </div>

                      <ul className="space-y-4 mb-6">
                        {points.map((point, pIdx) => (
                          <li
                            key={pIdx}
                            className="flex items-start gap-3 text-text-secondary text-sm md:text-base leading-relaxed"
                          >
                            <span className="text-accent text-xs mt-1.5 shrink-0">
                              ▸
                            </span>
                            <span>{point.replace(/^•\s*/, "")}</span>
                          </li>
                        ))}
                      </ul>

                      {exp.tags && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-md bg-accent-dim text-accent text-xs font-semibold tracking-wide"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
