import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioContent } from "@/data/content";
import { DotPattern } from "./DotPattern";
import { AuroraText } from "./AuroraText";
import { LanyardBadge } from "./LanyardBadge";
import { TechTicker } from "./TechTicker";
import {
  ArrowRight,
  Download,
  Twitter,
  Github,
  Linkedin,
  Mail,
  BadgeCheck,
  Award,
  ExternalLink,
  X,
} from "lucide-react";

export function Hero() {
  const { personal } = portfolioContent;
  const [showCertificateModal, setShowCertificateModal] = useState(false);

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
    <section
      id="hero"
      className="relative min-h-[100vh] flex flex-col pt-24 sm:pt-28 md:pt-32 overflow-hidden bg-background"
    >
      <DotPattern width={16} height={16} cx={1} cy={1} cr={1} glow={true} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 pb-12">
        {/* Left Content Column */}
        <motion.div
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left pt-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2.5 py-1.5 px-4 glass-panel border border-foreground/10 rounded-full shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs font-medium text-muted-foreground">
                {personal.availability}
              </span>
            </div>
          </motion.div>

          {/* Heading with Aurora Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2">
              {personal.heroGreeting}
            </h1>

            {/* Dynamic Animated Aurora Text for both Light & Dark modes */}
            <div>
              <AuroraText
                text={personal.name}
                fontSize="clamp(3rem, 6.5vw, 5.5rem)"
                className="bg-transparent overflow-visible p-0 justify-start"
              />
            </div>
          </motion.div>

          {/* Bio Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {personal.heroDescription}
          </motion.p>

          {/* CTA Action Buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10 w-full md:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button
              onClick={() => scrollTo("#projects")}
              className="rounded-full px-7 h-12 bg-primary text-primary-foreground font-semibold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:-translate-y-1 cursor-pointer"
            >
              {personal.heroCtaPrimary} <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setShowCertificateModal(true)}
              className="rounded-full px-7 h-12 glass-panel text-foreground font-semibold flex items-center gap-2 hover:bg-foreground/10 transition-all hover:-translate-y-1 border border-foreground/10 cursor-pointer group"
            >
              <Award className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              <span>{personal.heroCtaSecondary}</span>
              <Download className="w-3.5 h-3.5 text-muted-foreground ml-0.5" />
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-5 justify-center md:justify-start w-full md:w-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {personal.socials.map((social, idx) => {
              const IconComp = socialIcons[social.platform] || Mail;
              return (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-foreground transition-colors hover:-translate-y-1 transform duration-200"
                >
                  <IconComp className="w-5 h-5" />
                </a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right Column: 3D Physics Lanyard Badge */}
        <motion.div
          className="flex-1 w-full max-w-md relative flex justify-center items-center py-2"
          initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <LanyardBadge
            name={personal.name}
            role={personal.role}
            badgeId={personal.badgeDetails.id}
            accentColor="#8b5cf6"
            ropeLength={75}
            ropeColor="#27272a"
            cardWidth="w-72 sm:w-80 md:w-84"
          >
            <div className="flex flex-col h-full bg-gradient-to-b from-card/95 via-card/90 to-card/95 backdrop-blur-2xl w-full">
              {/* Header: Vibrant Soft Aurora Mesh Gradient (Not harsh, rich & stylish) */}
              <div className="relative px-5 pt-8 pb-7 flex flex-col items-center bg-gradient-to-br from-indigo-500/25 via-purple-500/30 to-sky-400/25 text-foreground overflow-hidden border-b border-primary/20">
                {/* Subtle soft ambient light glow behind avatar */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-tr from-purple-500/30 to-sky-400/30 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(currentColor_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

                <div className="mt-1 relative w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-purple-400 to-pink-400 backdrop-blur-md shadow-2xl border border-white/60 dark:border-white/30 overflow-hidden group">
                  <img
                    src={personal.badgeDetails.avatar}
                    alt={personal.name}
                    className="w-full h-full object-cover rounded-full filter contrast-105"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Body Info */}
              <div className="p-5 flex flex-col items-center text-center bg-transparent text-foreground flex-1 gap-3">
                <div>
                  <h3 className="text-xl font-extrabold tracking-tight text-foreground">
                    {personal.name}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 mt-1 px-3.5 py-0.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold shadow-sm">
                    <span>{personal.role}</span>
                    <BadgeCheck className="w-4 h-4 text-sky-400 fill-sky-400/20 shrink-0" />
                  </div>
                </div>

                <div className="w-full border-t border-border/60 my-0.5" />

                {/* 2x2 Grid Stats */}
                <div className="grid grid-cols-2 gap-2.5 w-full text-left bg-muted/40 p-3 rounded-xl border border-border/50">
                  <div>
                    <span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold">
                      Specialty
                    </span>
                    <span className="font-bold text-foreground text-xs">
                      {personal.badgeDetails.specialty}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold">
                      Location
                    </span>
                    <span className="font-bold text-foreground text-xs">
                      {personal.badgeDetails.location}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold">
                      Experience
                    </span>
                    <span className="font-bold text-foreground text-xs">
                      {personal.badgeDetails.experience}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold">
                      Status
                    </span>
                    <span className="font-bold text-emerald-500 text-xs flex items-center gap-1">
                      ● {personal.badgeDetails.status}
                    </span>
                  </div>
                </div>

                {/* Barcode & Lightswind Label */}
                <div className="flex flex-col items-center mt-1 w-full gap-1">
                  <div className="flex gap-[2.5px] items-end h-7 px-3 py-0.5 bg-white/90 dark:bg-black/40 rounded-lg border border-border/40 w-full justify-center">
                    {Array.from({ length: 36 }).map((_, idx) => (
                      <div
                        key={idx}
                        className="bg-foreground rounded-[1px]"
                        style={{
                          width: idx % 4 === 0 ? "3.5px" : idx % 2 === 0 ? "2px" : "1px",
                          height: `${50 + Math.sin(idx * 1.4) * 45}%`,
                        }}
                      />
                    ))}
                  </div>

                  <div className="flex items-center justify-between w-full px-1 text-[10px]">
                    <span className="font-mono font-bold tracking-widest text-primary">
                      {personal.badgeDetails.id}
                    </span>
                    <span className="text-muted-foreground font-semibold text-[9px] uppercase tracking-wider">
                      {personal.badgeDetails.companyTag}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </LanyardBadge>
        </motion.div>
      </div>

      {/* Infinite Tech Ticker Marquee */}
      <div className="w-full relative z-10 mt-auto">
        <TechTicker />
      </div>

      {/* Certificate Preview & Download Modal */}
      <AnimatePresence>
        {showCertificateModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setShowCertificateModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-3xl bg-card border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border/60 bg-muted/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground leading-tight">
                      Foundation Course on AI Readiness
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Ministry of I&B (Govt. of India) • Google • YouTube • IICT
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowCertificateModal(false)}
                  className="w-8 h-8 rounded-full hover:bg-foreground/10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body / Certificate Preview */}
              <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex items-center justify-center bg-black/40">
                <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-white max-w-full">
                  <img
                    src={personal.certificateImage}
                    alt="Sachin Rawat - Foundation Course on AI Readiness Certificate"
                    className="w-full h-auto object-contain max-h-[58vh] select-none block"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 border-t border-border/60 bg-muted/30">
                <div className="text-xs text-muted-foreground text-center sm:text-left">
                  Certificate ID: <span className="font-mono font-semibold text-foreground">IICT-13082661748</span>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  <a
                    href={personal.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full glass-panel border border-foreground/15 text-foreground hover:bg-foreground/10 text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Full PDF</span>
                  </a>
                  <a
                    href={personal.certificateUrl}
                    download="Sachin_Rawat_AI_Certificate.pdf"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-xs sm:text-sm font-semibold shadow-md shadow-primary/20 transition-all cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
