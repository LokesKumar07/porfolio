import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Career from "./components/Career";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Dock from "./components/Dock";
import type { DockItemData } from "./components/Dock";
import ResumeModal from "./components/ResumeModal";
import SmoothCursor from "./components/SmoothCursor";
import {
  Home,
  User,
  LayoutGrid,
  FolderGit2,
  Cpu,
  GraduationCap,
  Briefcase,
  Mail,
  Sun,
  Moon,
} from "lucide-react";

export function App() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved === "light" || saved === "dark") return saved;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "dark";
    }
    return "dark";
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const dockItems: DockItemData[] = [
    {
      icon: <Home className="w-5 h-5" />,
      label: "Home",
      onClick: () => scrollTo("#hero"),
    },
    {
      icon: <User className="w-5 h-5" />,
      label: "About",
      onClick: () => scrollTo("#about"),
    },
    {
      icon: <LayoutGrid className="w-5 h-5" />,
      label: "Services",
      onClick: () => scrollTo("#services"),
    },
    {
      icon: <FolderGit2 className="w-5 h-5" />,
      label: "Projects",
      onClick: () => scrollTo("#projects"),
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      label: "Skills",
      onClick: () => scrollTo("#skills"),
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      label: "Education",
      onClick: () => scrollTo("#education"),
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      label: "Career",
      onClick: () => scrollTo("#career"),
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Contact",
      onClick: () => scrollTo("#contact"),
      badgeCount: 1,
    },
    {
      icon:
        theme === "dark" ? (
          <Sun className="w-5 h-5 text-amber-400" />
        ) : (
          <Moon className="w-5 h-5 text-purple-600" />
        ),
      label: theme === "dark" ? "Light Mode" : "Dark Mode",
      onClick: toggleTheme,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-purple-500/30 selection:text-white cursor-default">
      {/* Dynamic Dragging Arrow Cursor */}
      <SmoothCursor />

      {/* Top Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Education />
        <Career />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Floating macOS Dock */}
      <Dock items={dockItems} />

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}

export default App;
