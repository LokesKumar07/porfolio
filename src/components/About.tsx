import React from "react";
import { motion } from "framer-motion";
import { Code2, Award, Trophy, Cpu, CheckCircle2, Zap } from "lucide-react";

export const About: React.FC = () => {
  const stats = [
    {
      icon: <Code2 className="w-6 h-6" />,
      label: "Problems Solved",
      value: "500+",
    },
    {
      icon: <Award className="w-6 h-6" />,
      label: "B.Tech IT CGPA",
      value: "8.66",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      label: "Tech Savishkar 3.0",
      value: "Winner",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      label: "Full-Stack & IoT Systems",
      value: "3+",
    },
  ];

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        className="flex flex-col lg:flex-row gap-16 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left Column Text */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" /> Professional Summary
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Architecting <span className="text-gradient-primary">Scalable Solutions</span> & Smart IoT Systems
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            I am an Information Technology undergraduate at <strong className="text-foreground">Sri Krishna College of Engineering and Technology (CGPA 8.66/10)</strong>,
            passionate about building robust backend architectures with Java and Spring Boot, interactive React interfaces, and intelligent embedded hardware.
          </p>

          <p className="text-sm sm:text-base text-muted-foreground/90 leading-relaxed">
            With a deep foundation in Data Structures, Algorithms, and System Design as a consistent problem solver in LeetCode and coding platforms across Graphs, DP, Trees, and Arrays,
            I focus on writing clean, scalable code with global exception handling, secure role-based access control, and low-latency API delivery.
          </p>

          <div className="pt-2 flex flex-wrap gap-3 justify-center lg:justify-start">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground bg-muted/50 px-4 py-2 rounded-xl border border-border/50">
              <Zap className="w-4 h-4 text-amber-500" />
              <span>National Hackathon Winner</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-foreground bg-muted/50 px-4 py-2 rounded-xl border border-border/50">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>RESTful Microservices & JPA</span>
            </div>
          </div>
        </div>

        {/* Right Column Grid */}
        <div className="flex-1 grid grid-cols-2 gap-4 w-full">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="glass-panel p-6 rounded-3xl border border-foreground/10 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/25 transition-colors pointer-events-none" />
              <div className="text-primary mb-4 p-3 bg-primary/10 w-max rounded-2xl group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-1 tracking-tight">
                {stat.value}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
