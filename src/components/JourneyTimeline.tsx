import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Briefcase,
  Code,
  GraduationCap,
  ChevronDown,
  Microscope,
  MapPin,
  BookOpen,
} from "lucide-react";
import type { JourneyEvent } from "../types";

const journeyEvents: JourneyEvent[] = [
  {
    id: "1",
    year: "2021 - PRESENT",
    title: "Senior Software Engineer",
    category: "Engineering",
    location: "Whitehat Engineering",
    description:
      "Engineering robust, reliable, and client-centric system solutions.",
    details: [
      "Developed and maintained web applications and blockchain solutions tailored to client requirements",
      "Integrated cutting-edge large language models (LLMs) for AI-driven client projects",
      "Led document ingestion pipeline implementation to meet client-specific needs",
      "Designed and implemented APIs for efficient data exchange between client applications",
      "Designed and implemented model agnostic llm calls for seamless integration",
    ],
  },
  {
    id: "2",
    year: "2021",
    title:
      "Rapid Earthquake Assessment from Satellite Imagery Using RPN and Yolo v3",
    category: "Research",
    location: "IOE, Pulchowk",
    description:
      "Investigating computer vision and deep learning models for disaster assessment from remote sensing imagery",
    details: [
      "Designed and trained Region Proposal Network (RPN) architectures for satellite image segmentation",
      "Benchmarked YOLOv3 inference performance against traditional CNN baselines for damage classification",
      "Published findings integrating computer vision and deep learning analysis for rapid damage estimation",
    ],
  },
  {
    id: "3",
    year: "2019",
    title: "Masters in Computer Systems and Knowledge Engineering",
    category: "Study",
    location: "IOE, Pulchowk",
    description:
      "Advanced graduate study in intelligent systems and knowledge representation",
    details: [
      "Mastered knowledge graph construction, ontological reasoning, and semantic web principles",
      "Conducted graduate-level research in Machine Learning and Computer Vision",
      "Completed thesis on Rapid Earthquake Assessment from satellite imagery using RPN and Yolo v3",
    ],
  },
  {
    id: "4",
    year: "2017 - 2021",
    title: "Software Engineer",
    category: "Engineering",
    location: "Ebpearls Pvt Ltd",
    description:
      "Bridging high-performance server logic with refined frontend designs and secure APIs.",
    details: [
      "Spearheaded web application and API development projects to enhance user experience",
      "Integrated third-party APIs to enhance application functionality",
      "Designed and managed databases for seamless application functionality",
      "Integrated multiple payment gateways like Braintree, Stripe and Assembly",
    ],
  },
  {
    id: "5",
    year: "2016 - 2017",
    title: "Associate Web Developer",
    category: "Engineering",
    location: "Smartmobe Solutions",
    description: "Building and maintaining client-facing web applications.",
    details: [
      "Implemented responsive UI components across modern browser targets.",
      "Collaborated with senior engineers on backend API integrations and data modeling.",
      "Developed web applications and services",
      "Managed database systems to support project objectives",
    ],
  },
  {
    id: "6",
    year: "2016",
    title: "Bachelor in Computer Engineering",
    category: "Study",
    location: "IOE, Pulchowk",
    description:
      "Deep diving into foundational computer science primitives and engineering system design.",
    details: [
      "Studied core algorithms, data structures, operating systems, and computer networks.",
      "Completed capstone project on tweet analysis based on semantic analysis.",
    ],
  },
];

const categoryConfig: Record<
  string,
  { icon: React.ElementType; color: string; label: string }
> = {
  Engineering: {
    icon: Briefcase,
    color: "text-amber-700",
    label: "Engineering",
  },
  Research: {
    icon: Microscope,
    color: "text-emerald-700",
    label: "Research",
  },
  Study: {
    icon: GraduationCap,
    color: "text-sky-700",
    label: "Education",
  },
  Architecture: {
    icon: Code,
    color: "text-purple-700",
    label: "Architecture",
  },
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
            "A record of practical software creation, scholarly pursuits,
            research expeditions, and permanent learning quests."
          </p>

          {/* Category Legend */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            {Object.entries(categoryConfig).map(([key, cfg]) => (
              <div key={key} className="flex items-center gap-1.5">
                <cfg.icon className={`w-3.5 h-3.5 ${cfg.color}`} />
                <span className="font-mono-antique text-[10px] text-ink-faded uppercase tracking-widest">
                  {cfg.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-gold-ancient/40 ml-4 md:ml-32 pl-6 md:pl-8 space-y-12 py-4">
          {journeyEvents.map((event, index) => {
            const config = categoryConfig[event.category] || {
              icon: BookOpen,
              color: "text-gold-ancient",
              label: event.category,
            };
            const IconComponent = config.icon;
            const isOpen = activeEvent === event.id;

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Year Badge (Desktop Sided Column) */}
                <span className="hidden md:block absolute -left-[188px] top-1.5 w-36 text-right font-mono-antique text-xs text-ink-faded tracking-widest font-semibold uppercase">
                  {event.year}
                </span>

                {/* Timeline Node Ring & Pin */}
                <div
                  className={`absolute -left-[35px] md:-left-[43px] top-1.5 w-8 h-8 rounded-full border border-gold-ancient bg-parchment-light flex items-center justify-center p-1.5 shadow-sm group-hover:scale-110 transition-transform duration-300 z-10`}
                >
                  <IconComponent className={`w-full h-full ${config.color}`} />
                </div>

                {/* Event Card Content */}
                <div
                  className="bg-parchment-light/80 hover:bg-parchment-light border border-gold-ancient/20 hover:border-gold-ancient/50 rounded-lg p-5 md:p-6 parchment-shadow transition-colors duration-300 cursor-pointer"
                  onClick={() => toggleEvent(event.id)}
                  id={`journey-card-${event.id}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div className="flex-1">
                      {/* Mobile Year label */}
                      <span className="md:hidden inline-block font-mono-antique text-[10px] text-ink-faded tracking-widest font-bold uppercase mb-1 bg-gold-ancient/15 px-2 py-0.5 rounded border border-gold-ancient/20">
                        {event.year}
                      </span>

                      <h3 className="font-display-antique text-lg md:text-xl text-ink-dark font-medium group-hover:text-gold-ancient transition-colors duration-200">
                        {event.title}
                      </h3>

                      {/* Category + Location row */}
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                        <div
                          className={`flex items-center gap-1 font-mono-antique text-xs font-semibold uppercase tracking-widest ${config.color}`}
                        >
                          <IconComponent className="w-3 h-3" />
                          <span>{config.label}</span>
                        </div>

                        {event.location && (
                          <>
                            <span className="text-ink-faded/30 text-xs">·</span>
                            <div className="flex items-center gap-1 text-ink-faded/80">
                              <MapPin className="w-3 h-3 text-gold-ancient/60 shrink-0" />
                              <span className="font-serif-antique text-xs italic">
                                {event.location}
                              </span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    <button
                      className="text-ink-faded hover:text-gold-ancient p-1 self-end sm:self-start mt-1 transition-colors shrink-0"
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
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.05, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-ink-faded/10 pt-4 space-y-2.5 mt-4">
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
