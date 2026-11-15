import React from "react";
import { motion } from "framer-motion";
import { portfolioContent } from "@/data/content";
import { Star, Quote, User } from "lucide-react";

export function Testimonials() {
  const { testimonials } = portfolioContent;

  return (
    <section id="testimonials" className="max-w-7xl mx-auto px-6 py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          {testimonials.heading}{" "}
          <span className="text-gradient-primary">
            {testimonials.headingHighlight}
          </span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          {testimonials.subtitle}
        </p>
      </motion.div>

      {/* 3-Column Clean Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.items.map((testimonial, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
            className="glass-panel p-8 rounded-[2rem] border border-border/80 shadow-xl flex flex-col justify-between group hover:border-primary/50 transition-all duration-300 relative overflow-hidden bg-card/90"
          >
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors pointer-events-none" />

            <div>
              {/* Star Rating & Quote Mark */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-primary/30" />
              </div>

              {/* Quote Content focusing on Sachin's Real Skills */}
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base italic mb-8">
                &ldquo;{testimonial.content}&rdquo;
              </p>
            </div>

            {/* Author Profile with WhatsApp Blocked Style Avatar (Silhouette User) */}
            <div className="flex items-center gap-3.5 pt-5 border-t border-border/50">
              {/* WhatsApp Default / Blocked Grey Profile Placeholder Avatar */}
              <div className="w-11 h-11 rounded-full bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-zinc-400 shadow-inner group-hover:scale-105 transition-transform shrink-0">
                <User className="w-6 h-6 text-zinc-400 opacity-80" />
              </div>
              <div>
                <h4 className="text-base font-bold text-foreground">
                  {testimonial.name}
                </h4>
                <p className="text-xs font-semibold text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
