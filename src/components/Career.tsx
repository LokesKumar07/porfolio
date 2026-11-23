import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Briefcase, Calendar, Building, CheckCircle2 } from "lucide-react";

export interface CareerEvent {
  year: string;
  title: string;
  company: string;
  description: string;
  highlights: string[];
}

export const Career: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 80%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  const travelY = useTransform(smoothProgress, (val) => `${val * 100}%`);

  const events: CareerEvent[] = [
    {
      year: "May 2026 – June 2026",
      title: "AI/ML Intern",
      company: "Rigelsoft Technologies India Private Limited",
      description:
        "Completed a 1-month internship in Artificial Intelligence and Machine Learning, gaining hands-on exposure to ML concepts, data preprocessing, model development, and Python-based implementation. Applied AI/ML concepts to practical problems and gained experience in machine learning workflows and data analysis.",
      highlights: ["Data Preprocessing", "Model Development", "Python Implementation", "Data Analysis"],
    },
    {
      year: "2025",
      title: "Tech Savishkar 3.0 – National Hackathon Winner",
      company: "National Level Hackathon",
      description:
        "Secured Winner position in national-level hackathon competition, engineering an end-to-end full-stack solution under strict 36-hour sprint constraints with real-time testing and presentation.",
      highlights: ["National 1st Place", "Rapid Prototyping", "Full-Stack Deployment", "Team Leadership"],
    },
    {
      year: "2024 – Present",
      title: "Competitive Programmer (500+ Problems Solved)",
      company: "LeetCode & Coding Platforms",
      description:
        "Solved 500+ challenging algorithmic problems on LeetCode and coding platforms covering Arrays, Strings, Linked Lists, Binary Trees, Graphs, Dynamic Programming, and Greedy algorithms with optimized time and space complexity.",
      highlights: ["500+ Problems Solved", "Graphs & Trees", "Dynamic Programming", "Optimal Complexities"],
    },
    {
      year: "2024",
      title: "GEN-TRIX National Hackathon Finalist",
      company: "St. Joseph College of Engineering",
      description:
        "Selected participant and competitive contender at National Level Hackathon, demonstrating innovative hardware-software integration for smart safety monitoring.",
      highlights: ["IoT Hardware", "Microcontroller Telemetry", "National Finalist"],
    },
  ];

  return (
    <section id="career" className="max-w-7xl mx-auto px-6 py-24 relative overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20 text-center"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-3">
          <Briefcase className="w-3.5 h-3.5" /> Experience & Achievements
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
          Career <span className="text-gradient-primary">Journey</span>
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mt-2">
          Internship experience, national hackathon championships, and competitive programming milestones.
        </p>
      </motion.div>

      {/* Alternating Timeline Container */}
      <div ref={containerRef} className="relative max-w-5xl mx-auto pb-12">
        {/* Central Base Track Line (Desktop center, Mobile left-6) */}
        <div className="absolute top-0 bottom-0 left-6 md:left-1/2 md:-translate-x-1/2 w-[3px] bg-neutral-200 dark:bg-zinc-800/80 rounded-full z-0" />

        {/* Dynamic Highlighted High-Contrast Line */}
        <motion.div
          style={{ scaleY: smoothProgress, originY: 0 }}
          className="absolute top-0 left-6 md:left-1/2 md:-translate-x-1/2 w-[3px] h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-indigo-500 rounded-full z-10 shadow-[0_0_16px_rgba(56,189,248,0.85)]"
        />

        {/* Traveling Dynamic Glowing Head */}
        <motion.div
          style={{ top: travelY }}
          className="absolute left-6 md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cyan-300 border-2 border-white dark:border-zinc-950 shadow-[0_0_18px_#38bdf8] z-20 pointer-events-none -ml-[6.5px] md:-ml-0"
        />

        {/* Timeline Events: Alternating Left and Right */}
        <div className="space-y-14 sm:space-y-20 relative z-20">
          {events.map((event, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <div
                key={idx}
                className="relative flex flex-col md:flex-row items-center w-full"
              >
                {/* Center Node / Circle */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  whileInView={{ scale: 1.15, opacity: 1 }}
                  viewport={{ once: false, amount: 0.6 }}
                  transition={{ duration: 0.4 }}
                  className="absolute left-6 md:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-card dark:bg-zinc-900 border-2 border-primary/40 flex items-center justify-center shadow-lg z-20"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
                </motion.div>

                {/* Content Card: Alternates Left & Right */}
                <div
                  className={`w-full md:w-1/2 pl-16 md:pl-0 ${
                    isLeft ? "md:pr-14 md:text-right" : "md:pl-14 md:ml-auto md:text-left"
                  }`}
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isLeft ? -90 : 90,
                      filter: "blur(4px)",
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      filter: "blur(0px)",
                    }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.05,
                    }}
                    className="glass-panel p-6 sm:p-8 rounded-[2.25rem] border border-foreground/10 hover:border-primary/50 transition-all duration-300 shadow-xl group hover:-translate-y-1 bg-card/85 dark:bg-zinc-900/85 text-left"
                  >
                    {/* Header meta */}
                    <div className="flex flex-wrap items-center gap-2.5 mb-3.5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-mono font-bold">
                        <Calendar className="w-3.5 h-3.5" /> {event.year}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground">
                        <Building className="w-3.5 h-3.5 text-primary" /> {event.company}
                      </span>
                    </div>

                    {/* Job Title */}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight mb-3 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 font-normal">
                      {event.description}
                    </p>

                    {/* Highlights tags */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                      {event.highlights.map((item, hIdx) => (
                        <span
                          key={hIdx}
                          className="text-xs font-semibold px-3 py-1 rounded-full bg-muted/60 text-foreground/90 border border-border/50 flex items-center gap-1.5"
                        >
                          <CheckCircle2 className="w-3 h-3 text-cyan-400" /> {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Career;
