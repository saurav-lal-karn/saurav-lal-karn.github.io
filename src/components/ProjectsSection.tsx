import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { Project } from "../types";
import {
  Pin,
  ArrowUpRight,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  BookOpen,
} from "lucide-react";

const projectsData: Project[] = [
  {
    id: "expense-tracker",
    title: "Expense Tracker Platform",
    problem:
      "Managing diverse financial streams, physical invoices, and subscriptions remains manual and unorganized for individuals seeking granular fiscal insights.",
    solution:
      "Designed a high-throughput transaction scanner using a Fiber-based Go router, optimized Postgres queries, and automated invoice parsing via structural models.",
    technologies: [
      "React",
      "Go",
      "PostgreSQL",
      "Python",
      "Docker",
      "Gemini API",
    ],
    lessons:
      "Optimizing high-concurrency Go database pooling yields drastic latency cuts; structuring LLM JSON payloads prevents token formatting failures.",
    pinned: true,
  },
  {
    id: "ai-document-gen",
    title: "AI Document Generator",
    problem:
      "Contract drafting and compliance auditing require manual checks, consuming hours of legal or administrative engineering cycles.",
    solution:
      "Constructed an automated templating system extracting key clauses from unstructured notes using a multi-agent workflow and automated retrieval (RAG).",
    technologies: ["Next.js", "Node.js", "Pinecone", "LangChain", "Gemini API"],
    lessons:
      "Chunking strategies are highly contextual; fine-tuning text overlap ratios improves semantic retrieval reliability over generic standard parameters.",
    pinned: true,
  },
  {
    id: "scroll-portfolio",
    title: "Ancient Scroll Portfolio",
    problem:
      "Modern recruiter portfolios look cookie-cutter and robotic, failing to represent the unique creative identity and rigor of structural engineers.",
    solution:
      "Built this responsive parchment manuscript that combines classic explorer journal styles with robust type-safe component design and SVG fluid diagrams.",
    technologies: [
      "React",
      "Vite",
      "Tailwind v4",
      "Framer Motion",
      "TypeScript",
    ],
    lessons:
      "Complex viewport animations must be designed efficiently; relying on pure CSS rendering variables avoids heavy layout thrashing during scrolls.",
    pinned: true,
  },
  {
    id: "future-ai-apps",
    title: "Future Autonomous Agents",
    problem:
      "Standard AI assistants lack deep contextual execution loops, performing isolated short-term chats rather than long-horizon task coordination.",
    solution:
      "Mapping a modular runtime with persistent state caches and reactive callbacks to create safe, reliable, and self-correcting agent chains.",
    technologies: ["Python", "Neo4j", "FastAPI", "Google GenAI SDK"],
    lessons:
      "Graph-based conversation indexing provides high relational transparency, allowing agent paths to remain visible, auditable, and secure.",
    pinned: false,
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setSelectedProject(selectedProject === id ? null : id);
  };

  return (
    <div
      id="projects-section"
      className="py-16 px-4 md:px-8 border-b border-ink-faded/15 manuscript-lines relative"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="font-cursive text-3xl text-gold-ancient/90 mb-1">
            Works in Ink
          </div>
          <h2 className="font-display-antique text-3xl md:text-4xl text-ink-dark font-medium tracking-wide relative inline-block">
            Engineering Projects
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gold-ancient" />
          </h2>
          <p className="mt-4 text-sm md:text-base font-serif-antique text-ink-faded italic max-w-lg mx-auto">
            "These artifacts are fully realized practical software systems,
            forged with meticulous design constraints."
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projectsData.map((project, index) => {
            const isExpanded = selectedProject === project.id;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-parchment-light/80 hover:bg-parchment-light border border-gold-ancient/25 rounded-lg p-6 pt-8 parchment-shadow transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Decorative Scroll Pin (Simulating tack pinning) */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none group-hover:translate-y-[-2px] transition-transform duration-300">
                  <div className="w-4 h-4 rounded-full bg-red-800/80 border border-amber-900/40 shadow-inner flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                  </div>
                  <div className="w-0.5 h-3 bg-neutral-400/80 -mt-0.5 shadow-sm" />
                </div>

                <div>
                  {/* Pin label icon */}
                  <div className="flex items-center justify-between mt-2 mb-4">
                    <span className="text-[10px] font-mono-antique text-ink-faded/65 tracking-widest font-bold uppercase">
                      {project.pinned ? "★ PINNED ARTIFACT" : "RESEARCH SPELL"}
                    </span>
                    <Pin className="w-3.5 h-3.5 text-gold-ancient/40 group-hover:text-gold-ancient transition-colors duration-300" />
                  </div>

                  <h3 className="font-display-antique text-xl text-ink-dark font-medium group-hover:text-gold-ancient transition-all duration-300 mb-4 inline-flex items-center gap-1.5">
                    {project.title}
                  </h3>

                  {/* Problem & Solution block */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-mono-antique text-[9px] text-red-800/80 tracking-widest uppercase font-bold mb-1 flex items-center gap-1.5">
                        <AlertTriangle className="w-3 h-3" />
                        The Problem
                      </h4>
                      <p className="font-serif-antique text-sm leading-relaxed text-ink-faded">
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-mono-antique text-[9px] text-green-800/80 tracking-widest uppercase font-bold mb-1 flex items-center gap-1.5">
                        <Lightbulb className="w-3 h-3" />
                        The Engineered Solution
                      </h4>
                      <p className="font-serif-antique text-sm leading-relaxed text-ink-faded">
                        {project.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technologies and expandable logs */}
                <div className="mt-6 pt-4 border-t border-ink-faded/10">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-gold-ancient/5 border border-gold-ancient/15 font-mono-antique text-[10px] text-ink-dark rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Toggle Lessons learned button */}
                  <button
                    onClick={() => toggleExpand(project.id)}
                    id={`project-expand-btn-${project.id}`}
                    className="w-full flex items-center justify-between text-left py-2 font-serif-antique text-xs text-gold-ancient hover:text-gold-ancient font-semibold border-t border-dashed border-gold-ancient/15 hover:border-gold-ancient/45 hover:bg-gold-ancient/5 px-2 rounded transition-all transition-colors duration-200 mt-2"
                  >
                    <span className="flex items-center gap-1.5 font-sans font-medium tracking-wide">
                      <BookOpen className="w-3.5 h-3.5" />
                      {isExpanded
                        ? "Hide Settle Log"
                        : "View Scribe Lessons Learned"}
                    </span>
                    <span className="text-xs transition-transform duration-300">
                      {isExpanded ? "—" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden bg-parchment-light/95 border border-gold-ancient/20 rounded p-4 mt-2 font-serif-antique text-xs text-ink-faded leading-relaxed relative"
                      >
                        <p className="font-sans font-bold text-ink-dark/80 uppercase text-[9px] tracking-widest mb-1">
                          Reflections & Hard Trade-offs:
                        </p>
                        {project.lessons}
                        <span className="absolute bottom-1 right-2 font-cursive text-xl text-gold-ancient/40 select-none">
                          Karn
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
