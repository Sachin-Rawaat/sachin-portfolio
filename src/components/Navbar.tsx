import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioContent } from "@/data/content";
import { useTheme } from "@/hooks/useTheme";
import { Sun, Moon, Menu, X } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const scrollTo = (href: string) => {
    setIsMobileMenuOpen(false);
    // Slight delay to allow menu exit animation to start smoothly
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  };

  return (
    <>
      {/* Fixed Persistent Header - No re-render scroll thrashing */}
      <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
        <div className="glass-panel w-full max-w-7xl rounded-full sm:rounded-[2rem] flex items-center justify-between px-5 py-3 sm:py-3.5 shadow-xl border border-foreground/10 bg-card/85 backdrop-blur-xl pointer-events-auto transition-shadow">
          {/* Brand Logo / Initials */}
          <a
            onClick={() => scrollTo("#hero")}
            className="cursor-pointer flex items-center group select-none"
            aria-label="Home"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-purple-500/20 via-primary/15 to-sky-400/20 p-[1px] border border-primary/25 shadow-sm group-hover:scale-105 active:scale-95 transition-all duration-200">
              <div className="w-full h-full bg-primary/5 hover:bg-primary/10 rounded-[11px] sm:rounded-[15px] flex items-center justify-center transition-colors">
                <span className="aurora-text-gradient font-black text-base sm:text-lg tracking-tight leading-none">
                  {portfolioContent.personal.initials}
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-8">
              {portfolioContent.navItems.map((item, idx) => (
                <li
                  key={idx}
                  className="relative group text-sm font-medium text-muted-foreground transition-colors"
                >
                  <a
                    onClick={() => scrollTo(item.href)}
                    className="cursor-pointer hover:text-foreground transition-colors py-1 block"
                  >
                    {item.name}
                  </a>
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-sky-400 -translate-x-1/2 group-hover:w-full transition-all duration-300 rounded-full" />
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions: Theme Toggle & Mobile Menu Trigger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 sm:p-2.5 rounded-full glass-panel border border-foreground/10 hover:border-primary/40 text-foreground transition-all shadow-md flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400 transition-transform rotate-0" />
              ) : (
                <Moon className="w-4 h-4 text-purple-600 transition-transform rotate-0" />
              )}
            </button>

            {/* Mobile Menu Button - Instant Tap Response */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="md:hidden p-2 rounded-full text-foreground hover:text-primary transition-colors focus:outline-none cursor-pointer"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 transition-transform rotate-90" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Menu - Ultra Fast & Snappy */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-2xl flex flex-col items-center justify-center p-6 md:hidden select-none"
          >
            <nav className="w-full max-w-xs flex flex-col items-center">
              <ul className="flex flex-col items-center space-y-6 w-full text-center">
                {portfolioContent.navItems.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.2 }}
                    className="w-full"
                  >
                    <a
                      onClick={() => scrollTo(item.href)}
                      className="text-2xl sm:text-3xl font-extrabold text-foreground hover:text-primary active:text-primary transition-colors cursor-pointer py-2 px-4 block rounded-2xl hover:bg-foreground/5"
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
