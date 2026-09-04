"use client";

import { useState } from "react";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import PageLoader from "@/app/components/ui/PageLoader";
import { usePageLoader } from "@/app/hooks/usePageLoader";
import FourierTab from "./FourierTab";
import MatrixTab from "./MatrixTab";

export default function PlaygroundClient() {
  const isLoading = usePageLoader();
  const [activeTab, setActiveTab] = useState<"fourier" | "matrix">("fourier");

  return (
    <>
      <PageLoader isLoading={isLoading} />
      <Navbar />

      <main className="min-h-screen pt-28 pb-16 relative bg-background">
        {/* Glow Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 10%, rgba(59, 130, 246, 0.03) 0%, transparent 60%)",
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10 px-6">
          {/* Header */}
          <div className="flex flex-col gap-4 mb-12">
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-text-primary">
              Math & Code <span className="gradient-text">Playground</span>
            </h1>
            <p className="text-text-secondary text-base md:text-lg max-w-2xl">
              An interactive visual sandbox showcasing the intersection of mathematical theory and web programming.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex gap-4 border-b border-border/10 pb-4 mb-8">
            <button
              onClick={() => setActiveTab("fourier")}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all duration-300 cursor-pointer ${
                activeTab === "fourier"
                  ? "bg-accent-dim text-accent border border-accent/20"
                  : "text-text-secondary hover:text-text-primary hover:bg-surface"
              }`}
            >
              01. Fourier Epicycles
            </button>
            <button
              onClick={() => setActiveTab("matrix")}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all duration-300 cursor-pointer ${
                activeTab === "matrix"
                  ? "bg-accent-dim text-accent border border-accent/20"
                  : "text-text-secondary hover:text-text-primary hover:bg-surface"
              }`}
            >
              02. Matrix Transformer
            </button>
          </div>

          {/* Render Active Simulation Component */}
          <div className="w-full">
            {activeTab === "fourier" ? <FourierTab /> : <MatrixTab />}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
