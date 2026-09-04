"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

const TechOrbitRing = dynamic(() => import("@/app/components/home/TechOrbitRing"), {
  ssr: false,
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function AboutTeaserSection() {
  return (
    <section id="about-teaser" className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(59, 130, 246, 0.03) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Text (Left) */}
          <motion.div
            className="lg:col-span-3 space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants}>
              <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
                About Me
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary leading-tight">
                Where Logic Meets{" "}
                <span className="gradient-text">Creativity</span>
              </h2>
            </motion.div>

            <motion.p
              className="text-text-secondary text-base md:text-lg leading-relaxed max-w-xl"
              variants={itemVariants}
            >
              I&apos;m <span className="text-text-primary font-semibold">Muhammad Fikri Hidayat</span>, a Mathematics student at <span className="text-text-primary font-semibold">Institut Teknologi Sepuluh Nopember (ITS)</span> with a passion for frontend development and software engineering. Studying mathematics has strengthened my analytical thinking and structured approach to problem-solving, which I apply to building scalable, user-centered web applications.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link
                href="/about"
                className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-medium border border-border text-text-primary hover:border-border-hover hover:bg-surface transition-all duration-300 cursor-pointer"
              >
                <span>Learn More About Me</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Tech Orbit Ring (Right, desktop only) */}
          <motion.div
            className="lg:col-span-2 hidden md:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <TechOrbitRing />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
