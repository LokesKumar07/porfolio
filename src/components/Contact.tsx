import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare } from "lucide-react";
import confetti from "canvas-confetti";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#8b5cf6", "#38bdf8", "#c084fc", "#10b981"],
      });
    } catch (_) {}

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-8 sm:p-12 md:p-16 rounded-[3rem] border border-foreground/10 relative overflow-hidden shadow-2xl"
      >
        {/* Ambient background glows */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Column info */}
          <div className="flex-1 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                <MessageSquare className="w-3.5 h-3.5" /> Direct Communications
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
                Let's <span className="text-gradient-primary">Connect</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                I am actively seeking software engineering opportunities, internships, and collaborative hackathons.
                Whether you have an opening, a challenging problem, or just want to discuss algorithms and Java architectures, feel free to reach out!
              </p>
            </div>

            <div className="space-y-5">
              <a
                href="mailto:lokeskumar.v7@gmail.com"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-2xl glass-panel flex items-center justify-center group-hover:scale-110 group-hover:border-primary/50 transition-all text-primary shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
                    Email
                  </span>
                  <span className="font-bold text-foreground text-sm sm:text-base">
                    lokeskumar.v7@gmail.com
                  </span>
                </div>
              </a>

              <a
                href="tel:9486217745"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-2xl glass-panel flex items-center justify-center group-hover:scale-110 group-hover:border-primary/50 transition-all text-primary shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
                    Mobile / Phone
                  </span>
                  <span className="font-bold text-foreground text-sm sm:text-base">
                    +91 9486217745
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 text-muted-foreground group">
                <div className="w-12 h-12 rounded-2xl glass-panel flex items-center justify-center text-primary shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
                    Location
                  </span>
                  <span className="font-bold text-foreground text-sm sm:text-base">
                    Coimbatore, Tamil Nadu, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Form */}
          <div className="flex-1 glass-panel p-8 sm:p-10 rounded-[2.5rem] border border-foreground/15 shadow-xl relative bg-card/70">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Message Dispatched!</h3>
                <p className="text-muted-foreground text-sm max-w-sm">
                  Thank you for reaching out. Lokes will review your message and reply promptly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Recruiter / Collaborator"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background/80 border border-border/80 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="hiring@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background/80 border border-border/80 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Interview Opportunity / Full-Stack Project"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background/80 border border-border/80 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hi Lokes, we reviewed your work and would love to connect regarding..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background/80 border border-border/80 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground text-sm transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-primary hover:bg-purple-700 text-white font-bold text-sm shadow-xl shadow-purple-500/25 hover:shadow-2xl hover:shadow-purple-500/40 hover:-translate-y-0.5 transition-all cursor-pointer mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
