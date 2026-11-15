import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ReactLenis, useLenis } from "lenis/react";
import { portfolioContent } from "@/data/content";

import { CustomCursor } from "@/components/CustomCursor";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingDock } from "@/components/FloatingDock";

function PortfolioShell() {
  const [showDock, setShowDock] = useState(false);

  // Both useLenis and window scroll listener for maximum reliability
  useLenis(({ scroll, velocity }) => {
    const isPastThreshold = scroll > window.innerHeight * 0.35;
    if (isPastThreshold && velocity >= 0) {
      setShowDock(true);
    } else if (scroll < window.innerHeight * 0.35) {
      setShowDock(false);
    }
  });

  useEffect(() => {
    let prevY = window.scrollY;
    const handleScroll = () => {
      const currentY = window.scrollY;
      const isPast = currentY > window.innerHeight * 0.35;
      if (isPast && currentY >= prevY) {
        setShowDock(true);
      } else if (currentY < window.innerHeight * 0.35) {
        setShowDock(false);
      }
      prevY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />

      <main className="w-full flex flex-col pt-16 sm:pt-20 border-none">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Education />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      {/* Floating Magnification Dock - visible on both mobile and desktop */}
      <AnimatePresence>
        {showDock && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed bottom-3 sm:bottom-4 left-0 right-0 z-[999] flex justify-center px-2 pointer-events-auto"
          >
            <FloatingDock items={portfolioContent.dockItems} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <div className="bg-transparent min-h-screen relative overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
      {/* Universal Butter-Smooth Custom Cursor for Mobile, Laptop & Desktop */}
      <CustomCursor glowEffect={true} showTrail={true} trailLength={4} size={22} />

      {/* Lenis Butter-Smooth Scroll container with native touch momentum on mobile */}
      <ReactLenis
        root
        options={{
          smoothWheel: true,
          duration: 1.1,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          syncTouch: false,
          wheelMultiplier: 1,
        }}
      >
        <PortfolioShell />
      </ReactLenis>
    </div>
  );
}
