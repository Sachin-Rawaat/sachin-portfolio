import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioContent } from "@/data/content";
import { useTheme } from "@/hooks/useTheme";
import { Sun, Moon, Menu, X } from "lucide-react";

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
    },
    closed: {
      opacity: 0,
      y: -16,
      scale: 0.98,
      transition: { duration: 0.18, ease: "easeIn" },
    },
  };

  const navListVariants = {
    open: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
    closed: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
  };

  const navItemVariants = {
    open: { y: 0, opacity: 1, transition: { duration: 0.22, ease: "easeOut" } },
    closed: { y: 15, opacity: 0, transition: { duration: 0.15 } },
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0, transition: { duration: 0.4 } }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
          >
            <div className="glass-panel w-full max-w-7xl rounded-[2rem] flex items-center justify-between px-6 py-4 shadow-xl">
              {/* Brand Unit */}
              <a
                onClick={() => scrollTo("#hero")}
                className="cursor-pointer flex items-center group select-none"
                aria-label="Home"
              >
                <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-500/20 via-primary/15 to-sky-400/20 p-[1px] border border-primary/25 shadow-sm group-hover:scale-105 active:scale-95 transition-all duration-300">
                  <div className="w-full h-full bg-primary/5 hover:bg-primary/10 rounded-[15px] flex items-center justify-center transition-colors">
                    <span className="aurora-text-gradient font-black text-lg sm:text-xl tracking-tight leading-none">
                      {portfolioContent.personal.initials}
                    </span>
                  </div>
                </div>
              </a>

              {/* Desktop Nav Links */}
              <nav className="hidden md:flex flex-1 justify-center">
                <ul className="flex space-x-8">
                  {portfolioContent.navItems.map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="relative group text-sm font-medium text-muted-foreground transition-colors"
                    >
                      <a
                        onClick={() => scrollTo(item.href)}
                        className="cursor-pointer hover:text-foreground"
                      >
                        {item.name}
                      </a>
                      <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-sky-400 -translate-x-1/2 group-hover:w-full transition-all duration-300 rounded-full" />
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Actions: Theme Toggle & Mobile Menu Trigger */}
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className="p-2.5 rounded-full glass-panel border border-foreground/10 hover:border-primary/40 text-foreground transition-all shadow-md flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95"
                >
                  {theme === "dark" ? (
                    <Sun className="w-4 h-4 text-amber-400 transition-transform rotate-0" />
                  ) : (
                    <Moon className="w-4 h-4 text-purple-600 transition-transform rotate-0" />
                  )}
                </button>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle menu"
                  className="md:hidden text-foreground hover:text-primary transition-colors p-2"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Mobile Full-Screen Menu with Butter-Smooth Hardware Acceleration */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center p-8 md:hidden transform-gpu"
          >
            <motion.ul variants={navListVariants} className="flex flex-col items-center space-y-7">
              {portfolioContent.navItems.map((item, idx) => (
                <motion.li key={idx} variants={navItemVariants}>
                  <a
                    onClick={() => scrollTo(item.href)}
                    className="text-3xl font-extrabold text-foreground hover:text-primary transition-colors cursor-pointer py-1 block"
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
