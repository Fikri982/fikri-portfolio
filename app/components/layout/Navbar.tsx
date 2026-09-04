"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Teaching", href: "/teaching" },
  { label: "Playground", href: "/playground" },
];

function pathLabel(href: string) {
  return href === "/" ? "~" : href;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoHover, setLogoHover] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <nav id="main-nav" className="fixed top-4 inset-x-0 z-50 px-4">
      <div className="mx-auto max-w-6xl">
        <div
          className={`bg-background/90 backdrop-blur-xl rounded-full border-glow border-glow-hover flex items-center justify-between px-4 py-2.5 md:px-6 md:py-3 transition-all duration-300 ${
            scrolled ? "shadow-lg shadow-accent/10" : "shadow-md shadow-accent/5"
          }`}
        >
          <Link
            href="/"
            onClick={handleHomeClick}
            onMouseEnter={() => setLogoHover(true)}
            onMouseLeave={() => setLogoHover(false)}
            className="relative text-lg font-heading font-bold gradient-text shrink-0 overflow-hidden inline-block"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={logoHover ? "fh" : "fikri"}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.15 }}
                className="inline-block"
              >
                {logoHover ? "FH" : "fikri.dev"}
              </motion.span>
            </AnimatePresence>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={link.href === "/" ? handleHomeClick : undefined}
                  aria-label={link.label}
                  className={`relative px-4 py-2 rounded-full text-sm font-mono transition-colors duration-300 focus:outline-none cursor-pointer ${
                    isActive ? "text-accent" : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-accent/25 blur-md z-0"
                      layoutId="active-nav-glow"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{pathLabel(link.href)}</span>
                  {isActive && (
                    <svg
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-8 h-2 overflow-visible pointer-events-none"
                      viewBox="0 0 32 8"
                      fill="none"
                    >
                      <motion.path
                        d="M0 4 Q4 0 8 4 T16 4 T24 4 T32 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        className="text-accent"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                    </svg>
                  )}
                </Link>
              );
            })}
          </div>

          <button
            id="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 group focus:outline-none cursor-pointer shrink-0"
            aria-label="Toggle navigation menu"
          >
            <span
              className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="bg-background/95 backdrop-blur-xl border-glow rounded-3xl mt-3 px-4 py-3 flex flex-col gap-1">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={
                        link.href === "/"
                          ? (e) => {
                              handleHomeClick(e);
                              setMobileOpen(false);
                            }
                          : () => setMobileOpen(false)
                      }
                      className={`px-4 py-3 rounded-xl text-sm font-mono transition-all duration-200 ${
                        isActive
                          ? "text-accent bg-accent/10"
                          : "text-text-secondary hover:text-text-primary hover:bg-surface"
                      }`}
                    >
                      {pathLabel(link.href)}
                      <span className="ml-2 text-text-muted text-xs font-sans">{link.label}</span>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
