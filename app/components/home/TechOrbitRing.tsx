"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { skills } from "@/app/data/skills";

const RADIUS = 150;

export default function TechOrbitRing() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 80 };
  const rotateX = useSpring(useTransform(mouseY, [-180, 180], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-180, 180], [-12, 12]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const angleStep = (2 * Math.PI) / skills.length;

  return (
    <div
      className="relative w-85 h-85 cursor-default select-none"
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d", rotateX, rotateY }}
      >
        <div className="group relative w-full h-full animate-orbit-spin">
          {/* Center badge */}
          <div className="absolute inset-0 flex items-center justify-center animate-orbit-counter-spin">
            <div className="w-16 h-16 rounded-full glass-card border border-accent/30 flex items-center justify-center shadow-lg">
              <span className="text-lg font-heading font-bold gradient-text">
                FH
              </span>
            </div>
          </div>

          {/* Orbiting skill icons */}
          {skills.map((skill, i) => {
            const angle = i * angleStep - Math.PI / 2;
            const x = RADIUS * Math.cos(angle);
            const y = RADIUS * Math.sin(angle);
            return (
              <div
                key={skill.name}
                className="absolute w-11 h-11 -translate-x-1/2 -translate-y-1/2 animate-orbit-counter-spin"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                }}
              >
                <div
                  title={skill.name}
                  className="w-full h-full rounded-xl bg-background border border-border/40 shadow-md flex items-center justify-center p-2.5 hover:scale-125 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.35)] transition-all duration-300"
                >
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={22}
                    height={22}
                    className="object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
