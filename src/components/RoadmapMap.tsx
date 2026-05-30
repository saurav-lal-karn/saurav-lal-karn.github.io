import React, { useState } from "react";
import { motion } from "motion/react";
import type { RoadmapNode } from "../types";
import {
  Map,
  Flag,
  Compass,
  CompassIcon,
  Milestone,
  Target,
  CheckCircle,
} from "lucide-react";

const roadmapNodes: RoadmapNode[] = [
  {
    id: "practical-apps",
    title: "Publish Practical Applications",
    status: "completed",
    description:
      "Deploying highly reliable, fully tested open-source ledgers, tracking systems, and API engines.",
    coordinates: { x: 10, y: 15 },
  },
  {
    id: "ai-tools",
    title: "Assemble AI-powered Assistants",
    status: "active",
    description:
      "Forging cognitive processors and schema translation templates to automate unstructured receipt parsing.",
    coordinates: { x: 35, y: 45 },
  },
  {
    id: "system-design",
    title: "Strengthen System Architectures",
    status: "active",
    description:
      "Mastering high-throughput load distributors, database caching metrics, and async pub/sub setups.",
    coordinates: { x: 60, y: 25 },
  },
  {
    id: "govt-engineering",
    title: "Government Career Preparation",
    status: "future",
    description:
      "Reviewing national grid frameworks, state regulatory safety acts, and mechanical/distribution guidelines.",
    coordinates: { x: 80, y: 65 },
  },
  {
    id: "endless-growth",
    title: "Boundless Growth & Exploration",
    status: "future",
    description:
      "Fusing rigorous material/physical principles with next-generation high-perf technology horizons.",
    coordinates: { x: 95, y: 85 },
  },
];

export default function RoadmapMap() {
  const [selectedNode, setSelectedNode] = useState<string>("ai-tools");

  const currentNode =
    roadmapNodes.find((n) => n.id === selectedNode) || roadmapNodes[0];

  return (
    <div
      id="roadmap-section"
      className="py-16 px-4 md:px-8 border-b border-ink-faded/15 manuscript-lines relative"
    >
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <div className="font-cursive text-3xl text-gold-ancient/90 mb-1">
            Explorer's Chart
          </div>
          <h2 className="font-display-antique text-3xl md:text-4xl text-ink-dark font-medium tracking-wide relative inline-block">
            Engineering Roadmap & Goals
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gold-ancient" />
          </h2>
          <p className="mt-4 text-sm md:text-base font-serif-antique text-ink-faded italic max-w-lg mx-auto">
            "Weaving system execution rules, regulatory goals, and continuous
            engineering expansion into an active map."
          </p>
        </div>

        {/* Map Layout Block */}
        <div className="bg-parchment-light/85 border border-gold-ancient/25 rounded-lg p-6 parchment-shadow relative overflow-hidden mb-8">
          {/* Compass Rose icon in background aspect */}
          <div className="absolute right-6 top-6 opacity-[0.06] pointer-events-none text-gold-ancient">
            <Compass className="w-56 h-56 stroke-[1]" />
          </div>

          <span className="font-mono-antique text-[9px] text-gold-ancient tracking-widest font-bold uppercase block mb-6">
            Interactive Navigator Chart
          </span>

          <div className="relative min-h-[300px] border border-gold-ancient/15 rounded bg-parchment-light/35 p-4 flex flex-col justify-between">
            {/* Background SVG path simulating drawn dashed path */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 50 50 Q 150 60 200 130 T 400 120"
                fill="none"
                stroke="var(--color-gold-ancient)"
                strokeWidth="1.5"
                strokeDasharray="5,6"
                className="opacity-45"
              />
              <path
                d="M 50 150 Q 130 90 230 140 T 360 80"
                fill="none"
                stroke="var(--color-wood-dark)"
                strokeWidth="1"
                strokeDasharray="3,4"
                className="opacity-20"
              />
            </svg>

            {/* Path Nodes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 relative z-10">
              {roadmapNodes.map((node, index) => {
                const isActive = selectedNode === node.id;

                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node.id)}
                    id={`roadmap-node-btn-${node.id}`}
                    className={`p-4 rounded border text-left flex flex-col justify-between transition-all duration-300 relative group min-h-36 ${
                      isActive
                        ? "bg-parchment-light border-gold-ancient shadow-md scale-102 translate-y-[-2px]"
                        : "bg-parchment-light/35 border-gold-ancient/15 hover:border-gold-ancient/50"
                    }`}
                  >
                    <div>
                      {/* Status dot / indicator */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono-antique text-[9px] text-ink-faded/60 font-bold">
                          PATH 0{index + 1}
                        </span>
                        {node.status === "completed" && (
                          <CheckCircle className="w-3.5 h-3.5 text-green-800" />
                        )}
                        {node.status === "active" && (
                          <Milestone className="w-3.5 h-3.5 text-gold-ancient animate-pulse" />
                        )}
                        {node.status === "future" && (
                          <Target className="w-3.5 h-3.5 text-ink-faded/40" />
                        )}
                      </div>

                      <h4 className="font-display-antique text-xs md:text-sm text-ink-dark font-bold line-clamp-2 leading-tight group-hover:text-gold-ancient transition-colors">
                        {node.title}
                      </h4>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <span
                        className={`text-[8px] font-mono-antique tracking-wider uppercase font-semibold px-1.5 py-0.5 rounded ${
                          node.status === "completed"
                            ? "bg-green-800/10 text-green-800 border border-green-800/25"
                            : node.status === "active"
                              ? "bg-gold-ancient/10 text-gold-ancient border border-gold-ancient/25"
                              : "bg-ink-faded/10 text-ink-faded border border-ink-faded/20"
                        }`}
                      >
                        {node.status}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Current selected roadmap detail log */}
          <div className="mt-6 p-5 border border-gold-ancient/20 border-l-4 border-l-gold-ancient rounded min-h-24 bg-parchment-light">
            <span className="font-mono-antique text-[9px] text-gold-ancient tracking-widest font-semibold uppercase block mb-1">
              Path Specifier Details
            </span>
            <h4 className="font-display-antique text-base text-ink-dark font-bold mb-2">
              {currentNode.title}
            </h4>
            <p className="font-serif-antique text-sm text-ink-faded leading-relaxed">
              {currentNode.description}
            </p>
          </div>
        </div>

        {/* Legend block */}
        <div className="flex justify-center gap-6 font-mono-antique text-[10px] text-ink-faded italic">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-green-800/20 border border-green-800/50 block" />
            <span>Passed Trial</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-gold-ancient/20 border border-gold-ancient/50 block" />
            <span>Current Campaign</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-ink-faded/20 border border-ink-faded/50 block" />
            <span>Future Campaign</span>
          </div>
        </div>
      </div>
    </div>
  );
}
