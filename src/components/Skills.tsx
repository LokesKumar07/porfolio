import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Atom, Code2 } from "lucide-react";

export interface PeriodicSkill {
  number: number;
  symbol: string;
  name: string;
  category: "languages" | "frameworks" | "core-cs" | "tools" | "iot";
  categoryName: string;
  weight: string; // e.g. "v17.0", "Active", "REST"
  description: string;
  bgGlow: string;
  borderColor: string;
  textColor: string;
  badgeBg: string;
}

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedElement, setSelectedElement] = useState<PeriodicSkill | null>(null);

  const periodicSkills: PeriodicSkill[] = [
    // --- 1. PROGRAMMING LANGUAGES (Cyan / Blue) ---
    {
      number: 1,
      symbol: "Jv",
      name: "Java",
      category: "languages",
      categoryName: "Programming Languages",
      weight: "v17.0",
      description: "Primary language for enterprise backend, OOP principles, collections, and multi-threaded systems.",
      bgGlow: "from-cyan-500/10 to-blue-500/5",
      borderColor: "border-cyan-500/40 hover:border-cyan-400",
      textColor: "text-cyan-400",
      badgeBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    },
    {
      number: 2,
      symbol: "Py",
      name: "Python",
      category: "languages",
      categoryName: "Programming Languages",
      weight: "3.12",
      description: "Utilized for AI/ML workflows, data preprocessing, and model implementation during Rigelsoft internship.",
      bgGlow: "from-cyan-500/10 to-blue-500/5",
      borderColor: "border-cyan-500/40 hover:border-cyan-400",
      textColor: "text-cyan-400",
      badgeBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    },
    {
      number: 3,
      symbol: "Js",
      name: "JavaScript",
      category: "languages",
      categoryName: "Programming Languages",
      weight: "ES2024",
      description: "Client-side interactivity, asynchronous REST calls, event handling, and React state dynamics.",
      bgGlow: "from-cyan-500/10 to-blue-500/5",
      borderColor: "border-cyan-500/40 hover:border-cyan-400",
      textColor: "text-cyan-400",
      badgeBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    },
    {
      number: 4,
      symbol: "Sq",
      name: "MySQL",
      category: "languages",
      categoryName: "Programming Languages",
      weight: "8.0",
      description: "Relational database querying, schema architecture, joins, indexing, and transactional integrity.",
      bgGlow: "from-cyan-500/10 to-blue-500/5",
      borderColor: "border-cyan-500/40 hover:border-cyan-400",
      textColor: "text-cyan-400",
      badgeBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    },
    {
      number: 5,
      symbol: "Ht",
      name: "HTML5",
      category: "languages",
      categoryName: "Programming Languages",
      weight: "5.3",
      description: "Semantic web standards, modern form validations, accessibility, and clean document structure.",
      bgGlow: "from-cyan-500/10 to-blue-500/5",
      borderColor: "border-cyan-500/40 hover:border-cyan-400",
      textColor: "text-cyan-400",
      badgeBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    },
    {
      number: 6,
      symbol: "Cs",
      name: "CSS3",
      category: "languages",
      categoryName: "Programming Languages",
      weight: "CSS4",
      description: "Responsive layouts, Flexbox, CSS Grid, custom keyframe animations, and Tailwind utility styling.",
      bgGlow: "from-cyan-500/10 to-blue-500/5",
      borderColor: "border-cyan-500/40 hover:border-cyan-400",
      textColor: "text-cyan-400",
      badgeBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    },

    // --- 2. FRAMEWORKS & BACKEND (Purple / Violet) ---
    {
      number: 7,
      symbol: "Sb",
      name: "Spring Boot",
      category: "frameworks",
      categoryName: "Frameworks & Backend",
      weight: "3.2",
      description: "Core framework for microservices, dependency injection, Spring Data JPA, and secure REST APIs.",
      bgGlow: "from-purple-500/10 to-indigo-500/5",
      borderColor: "border-purple-500/40 hover:border-purple-400",
      textColor: "text-purple-400",
      badgeBg: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    },
    {
      number: 8,
      symbol: "Rc",
      name: "React.js",
      category: "frameworks",
      categoryName: "Frameworks & Backend",
      weight: "19.0",
      description: "Modern single-page applications, component-based architectures, hooks, and reactive dashboards.",
      bgGlow: "from-purple-500/10 to-indigo-500/5",
      borderColor: "border-purple-500/40 hover:border-purple-400",
      textColor: "text-purple-400",
      badgeBg: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    },
    {
      number: 9,
      symbol: "Jp",
      name: "Spring Data JPA",
      category: "frameworks",
      categoryName: "Frameworks & Backend",
      weight: "ORM",
      description: "Object-relational mapping, automated query derivations, paging, and transactional entities.",
      bgGlow: "from-purple-500/10 to-indigo-500/5",
      borderColor: "border-purple-500/40 hover:border-purple-400",
      textColor: "text-purple-400",
      badgeBg: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    },
    {
      number: 10,
      symbol: "Mv",
      name: "MVC Architecture",
      category: "frameworks",
      categoryName: "Frameworks & Backend",
      weight: "Pattern",
      description: "Separation of concerns across Model, View, and Controller layers for enterprise maintainability.",
      bgGlow: "from-purple-500/10 to-indigo-500/5",
      borderColor: "border-purple-500/40 hover:border-purple-400",
      textColor: "text-purple-400",
      badgeBg: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    },
    {
      number: 11,
      symbol: "Re",
      name: "REST APIs",
      category: "frameworks",
      categoryName: "Frameworks & Backend",
      weight: "HTTP",
      description: "Stateless HTTP services, JSON serialization, status codes, and standardized error responses.",
      bgGlow: "from-purple-500/10 to-indigo-500/5",
      borderColor: "border-purple-500/40 hover:border-purple-400",
      textColor: "text-purple-400",
      badgeBg: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    },

    // --- 3. CORE CS & DSA (Neon Emerald Green) ---
    {
      number: 12,
      symbol: "Ds",
      name: "Data Structures",
      category: "core-cs",
      categoryName: "Core Computer Science",
      weight: "Active",
      description: "Mastery of Arrays, Linked Lists, Binary Trees, Heaps, Hash Tables, and Trie structures.",
      bgGlow: "from-emerald-500/10 to-teal-500/5",
      borderColor: "border-emerald-500/40 hover:border-emerald-400",
      textColor: "text-emerald-400",
      badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    },
    {
      number: 13,
      symbol: "Al",
      name: "Algorithms",
      category: "core-cs",
      categoryName: "Core Computer Science",
      weight: "O(log N)",
      description: "Dynamic Programming, Graph traversals (BFS/DFS), Greedy methods, Binary Search, and Sorting.",
      bgGlow: "from-emerald-500/10 to-teal-500/5",
      borderColor: "border-emerald-500/40 hover:border-emerald-400",
      textColor: "text-emerald-400",
      badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    },
    {
      number: 14,
      symbol: "Db",
      name: "DBMS",
      category: "core-cs",
      categoryName: "Core Computer Science",
      weight: "ACID",
      description: "Database normalization (1NF-BCNF), ACID properties, indexing, query execution plans, and concurrency.",
      bgGlow: "from-emerald-500/10 to-teal-500/5",
      borderColor: "border-emerald-500/40 hover:border-emerald-400",
      textColor: "text-emerald-400",
      badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    },
    {
      number: 15,
      symbol: "Os",
      name: "Operating Systems",
      category: "core-cs",
      categoryName: "Core Computer Science",
      weight: "Kernel",
      description: "Process management, multi-threading, CPU scheduling algorithms, deadlock prevention, and virtual memory.",
      bgGlow: "from-emerald-500/10 to-teal-500/5",
      borderColor: "border-emerald-500/40 hover:border-emerald-400",
      textColor: "text-emerald-400",
      badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    },
    {
      number: 16,
      symbol: "Cn",
      name: "Computer Networks",
      category: "core-cs",
      categoryName: "Core Computer Science",
      weight: "TCP/IP",
      description: "OSI 7-layer model, TCP/UDP protocols, socket communication, DNS, HTTP/HTTPS, and routing.",
      bgGlow: "from-emerald-500/10 to-teal-500/5",
      borderColor: "border-emerald-500/40 hover:border-emerald-400",
      textColor: "text-emerald-400",
      badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    },
    {
      number: 17,
      symbol: "Op",
      name: "OOP Concepts",
      category: "core-cs",
      categoryName: "Core Computer Science",
      weight: "SOLID",
      description: "Encapsulation, Inheritance, Polymorphism, Abstraction, and clean SOLID object design.",
      bgGlow: "from-emerald-500/10 to-teal-500/5",
      borderColor: "border-emerald-500/40 hover:border-emerald-400",
      textColor: "text-emerald-400",
      badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    },

    // --- 4. DEVELOPER TOOLS & WORKFLOW (Warm Amber / Orange) ---
    {
      number: 18,
      symbol: "Vs",
      name: "VS Code",
      category: "tools",
      categoryName: "Developer Tools",
      weight: "Editor",
      description: "Primary IDE for full-stack web engineering, extension configurations, debugging, and terminal workflows.",
      bgGlow: "from-amber-500/10 to-orange-500/5",
      borderColor: "border-amber-500/40 hover:border-amber-400",
      textColor: "text-amber-400",
      badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    },
    {
      number: 19,
      symbol: "Pm",
      name: "Postman",
      category: "tools",
      categoryName: "Developer Tools",
      weight: "Testing",
      description: "Automated API request testing, collection runners, environment variables, and payload validation.",
      bgGlow: "from-amber-500/10 to-orange-500/5",
      borderColor: "border-amber-500/40 hover:border-amber-400",
      textColor: "text-amber-400",
      badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    },
    {
      number: 20,
      symbol: "Sw",
      name: "Swagger",
      category: "tools",
      categoryName: "Developer Tools",
      weight: "OpenAPI",
      description: "Interactive REST documentation generation, API contract definitions, and endpoint mocking.",
      bgGlow: "from-amber-500/10 to-orange-500/5",
      borderColor: "border-amber-500/40 hover:border-amber-400",
      textColor: "text-amber-400",
      badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    },
    {
      number: 21,
      symbol: "Mw",
      name: "MySQL Workbench",
      category: "tools",
      categoryName: "Developer Tools",
      weight: "GUI",
      description: "Visual database administration, SQL querying, ER diagram generation, and performance optimization.",
      bgGlow: "from-amber-500/10 to-orange-500/5",
      borderColor: "border-amber-500/40 hover:border-amber-400",
      textColor: "text-amber-400",
      badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    },
    {
      number: 22,
      symbol: "Ec",
      name: "Eclipse",
      category: "tools",
      categoryName: "Developer Tools",
      weight: "IDE",
      description: "Java Enterprise development environment, Maven dependency builds, and unit testing.",
      bgGlow: "from-amber-500/10 to-orange-500/5",
      borderColor: "border-amber-500/40 hover:border-amber-400",
      textColor: "text-amber-400",
      badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    },
    {
      number: 23,
      symbol: "Fg",
      name: "Figma",
      category: "tools",
      categoryName: "Developer Tools",
      weight: "Design",
      description: "UI wireframing, component mockups, auto-layout design systems, and responsive prototype specs.",
      bgGlow: "from-amber-500/10 to-orange-500/5",
      borderColor: "border-amber-500/40 hover:border-amber-400",
      textColor: "text-amber-400",
      badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    },
    {
      number: 24,
      symbol: "Su",
      name: "Star UML",
      category: "tools",
      categoryName: "Developer Tools",
      weight: "Model",
      description: "System modeling, class diagrams, sequence diagrams, and software architectural blueprints.",
      bgGlow: "from-amber-500/10 to-orange-500/5",
      borderColor: "border-amber-500/40 hover:border-amber-400",
      textColor: "text-amber-400",
      badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    },
    {
      number: 25,
      symbol: "Gt",
      name: "Git & GitHub",
      category: "tools",
      categoryName: "Developer Tools",
      weight: "VCS",
      description: "Distributed version control, branch management, pull requests, and collaborative open source codebases.",
      bgGlow: "from-amber-500/10 to-orange-500/5",
      borderColor: "border-amber-500/40 hover:border-amber-400",
      textColor: "text-amber-400",
      badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    },

    // --- 5. IOT & SMART EMBEDDED SYSTEMS (Neon Rose / Pink) ---
    {
      number: 26,
      symbol: "Ep",
      name: "ESP8266",
      category: "iot",
      categoryName: "IoT & Hardware",
      weight: "Wi-Fi MCU",
      description: "NodeMCU Wi-Fi enabled microcontrollers for real-time sensor telemetry and remote device automation.",
      bgGlow: "from-rose-500/10 to-pink-500/5",
      borderColor: "border-rose-500/40 hover:border-rose-400",
      textColor: "text-rose-400",
      badgeBg: "bg-rose-500/10 text-rose-400 border-rose-500/30",
    },
    {
      number: 27,
      symbol: "Mq",
      name: "MQ-3 Sensor",
      category: "iot",
      categoryName: "IoT & Hardware",
      weight: "Analog",
      description: "High-sensitivity alcohol vapor detection module integrated into vehicle ignition interlocking circuits.",
      bgGlow: "from-rose-500/10 to-pink-500/5",
      borderColor: "border-rose-500/40 hover:border-rose-400",
      textColor: "text-rose-400",
      badgeBg: "bg-rose-500/10 text-rose-400 border-rose-500/30",
    },
    {
      number: 28,
      symbol: "Mx",
      name: "MAX30100",
      category: "iot",
      categoryName: "IoT & Hardware",
      weight: "I2C Sensor",
      description: "Integrated pulse oximetry and heart-rate monitor sensor for biometric driver health and fatigue telemetry.",
      bgGlow: "from-rose-500/10 to-pink-500/5",
      borderColor: "border-rose-500/40 hover:border-rose-400",
      textColor: "text-rose-400",
      badgeBg: "bg-rose-500/10 text-rose-400 border-rose-500/30",
    },
    {
      number: 29,
      symbol: "Us",
      name: "Ultrasonic",
      category: "iot",
      categoryName: "IoT & Hardware",
      weight: "Sonar",
      description: "HC-SR04 sonar proximity sensors for obstacle distance measurement and driver presence detection.",
      bgGlow: "from-rose-500/10 to-pink-500/5",
      borderColor: "border-rose-500/40 hover:border-rose-400",
      textColor: "text-rose-400",
      badgeBg: "bg-rose-500/10 text-rose-400 border-rose-500/30",
    },
    {
      number: 30,
      symbol: "Ml",
      name: "Embedded ML",
      category: "iot",
      categoryName: "IoT & Hardware",
      weight: "Predictive",
      description: "Edge machine learning algorithms for drowsiness prediction, anomalous telemetry, and emergency alerts.",
      bgGlow: "from-rose-500/10 to-pink-500/5",
      borderColor: "border-rose-500/40 hover:border-rose-400",
      textColor: "text-rose-400",
      badgeBg: "bg-rose-500/10 text-rose-400 border-rose-500/30",
    },
  ];

  const categories = [
    { id: "all", label: "All Elements", color: "text-slate-800 dark:text-foreground border-slate-300 dark:border-border" },
    { id: "languages", label: "Languages", color: "text-cyan-700 dark:text-cyan-400 border-cyan-500/40" },
    { id: "frameworks", label: "Frameworks & Backend", color: "text-purple-700 dark:text-purple-400 border-purple-500/40" },
    { id: "core-cs", label: "Core CS & DSA", color: "text-emerald-700 dark:text-emerald-400 border-emerald-500/40" },
    { id: "tools", label: "Developer Tools", color: "text-amber-700 dark:text-amber-400 border-amber-500/40" },
    { id: "iot", label: "IoT & Hardware", color: "text-rose-700 dark:text-rose-400 border-rose-500/40" },
  ];

  const filteredElements =
    activeCategory === "all"
      ? periodicSkills
      : periodicSkills.filter((item) => item.category === activeCategory);

  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-24 relative">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center md:text-left"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-3">
          <Atom className="w-3.5 h-3.5 animate-spin" /> Chemical Periodic System
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
          Periodic Table of <span className="text-gradient-primary">Technical Mastery</span>
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mt-2">
          An organized chemical grid of programming languages, frameworks, core computer science, tools, and IoT hardware components.
        </p>

        {/* Category Legend & Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mt-8 pt-4 border-t border-border/50 justify-center md:justify-start">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                activeCategory === cat.id
                  ? "bg-primary text-white border-primary shadow-lg shadow-purple-500/25 scale-105"
                  : `bg-white dark:bg-card/60 hover:bg-slate-50 dark:hover:bg-white/10 shadow-sm ${cat.color}`
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Periodic Table Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3.5 sm:gap-4">
        <AnimatePresence mode="popLayout">
          {filteredElements.map((elem) => {
            const isSelected = selectedElement?.number === elem.number;

            return (
              <motion.div
                layout
                key={elem.number}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.35 }}
                onClick={() => setSelectedElement(elem)}
                whileHover={{ y: -4, scale: 1.04 }}
                className={`group relative p-3 sm:p-4 rounded-2xl border transition-all duration-300 cursor-pointer select-none bg-gradient-to-b ${elem.bgGlow} ${elem.borderColor} shadow-sm hover:shadow-xl backdrop-blur-md ${
                  isSelected ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-105" : ""
                }`}
              >
                {/* Top Row: Atomic Number & Mass */}
                <div className="flex items-center justify-between text-[10px] font-mono font-bold text-muted-foreground/80 mb-1">
                  <span>{elem.number}</span>
                  <span className="truncate max-w-[50px]">{elem.weight}</span>
                </div>

                {/* Central Chemical Symbol */}
                <div className="text-center my-1">
                  <span
                    className={`font-mono text-2xl sm:text-3xl font-black tracking-tight ${elem.textColor} drop-shadow-sm group-hover:scale-110 inline-block transition-transform duration-200`}
                  >
                    {elem.symbol}
                  </span>
                </div>

                {/* Element Name */}
                <div className="text-center">
                  <h4 className="text-xs font-bold text-foreground truncate">{elem.name}</h4>
                  <span className="text-[9px] uppercase tracking-wider text-muted-foreground block truncate mt-0.5 font-semibold">
                    {elem.categoryName.split(" ")[0]}
                  </span>
                </div>

                {/* Periodic indicator bottom bar */}
                <div className={`mt-2.5 h-1 w-full rounded-full opacity-60 group-hover:opacity-100 transition-opacity ${elem.badgeBg}`} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Interactive Element Detail Card / Modal */}
      <AnimatePresence>
        {selectedElement && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-12 glass-panel p-6 sm:p-8 rounded-[2.5rem] border border-primary/40 shadow-2xl relative overflow-hidden bg-card/90"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div
                  className={`w-18 h-18 sm:w-20 sm:h-20 rounded-2xl border-2 flex flex-col items-center justify-center font-mono shadow-xl bg-card ${selectedElement.borderColor}`}
                >
                  <span className="text-[10px] font-bold text-muted-foreground self-start pl-2">
                    {selectedElement.number}
                  </span>
                  <span className={`text-2xl sm:text-3xl font-black ${selectedElement.textColor}`}>
                    {selectedElement.symbol}
                  </span>
                  <span className="text-[9px] font-bold text-muted-foreground">
                    {selectedElement.weight}
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-extrabold px-3 py-0.5 rounded-full border ${selectedElement.badgeBg}`}>
                      {selectedElement.categoryName}
                    </span>
                    <span className="text-xs font-mono font-bold text-muted-foreground">
                      Atomic #{selectedElement.number}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                    {selectedElement.name}
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-xl mt-1 leading-relaxed">
                    {selectedElement.description}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedElement(null)}
                className="px-5 py-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 border border-slate-300 dark:border-border text-xs font-bold text-slate-800 dark:text-foreground cursor-pointer shrink-0"
              >
                Close Inspector ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LeetCode & Problem Solving Callout Banner */}
      <div className="mt-14 glass-panel p-6 sm:p-8 rounded-3xl border border-primary/25 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-transparent flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 shadow-md">
            <Code2 className="w-7 h-7" />
          </div>
          <div>
            <h4 className="text-lg sm:text-xl font-extrabold text-foreground">
              Consistent Problem Solver in LeetCode & Coding Platforms
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mt-0.5">
              Consistent competitive programming excellence covering Graph Traversals, Dynamic Programming,
              Trees, and Optimal Space-Time Complexities.
            </p>
          </div>
        </div>

        <a
          href="https://leetcode.com/u/lokes_kumar/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full bg-cyan-600 hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-zinc-950 font-bold text-xs shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all cursor-pointer whitespace-nowrap"
        >
          View LeetCode Profile ↗
        </a>
      </div>
    </section>
  );
};

export default Skills;
