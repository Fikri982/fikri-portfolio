"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

const IsometricArt = dynamic(() => import("@/app/components/ui/IsometricArt"), {
  ssr: false,
});

const TITLES = [
  "Frontend Engineer",
  "Web Development Lead",
  "Programming Tutor",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TITLES[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 40);
    } else if (isDeleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTitleIndex((i) => (i + 1) % TITLES.length);
      }, 0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(59, 130, 246, 0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 pt-20 lg:pt-0">
        <motion.div
          className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl lg:max-w-135"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex items-center gap-3 mb-5"
            variants={itemVariants}
          >
            <span className="text-xs font-mono font-semibold tracking-widest text-accent uppercase">
              Mathematics Student at ITS
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text text-glow-strong">Fikri</span>
          </motion.h1>

          <motion.div
            className="h-10 flex items-center justify-center lg:justify-start mb-8 w-full"
            variants={itemVariants}
          >
            <span className="text-xl md:text-2xl text-text-secondary font-medium">
              {TITLES[titleIndex].substring(0, charIndex)}
            </span>
            <span className="animate-blink text-accent text-xl md:text-2xl ml-0.5">
              |
            </span>
          </motion.div>

          <motion.p
            className="text-text-secondary text-base md:text-lg mb-10 leading-relaxed"
            variants={itemVariants}
          >
            Building scalable web applications with analytical thinking and a
            passion for impactful digital experiences.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center w-full"
            variants={itemVariants}
          >
            <Link
              href="#about-teaser"
              className="group relative block w-full sm:w-auto"
            >
              <motion.div
                className="px-8 py-3.5 rounded-xl font-medium text-center text-background bg-accent hover:bg-accent/90 transition-all duration-300 animate-glow-pulse cursor-pointer flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                About Me
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
              </motion.div>
            </Link>
            <a
              href="https://drive.google.com/file/d/1IXHYn_Hm9smIGTsEmO8TP69m7L3dfwIF/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full sm:w-auto"
            >
              <motion.div
                className="px-8 py-3.5 rounded-xl font-medium border border-border text-text-primary hover:border-border-hover transition-all duration-300 cursor-pointer text-center"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                View Resume
              </motion.div>
            </a>
          </motion.div>
        </motion.div>

        <IsometricArt />
      </div>
    </section>
  );
}
