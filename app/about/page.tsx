"use client";

import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import AboutSection from "@/app/components/about/AboutSection";
import SkillsSection from "@/app/components/about/SkillsSection";
import ExperienceSection from "@/app/components/about/ExperienceSection";
import EducationSection from "@/app/components/about/EducationSection";
import GithubStats from "@/app/components/about/GithubStats";
import PageLoader from "@/app/components/ui/PageLoader";
import { usePageLoader } from "@/app/hooks/usePageLoader";

export default function AboutStoryPage() {
  const isLoading = usePageLoader();

  return (
    <>
      <PageLoader isLoading={isLoading} />
      <Navbar />

      <main className="min-h-screen relative pt-20">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 10%, rgba(59, 130, 246, 0.03) 0%, transparent 50%)",
          }}
        />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <GithubStats />
        <ExperienceSection />
      </main>
      <Footer />
    </>
  );
}
