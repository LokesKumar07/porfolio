import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Printer, FileText, Mail, Phone, MapPin, ExternalLink, Award, Code2, GraduationCap, Briefcase, FolderGit2, CheckCircle2 } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl rounded-3xl glass-panel bg-card dark:bg-zinc-900 border border-border/80 shadow-2xl p-6 sm:p-10 z-10 my-8 max-h-[92vh] overflow-y-auto text-foreground"
        >
          {/* Header Controls */}
          <div className="flex items-center justify-between pb-6 border-b border-border/60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-foreground tracking-tight">Curriculum Vitae</h3>
                <p className="text-xs text-muted-foreground">Lokes Kumar V – B.Tech Information Technology</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => window.print()}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-white/5 border border-slate-300 dark:border-border text-xs font-semibold text-slate-700 dark:text-muted-foreground hover:text-slate-950 dark:hover:text-foreground cursor-pointer transition-colors shadow-sm"
                title="Print / Save PDF"
              >
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">Print / PDF</span>
              </button>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white dark:bg-white/5 border border-slate-300 dark:border-border flex items-center justify-center text-slate-700 dark:text-muted-foreground hover:text-slate-950 dark:hover:text-foreground cursor-pointer transition-colors shadow-sm"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <div className="py-6 space-y-7 text-sm leading-relaxed print:p-0">
            {/* Header / Contact Banner */}
            <div className="bg-muted/40 p-6 rounded-3xl border border-border/60 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                  LOKES KUMAR V
                </h1>
                <p className="text-primary font-bold text-sm sm:text-base mt-1">
                  Software Engineer • Java, Spring Boot, React & IoT
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  <span>Coimbatore, Tamil Nadu, India</span>
                </div>
              </div>

              {/* Contact Links */}
              <div className="text-xs space-y-1.5 md:text-right font-medium">
                <div className="flex items-center md:justify-end gap-2 text-muted-foreground">
                  <Mail className="w-3.5 h-3.5 text-primary" />
                  <a href="mailto:lokeskumar.v7@gmail.com" className="hover:text-primary transition-colors underline">
                    lokeskumar.v7@gmail.com
                  </a>
                </div>
                <div className="flex items-center md:justify-end gap-2 text-muted-foreground">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  <a href="tel:9486217745" className="hover:text-primary transition-colors">
                    +91 9486217745
                  </a>
                </div>
                <div className="flex flex-wrap md:justify-end gap-3 pt-1">
                  <a
                    href="https://www.linkedin.com/in/lokes-kumar-v-520a0131a"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline flex items-center gap-1 font-bold"
                  >
                    <span>LinkedIn</span> <ExternalLink className="w-3 h-3" />
                  </a>
                  <span>•</span>
                  <a
                    href="https://github.com/LokesKumarV"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline flex items-center gap-1 font-bold"
                  >
                    <span>GitHub</span> <ExternalLink className="w-3 h-3" />
                  </a>
                  <span>•</span>
                  <a
                    href="https://leetcode.com/u/lokes_kumar/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 hover:underline flex items-center gap-1 font-bold"
                  >
                    <span>LeetCode</span> <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h5 className="font-extrabold text-xs uppercase tracking-wider text-primary mb-2 flex items-center gap-1.5">
                <Award className="w-4 h-4" /> Professional Summary
              </h5>
              <p className="text-muted-foreground text-sm leading-relaxed bg-card/60 p-4 rounded-2xl border border-border/50">
                IT undergraduate skilled in Java, Spring Boot, React, and IoT, with hands-on experience developing REST APIs,
                full-stack applications, and smart safety systems. Consistent problem solver in LeetCode and coding platforms with strong foundations in
                DSA, DBMS, and software development. National-level hackathon winner with experience building real-world, scalable solutions.
              </p>
            </div>

            {/* Education */}
            <div>
              <h5 className="font-extrabold text-xs uppercase tracking-wider text-primary mb-3 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" /> Education
              </h5>
              <div className="space-y-3">
                <div className="p-4 rounded-2xl border border-border/50 bg-card/50 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                  <div>
                    <h6 className="font-bold text-foreground text-base">B.Tech. Information Technology</h6>
                    <p className="text-xs text-primary font-semibold">Sri Krishna College of Engineering and Technology | Coimbatore, India</p>
                  </div>
                  <div className="text-right sm:text-right">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 font-bold text-xs">
                      CGPA: 8.66 / 10*
                    </span>
                    <p className="text-xs font-mono text-muted-foreground mt-0.5">2024 – 2028</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl border border-border/50 bg-card/30 flex flex-col sm:flex-row justify-between sm:items-center gap-2 text-xs">
                  <div>
                    <span className="font-bold text-foreground">Grade 12 — Higher Secondary</span>
                    <p className="text-muted-foreground">Stanes Anglo Indian Higher Secondary School-Coimbatore | Tamil Nadu, India</p>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-primary">87%</span>
                    <p className="font-mono text-muted-foreground">2023 – 2024</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl border border-border/50 bg-card/30 flex flex-col sm:flex-row justify-between sm:items-center gap-2 text-xs">
                  <div>
                    <span className="font-bold text-foreground">Grade 10 — Secondary School</span>
                    <p className="text-muted-foreground">Stanes Anglo Indian Higher Secondary School-Coimbatore | Tamil Nadu, India</p>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-cyan-400">94%</span>
                    <p className="font-mono text-muted-foreground">2021 – 2022</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Internship Experience */}
            <div>
              <h5 className="font-extrabold text-xs uppercase tracking-wider text-primary mb-3 flex items-center gap-1.5">
                <Briefcase className="w-4 h-4" /> Internship Experience
              </h5>
              <div className="p-4 rounded-2xl border border-border/50 bg-card/50 space-y-2">
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                  <div>
                    <h6 className="font-bold text-foreground text-base">AI/ML Intern</h6>
                    <p className="text-xs text-primary font-semibold">Rigelsoft Technologies India Private Limited</p>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">May 2026 – June 2026</span>
                </div>
                <ul className="list-disc list-inside space-y-1.5 text-xs text-muted-foreground pt-1">
                  <li>
                    Completed a 1-month internship in Artificial Intelligence and Machine Learning, gaining hands-on exposure to ML concepts, data preprocessing, model development, and Python-based implementation.
                  </li>
                  <li>
                    Applied AI/ML concepts to practical problems and gained experience in machine learning workflows and data analysis.
                  </li>
                </ul>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h5 className="font-extrabold text-xs uppercase tracking-wider text-primary mb-3 flex items-center gap-1.5">
                <FolderGit2 className="w-4 h-4" /> Projects
              </h5>
              <div className="space-y-3.5">
                {/* Project 1 */}
                <div className="p-4 rounded-2xl border border-border/50 bg-card/50 space-y-2">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                    <h6 className="font-bold text-foreground text-sm">
                      Road Safety – Smart Alcohol & Fatigue Tracking
                    </h6>
                    <span className="text-xs font-mono font-semibold text-primary">ESP8266, IoT, ML</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                    <li>Developed an IoT safety system using MQ-3, MAX30100, and ultrasonic sensors for alcohol, health, fatigue, and driver-presence monitoring.</li>
                    <li>Integrated ML-based fatigue detection, automatic vehicle control, real-time alerts, and incident logging.</li>
                  </ul>
                </div>

                {/* Project 2 */}
                <div className="p-4 rounded-2xl border border-border/50 bg-card/50 space-y-2">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                    <h6 className="font-bold text-foreground text-sm">
                      Real-Time Attendance Tracking System
                    </h6>
                    <span className="text-xs font-mono font-semibold text-primary">React, Spring Boot, MySQL</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                    <li>Built a secure teacher-centric attendance system with timetable-based tracking, real-time updates, role-based authentication, and duplicate prevention.</li>
                    <li>Implemented date-range reports, Excel/PDF/CSV exports, audit logging, and cloud deployment for multi-device access.</li>
                  </ul>
                </div>

                {/* Project 3 */}
                <div className="p-4 rounded-2xl border border-border/50 bg-card/50 space-y-2">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                    <h6 className="font-bold text-foreground text-sm">
                      Internal Job Posting & Application System
                    </h6>
                    <span className="text-xs font-mono font-semibold text-primary">Java, Spring Boot, MySQL</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                    <li>Developed REST APIs for departments, job positions, applications, interview feedback, and user management.</li>
                    <li>Implemented MVC architecture, Spring Data JPA, and global exception handling for reliable backend operations.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Problem Solving & Achievements */}
            <div>
              <h5 className="font-extrabold text-xs uppercase tracking-wider text-primary mb-3 flex items-center gap-1.5">
                <Code2 className="w-4 h-4" /> Problem Solving & Achievements
              </h5>
              <div className="p-4 rounded-2xl border border-border/50 bg-card/50 space-y-2 text-xs">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Problem Solving: Consistent problem solver in LeetCode and coding platforms</strong> covering Data Structures and Algorithms, including Arrays, Strings, Linked Lists, Trees, Graphs, Dynamic Programming, and more.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Tech Savishkar 3.0:</strong> Winner – National Level Hackathon.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">GEN-TRIX:</strong> Participant – National Level Hackathon, St. Joseph College of Engineering.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills & Additional Info */}
            <div>
              <h5 className="font-extrabold text-xs uppercase tracking-wider text-primary mb-3">
                Technical Skills & Languages
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl border border-border/50 bg-card/40">
                  <span className="font-bold text-foreground block mb-1">Programming Languages:</span>
                  <span className="text-muted-foreground">Java, MySQL, JavaScript, HTML, CSS, Python</span>
                </div>
                <div className="p-3 rounded-xl border border-border/50 bg-card/40">
                  <span className="font-bold text-foreground block mb-1">Frameworks:</span>
                  <span className="text-muted-foreground">Spring Boot, React.js</span>
                </div>
                <div className="p-3 rounded-xl border border-border/50 bg-card/40">
                  <span className="font-bold text-foreground block mb-1">Developer Tools:</span>
                  <span className="text-muted-foreground">VS Code, Eclipse, MySQL Workbench, Postman, Swagger, Star UML, Figma, Excel</span>
                </div>
                <div className="p-3 rounded-xl border border-border/50 bg-card/40">
                  <span className="font-bold text-foreground block mb-1">Course Work & Core Concepts:</span>
                  <span className="text-muted-foreground">DSA, DBMS, OS, Networking, Algorithms, OOPS, CN</span>
                </div>
              </div>
              <div className="mt-3 text-xs text-muted-foreground">
                <span className="font-bold text-foreground">Languages:</span> English, Tamil
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-6 border-t border-border/60 flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-muted border border-slate-300 dark:border-border text-xs font-bold text-slate-800 dark:text-foreground transition-colors cursor-pointer"
            >
              Close
            </button>
            <a
              href="mailto:lokeskumar.v7@gmail.com?subject=Opportunity%20Discussion%20-%20Lokes%20Kumar%20V"
              className="px-6 py-2.5 rounded-full bg-primary hover:bg-purple-700 text-white text-xs font-bold shadow-md shadow-purple-500/30 transition-all cursor-pointer"
            >
              Contact Lokes
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ResumeModal;
