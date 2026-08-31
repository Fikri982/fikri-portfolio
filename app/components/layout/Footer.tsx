"use client";

import Link from "next/link";
import { SOCIAL_LINKS } from "@/app/data/socials";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/10 bg-background-card/20 backdrop-blur-md pt-16 pb-8 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 110%, rgba(59, 130, 246, 0.02) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-border/5">
          
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="text-lg font-heading font-bold tracking-tight text-text-primary hover:text-accent transition-colors"
            >
              Muhammad Fikri Hidayat
            </Link>
            <p className="text-text-secondary text-xs leading-relaxed max-w-xs">
              Integrating mathematical thinking with modern web technologies to build impactful digital experiences.
            </p>
            
            <div className="flex items-center gap-3 pt-2">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg border border-border/40 flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
                  aria-label={link.label}
                >
                  <div className="w-4 h-4 overflow-hidden [&>svg]:w-full [&>svg]:h-full flex items-center justify-center">
                    {link.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[10px] font-mono font-bold tracking-wider text-text-primary uppercase">
              General
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <Link href="/" className="text-text-secondary hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-text-secondary hover:text-accent transition-colors">About</Link>
              </li>
              <li>
                <Link href="/projects" className="text-text-secondary hover:text-accent transition-colors">Projects</Link>
              </li>
              <li>
                <Link href="/playground" className="text-text-secondary hover:text-accent transition-colors">Playground</Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[10px] font-mono font-bold tracking-wider text-text-primary uppercase">
              Explorations
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="/about#skills" className="text-text-secondary hover:text-accent transition-colors">Tech Stack</a>
              </li>
              <li>
                <a href="/about#education" className="text-text-secondary hover:text-accent transition-colors">Education</a>
              </li>
              <li>
                <a href="/about#experience" className="text-text-secondary hover:text-accent transition-colors">Experience</a>
              </li>
              <li>
                <a href="https://github.com/Fikri982" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">GitHub Feed</a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-[10px] font-mono font-bold tracking-wider text-text-primary uppercase">
              A Formula for Life
            </h4>
            <div className="glass-card rounded-2xl p-5 border-glow border-glow-hover space-y-3">
              <p className="text-xs italic text-text-secondary leading-relaxed">
                &quot;In the equation of life, growth is the only independent variable. Keep iterating.&quot;
              </p>
              <span className="block text-[10px] font-mono text-text-muted text-right">
                — Always strive for logic
              </span>
            </div>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center text-center md:text-left justify-between gap-4 pt-8 text-xs font-mono text-text-muted">
          <p>© {currentYear} Muhammad Fikri Hidayat. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with Next.js, Typescript, & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
