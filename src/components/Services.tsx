import React from "react";
import { motion } from "framer-motion";
import { portfolioContent } from "@/data/content";
import { SpotlightCard } from "./SpotlightCard";

// 3D Glassmorphic Isometric Icons for each domain
function Icon3DFullStack() {
  return (
    <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-cyan-500/20 via-sky-500/10 to-transparent border border-sky-400/30 shadow-[0_8px_25px_rgba(56,189,248,0.25)] group-hover:scale-110 group-hover:rotate-1 group-hover:shadow-[0_12px_35px_rgba(56,189,248,0.4)] transition-all duration-300">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-sky-500/20 to-transparent opacity-60 pointer-events-none" />
      <svg width="34" height="34" viewBox="0 0 32 32" fill="none" className="drop-shadow-[0_4px_10px_rgba(56,189,248,0.5)]">
        {/* Layer 1 Top */}
        <path d="M16 3L28 9L16 15L4 9L16 3Z" fill="url(#cyanTopGrad)" stroke="#38bdf8" strokeWidth="1.5" strokeLinejoin="round" />
        {/* Layer 2 Mid */}
        <path d="M4 14.5L16 20.5L28 14.5" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
        {/* Layer 3 Bottom */}
        <path d="M4 20L16 26L28 20" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="cyanTopGrad" x1="4" y1="3" x2="28" y2="15" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="1" stopColor="#0284c7" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Icon3DSoftwareEng() {
  return (
    <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-transparent border border-purple-400/30 shadow-[0_8px_25px_rgba(168,85,247,0.25)] group-hover:scale-110 group-hover:-rotate-1 group-hover:shadow-[0_12px_35px_rgba(168,85,247,0.4)] transition-all duration-300">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-purple-500/20 to-transparent opacity-60 pointer-events-none" />
      <svg width="34" height="34" viewBox="0 0 32 32" fill="none" className="drop-shadow-[0_4px_10px_rgba(168,85,247,0.5)]">
        {/* Terminal Window 3D Box */}
        <rect x="4" y="5" width="24" height="22" rx="4" fill="url(#codeBoxGrad)" stroke="#c084fc" strokeWidth="1.5" />
        {/* Code Brackets */}
        <path d="M11 13L8 16L11 19" stroke="#f3e8ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 13L24 16L21 19" stroke="#f3e8ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 11L15 21" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" />
        {/* Window controls */}
        <circle cx="8" cy="9" r="1.2" fill="#ef4444" />
        <circle cx="12" cy="9" r="1.2" fill="#f59e0b" />
        <circle cx="16" cy="9" r="1.2" fill="#10b981" />
        <defs>
          <linearGradient id="codeBoxGrad" x1="4" y1="5" x2="28" y2="27" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a855f7" stopOpacity="0.4" />
            <stop offset="1" stopColor="#3b0764" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Icon3DAIEng() {
  return (
    <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-transparent border border-emerald-400/30 shadow-[0_8px_25px_rgba(16,185,129,0.25)] group-hover:scale-110 group-hover:rotate-1 group-hover:shadow-[0_12px_35px_rgba(16,185,129,0.4)] transition-all duration-300">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-emerald-500/20 to-transparent opacity-60 pointer-events-none" />
      <svg width="34" height="34" viewBox="0 0 32 32" fill="none" className="drop-shadow-[0_4px_10px_rgba(16,185,129,0.5)]">
        {/* Chip / Brain Core */}
        <rect x="7" y="7" width="18" height="18" rx="4" fill="url(#aiChipGrad)" stroke="#34d399" strokeWidth="1.5" />
        {/* Neural Network Nodes */}
        <circle cx="16" cy="16" r="3" fill="#6ee7b7" />
        <circle cx="11" cy="11" r="1.8" fill="#a7f3d0" />
        <circle cx="21" cy="11" r="1.8" fill="#a7f3d0" />
        <circle cx="11" cy="21" r="1.8" fill="#a7f3d0" />
        <circle cx="21" cy="21" r="1.8" fill="#a7f3d0" />
        {/* Connecting Synapses */}
        <path d="M16 13V11M16 19V21M13 16H11M19 16H21M14 14L12 12M18 18L20 20M14 18L12 20M18 14L20 12" stroke="#6ee7b7" strokeWidth="1.2" strokeLinecap="round" />
        {/* Exterior Pins */}
        <path d="M12 4V7M16 4V7M20 4V7M12 25V28M16 25V28M20 25V28M4 12H7M4 16H7M4 20H7M25 12H28M25 16H28M25 20H28" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
        <defs>
          <linearGradient id="aiChipGrad" x1="7" y1="7" x2="25" y2="25" gradientUnits="userSpaceOnUse">
            <stop stopColor="#10b981" stopOpacity="0.4" />
            <stop offset="1" stopColor="#064e3b" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Icon3DCloudDevOps() {
  return (
    <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-transparent border border-amber-400/30 shadow-[0_8px_25px_rgba(245,158,11,0.25)] group-hover:scale-110 group-hover:-rotate-1 group-hover:shadow-[0_12px_35px_rgba(245,158,11,0.4)] transition-all duration-300">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-amber-500/20 to-transparent opacity-60 pointer-events-none" />
      <svg width="34" height="34" viewBox="0 0 32 32" fill="none" className="drop-shadow-[0_4px_10px_rgba(245,158,11,0.5)]">
        {/* Cloud Silhouette */}
        <path d="M8 19C5.79086 19 4 17.2091 4 15C4 13.0402 5.40939 11.4101 7.28829 11.0772C7.94052 7.61864 10.9632 5 14.6 5C18.2573 5 21.2917 7.64403 21.9213 11.1278C23.6841 11.5361 25 13.1166 25 15C25 17.2091 23.2091 19 21 19H8Z" fill="url(#cloudGrad)" stroke="#fbbf24" strokeWidth="1.5" />
        {/* Server Block underneath with gears */}
        <rect x="9" y="18" width="14" height="9" rx="2" fill="#78350f" stroke="#fbbf24" strokeWidth="1.2" />
        <circle cx="12" cy="22.5" r="1" fill="#34d399" />
        <circle cx="15" cy="22.5" r="1" fill="#fbbf24" />
        <line x1="18" y1="22.5" x2="21" y2="22.5" stroke="#fef3c7" strokeWidth="1.2" strokeLinecap="round" />
        <defs>
          <linearGradient id="cloudGrad" x1="4" y1="5" x2="25" y2="19" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fbbf24" stopOpacity="0.5" />
            <stop offset="1" stopColor="#92400e" stopOpacity="0.7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

const iconComponentMap: Record<string, () => React.JSX.Element> = {
  fullstack: Icon3DFullStack,
  software: Icon3DSoftwareEng,
  ai: Icon3DAIEng,
  cloud: Icon3DCloudDevOps,
};

export function Services() {
  const { services } = portfolioContent;

  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gradient-primary">
          {services.heading}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          {services.subtitle}
        </p>
      </motion.div>

      {/* 2x2 Spotlight Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.items.map((item, idx) => {
          const RenderIcon = iconComponentMap[item.iconName] || Icon3DFullStack;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <SpotlightCard className="h-full p-8 rounded-[2rem] border border-border/80 bg-card/80">
                <div className="flex flex-col h-full justify-between gap-6">
                  <div>
                    {/* Top Row: 3D Icon + Domain Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <RenderIcon />
                      {item.badge && (
                        <span className="text-xs sm:text-sm font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-primary/15 text-primary">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-foreground tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
