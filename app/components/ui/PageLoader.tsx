"use client";

import { motion, AnimatePresence } from "framer-motion";

interface PageLoaderProps {
  isLoading: boolean;
}

export default function PageLoader({ isLoading }: PageLoaderProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
          }}
        >
          <div 
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px), 
                                linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative flex flex-col items-center gap-6 z-10">
            <motion.div
              className="w-20 h-20 rounded-full border-2 border-dashed border-accent/30"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            />

            <motion.div
              className="absolute top-2 left-2 w-16 h-16 rounded-full border-t-2 border-r-2 border-b-2 border-l-2 border-t-accent border-r-transparent border-b-transparent border-l-transparent"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />

            <motion.div
              className="absolute top-7 left-7 w-6 h-6 rounded-full bg-accent shadow-lg shadow-accent/40"
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />

            <motion.div
              className="text-center mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-text-primary text-xs font-mono font-bold tracking-[0.2em] uppercase">
                Initializing
              </div>
              <div className="flex gap-1 justify-center mt-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-accent"
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.8,
                      delay: i * 0.15,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
