import React from "react";
import { motion } from "motion/react";
import type { SkillCategory } from "../types";
import {
  Server,
  Layout,
  Database,
  Brain,
  Compass,
  Cpu,
  Terminal,
  GitBranch,
  Workflow,
  FileCode2,
} from "lucide-react";

const toolboxData: {
  category: string;
  icon: React.ElementType;
  skills: string[];
}[] = [
  {
    category: "Backend Architectures",
    icon: Server,
    skills: ["Go", "Python", "Node.js", "Laravel"],
  },
  {
    category: "Frontend Presentation",
    icon: Layout,
    skills: ["React", "Next.js", "TypeScript"],
  },
  {
    category: "Relational & Structured Storage",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    category: "Cognitive & AI intelligence",
    icon: Brain,
    skills: ["OpenAI SDK", "LangChain", "RAG Systems"],
  },
  {
    category: "Infrastructure & Forge",
    icon: WorkbenchIcon, // We'll map a custom icon or fallback below
    skills: ["Docker", "Linux Unix", "Git Pipelines"],
  },
];

function WorkbenchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

export default function ToolboxSection() {
  return (
    <div
      id="toolbox-section"
      className="py-16 px-4 md:px-8 border-b border-ink-faded/15 manuscript-lines relative"
    >
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <div className="font-cursive text-3xl text-gold-ancient/90 mb-1">
            Engraved Seals
          </div>
          <h2 className="font-display-antique text-3xl md:text-4xl text-ink-dark font-medium tracking-wide relative inline-block">
            Engineering Toolbox
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gold-ancient" />
          </h2>
          <p className="mt-4 text-sm md:text-base font-serif-antique text-ink-faded italic max-w-lg mx-auto">
            "No superficial progression bars. Here are the core languages,
            engines, and protocols of my standard trade."
          </p>
        </div>

        {/* Dynamic Engraved Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {toolboxData.map((box, index) => {
            const Icon = box.icon;
            return (
              <motion.div
                key={box.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-parchment-light/85 border border-gold-ancient/20 rounded-lg p-5 parchment-shadow transition-all duration-300 hover:border-gold-ancient/60 hover:-translate-y-1 relative overflow-hidden group ${
                  index === 4 ? "sm:col-span-2 md:col-span-1" : ""
                }`}
              >
                {/* Embedded Stamp Background Decor */}
                <div className="absolute -right-3 -bottom-3 text-gold-ancient/5 group-hover:text-gold-ancient/10 transition-colors duration-300 pointer-events-none transform -rotate-12">
                  <Icon className="w-24 h-24 stroke-[1]" />
                </div>

                <div className="flex items-center gap-3 mb-4 border-b border-gold-ancient/15 pb-2.5">
                  <div className="p-1.5 rounded-md border border-gold-ancient/30 bg-parchment-light flex items-center justify-center text-gold-ancient">
                    <Icon className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  <h3 className="font-display-antique text-sm md:text-base text-ink-dark font-bold tracking-wide uppercase">
                    {box.category}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {box.skills.map((skill, sIdx) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 font-serif-antique text-sm text-ink-faded group-hover:text-ink-dark transition-all duration-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full border border-gold-ancient/40 bg-parchment-light flex-shrink-0" />
                      <span className="font-medium">{skill}</span>
                    </li>
                  ))}
                </ul>

                {/* Micro-seal stamp corner */}
                <span className="absolute bottom-1 right-2 font-mono-antique text-[8px] text-ink-faded/20 tracking-widest pointer-events-none uppercase">
                  VERIFIED
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Guild Quote */}
        <div className="mt-12 text-center p-4 border border-dashed border-gold-ancient/20 rounded max-w-xl mx-auto bg-parchment-light/35">
          <p className="font-serif-antique text-xs text-ink-faded italic leading-relaxed">
            "Software architectures should stand clean and resilient under
            extreme test pressures. I avoid temporary frameworks, seeking
            instead robust systems that maintain durability across long
            operational lifecycles."
          </p>
        </div>
      </div>
    </div>
  );
}
