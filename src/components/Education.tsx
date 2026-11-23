import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import InteractiveGradientCard from "./InteractiveGradientCard";

export const Education: React.FC = () => {
  const educationList = [
    {
      degree: "B.Tech. in Information Technology",
      school: "Sri Krishna College of Engineering and Technology",
      location: "Coimbatore, Tamil Nadu, India",
      year: "2024 – 2028",
      badge: "CGPA: 8.66 / 10*",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      icon: GraduationCap,
      badgeIcon: Award,
      details: [
        "Core coursework in Data Structures, Algorithms, DBMS, Operating Systems, and Computer Networks",
        "Achieved outstanding 8.66/10 cumulative grade point average across rigorous technical curriculum",
        "Winner of National Level Hackathon (Tech Savishkar 3.0) and GEN-TRIX Hackathon Contender",
        "Engineered real-world IoT smart safety systems and enterprise full-stack REST API portals",
      ],
    },
    {
      degree: "Higher Secondary Certificate (Grade 12)",
      school: "Stanes Anglo Indian Higher Secondary School",
      location: "Coimbatore, Tamil Nadu, India",
      year: "2023 – 2024",
      badge: "87% Distinction",
      badgeColor: "text-primary bg-primary/10 border-primary/30",
      icon: BookOpen,
      badgeIcon: Award,
      details: [
        "Specialized in Higher Mathematics, Physics, Chemistry, and Computer Science",
        "Graduated with 87% aggregate marks, demonstrating rigorous analytical and quantitative foundations",
        "Active leader in science exhibitions and technical problem-solving competitions",
      ],
    },
    {
      degree: "Secondary School Certificate (Grade 10)",
      school: "Stanes Anglo Indian Higher Secondary School",
      location: "Coimbatore, Tamil Nadu, India",
      year: "2021 – 2022",
      badge: "94% Academic Honors",
      badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
      icon: BookOpen,
      badgeIcon: Award,
      details: [
        "Completed foundational secondary school curriculum with exemplary 94% academic score",
        "Top tier performance across STEM subjects, logic, and mathematics",
      ],
    },
  ];

  return (
    <section id="education" className="max-w-7xl mx-auto px-6 py-24 space-y-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center md:text-left"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-3">
          <GraduationCap className="w-3.5 h-3.5" /> Academic Qualifications
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
          Education & <span className="text-gradient-primary">Credentials</span>
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mt-2">
          Theoretical grounding, academic distinction, and foundational engineering principles.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {educationList.map((item, idx) => {
          const MainIcon = item.icon;
          const BadgeIcon = item.badgeIcon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <InteractiveGradientCard
                className="h-full p-8 rounded-[2.5rem] border border-border/80 bg-card/80 shadow-xl"
                gradientSize={300}
                gradientColor="rgba(139, 92, 246, 0.12)"
                gradientFrom="#8b5cf6"
                gradientTo="#38bdf8"
              >
                <div className="flex flex-col h-full justify-between gap-6">
                  <div>
                    {/* Top Row: Icon + Badge */}
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/25 text-primary flex items-center justify-center shadow-sm">
                        <MainIcon className="w-7 h-7 text-primary" />
                      </div>
                      <span
                        className={`px-3.5 py-1.5 rounded-full border text-xs font-extrabold flex items-center gap-1.5 shadow-sm ${item.badgeColor}`}
                      >
                        <BadgeIcon className="w-3.5 h-3.5" />
                        {item.badge}
                      </span>
                    </div>

                    {/* Degree & School Info */}
                    <h3 className="text-xl font-extrabold text-foreground tracking-tight mb-2">
                      {item.degree}
                    </h3>
                    <p className="text-xs font-bold text-primary mb-2">{item.school}</p>
                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-muted-foreground mb-6 pb-4 border-b border-border/60">
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="w-3 h-3 text-primary" /> {item.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 font-mono text-primary font-bold">
                        <Calendar className="w-3 h-3" /> {item.year}
                      </span>
                    </div>

                    {/* Details bullet points */}
                    <ul className="space-y-3">
                      {item.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </InteractiveGradientCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
