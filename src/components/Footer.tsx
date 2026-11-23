import React from "react";
import { motion } from "framer-motion";
import { ArrowUp, Heart, Mail, Code2 } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25a1.62 1.62 0 1 0 0 3.25 1.62 1.62 0 0 0 0-3.25z" />
  </svg>
);

export const Footer: React.FC = () => {
  const roles = [
    "IT Undergraduate",
    "Java & Spring Boot",
    "React Frontend",
    "IoT Systems Engineer",
    "Consistent Problem Solver",
    "Lokes Kumar V",
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Periodic Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Career", href: "#career" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: LinkedinIcon,
      href: "https://www.linkedin.com/in/lokes-kumar-v-520a0131a",
      label: "LinkedIn Profile",
    },
    {
      icon: GithubIcon,
      href: "https://github.com/LokesKumarV",
      label: "GitHub Profile",
    },
    {
      icon: () => <Code2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
      href: "https://leetcode.com/u/lokes_kumar/",
      label: "LeetCode & Coding Platforms",
    },
    {
      icon: () => <Mail className="w-4 h-4" />,
      href: "mailto:lokeskumar.v7@gmail.com",
      label: "Email Lokes",
    },
  ];

  return (
    <footer className="w-full relative z-10 pt-16 pb-32 md:pb-36 bg-card/60 backdrop-blur-2xl border-t border-black/5 dark:border-white/10 shadow-2xl rounded-t-[3rem] overflow-hidden mt-12">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top bar with Brand and Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-12 border-b border-border/60">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-400 via-primary to-purple-500 p-[1.5px] shadow-md">
              <div className="w-full h-full rounded-[14px] bg-card dark:bg-zinc-950 flex items-center justify-center font-extrabold text-base text-foreground">
                <span className="text-gradient-primary">LK</span>
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold tracking-tight text-foreground text-lg leading-none">
                Lokes Kumar V
              </span>
              <span className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase mt-0.5">
                Software Engineer & IT Undergraduate
              </span>
            </div>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel border border-black/10 dark:border-white/15 text-xs font-bold text-foreground hover:text-primary hover:border-primary/40 transition-all shadow-sm cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </motion.button>
        </div>

        {/* Roles Marquee / Looping Words banner */}
        <div className="py-10 px-6 rounded-3xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/10 text-center flex flex-wrap items-center justify-center gap-3 sm:gap-6 my-10 shadow-sm">
          {roles.map((role, idx) => (
            <React.Fragment key={idx}>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors cursor-default">
                {role}
              </span>
              {idx < roles.length - 1 && (
                <span className="text-primary/40 select-none">•</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-10 text-xs sm:text-sm font-semibold text-muted-foreground">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Icons & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-border/60 text-xs text-muted-foreground">
          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all shadow-sm"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          {/* Copyright notice */}
          <div className="flex items-center gap-1.5 font-medium text-center md:text-right">
            <span>© {new Date().getFullYear()} Lokes Kumar V. Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline-block" />
            <span>& Lightswind UI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
