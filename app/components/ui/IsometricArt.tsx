"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function IsometricArt() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 80 };
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [25, 10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = e.clientX - rect.left - width / 2;
    const y = e.clientY - rect.top - height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      className="relative w-full max-w-125 h-120 hidden lg:flex items-center justify-center cursor-default select-none overflow-visible"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative w-112.5 h-112.5 flex items-center justify-center"
        style={{
          perspective: 1000,
          transformStyle: "preserve-3d",
          rotateX,
          rotateY,
        }}
      >
        <div
          className="absolute w-95 h-95 rounded-full border border-accent/20 bg-accent/1"
          style={{
            transform: "rotateX(75deg) translateZ(-50px)",
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        <motion.div
          className="absolute w-75 h-75 rounded-full border border-dashed border-accent/20 flex items-center justify-center"
          style={{
            transform: "rotateX(75deg) translateZ(-30px)",
          }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        />

        <motion.div
          className="absolute w-55 h-55 rounded-full border border-accent/10"
          style={{
            transform: "rotateX(75deg) translateZ(-15px)",
          }}
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ transformStyle: "preserve-3d" }}>
          <div className="absolute w-[320px] h-px bg-linear-to-r from-transparent via-accent/30 to-transparent" style={{ transform: "rotateY(0deg) translateZ(0px)" }} />
          <div className="absolute h-80 w-px bg-linear-to-b from-transparent via-accent/15 to-transparent" style={{ transform: "rotateX(0deg) translateZ(0px)" }} />
          <div className="absolute h-60 w-px bg-linear-to-b from-accent/50 to-transparent" style={{ transform: "rotateY(90deg) translateZ(0px)" }} />
        </div>

        <motion.div
          className="absolute w-10 h-10 rounded-xl bg-background/90 border border-accent/20 flex items-center justify-center font-serif text-accent text-sm shadow-md"
          style={{
            left: "60px",
            top: "120px",
            transform: "translateZ(80px)",
          }}
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          ∑
        </motion.div>

        <motion.div
          className="absolute w-10 h-10 rounded-xl bg-background/90 border border-accent/20 flex items-center justify-center font-serif text-accent text-sm shadow-md"
          style={{
            right: "70px",
            top: "80px",
            transform: "translateZ(60px)",
          }}
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
        >
          ∫
        </motion.div>

        <motion.div
          className="absolute w-12 h-8 rounded-lg bg-background/90 border border-accent/15 flex items-center justify-center font-mono text-text-secondary text-[11px] shadow-sm"
          style={{
            left: "80px",
            bottom: "120px",
            transform: "translateZ(40px)",
          }}
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
        >
          f(x)
        </motion.div>

        <motion.div
          className="absolute w-11 h-11 rounded-xl bg-background border border-border/60 flex items-center justify-center shadow-lg p-2.5"
          style={{
            right: "80px",
            bottom: "140px",
            transform: "translateZ(100px)",
          }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1.5 }}
          whileHover={{ scale: 1.1, borderColor: "rgba(59, 130, 246, 0.4)" }}
        >
          <Image
            src="/skills/nextjs.svg"
            alt="Next.js"
            width={24}
            height={24}
            className="object-contain"
          />
        </motion.div>

        <motion.div
          className="absolute w-10 h-10 rounded-lg bg-background border border-border/40 flex items-center justify-center shadow-md p-2"
          style={{
            left: "140px",
            top: "50px",
            transform: "translateZ(120px)",
          }}
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 2 }}
          whileHover={{ scale: 1.1 }}
        >
          <Image
            src="/skills/typescript.svg"
            alt="TypeScript"
            width={20}
            height={20}
            className="object-contain"
          />
        </motion.div>

        <motion.div
          className="absolute w-10 h-10 rounded-lg bg-background border border-border/40 flex items-center justify-center shadow-md p-2"
          style={{
            right: "130px",
            bottom: "50px",
            transform: "translateZ(70px)",
          }}
          animate={{ y: [0, -7, 0] }}
          transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 0.8 }}
          whileHover={{ scale: 1.1 }}
        >
          <Image
            src="/skills/react.svg"
            alt="React"
            width={20}
            height={20}
            className="object-contain"
          />
        </motion.div>

        <motion.div
          className="absolute w-9 h-9 rounded-lg bg-background border border-border/40 flex items-center justify-center shadow-sm p-1.5"
          style={{
            left: "130px",
            bottom: "80px",
            transform: "translateZ(90px)",
          }}
          animate={{ y: [0, -9, 0] }}
          transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut", delay: 2.3 }}
          whileHover={{ scale: 1.1 }}
        >
          <Image
            src="/skills/git.svg"
            alt="Git"
            width={18}
            height={18}
            className="object-contain"
          />
        </motion.div>

        <motion.div
          className="absolute w-24 h-24 rounded-full border border-accent/30 flex items-center justify-center shadow-2xl bg-accent/2"
          style={{
            transform: "translateZ(50px)",
            transformStyle: "preserve-3d",
            boxShadow: "0 0 30px rgba(59, 130, 246, 0.15), inset 0 0 20px rgba(59, 130, 246, 0.05)",
          }}
          animate={{
            y: [0, -10, 0],
            rotateY: [0, 15, -15, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="absolute inset-2 rounded-full border border-dashed border-accent/30"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          />

          <div className="flex flex-col items-center select-none" style={{ transform: "translateZ(10px)" }}>
            <span className="text-4xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-linear-to-br from-accent to-emerald-300 drop-shadow-[0_0_12px_rgba(13,242,201,0.6)]">
              FH
            </span>
            <span className="text-[7px] font-mono tracking-widest text-text-muted mt-1 uppercase">
              {"< Math & Code >"}
            </span>
          </div>
        </motion.div>

        <motion.div
          className="absolute left-7.5 top-45 w-32.5 h-13.75 glass-card rounded-xl border border-accent/20 p-2 flex flex-col justify-between"
          style={{
            transform: "translateZ(110px)",
          }}
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 0.3 }}
        >
          <span className="text-[7px] font-mono text-text-muted tracking-wider uppercase">Oscilloscope</span>
          <svg className="w-full h-6.25 overflow-visible mt-1">
            <motion.path
              d="M 0 12.5 Q 25 2, 50 12.5 T 100 12.5"
              fill="none"
              stroke="#3b82f6"
              strokeWidth={1.5}
              strokeDasharray="4 2"
              animate={{ strokeDashoffset: [0, -24] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </svg>
        </motion.div>

      </motion.div>
    </div>
  );
}
