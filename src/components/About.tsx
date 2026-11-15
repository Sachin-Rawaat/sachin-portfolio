import React from "react";
import { motion } from "framer-motion";
import { portfolioContent } from "@/data/content";

// 1. 3D Fiery Rose-Crimson Medal/Trophy Icon for 3+ Years Experience
function Icon3DMedal() {
  return (
    <div className="relative w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-rose-500/25 via-pink-500/15 to-transparent border border-rose-400/35 shadow-[0_4px_18px_rgba(244,63,94,0.35)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="drop-shadow-[0_2px_8px_rgba(244,63,94,0.6)]">
        <circle cx="12" cy="8" r="6" fill="url(#roseGrad)" stroke="#fb7185" strokeWidth="1.5" />
        <circle cx="12" cy="8" r="3.2" fill="#881337" stroke="#ffe4e6" strokeWidth="1" />
        <path d="M8.2 12.8L6 21L12 18L18 21L15.8 12.8" fill="url(#roseRibbon)" stroke="#f43f5e" strokeWidth="1.2" strokeLinejoin="round" />
        <defs>
          <linearGradient id="roseGrad" x1="6" y1="2" x2="18" y2="14" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fda4af" />
            <stop offset="1" stopColor="#e11d48" />
          </linearGradient>
          <linearGradient id="roseRibbon" x1="6" y1="13" x2="18" y2="21" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f43f5e" stopOpacity="0.9" />
            <stop offset="1" stopColor="#9f1239" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// 2. 3D Royal Sapphire Blue Cyber Shield for 15+ Projects Completed
function Icon3DCheck() {
  return (
    <div className="relative w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-600/25 via-indigo-500/15 to-transparent border border-blue-400/35 shadow-[0_4px_18px_rgba(59,130,246,0.35)] group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="drop-shadow-[0_2px_8px_rgba(59,130,246,0.6)]">
        <path d="M12 2L4 6V11.5C4 16.5 7.4 21.1 12 22C16.6 21.1 20 16.5 20 11.5V6L12 2Z" fill="url(#sapphireGrad)" stroke="#60a5fa" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8.5 11.5L11 14L15.5 9.5" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="sapphireGrad" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#60a5fa" stopOpacity="0.85" />
            <stop offset="1" stopColor="#1e3a8a" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// 3. 3D Radiant Solar Amber-Orange Users for 50+ Happy Clients
function Icon3DUsers() {
  return (
    <div className="relative w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-orange-500/25 via-amber-500/15 to-transparent border border-orange-400/35 shadow-[0_4px_18px_rgba(249,115,22,0.35)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="drop-shadow-[0_2px_8px_rgba(249,115,22,0.6)]">
        <circle cx="9" cy="7" r="4" fill="url(#orangeUser1)" stroke="#fb923c" strokeWidth="1.4" />
        <path d="M3 19C3 15.7 5.7 13 9 13C12.3 13 15 15.7 15 19" stroke="#fb923c" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="16" cy="7.5" r="3" fill="url(#orangeUser2)" stroke="#f97316" strokeWidth="1.2" />
        <path d="M16 13.5C17.8 13.9 19.5 15.2 20 17.5" stroke="#f97316" strokeWidth="1.4" strokeLinecap="round" />
        <defs>
          <linearGradient id="orangeUser1" x1="5" y1="3" x2="13" y2="11" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fed7aa" />
            <stop offset="1" stopColor="#ea580c" />
          </linearGradient>
          <linearGradient id="orangeUser2" x1="13" y1="4.5" x2="19" y2="10.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffedd5" />
            <stop offset="1" stopColor="#c2410c" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// 4. 3D Futuristic Neon Lime-Green Hologram Globe for 2 Global Brands
function Icon3DGlobe() {
  return (
    <div className="relative w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-lime-500/25 via-emerald-400/15 to-transparent border border-lime-400/35 shadow-[0_4px_18px_rgba(132,204,22,0.35)] group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="drop-shadow-[0_2px_8px_rgba(132,204,22,0.6)]">
        <circle cx="12" cy="12" r="9" fill="url(#limeGlobeGrad)" stroke="#a3e635" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="4" ry="9" stroke="#bef264" strokeWidth="1.3" />
        <line x1="3" y1="12" x2="21" y2="12" stroke="#bef264" strokeWidth="1.3" />
        <path d="M4.5 7.5H19.5M4.5 16.5H19.5" stroke="#d9f99d" strokeWidth="1.1" strokeLinecap="round" opacity="0.85" />
        <defs>
          <linearGradient id="limeGlobeGrad" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a3e635" stopOpacity="0.7" />
            <stop offset="1" stopColor="#3f6212" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Card styling configuration with distinct identity for each card
const statConfig: Record<
  string,
  {
    icon: () => React.JSX.Element;
    glowClass: string;
    borderHover: string;
    textGradient: string;
    dropShadow: string;
  }
> = {
  award: {
    icon: Icon3DMedal,
    glowClass: "bg-rose-500/20",
    borderHover: "hover:border-rose-500/50 hover:shadow-[0_8px_30px_rgba(244,63,94,0.2)]",
    textGradient: "from-rose-600 via-rose-500 to-rose-700 dark:from-white dark:via-rose-100 dark:to-rose-400",
    dropShadow: "drop-shadow-sm dark:drop-shadow-[0_2px_12px_rgba(244,63,94,0.45)]",
  },
  check: {
    icon: Icon3DCheck,
    glowClass: "bg-blue-500/20",
    borderHover: "hover:border-blue-500/50 hover:shadow-[0_8px_30px_rgba(59,130,246,0.2)]",
    textGradient: "from-blue-600 via-blue-500 to-blue-700 dark:from-white dark:via-blue-100 dark:to-blue-400",
    dropShadow: "drop-shadow-sm dark:drop-shadow-[0_2px_12px_rgba(59,130,246,0.45)]",
  },
  users: {
    icon: Icon3DUsers,
    glowClass: "bg-orange-500/20",
    borderHover: "hover:border-orange-500/50 hover:shadow-[0_8px_30px_rgba(249,115,22,0.2)]",
    textGradient: "from-amber-600 via-orange-500 to-orange-700 dark:from-white dark:via-amber-100 dark:to-orange-400",
    dropShadow: "drop-shadow-sm dark:drop-shadow-[0_2px_12px_rgba(249,115,22,0.45)]",
  },
  globe: {
    icon: Icon3DGlobe,
    glowClass: "bg-lime-500/20",
    borderHover: "hover:border-lime-500/50 hover:shadow-[0_8px_30px_rgba(132,204,22,0.2)]",
    textGradient: "from-emerald-600 via-lime-600 to-emerald-700 dark:from-white dark:via-lime-100 dark:to-lime-400",
    dropShadow: "drop-shadow-sm dark:drop-shadow-[0_2px_12px_rgba(132,204,22,0.45)]",
  },
};

export function About() {
  const { about } = portfolioContent;

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        className="flex flex-col md:flex-row gap-16 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left Column: Heading & Bio */}
        <div className="flex-1 space-y-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              {about.heading}{" "}
              <span className="text-gradient-primary">{about.headingHighlight}</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{about.bio}</p>
          </div>
        </div>

        {/* Right Column: 2x2 Distinct 3D Stat Cards */}
        <div className="flex-1 grid grid-cols-2 gap-4 sm:gap-5 w-full">
          {about.stats.map((stat, idx) => {
            const config = statConfig[stat.iconName] || statConfig.award;
            const Render3DIcon = config.icon;

            return (
              <motion.div
                key={idx}
                className={`glass-panel p-6 sm:p-7 rounded-[2rem] border border-border/80 transition-all duration-300 group relative overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1.5 cursor-default bg-card/90 ${config.borderHover}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {/* 3D Ambient Colored Glow in Card Corner (Unique per card) */}
                <div
                  className={`absolute -right-6 -top-6 w-28 h-28 ${config.glowClass} rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none`}
                />

                {/* 3D Isometric Icon Header */}
                <div className="mb-5">
                  <Render3DIcon />
                </div>

                {/* 3D Colored Metallic Metric Value */}
                <div className="relative mb-1.5 select-none">
                  <span
                    className={`text-3xl sm:text-4xl font-black tracking-tight bg-gradient-to-b ${config.textGradient} bg-clip-text text-transparent ${config.dropShadow}`}
                  >
                    {stat.value}
                  </span>
                </div>

                {/* Label */}
                <p className="text-xs sm:text-sm font-semibold text-muted-foreground tracking-wide group-hover:text-foreground transition-colors">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
