import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { portfolioContent } from "@/data/content";

// Animated counter component that counts smoothly from 0 to target% when in view
function AnimatedPercentage({ value, textColor }: { value: number; textColor: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }

    let startTime: number | null = null;
    const duration = 1400;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(easedProgress * value));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, value]);

  return (
    <span
      ref={ref}
      className={`font-mono font-black text-sm md:text-base ${textColor}`}
    >
      {count}%
    </span>
  );
}

export function Skills() {
  const { skills } = portfolioContent;

  return (
    <motion.section
      id="skills"
      className="max-w-4xl mx-auto space-y-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-3">
        <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          {skills.heading}
        </h3>
        <p className="text-muted-foreground text-base md:text-lg max-w-xl">
          Core engineering strengths evaluated by production impact, architecture depth, and years of hands-on execution.
        </p>
      </div>

      {/* Centered Sleek Technical Skills Arsenal */}
      <div className="glass-panel p-6 sm:p-10 rounded-[2.5rem] border border-foreground/15 shadow-2xl relative overflow-hidden bg-card/90">
        <div className="space-y-6">
          {skills.technical.map((tech, idx) => (
            <div key={idx} className="space-y-2.5 group">
              {/* Tech Title Row: Clean Logo + Name + Animated Percentage */}
              <div className="flex justify-between items-center text-sm font-semibold">
                <div className="flex items-center gap-3.5">
                  {/* Clean Logo */}
                  <div className="w-8 h-8 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                      loading="eager"
                    />
                  </div>

                  <span className="text-foreground font-bold text-sm md:text-base group-hover:text-primary transition-colors">
                    {tech.name}
                  </span>
                </div>

                {/* Clean Percentage Counter */}
                <AnimatedPercentage
                  value={tech.level}
                  textColor={tech.textColor}
                />
              </div>

              {/* Smooth Animated Progress Bar */}
              <div className="h-2 w-full overflow-hidden rounded-full">
                <motion.div
                  className={`h-full bg-gradient-to-r ${tech.barGradient} rounded-full`}
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${tech.level}%` }}
                  transition={{
                    duration: 1.4,
                    ease: [0.16, 1, 0.3, 1],
                    delay: idx * 0.08,
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
