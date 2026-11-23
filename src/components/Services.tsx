import React from "react";
import { motion } from "framer-motion";
import { Server, Layout, Cpu, Database } from "lucide-react";
import InteractiveGradientCard from "./InteractiveGradientCard";

export const Services: React.FC = () => {
  const services = [
    {
      icon: Server,
      title: "Java & Spring Boot Backend",
      description:
        "Developing scalable REST APIs, MVC architecture, Spring Data JPA entities, role-based authentication, and structured global exception handling.",
      tags: ["Java", "Spring Boot", "REST APIs", "Spring Data JPA", "MVC"],
    },
    {
      icon: Layout,
      title: "Full-Stack Web & React Engineering",
      description:
        "Building responsive, interactive web applications with React, modern state management, live updates, and secure multi-device access.",
      tags: ["React.js", "JavaScript", "HTML5 & CSS3", "Tailwind CSS"],
    },
    {
      icon: Cpu,
      title: "IoT & Smart Hardware Embedded Systems",
      description:
        "Engineering intelligent safety systems integrating ESP8266 microcontrollers with MQ-3, MAX30100, and ultrasonic telemetry with ML-based alerts.",
      tags: ["ESP8266", "IoT Sensors", "MQ-3 & MAX30100", "Embedded ML"],
    },
    {
      icon: Database,
      title: "Data Structures & Database Optimization",
      description:
        "Consistent problem solver in LeetCode and coding platforms with deep mastery of Arrays, Graphs, DP, and Trees alongside relational database schema design with MySQL.",
      tags: ["LeetCode & Platforms", "DSA & Algorithms", "MySQL", "DBMS & SQL"],
    },
  ];

  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-3">
          Engineering Domains
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
          Core <span className="text-gradient-primary">Capabilities</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
          Specialized in backend APIs, modern web interfaces, IoT hardware integrations, and algorithmic problem solving.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <InteractiveGradientCard
                className="h-full p-8 rounded-[2rem] border border-border/80 bg-card/80 shadow-md hover:shadow-2xl"
                gradientSize={280}
                gradientColor="rgba(139, 92, 246, 0.14)"
                gradientFrom="#8b5cf6"
                gradientTo="#38bdf8"
              >
                <div className="flex flex-col h-full justify-between gap-6">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/25 text-primary flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <span className="text-xs font-mono font-bold text-muted-foreground/60">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl font-extrabold mb-3 text-foreground tracking-tight group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/60">
                    {service.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-semibold px-3 py-1 rounded-full bg-muted/60 text-muted-foreground border border-border/40"
                      >
                        {tag}
                      </span>
                    ))}
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

export default Services;
