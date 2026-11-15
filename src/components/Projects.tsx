import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioContent, ProjectItem } from "@/data/content";
import { ArrowUpRight, X, Clock, Layers, ArrowRight } from "lucide-react";

const techIconMap: Record<string, string> = {
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "Generative AI": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/anaconda/anaconda-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  "WebRTC": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webrtc/webrtc-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  "FastAPI": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  "PyTorch": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
  "Redis": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
  "Financial APIs": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
  "GraphQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
  "Express": "/icons/express.svg",
  "AWS": "/icons/aws.svg",
};

function getTechIcon(name: string): string {
  if (techIconMap[name]) return techIconMap[name];
  const found = portfolioContent.techStack.find(
    (t) => t.name.toLowerCase() === name.toLowerCase()
  );
  return found?.icon || "";
}

export function Projects() {
  const { projects } = portfolioContent;
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const scrollToContact = () => {
    setSelectedProject(null);
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-6 py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-center md:text-left">
          {projects.heading}{" "}
          <span className="text-gradient-primary">{projects.headingHighlight}</span>
        </h2>
        <p className="text-muted-foreground text-center md:text-left max-w-2xl text-lg">
          {projects.subtitle}
        </p>
      </motion.div>

      {/* 12-Column Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        {projects.items.map((project, idx) => (
          <motion.div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className={`group relative overflow-hidden rounded-[2.25rem] block shadow-xl border border-foreground/10 cursor-pointer ${project.gridClass}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Background Image & Dark Overlay */}
            <div className="absolute inset-0 bg-neutral-950">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 transform-gpu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20 pointer-events-none" />
            </div>

            {/* Top Badge: In Progress Status */}
            <div className="absolute top-5 left-5 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-semibold text-white/90 shadow-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
              <span>{project.status || "In Progress"}</span>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-7 md:p-8 flex flex-col justify-end pointer-events-none">
              <div className="flex items-end justify-between gap-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300 transform-gpu">
                <div className="z-10 max-w-lg">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight drop-shadow-md">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base font-medium text-white/80 opacity-90 group-hover:opacity-100 transition-opacity">
                    {project.subtitle}
                  </p>

                  {/* Tech stack tags */}
                  {project.tags && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tags.slice(0, 4).map((tag, tIdx) => {
                        const iconUrl = getTechIcon(tag);
                        return (
                          <span
                            key={tIdx}
                            className="inline-flex items-center gap-1.5 text-[11px] font-medium text-white/90 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10"
                          >
                            {iconUrl && (
                              <img
                                src={iconUrl}
                                alt={tag}
                                className="w-3.5 h-3.5 object-contain shrink-0"
                              />
                            )}
                            <span>{tag}</span>
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>

                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white border border-white/20 group-hover:bg-primary group-hover:border-primary transition-all duration-300 shadow-lg group-hover:scale-110 shrink-0 pointer-events-auto">
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project In-Development Preview Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-full max-w-2xl bg-card border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
            >
              {/* Header Image */}
              <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-neutral-950">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/80 transition-all cursor-pointer z-20"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Status Badge */}
                <div className="absolute bottom-4 left-6 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-amber-500/30 text-amber-300 text-xs font-semibold shadow-lg">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                  </span>
                  <span>Active Development • Launching Soon</span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 flex-1 overflow-y-auto space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {selectedProject.subtitle}
                  </p>
                </div>

                {/* Overview */}
                {selectedProject.overview && (
                  <div className="p-4 rounded-2xl bg-muted/40 border border-border/60">
                    <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                      Architecture & Scope
                    </div>
                    <p className="text-sm text-foreground/90 leading-relaxed">
                      {selectedProject.overview}
                    </p>
                  </div>
                )}

                {/* Tech Stack */}
                {selectedProject.tags && (
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-2.5">
                      Target Technologies
                    </span>
                    <div className="flex flex-wrap gap-2.5">
                      {selectedProject.tags.map((tag, tIdx) => {
                        const iconUrl = getTechIcon(tag);
                        return (
                          <div
                            key={tIdx}
                            className="inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-muted/60 border border-border/80 text-foreground shadow-sm hover:border-primary/50 transition-colors"
                          >
                            {iconUrl && (
                              <img
                                src={iconUrl}
                                alt={tag}
                                className="w-4 h-4 object-contain shrink-0"
                                loading="eager"
                              />
                            )}
                            <span>{tag}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Progress Callout */}
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs sm:text-sm leading-relaxed">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-amber-300 mb-0.5">
                      Under Active Engineering
                    </p>
                    <p className="text-amber-200/80">
                      I am currently coding and fine-tuning this system. Full live demo, case study, and GitHub repository will be published upon milestone completion.
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 sm:px-8 py-4 border-t border-border/60 bg-muted/20">
                <span className="text-xs text-muted-foreground text-center sm:text-left">
                  Want to collaborate or learn more about this build?
                </span>
                <button
                  onClick={scrollToContact}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-xs sm:text-sm hover:bg-primary/90 shadow-md shadow-primary/20 transition-all cursor-pointer"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
