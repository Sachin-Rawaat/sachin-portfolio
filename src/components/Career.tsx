import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { portfolioContent } from "@/data/content";
import { Rocket, Cpu, Terminal, Palette, Sparkles } from "lucide-react";

export function Career() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { career } = portfolioContent;

  const eventIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    rocket: Rocket,
    cpu: Cpu,
    terminal: Terminal,
    palette: Palette,
    sparkles: Sparkles,
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div id="career" ref={containerRef} className="max-w-7xl mx-auto px-6 py-24 relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-20 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          <span className="text-gradient-primary">{career.title}</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          {career.subtitle}
        </p>
      </motion.div>

      {/* Timeline Structure */}
      <div className="relative">
        {/* Background Vertical Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] bg-primary/20 hidden md:block" />

        {/* Animated Progress Line */}
        <motion.div
          style={{ scaleY: lineHeight, originY: 0 }}
          className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] bg-primary hidden md:block z-10"
        />

        {/* Events List */}
        <div className="space-y-12 md:space-y-16">
          {career.events.map((event, idx) => {
            const isEven = idx % 2 === 0;
            const IconComp = eventIcons[event.iconName] || Rocket;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-[calc(50%-40px)]">
                  <div className="glass-panel p-8 rounded-[2rem] border border-border/80 hover:border-primary/50 transition-all duration-300 shadow-xl group">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center font-mono text-xs font-bold text-primary bg-primary/10 border border-primary/25 px-3.5 py-1 rounded-full shadow-sm">
                        <IconComp className="w-3.5 h-3.5 mr-1.5" />
                        {event.year}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-1 tracking-tight">
                      {event.title}
                    </h3>
                    <p className="text-sm font-semibold text-primary/90 mb-4">
                      {event.subtitle}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Center Node Circle */}
                <div className="absolute left-1/2 -translate-x-1/2 z-20 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-background border-4 border-primary shadow-md">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>

                {/* Empty opposite spacer */}
                <div className="hidden md:block md:w-[calc(50%-40px)]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
