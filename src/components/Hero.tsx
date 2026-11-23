import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles, Trophy, Code2 } from "lucide-react";
import DotPattern from "./DotPattern";
import ShinyText from "./ShinyText";
import HangingIdCard from "./HangingIdCard";

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollToProjects = () => {
    const el = document.querySelector("#projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100vh] flex flex-col pt-28 md:pt-36 pb-16 overflow-hidden"
    >
      <DotPattern width={28} height={28} cx={1.5} cy={1.5} cr={1.5} glow={true} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 my-auto">
        {/* Left Content */}
        <motion.div
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 inline-flex"
          >
            <div className="inline-flex items-center gap-2.5 py-1.5 px-4 rounded-full glass-panel border border-foreground/10 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-muted-foreground">
                Available for Engineering Roles & Internships
              </span>
            </div>
          </motion.div>

          {/* Heading with Shiny Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-2 text-foreground">
              Hi, I'm
            </h1>
            <div className="block dark:hidden">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent font-extrabold text-[clamp(2.75rem,6.5vw,5.2rem)] leading-none tracking-tight block pb-2 select-none">
                Lokes Kumar V
              </span>
            </div>
            <div className="hidden dark:block">
              <ShinyText
                text="Lokes Kumar V"
                fontSize="clamp(2.75rem, 6.5vw, 5.2rem)"
                textClassName="font-extrabold pb-2"
              />
            </div>
          </motion.div>

          {/* Bio Subtitle */}
          <motion.p
            className="text-base sm:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed font-normal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            IT undergraduate skilled in <strong className="text-foreground">Java, Spring Boot, React, and IoT</strong>. 
            Hands-on experience building REST APIs, smart safety hardware, and full-stack systems.
            <strong className="text-cyan-600 dark:text-cyan-400">Consistent problem solver in LeetCode and coding platforms</strong> & National-level Hackathon Winner.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button
              onClick={scrollToProjects}
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-primary hover:bg-purple-700 text-white font-bold text-sm shadow-xl shadow-purple-500/25 hover:shadow-2xl hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all cursor-pointer group"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white dark:bg-white/5 border border-slate-300 dark:border-white/15 hover:border-primary hover:bg-purple-50 dark:hover:bg-primary/10 text-slate-900 dark:text-white font-bold text-sm hover:-translate-y-0.5 transition-all cursor-pointer group shadow-sm"
            >
              <Download className="w-4 h-4 text-primary group-hover:translate-y-0.5 transition-transform" />
              <span>View Resume</span>
            </button>
          </motion.div>

          {/* Highlights tag bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-muted-foreground font-medium"
          >
            <span className="flex items-center gap-1.5 font-semibold text-foreground/90">
              <Code2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" /> Consistent Problem Solver
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 font-semibold text-foreground/90">
              <Trophy className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" /> Hackathon Winner
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 font-semibold text-foreground/90">
              <Sparkles className="w-3.5 h-3.5 text-primary" /> CGPA: 8.66/10
            </span>
          </motion.div>
        </motion.div>

        {/* Right Pendulum ID Card */}
        <motion.div
          className="flex-1 flex justify-center items-center py-4 w-full"
          initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <HangingIdCard
            name="Lokes Kumar V"
            role="Software Engineer & IT"
            badgeId="LK-2028-PRO"
            accentColor="#8b5cf6"
            ropeLength={80}
            ropeColor="#27272a"
            cardWidth="w-72 sm:w-80"
          >
            <div className="flex flex-col h-full bg-card w-full rounded-3xl overflow-hidden shadow-2xl border border-border/80">
              {/* Card top banner with Avatar / Monogram */}
              <div className="relative px-6 pt-7 pb-6 flex flex-col items-center bg-gradient-to-br from-indigo-700 via-primary to-purple-950 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />
                <div className="mt-1 relative w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-cyan-400 via-primary to-purple-400 backdrop-blur-md shadow-2xl border border-white/50 overflow-hidden group flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-zinc-950/80 flex items-center justify-center text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-purple-300">
                    LK
                  </div>
                  <div className="absolute bottom-1 right-2 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white shadow-md" />
                </div>
              </div>

              {/* Card Body Info */}
              <div className="p-5 flex flex-col items-center text-center bg-card text-card-foreground flex-1 gap-3">
                <div>
                  <h3 className="text-xl font-extrabold tracking-tight text-foreground">
                    Lokes Kumar V
                  </h3>
                  <div className="inline-flex items-center gap-1.5 mt-1 px-3 py-0.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold">
                    <span>B.Tech IT • Software Engineer</span>
                  </div>
                </div>

                <div className="w-full border-t border-border/60 my-0.5" />

                <div className="grid grid-cols-2 gap-2.5 w-full text-left bg-muted/40 p-3 rounded-2xl border border-border/50">
                  <div>
                    <span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold">
                      Specialty
                    </span>
                    <span className="font-bold text-foreground text-xs">
                      Java, Spring & IoT
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold">
                      Location
                    </span>
                    <span className="font-bold text-foreground text-xs">
                      Coimbatore, India
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold">
                      Academics
                    </span>
                    <span className="font-bold text-foreground text-xs">
                      CGPA 8.66 / 10
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold">
                      Problem Solving
                    </span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                      Consistent Solver
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </HangingIdCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
