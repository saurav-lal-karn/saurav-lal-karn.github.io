import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Layers,
  ArrowRight,
  Shield,
  CheckCircle,
  Database,
  Server,
  Smartphone,
  Cpu,
  HelpCircle,
} from "lucide-react";

interface DiagramNode {
  id: string;
  label: string;
  sub: string;
  role: string;
  details: string;
  icon: React.ElementType;
}

const diagramNodes: DiagramNode[] = [
  {
    id: "frontend",
    label: "React Frontend",
    sub: "Client Application",
    role: "Responsive layout and client state",
    details:
      "Leverages Vite for blazing fast builds, Tailwind CSS for fluid, highly responsive layouts, and unified state machines for tracking entries, filtering expenses, and rendering dynamic analytical graphs.",
    icon: Smartphone,
  },
  {
    id: "backend",
    label: "Go Backend",
    sub: "REST API & Gateway",
    role: "API services & security checks",
    details:
      "Written in pure Go utilizing the Gin routing framework. Provides lightning-fast response times, custom session authentications, input parsing validations, and initiates parallel processing queues.",
    icon: Server,
  },
  {
    id: "postgres",
    label: "PostgreSQL DB",
    sub: "Relational Database",
    role: "Transaction storage & indices",
    details:
      "Maintains transaction ledger integrity. Integrates custom indexes, primary-foreign constraints, and optimized queries to prevent locks under heavy transaction logging audits.",
    icon: Database,
  },
  {
    id: "ocr",
    label: "Python OCR Service",
    sub: "Receipt Processing",
    role: "Text extraction engine",
    details:
      "A lightweight server utilizing Tesseract or Google Cloud Vision API to extract raw string streams, positional lines, and bounds coordinates from uploaded receipt images.",
    icon: Cpu,
  },
  {
    id: "ai",
    label: "AI Processor",
    sub: "JSON Classification",
    role: "Unstructured to structured data",
    details:
      "Uses the LLMs via structured schema matching to parse chaotic OCR outputs into flawless standard objects containing vendor name, category, amount, dates, and currency.",
    icon: Layers,
  },
];

export default function CurrentQuest() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<string>("frontend");

  const currentNodeInfo =
    diagramNodes.find((n) => n.id === (hoveredNode || selectedNode)) ||
    diagramNodes[0];

  return (
    <div
      id="quest-section"
      className="py-16 px-4 md:px-8 border-b border-ink-faded/15 manuscript-lines relative"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="font-cursive text-3xl text-gold-ancient/90 mb-1">
            Current Quest
          </div>
          <h2 className="font-display-antique text-3xl md:text-4xl text-ink-dark font-medium tracking-wide relative inline-block">
            Currently Building
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gold-ancient" />
          </h2>
          <p className="mt-4 text-sm md:text-base font-serif-antique text-ink-faded italic max-w-lg mx-auto">
            "Forging an automated, intelligent finance ledger for absolute
            fiscal clarity."
          </p>
        </div>

        {/* Feature Spotlight Card */}
        <div className="bg-parchment-light/70 border border-gold-ancient/30 rounded-lg p-6 md:p-8 parchment-shadow mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-gold-ancient/15 border border-gold-ancient/35 text-[11px] font-mono-antique text-gold-ancient font-semibold tracking-widest rounded-full uppercase">
              Spotlight Project
            </span>
            <span className="text-xs text-ink-faded/70 font-serif-antique italic">
              Active Engineering Quest
            </span>
          </div>

          <h3 className="font-display-antique text-2xl text-ink-dark mb-4">
            Moniq: Expense Tracker Platform
          </h3>

          {/* Problem / Solution Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border-l-2 border-red-800/30 pl-4 py-1">
              <h4 className="font-serif-antique text-xs text-red-800/80 uppercase tracking-widest font-bold mb-1.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-800" />
                The Problem
              </h4>
              <p className="font-serif-antique text-sm text-ink-faded leading-relaxed">
                Manually logging paper receipts and Maintaining the income and
                expense log is tedious, error-prone, and unsustainable. Standard
                trackers lack natural automation, requiring users to
                self-classify every purchase structure manually.
              </p>
            </div>
            <div className="border-l-2 border-green-800/30 pl-4 py-1">
              <h4 className="font-serif-antique text-xs text-green-800/80 uppercase tracking-widest font-bold mb-1.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-800" />
                The Solution
              </h4>
              <p className="font-serif-antique text-sm text-ink-faded leading-relaxed">
                A dual-backend framework where receipt and bill uploads trigger
                quick OCR extractions and secure AI processing. Chaos is
                instantly mapped into reliable structured logs aligned in Go
                routines.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-8">
            <h4 className="font-display-antique text-sm uppercase tracking-widest text-ink-dark font-semibold mb-4">
              Engineered Capabilities:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-3 bg-parchment-light rounded border border-gold-ancient/10">
                <span className="font-mono-antique text-[10px] text-gold-ancient font-bold block mb-1">
                  FE-01
                </span>
                <span className="font-display-antique text-sm text-ink-dark font-medium block mb-1">
                  Instant OCR Uploads
                </span>
                <span className="font-serif-antique text-xs text-ink-faded block">
                  Drag receipts, scrape coordinates, and extract text streams
                  cleanly.
                </span>
              </div>
              <div className="p-3 bg-parchment-light rounded border border-gold-ancient/10">
                <span className="font-mono-antique text-[10px] text-gold-ancient font-bold block mb-1">
                  BE-02
                </span>
                <span className="font-display-antique text-sm text-ink-dark font-medium block mb-1">
                  Structured AI Parser
                </span>
                <span className="font-serif-antique text-xs text-ink-faded block">
                  Structured models mapping chaotic invoices with token
                  efficiency.
                </span>
              </div>
              <div className="p-3 bg-parchment-light rounded border border-gold-ancient/10">
                <span className="font-mono-antique text-[10px] text-gold-ancient font-bold block mb-1">
                  BE-03
                </span>
                <span className="font-display-antique text-sm text-ink-dark font-medium block mb-1">
                  Sub-Sec Go Routines
                </span>
                <span className="font-serif-antique text-xs text-ink-faded block">
                  Go-based REST pipelines handling requests with zero allocation
                  pressure.
                </span>
              </div>
            </div>
          </div>

          {/* SYSTEM ARCHITECTURE INTERACTIVE SKETCH */}
          <div>
            <h4 className="font-display-antique text-sm uppercase tracking-widest text-ink-dark font-semibold text-center mb-6">
              Interactive System Topology
            </h4>
            <p className="text-center font-serif-antique text-xs text-ink-faded italic mb-4">
              Hover/Click nodes to reveal parchment details and engineering
              trade-offs.
            </p>

            {/* Responsive Flex/Grid diagram */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 p-4 border border-gold-ancient/20 rounded bg-parchment-light/35 mb-6">
              {/* Architecture Columns */}
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full justify-around py-4">
                {/* Column 1: Client web app */}
                <div className="flex flex-col items-center gap-4">
                  <span className="font-mono-antique text-[10px] text-gold-ancient uppercase tracking-wider">
                    Client
                  </span>
                  <button
                    onClick={() => setSelectedNode("frontend")}
                    onMouseEnter={() => setHoveredNode("frontend")}
                    onMouseLeave={() => setHoveredNode(null)}
                    id="arch-btn-frontend"
                    className={`w-40 p-3 rounded border text-center transition-all duration-300 ${
                      hoveredNode === "frontend" || selectedNode === "frontend"
                        ? "bg-gold-ancient/15 border-gold-ancient shadow-md scale-105"
                        : "bg-parchment-light border-gold-ancient/30 hover:border-gold-ancient/70"
                    }`}
                  >
                    <Smartphone className="w-5 h-5 mx-auto text-gold-ancient mb-1.5" />
                    <span className="font-display-antique text-sm text-ink-dark font-bold block">
                      React Frontend
                    </span>
                    <span className="font-mono-antique text-[9px] text-ink-faded/80 block uppercase">
                      TypeScript + Vite
                    </span>
                  </button>
                </div>

                {/* Arrow */}
                <div className="hidden md:block transform rotate-90 md:rotate-0">
                  <ArrowRight className="w-5 h-5 text-gold-ancient/50" />
                </div>

                {/* Column 2: Backend gateway */}
                <div className="flex flex-col items-center gap-4">
                  <span className="font-mono-antique text-[10px] text-gold-ancient uppercase tracking-wider">
                    Gateway
                  </span>
                  <button
                    onClick={() => setSelectedNode("backend")}
                    onMouseEnter={() => setHoveredNode("backend")}
                    onMouseLeave={() => setHoveredNode(null)}
                    id="arch-btn-backend"
                    className={`w-40 p-3 rounded border text-center transition-all duration-300 ${
                      hoveredNode === "backend" || selectedNode === "backend"
                        ? "bg-gold-ancient/15 border-gold-ancient shadow-md scale-105"
                        : "bg-parchment-light border-gold-ancient/30 hover:border-gold-ancient/70"
                    }`}
                  >
                    <Server className="w-5 h-5 mx-auto text-gold-ancient mb-1.5" />
                    <span className="font-display-antique text-sm text-ink-dark font-bold block">
                      Go Backend
                    </span>
                    <span className="font-mono-antique text-[9px] text-ink-faded/80 block uppercase">
                      GIN REST API
                    </span>
                  </button>
                </div>

                {/* Arrow */}
                <div className="hidden md:block transform rotate-90 md:rotate-0">
                  <ArrowRight className="w-5 h-5 text-gold-ancient/50" />
                </div>

                {/* Column 3: Persistence and Side processing */}
                <div className="flex flex-col gap-6">
                  {/* PostgreSQL DB */}
                  <div className="flex flex-col items-center">
                    <span className="font-mono-antique text-[10px] text-gold-ancient uppercase tracking-wider mb-1">
                      State
                    </span>
                    <button
                      onClick={() => setSelectedNode("postgres")}
                      onMouseEnter={() => setHoveredNode("postgres")}
                      onMouseLeave={() => setHoveredNode(null)}
                      id="arch-btn-postgres"
                      className={`w-40 p-3 rounded border text-center transition-all duration-300 ${
                        hoveredNode === "postgres" ||
                        selectedNode === "postgres"
                          ? "bg-gold-ancient/15 border-gold-ancient shadow-md scale-105"
                          : "bg-parchment-light border-gold-ancient/30 hover:border-gold-ancient/70"
                      }`}
                    >
                      <Database className="w-5 h-5 mx-auto text-gold-ancient mb-1.5" />
                      <span className="font-display-antique text-sm text-ink-dark font-bold block">
                        PostgreSQL
                      </span>
                      <span className="font-mono-antique text-[9px] text-ink-faded/80 block uppercase">
                        Relational SQL
                      </span>
                    </button>
                  </div>

                  {/* Parallel OCR & AI */}
                  <div className="flex flex-col items-center gap-2 border-t border-dashed border-gold-ancient/30 pt-3">
                    <span className="font-mono-antique text-[9px] text-gold-ancient uppercase tracking-wider">
                      AI Service Mesh
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedNode("ocr")}
                        onMouseEnter={() => setHoveredNode("ocr")}
                        onMouseLeave={() => setHoveredNode(null)}
                        id="arch-btn-ocr"
                        className={`p-2 rounded border text-center text-xs transition-all duration-200 ${
                          hoveredNode === "ocr" || selectedNode === "ocr"
                            ? "bg-gold-ancient/15 border-gold-ancient scale-105"
                            : "bg-parchment-light border-gold-ancient/20 hover:border-gold-ancient/50"
                        }`}
                      >
                        <span className="font-display-antique text-xs text-ink-dark font-bold block">
                          Python OCR
                        </span>
                      </button>
                      <button
                        onClick={() => setSelectedNode("ai")}
                        onMouseEnter={() => setHoveredNode("ai")}
                        onMouseLeave={() => setHoveredNode(null)}
                        id="arch-btn-ai"
                        className={`p-2 rounded border text-center text-xs transition-all duration-200 ${
                          hoveredNode === "ai" || selectedNode === "ai"
                            ? "bg-gold-ancient/15 border-gold-ancient scale-105"
                            : "bg-parchment-light border-gold-ancient/20 hover:border-gold-ancient/50"
                        }`}
                      >
                        <span className="font-display-antique text-xs text-ink-dark font-bold block">
                          AI Engine
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive explanation box (parchment design) */}
            <div className="p-4 bg-parchment-light border border-gold-ancient/35 border-t-2 border-t-gold-ancient rounded min-h-36 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-1 text-gold-ancient/30">
                <HelpCircle className="w-8 h-8" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentNodeInfo.id}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="font-mono-antique text-[10px] text-gold-ancient tracking-widest uppercase font-semibold">
                    {currentNodeInfo.sub}
                  </p>
                  <h5 className="font-display-antique text-base md:text-lg text-ink-dark font-bold mt-1 mb-2">
                    {currentNodeInfo.label}
                  </h5>
                  <p className="font-serif-antique text-xs text-ink-faded uppercase font-bold tracking-widest border-b border-ink-faded/5 pb-1 mb-2">
                    Core Duty: {currentNodeInfo.role}
                  </p>
                  <p className="font-serif-antique text-sm text-ink-faded leading-relaxed">
                    {currentNodeInfo.details}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Technology stack emblems */}
          <div className="mt-8 border-t border-ink-faded/10 pt-6">
            <h5 className="font-mono-antique text-[10px] text-ink-faded tracking-widest uppercase font-semibold text-center mb-4">
              Core Technologies
            </h5>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "React.js",
                "Go (Gin)",
                "PostgreSQL",
                "Python (OCR)",
                "LLM",
                "Docker",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-parchment-light border border-gold-ancient/20 font-serif-antique text-xs text-ink-dark rounded-md relative parchment-shadow"
                >
                  <span className="inline-block w-1 h-1 rounded-full bg-gold-ancient mr-1.5" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
