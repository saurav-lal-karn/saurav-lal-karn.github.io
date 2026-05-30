import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Briefcase,
  Code,
  Compass,
  GraduationCap,
  ChevronDown,
  Award,
} from "lucide-react";
import type { JourneyEvent } from "../types";

const journeyEvents: JourneyEvent[] = [
  {
    id: "1",
    year: "2024 - PRESENT",
    title: "Software Engineer",
    category: "Engineering",
    description:
      "Engineering robust, reliable, and developer-centric system solutions.",
    details: [
      "Spearheading core frontend state engines and dynamic interactive architectures.",
      "Optimizing rendering cycles and responsive page states for critical web assets.",
      "Ensuring strict compliance with semantic web accessibility (WCAG) guidelines.",
    ],
  },
  {
    id: "2",
    year: "2023 - 2024",
    title: "Full Stack Development",
    category: "Architecture",
    description:
      "Bridging high-performance server logic with refined frontend designs.",
    details: [
      "Designed self-contained API pipelines using high-performance server runtimes.",
      "Refined structural database entities for transaction tracking and secure access control.",
      "Constructed aesthetic digital layouts prioritizing human-centered design.",
    ],
  },
  {
    id: "3",
    year: "2024",
    title: "AI Learning Journey",
    category: "Research",
    description:
      "Exploring and implementing modern cognitive artificial intelligence flows.",
    details: [
      "Integrating advanced AI capabilities using Retrieval Augmented Generation (RAG).",
      "Configuring automated optical character recognition (OCR) and text extraction pipelines.",
      "Applying modern SDK abstractions for secure server-side context execution.",
    ],
  },
  {
    id: "4",
    year: "STUDYING",
    title: "Government Engineering Preparation",
    category: "Rigorous Training",
    description:
      "Immersing in fundamental system dynamics, infrastructure rules, and electrical design requirements.",
    details: [
      "Reviewing advanced electrical engineering circuits, load calculations, and energy frameworks.",
      "Mastering system reliability standards, structural calculations, and regulatory safety policies.",
      "Applying mechanical precision and rigorous test boundaries to standard codebases.",
    ],
  },
  {
    id: "5",
    year: "CONTINUOUS",
    title: "Continuous Growth & System Design",
    category: "Philosophy",
    description:
      "Deep diving into advanced computer science primitives and system design topologies.",
    details: [
      "Analyzing container containerised orchestration models (Docker, Linux architecture).",
      "Experimenting with non-relational graph databases (Neo4j) for deep entity relationships.",
      "Fostering system thinking that treats code as a reliable, living infrastructure.",
    ],
  },
];

const categoryIcons: { [key: string]: React.ElementType } = {
  Engineering: Briefcase,
  Architecture: Code,
  Research: Compass,
  "Rigorous Training": GraduationCap,
  Philosophy: Award,
};

export default function JourneyTimeline() {
  const [activeEvent, setActiveEvent] = useState<string | null>(null);

  const toggleEvent = (id: string) => {
    setActiveEvent(activeEvent === id ? null : id);
  };

  return (
    <div
      id="journey-section"
      className="py-16 px-4 md:px-8 border-b border-ink-faded/15 manuscript-lines relative"
    >
      <div className="max-w-3xl mx-auto">
        {/* Handwriting title decoration */}
        <div className="text-center mb-16">
          <div className="font-cursive text-3xl text-gold-ancient/90 mb-1">
            My Journey
          </div>
          <h2 className="font-display-antique text-3xl md:text-4xl text-ink-dark font-medium tracking-wide relative inline-block">
            Chronicles of Growth
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gold-ancient" />
          </h2>
          <p className="mt-4 text-sm md:text-base font-serif-antique text-ink-faded italic max-w-lg mx-auto">
            "A record of practical software creation, engineering discipline,
            and permanent learning quests."
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-gold-ancient/40 ml-4 md:ml-32 pl-6 md:pl-8 space-y-12 py-4">
          {journeyEvents.map((event, index) => {
            const IconComponent = categoryIcons[event.category] || Code;
            const isOpen = activeEvent === event.id;

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Year Badge (Desktop Sided Column) */}
                <span className="hidden md:block absolute -left-[188px] top-1.5 w-36 text-right font-mono-antique text-xs text-ink-faded tracking-widest font-semibold uppercase">
                  {event.year}
                </span>

                {/* Timeline Node Ring & Pin */}
                <div className="absolute -left-[35px] md:-left-[43px] top-1.5 w-8 h-8 rounded-full border border-gold-ancient bg-parchment-light flex items-center justify-center p-1.5 shadow-sm group-hover:scale-110 transition-transform duration-300 z-10">
                  <IconComponent className="w-full h-full text-gold-ancient" />
                </div>

                {/* Event Card Content */}
                <div
                  className="bg-parchment-light/80 hover:bg-parchment-light border border-gold-ancient/20 hover:border-gold-ancient/50 rounded-lg p-5 md:p-6 parchment-shadow transition-colors duration-300 cursor-pointer"
                  onClick={() => toggleEvent(event.id)}
                  id={`journey-card-${event.id}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      {/* Mobile Year label */}
                      <span className="md:hidden inline-block font-mono-antique text-[10px] text-ink-faded tracking-widest font-bold uppercase mb-1 bg-gold-ancient/15 px-2 py-0.5 rounded border border-gold-ancient/20">
                        {event.year}
                      </span>
                      <h3 className="font-display-antique text-lg md:text-xl text-ink-dark font-medium group-hover:text-gold-ancient transition-colors duration-200">
                        {event.title}
                      </h3>
                      <div className="font-serif-antique text-xs text-gold-ancient font-semibold uppercase tracking-widest mt-0.5">
                        {event.category}
                      </div>
                    </div>

                    <button
                      className="text-ink-faded hover:text-gold-ancient p-1 self-end sm:self-center transition-colors"
                      aria-label="Toggle Details"
                    >
                      <ChevronDown
                        className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? "rotate-180 text-gold-ancient" : ""}`}
                      />
                    </button>
                  </div>

                  <p className="mt-3 font-serif-antique text-sm md:text-base text-ink-faded leading-relaxed">
                    {event.description}
                  </p>

                  {/* Expandable historical records details */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-72 mt-4" : "max-h-0"}`}
                  >
                    <div className="border-t border-ink-faded/10 pt-4 space-y-2.5">
                      {event.details.map((detail, idx) => (
                        <div
                          key={idx}
                          className="flex gap-2 items-start text-xs md:text-sm font-serif-antique text-ink-faded/95 leading-relaxed"
                        >
                          <code className="text-[10px] font-mono-antique text-gold-ancient mt-1">
                            {"[" + (idx + 1) + "]"}
                          </code>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
