import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, FolderGit2, CheckCircle2 } from "lucide-react";

export interface ProjectItem {
  id: number;
  title: string;
  subtitle: string;
  category: "all" | "iot" | "fullstack" | "backend";
  categoryLabel: string;
  link: string;
  image: string;
  gridClass: string;
  techStack: string[];
  keyFeatures: string[];
}

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const projects: ProjectItem[] = [
    {
      id: 1,
      title: "Road Safety – Smart Alcohol & Fatigue Tracking",
      subtitle:
        "Intelligent IoT driver safety system with sensor telemetry, ML fatigue detection, and automatic vehicle control.",
      category: "iot",
      categoryLabel: "IoT & Embedded ML",
      link: "https://github.com/LokesKumarV",
      image:
        "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=1200",
      gridClass: "lg:col-span-7 min-h-[440px]",
      techStack: ["ESP8266", "MQ-3 Sensor", "MAX30100", "Ultrasonic", "Machine Learning"],
      keyFeatures: [
        "Real-time alcohol detection using MQ-3 sensor and driver presence verification",
        "MAX30100 pulse oximeter integration for biometric fatigue & vitals monitoring",
        "ML-based drowsiness detection with automated vehicle shutdown & emergency logging",
      ],
    },
    {
      id: 2,
      title: "Real-Time Attendance Tracking System",
      subtitle:
        "Secure teacher-centric academic portal featuring timetable tracking, duplicate prevention, and exportable analytics.",
      category: "fullstack",
      categoryLabel: "Full-Stack React & Spring",
      link: "https://github.com/LokesKumarV",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200",
      gridClass: "lg:col-span-5 min-h-[440px]",
      techStack: ["React.js", "Spring Boot", "MySQL", "REST APIs", "Tailwind CSS"],
      keyFeatures: [
        "Timetable-based slot verification with duplicate record prevention",
        "Role-based authentication for faculty, department heads, and administration",
        "Automated date-range reports with one-click Excel, PDF, and CSV exports",
      ],
    },
    {
      id: 3,
      title: "Internal Job Posting & Application System",
      subtitle:
        "Enterprise recruitment pipeline with MVC architecture, Spring Data JPA, and structured global exception handling.",
      category: "backend",
      categoryLabel: "Java & Spring Boot Backend",
      link: "https://github.com/LokesKumarV",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
      gridClass: "lg:col-span-12 min-h-[400px]",
      techStack: ["Java 17", "Spring Boot", "Spring Data JPA", "MySQL", "Swagger / OpenAPI"],
      keyFeatures: [
        "Complete REST API lifecycle for job openings, applicant screening, and interview feedback",
        "Clean MVC architecture with custom repository query methods and transaction management",
        "Robust global exception handler (@ControllerAdvice) for standardized error responses",
      ],
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "iot", label: "IoT & Hardware" },
    { id: "fullstack", label: "Full-Stack" },
    { id: "backend", label: "Backend REST APIs" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-6 py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" /> Featured Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl text-base sm:text-lg mt-2">
            Real-world systems engineered across backend architectures, full-stack web portals, and IoT smart devices.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-primary text-white border border-primary shadow-lg shadow-purple-500/30 scale-105"
                  : "bg-white dark:bg-card/60 text-slate-700 dark:text-muted-foreground hover:text-slate-950 dark:hover:text-foreground border border-slate-300 dark:border-white/10 hover:border-primary/50 shadow-sm"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`group relative overflow-hidden rounded-[2.5rem] block shadow-xl border border-black/10 dark:border-white/10 ${project.gridClass} cursor-pointer`}
            >
              {/* Background Image & Overlay */}
              <div className="absolute inset-0 bg-neutral-950">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-70 group-hover:opacity-85 transform-gpu"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30 pointer-events-none" />
              </div>

              {/* Top Category Badge & GitHub link */}
              <div className="absolute top-6 left-6 right-6 z-10 flex items-center justify-between">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-sm">
                  {project.categoryLabel}
                </span>

                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:bg-primary group-hover:border-primary transition-all shadow-md">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Content */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end pointer-events-none z-10">
                <div className="translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 tracking-tight drop-shadow-md">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-white/80 opacity-90 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed mb-4 max-w-3xl">
                    {project.subtitle}
                  </p>

                  {/* Bullet features */}
                  <div className="hidden sm:flex flex-col gap-1.5 mb-4 max-w-2xl">
                    {project.keyFeatures.map((feat, fIdx) => (
                      <span key={fIdx} className="text-xs text-white/90 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </span>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
