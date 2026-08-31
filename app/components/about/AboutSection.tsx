"use client";

import { motion } from "framer-motion";
import PhotoSlider from "./PhotoSlider";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function AboutSection() {

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          
          {/* Bio (Left on desktop, bottom on mobile/tablet) */}
          <motion.div
            className="lg:col-span-3 space-y-6 order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Desktop-only Header */}
            <div className="hidden lg:block mb-6">
              <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
                About Me
              </p>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text-primary leading-tight">
                Where Logic Meets{" "}
                <span className="gradient-text">Creativity</span>
              </h2>
            </div>

            <motion.p
              className="text-text-secondary text-base md:text-lg leading-relaxed"
              variants={textVariants}
            >
              I&apos;m <span className="text-text-primary font-semibold">Muhammad Fikri Hidayat</span>, a Mathematics student at <span className="text-text-primary font-semibold">Institut Teknologi Sepuluh Nopember (ITS)</span> with a passion for frontend development and software engineering. Studying mathematics has strengthened my analytical thinking and structured approach to problem-solving. I apply these skills to building scalable, user-centered web applications.
            </motion.p>
            <motion.p
              className="text-text-secondary text-base md:text-lg leading-relaxed"
              variants={textVariants}
            >
              What started as curiosity has grown into a passion for creating digital products. Today, I primarily build modern web applications using <span className="text-accent font-medium">React</span> and <span className="text-accent font-medium">TypeScript</span> while integrating with <span className="text-accent font-medium">Go-based APIs</span> and backend platforms such as <span className="text-accent font-medium">Supabase</span> and <span className="text-accent font-medium">Convex</span>.
            </motion.p>
            <motion.p
              className="text-text-secondary text-base md:text-lg leading-relaxed"
              variants={textVariants}
            >
              Beyond coding, I enjoy leading development teams, teaching programming, and continuously learning new technologies. I believe great software is built through analytical thinking, thoughtful engineering, and strong collaboration.
            </motion.p>
          </motion.div>

          {/* Photo Stack (Right on desktop, top on mobile/tablet) */}
          <motion.div
            className="lg:col-span-2 w-full flex flex-col items-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Mobile/Tablet-only Category Label */}
            <p className="block lg:hidden text-accent text-sm font-medium tracking-widest uppercase mb-4 text-center">
              About Me
            </p>

            <PhotoSlider />

            {/* Mobile/Tablet-only Main Heading */}
            <h2 className="block lg:hidden text-3xl font-heading font-bold text-text-primary mt-6 text-center leading-snug">
              Where Logic Meets{" "}
              <span className="gradient-text">Creativity</span>
            </h2>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
