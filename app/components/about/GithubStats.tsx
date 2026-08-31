"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { GitHubCalendar } from "react-github-calendar";
import { toast } from "sonner";

interface GithubData {
  username: string;
  name: string;
  avatarUrl: string;
  followers: number;
  publicRepos: number;
  isFallback: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
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

export default function GithubStats() {
  const [data, setData] = useState<GithubData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/github");
        if (res.ok) {
          const json = await res.json();
          setData(json);
          if (json.isFallback) {
            toast.warning("Failed to fetch live GitHub stats. Serving cached offline data.");
          }
        } else {
          toast.error("Failed to load GitHub stats handler response.");
        }
      } catch {
        toast.error("Failed to connect to backend portfolio server.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="section-padding relative">
        <div className="max-w-4xl mx-auto relative z-10 px-6">
          <div className="glass-card rounded-2xl p-8 md:p-10 border border-border animate-pulse">
            <div className="h-6 w-48 bg-accent-dim rounded-md mb-8" />
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 rounded-full bg-accent-dim shrink-0" />
              <div className="grow space-y-4 w-full">
                <div className="h-5 w-40 bg-accent-dim rounded-md" />
                <div className="h-4 w-28 bg-accent-dim rounded-md" />
                <div className="space-y-2 pt-4">
                  <div className="h-2 w-full bg-accent-dim rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!data) return null;

  return (
    <section id="github-stats" className="section-padding relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(59, 130, 246, 0.02) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10 px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
            GitHub
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary">
            GitHub <span className="gradient-text">Activity</span>
          </h2>
        </motion.div>

        <motion.div
          className="glass-card rounded-2xl p-8 md:p-10 border-glow border-glow-hover transition-all duration-300 flex flex-col gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between w-full">
            <motion.div
              className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-5"
              variants={itemVariants}
            >
              <div className="relative w-20 h-20 rounded-full overflow-hidden border border-accent/20 shadow-md shadow-accent/5">
                <Image
                  src={data.avatarUrl}
                  alt={data.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-text-primary">
                  {data.name}
                </h3>
                <a
                  href={`https://github.com/${data.username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent text-sm font-mono hover:underline inline-flex items-center gap-1 mt-1"
                >
                  @{data.username}
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center justify-center md:justify-end gap-4 sm:gap-6 w-full md:w-auto"
              variants={itemVariants}
            >
              <div className="bg-surface rounded-xl px-5 py-2.5 border border-border/10 text-center min-w-25">
                <div className="text-text-muted text-[10px] uppercase tracking-wider font-mono">
                  Repos
                </div>
                <div className="text-xl font-bold text-text-primary mt-0.5">
                  {data.publicRepos}
                </div>
              </div>

              <div className="bg-surface rounded-xl px-5 py-2.5 border border-border/10 text-center min-w-25">
                <div className="text-text-muted text-[10px] uppercase tracking-wider font-mono">
                  Followers
                </div>
                <div className="text-xl font-bold text-text-primary mt-0.5">
                  {data.followers}
                </div>
              </div>

              <a
                href={`https://github.com/${data.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-medium text-xs border border-border text-text-primary hover:border-border-hover hover:bg-surface transition-all duration-300 shadow-md cursor-pointer whitespace-nowrap"
              >
                Follow on GitHub
              </a>
            </motion.div>
          </div>

          <motion.div
            className="border-t border-border/20 pt-8 flex flex-col items-center w-full overflow-x-auto scrollbar-none"
            variants={itemVariants}
          >
            <h4 className="text-text-primary text-xs font-semibold uppercase tracking-wider mb-6 font-mono self-start">
              GitHub Contribution Graph
            </h4>
            <div className="w-full flex justify-center min-w-175 md:min-w-0">
              <GitHubCalendar
                username={data.username}
                theme={{
                  dark: [
                    "#121216",
                    "rgba(59, 130, 246, 0.2)",
                    "rgba(59, 130, 246, 0.45)",
                    "rgba(59, 130, 246, 0.75)",
                    "#3b82f6",
                  ],
                }}
                colorScheme="dark"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
