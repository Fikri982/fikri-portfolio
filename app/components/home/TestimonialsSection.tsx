"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/app/data/testimonials";

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
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding relative">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(59, 130, 246, 0.02) 0%, transparent 60%)",
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
            TESTIMONIALS
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary">
            What People <span className="gradient-text">Say About Me</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              className="group glass-card rounded-2xl p-8 flex flex-col justify-between border-glow border-glow-hover transition-all duration-300"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              {/* Quote Mark */}
              <div className="text-accent/30 text-5xl font-serif leading-none mb-4 pointer-events-none select-none">
                “
              </div>

              {/* Quote Content */}
              <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-8 grow italic">
                {t.content}
              </p>

              {/* User Bio */}
              <div className="flex items-center gap-4 border-t border-border/20 pt-6">
                {/* Avatar Letter */}
                <div className="w-10 h-10 rounded-full bg-accent-dim border border-accent/20 flex items-center justify-center text-accent text-sm font-bold uppercase shrink-0">
                  {t.avatarLetter}
                </div>

                {/* Info */}
                <div className="min-w-0">
                  <h4 className="text-text-primary text-sm font-semibold tracking-wide truncate">
                    {t.name}
                  </h4>
                  <p className="text-text-muted text-xs truncate">
                    {t.role}
                  </p>
                  <p className="text-accent text-[10px] font-mono tracking-wider uppercase truncate mt-0.5">
                    {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
