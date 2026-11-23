import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

interface NavbarProps {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Periodic Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Journey", href: "#career" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-4 px-4 sm:px-6">
      <div
        className={`max-w-7xl mx-auto rounded-full transition-all duration-300 px-5 py-3 flex items-center justify-between ${
          scrolled
            ? "glass-panel bg-card/80 dark:bg-zinc-900/80 shadow-xl border border-black/10 dark:border-white/10"
            : "bg-transparent"
        }`}
      >
        {/* Brand */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#hero");
          }}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-400 via-primary to-purple-500 p-[1.5px] shadow-md group-hover:scale-105 transition-transform">
            <div className="w-full h-full rounded-[14px] bg-card dark:bg-zinc-950 flex items-center justify-center font-extrabold text-sm text-foreground">
              <span className="text-gradient-primary">LK</span>
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-extrabold tracking-tight text-foreground text-sm sm:text-base leading-none">
              Lokes Kumar V
            </span>
            <span className="text-[9px] font-bold text-muted-foreground tracking-widest uppercase mt-0.5">
              Software Engineer & IT
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100 dark:bg-white/5 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.href);
              }}
              className="text-xs font-semibold text-slate-600 dark:text-muted-foreground hover:text-slate-900 dark:hover:text-foreground hover:bg-white dark:hover:bg-white/10 px-3.5 py-1.5 rounded-full transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-foreground hover:text-primary hover:border-primary/50 transition-all cursor-pointer shadow-sm"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-purple-600" />
            )}
          </button>

          {/* Let's Talk CTA */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#contact");
            }}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary hover:bg-purple-700 text-white font-bold text-xs shadow-md shadow-purple-500/25 hover:shadow-lg hover:shadow-purple-500/35 transition-all cursor-pointer group"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-foreground cursor-pointer shadow-sm"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden mt-3 max-w-7xl mx-auto rounded-3xl glass-panel bg-card/95 dark:bg-zinc-900/95 p-6 border border-black/10 dark:border-white/10 shadow-2xl flex flex-col gap-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="text-base font-semibold text-foreground/80 hover:text-primary py-2.5 px-4 rounded-xl hover:bg-primary/10 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
              <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-primary" /> Open to Internships & Roles
              </span>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("#contact");
                }}
                className="px-4 py-2 rounded-full bg-primary text-white text-xs font-bold"
              >
                Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
