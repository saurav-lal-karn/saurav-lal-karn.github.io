import React, { useState } from "react";
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
    title: "Moniq: Expense Tracker Platform",
    problem:
      "Managing diverse financial streams, physical invoices, and subscriptions remains manual and unorganized for individuals seeking granular fiscal insights.",
    solution:
      "Designed a high-throughput transaction scanner using a Fiber-based Go router, optimized Postgres queries, and automated invoice parsing via structural models.",
    technologies: ["NextJS", "Go", "PostgreSQL", "Python", "Docker", "LLM"],
    lessons:
      "Optimizing high-concurrency Go database pooling yields drastic latency cuts; structuring LLM JSON payloads prevents token formatting failures.",
    pinned: true,
  },
  {
    id: "document-processing-llm",
    title: "LLM-Driven Document Processing",
    problem: "Document Processing remains a challenge for LLMs.",
    solution:
      "Developed a robust document generation pipeline using LLM, Implemented an LLM-powered assistant for document processing, including parsing and presenting documents for user-friendly viewing.",
    technologies: [
      "Go",
      "NextJS",
      "Python",
      "OpenAI",
      "Anthropic",
      "Langchain",
      "PostgreSQL",
      "LLM",
    ],
    lessons:
      "OpenAI's GPT-4 has proven to be a powerful tool for document generation.",
    pinned: true,
  },
  {
    id: "blockchain-based-voting-system",
    title: "Blockchain Based Voting System",
    problem:
      "Voting system remains a untransparent and easily riggable process",
    solution:
      "Implemented the voting system using blockchain to add transaparency to entire process and eliminate any chance of rigging.",
    technologies: ["NextJS", "NestJS", "Web3", "Metamask", "Solidity"],
    lessons:
      "Blockchains are expensive but do provide the power of transparency and unmutable ledger",
    pinned: true,
  },
  {
    id: "dwell",
    title: "Dwell: Tenancy Managment System",
    problem:
      "Finding the right tenant for your property or right property for users can be a daunting task.",
    solution:
      "Implemented the apis for showing the available properties and tenants based on location and user preferences and apis for managing the tenancy.",
    technologies: ["NodeJS", "MySQL", "API", "Stripe"],
    lessons:
      "The matches should be based on location, user preferences and availability of properties and tenants",
    pinned: true,
  },
  {
    id: "farm-service-manager",
    title: "Farm Service Manager",
    problem:
      "Management of machinery and equipment on remote farms remains manual and unorganized for individuals seeking granular fiscal insights.",
    solution:
      "Implemented the apis for tracking the machinery and equipment on remote farms. The user can stay offline for long time and when online the app syncs the data",
    technologies: ["Laravel", "MySQL", "API", "Braintree"],
    lessons:
      "We need to store the data in users device when offline and when online sync it to server using timestamps",
    pinned: true,
  },
  {
    id: "foodmario",
    title: "Foodmario: Food Ordering Platform",
    problem:
      "Food ordering platform favors large restaurants while local households are left out.",
    solution:
      "A platform where local households are first vendors. The goal is to provide healthy food.",
    technologies: ["Laravel", "MySQL", "API"],
    lessons:
      "The listing should be based on the location, availability and prices of food items as well as preferences of the users",
    pinned: true,
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
              <div
                key={project.id}
                className="relative bg-parchment-light/80 hover:bg-parchment-light border border-gold-ancient/25 rounded-lg p-6 pt-8 parchment-shadow transition-colors duration-300 group flex flex-col justify-between animate-fade-in-scale"
                style={{ animationDelay: `${index * 100}ms` }}
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

                  <h3 className="font-display-antique text-xl text-ink-dark font-medium group-hover:text-gold-ancient transition-colors duration-200 mb-4 inline-flex items-center gap-1.5">
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
                    className="w-full flex items-center justify-between text-left py-2 font-serif-antique text-xs text-gold-ancient hover:text-gold-ancient font-semibold border-t border-dashed border-gold-ancient/15 hover:border-gold-ancient/45 hover:bg-gold-ancient/5 px-2 rounded transition-colors duration-200 mt-2"
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

                  <div
                    className="grid duration-300 ease-out"
                    style={{
                      gridTemplateRows: isExpanded ? "1fr" : "0fr",
                      opacity: isExpanded ? 1 : 0,
                      transition:
                        "grid-template-rows 0.3s ease-out, opacity 0.3s ease-out",
                      willChange: isExpanded
                        ? "auto"
                        : "grid-template-rows, opacity",
                    }}
                  >
                    <div className="overflow-hidden">
                      <div className="bg-parchment-light/95 border border-gold-ancient/20 rounded p-4 mt-2 font-serif-antique text-xs text-ink-faded leading-relaxed relative">
                        <p className="font-sans font-bold text-ink-dark/80 uppercase text-[9px] tracking-widest mb-1">
                          Reflections & Hard Trade-offs:
                        </p>
                        {project.lessons}
                        <span className="absolute bottom-1 right-2 font-cursive text-xl text-gold-ancient/40 select-none">
                          Karn
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
