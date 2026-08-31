"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SOCIAL_LINKS } from "@/app/data/socials";

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(59, 130, 246, 0.02) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <motion.div
            className="lg:col-span-5 glass-card rounded-3xl p-8 border-glow border-glow-hover flex flex-col justify-between items-center text-center relative overflow-hidden group min-h-112.5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute top-[-20%] left-[-20%] w-60 h-60 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-20%] w-60 h-60 rounded-full bg-accent/3 blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-accent-dim text-accent text-[11px] font-mono font-bold tracking-wider uppercase border border-accent/20">
              Open to Opportunities
            </div>

            <motion.div
              className="relative w-44 h-44 my-6 rounded-2xl overflow-hidden border-2 border-border/40 bg-surface shadow-2xl group-hover:border-accent/40 transition-colors duration-300"
              whileHover={{
                rotateY: 15,
                rotateX: -10,
                scale: 1.05,
              }}
              style={{ perspective: 1000 }}
            >
              <Image
                src="/about/fotoku.jpeg"
                alt="Muhammad Fikri Hidayat"
                fill
                sizes="176px"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-3">
                <span className="text-[10px] font-mono text-accent font-semibold tracking-widest uppercase">
                  M. Fikri Hidayat
                </span>
              </div>
            </motion.div>

            <div className="z-10">
              <h3 className="text-lg font-heading font-bold text-text-primary mb-1">
                Let&apos;s Connect
              </h3>
              <p className="text-text-secondary text-xs leading-relaxed max-w-xs">
                Open to software engineering opportunities, freelance projects, and meaningful collaborations.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7 flex flex-col justify-between gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-card rounded-3xl p-8 border-glow border-glow-hover flex flex-col justify-center grow">
              <p className="text-accent text-xs font-mono tracking-widest uppercase mb-3">
                Get In Touch
              </p>
              <h2 className="text-xl md:text-2xl font-heading font-bold text-text-primary mb-4 leading-snug">
                Let&apos;s create impactful <span className="gradient-text">digital experiences</span> together.
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed max-w-xl">
                I&apos;m always open to discussing web development, software engineering, internships, collaborations, or exciting ideas. Feel free to reach out if you&apos;d like to connect.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-stretch">
              
              <a
                href="mailto:mfikrihidayat9674@gmail.com"
                className="sm:col-span-7 glass-card rounded-2xl p-6 border-glow border-glow-hover flex items-center justify-between hover:bg-surface-hover transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-dim text-accent flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-text-muted uppercase tracking-wider">Direct Mail</p>
                    <p className="text-xs md:text-sm font-semibold text-text-primary mt-0.5 select-all">
                      mfikrihidayat9674@gmail.com
                    </p>
                  </div>
                </div>
                <span className="text-text-muted group-hover:text-accent transition-colors duration-300 text-lg">
                  →
                </span>
              </a>

              <div className="sm:col-span-5 flex gap-3">
                {SOCIAL_LINKS.filter((l) => l.label !== "Email").map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className={`w-full h-full min-h-16 rounded-2xl border border-border/15 flex items-center justify-center bg-surface text-text-secondary transition-all duration-300 cursor-pointer ${link.colorClass}`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
