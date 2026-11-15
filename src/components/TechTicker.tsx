import React, { useState } from "react";
import { motion } from "framer-motion";
import { portfolioContent } from "@/data/content";

function TechItemBadge({ item }: { item: { name: string; icon: string } }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="mx-2.5 sm:mx-3 px-4 sm:px-5 py-2.5 rounded-full border border-foreground/10 bg-background/90 backdrop-blur-md text-foreground font-semibold text-xs sm:text-sm flex items-center gap-3 transition-all hover:scale-105 hover:border-primary/60 hover:shadow-[0_0_20px_rgba(139,92,246,0.25)] hover:bg-foreground/5 cursor-default shadow-sm group shrink-0 select-none">
      <div className="w-5 h-5 flex items-center justify-center shrink-0">
        <img
          src={item.icon}
          alt={item.name}
          onLoad={() => setLoaded(true)}
          className={`w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-300 dark:invert-0 ${
            loaded ? "opacity-100" : "opacity-80"
          }`}
          loading="eager"
        />
      </div>
      <span className="tracking-wide whitespace-nowrap text-foreground font-medium text-xs sm:text-sm">
        {item.name}
      </span>
    </div>
  );
}

export function TechTicker() {
  const items = portfolioContent.techStack;

  return (
    <div className="w-full py-5 sm:py-6 border-t border-b border-foreground/10 bg-foreground/[0.02] flex flex-col items-center justify-center overflow-hidden relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full overflow-hidden relative flex items-center"
      >
        {/* Left Gradient Fade */}
        <div className="absolute left-0 w-24 sm:w-36 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        {/* Right Gradient Fade */}
        <div className="absolute right-0 w-24 sm:w-36 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Smooth Continuous Marquee Strip */}
        <div className="flex w-max animate-[marquee_45s_linear_infinite] whitespace-nowrap items-center hover:[animation-play-state:paused] py-1">
          {[...items, ...items].map((item, idx) => (
            <TechItemBadge key={idx} item={item} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
