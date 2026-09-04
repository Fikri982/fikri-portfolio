"use client";

import Link from "next/link";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import PageLoader from "@/app/components/ui/PageLoader";
import { usePageLoader } from "@/app/hooks/usePageLoader";

interface ComingSoonProps {
  title: string;
  subtitle: string;
  badgeText?: string;
  mathTheme?: boolean;
}

export default function ComingSoon({
  title,
  subtitle,
  mathTheme = false,
}: ComingSoonProps) {
  const isLoading = usePageLoader(600);

  return (
    <>
      <PageLoader isLoading={isLoading} />
      <Navbar />

      <main className="min-h-screen flex items-center justify-center relative bg-background px-6 overflow-hidden">
        {/* Dynamic Glow decoration */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.03) 0%, transparent 60%)",
          }}
        />

        <div className="max-w-xl w-full text-center relative z-10 space-y-8 py-20">
          {/* Heading & Subtitle */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-text-primary">
              {title}
            </h1>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Floating Decorative Symbols */}
          <div className="relative py-6 flex justify-center select-none opacity-25">
            {mathTheme ? (
              <>
                <span className="font-serif text-8xl text-accent animate-float">
                  ∫
                </span>
                <span className="absolute left-[35%] top-2.5 font-serif text-3xl text-emerald-400 animate-pulse">
                  ∑
                </span>
                <span className="absolute right-[35%] bottom-2.5 font-mono text-xl text-text-secondary">
                  f(x)
                </span>
              </>
            ) : (
              <>
                <span className="font-mono text-8xl text-accent animate-float">
                  {"</>"}
                </span>
                <span className="absolute left-[35%] top-3.75 font-mono text-3xl text-emerald-400 animate-pulse">
                  {"{}"}
                </span>
                <span className="absolute right-[35%] bottom-3.75 font-mono text-2xl text-text-secondary">
                  {"[]"}
                </span>
              </>
            )}
          </div>

          {/* Action CTA */}
          <div className="pt-4">
            <Link
              href="/"
              className="inline-flex px-8 py-3.5 rounded-xl bg-accent text-background font-medium text-sm hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/5 cursor-pointer"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
