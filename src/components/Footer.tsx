import React from "react";
import { motion } from "framer-motion";
import { portfolioContent } from "@/data/content";
import { TextMorph } from "./TextMorph";
import { ArrowUp, Twitter, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const { footer, personal } = portfolioContent;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    twitter: Twitter,
    github: Github,
    linkedin: Linkedin,
    email: Mail,
  };

  return (
    <footer className="w-full relative z-10 pt-16 pb-28 md:pb-36 bg-card/60 backdrop-blur-2xl border-t border-black/5 dark:border-white/10 shadow-2xl rounded-t-[3rem] overflow-hidden">
      {/* Central Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col gap-10">
        {/* Top Row: Brand & Back to Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-black/5 dark:border-white/10">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-500/20 via-primary/15 to-sky-400/20 p-[1px] border border-primary/25 shadow-sm">
              <div className="w-full h-full bg-primary/5 rounded-[15px] flex items-center justify-center">
                <span className="aurora-text-gradient font-black text-lg sm:text-xl tracking-tight leading-none">
                  {personal.initials}
                </span>
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold tracking-tight text-foreground text-base leading-none">
                {personal.name}
              </span>
              <span className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase mt-0.5">
                {personal.role}
              </span>
            </div>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel border border-black/5 dark:border-white/10 text-xs font-bold text-foreground hover:text-primary hover:border-primary/40 transition-all shadow-sm cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </motion.button>
        </div>

        {/* Central Morphing Banner */}
        <div className="py-12 px-6 rounded-3xl bg-black/[0.015] dark:bg-white/[0.02] border border-black/5 dark:border-white/10 text-center flex flex-col items-center justify-center my-2 shadow-sm">
          <TextMorph
            texts={footer.morphingTitles}
            morphTime={1.6}
            cooldownTime={0.8}
            className="text-3xl md:text-5xl lg:text-6xl text-foreground font-extrabold min-h-[70px] text-center"
          />
        </div>

        {/* Nav Links Row */}
        <div className="py-6 border-t border-black/5 dark:border-white/10 flex flex-wrap items-center justify-center gap-8 text-sm font-semibold text-muted-foreground">
          {footer.links.map((link, idx) => (
            <a
              key={idx}
              onClick={() => scrollTo(link.href)}
              className="hover:text-foreground transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Bottom Socials Centered */}
        <div className="pt-6 border-t border-black/5 dark:border-white/10 flex items-center justify-center gap-6 text-muted-foreground">
          {personal.socials.map((social, idx) => {
            const IconComp = socialIcons[social.platform] || Mail;
            return (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="hover:text-primary transition-colors p-2 rounded-full hover:bg-foreground/5 transition-transform hover:scale-110"
              >
                <IconComp className="w-5 h-5" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
