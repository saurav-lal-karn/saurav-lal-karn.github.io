import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { SystemDesignNote } from "../types";
import {
  Network,
  Database,
  Layers,
  ArrowRight,
  Zap,
  RefreshCw,
  Layers2,
} from "lucide-react";

const notesData: SystemDesignNote[] = [
  {
    id: "cache",
    title: "Cache-Aside Mechanics",
    description:
      "A study on reducing DB read pressure using transient in-memory key-value indexes.",
    diagramType: "cache",
    notes: [
      "1. Read Request: Gateway queries cache first.",
      "2. Cache Miss: Queries database directly to extract data.",
      "3. Backfill: Populates cache so next read finishes sub-millisecond.",
      "4. Hazard: Mind the eviction timeouts to avoid stale records.",
    ],
  },
  {
    id: "sharding",
    title: "Horizontal Sharding Split",
    description:
      "Scaling read/write performance by segregating transaction records across database physical matrices.",
    diagramType: "sharding",
    notes: [
      "1. Hash Key: Routes users based on primary key hash fields.",
      "2. Query Distribution: Prevents locking single hardware storage volumes.",
      "3. Rebalance: High overhead; choose initial key buckets wisely.",
      "4. Join Limits: Cross-shard joins are strictly forbidden in practice.",
    ],
  },
  {
    id: "pubsub",
    title: "Asynchronous Pub/Sub Pipeline",
    description:
      "De-coupling fragile heavy-computation triggers using persistent broker message lines.",
    diagramType: "pubsub",
    notes: [
      "1. Dispatcher: Publishes raw events directly to the message broker exchange.",
      "2. Topic Router: Directs raw messages to designated task worker queues.",
      "3. Worker Isolation: Failure in invoice extraction never blocks client log checkouts.",
      "4. Retries: Integrates dead-letter queues (DLQ) to audit failed jobs.",
    ],
  },
];

export default function SystemDesignNotes() {
  const [selectedNoteId, setSelectedNoteId] = useState<string>("cache");

  const currentNote =
    notesData.find((n) => n.id === selectedNoteId) || notesData[0];

  return (
    <div
      id="system-design-section"
      className="py-16 px-4 md:px-8 border-b border-ink-faded/15 manuscript-lines relative"
    >
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <div className="font-cursive text-3xl text-gold-ancient/90 mb-1">
            Notebook Margins
          </div>
          <h2 className="font-display-antique text-3xl md:text-4xl text-ink-dark font-medium tracking-wide relative inline-block">
            System Design Notes
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gold-ancient" />
          </h2>
          <p className="mt-4 text-sm md:text-base font-serif-antique text-ink-faded italic max-w-lg mx-auto">
            "Scribbled blueprints of architecture, scaling topologies, and
            structural engineering mechanics."
          </p>
        </div>

        {/* Notebook Interactive board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Navigation (Manuscript tab look) */}
          <div className="lg:col-span-4 space-y-3">
            <span className="font-mono-antique text-[9px] text-gold-ancient tracking-widest font-bold uppercase block pl-2 mb-2">
              Select Manuscript Entry
            </span>
            {notesData.map((note) => (
              <button
                key={note.id}
                onClick={() => setSelectedNoteId(note.id)}
                id={`design-note-tab-${note.id}`}
                className={`w-full text-left p-3.5 rounded-lg border transition-all duration-300 relative overflow-hidden flex items-center justify-between group ${
                  selectedNoteId === note.id
                    ? "bg-parchment-light border-gold-ancient text-ink-dark shadow-sm translate-x-1.5"
                    : "bg-parchment-light/45 border-gold-ancient/15 hover:border-gold-ancient/45 text-ink-faded"
                }`}
              >
                <div>
                  <span className="font-display-antique text-sm font-bold block group-hover:text-gold-ancient transition-colors">
                    {note.title}
                  </span>
                  <span className="font-serif-antique text-xs opacity-85 line-clamp-1 block mt-0.5">
                    {note.description}
                  </span>
                </div>
                {selectedNoteId === note.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-ancient mr-1 flex-shrink-0" />
                )}
              </button>
            ))}

            {/* Note decoration image */}
            <div className="hidden lg:block border border-gold-ancient/15 p-4 rounded-md mt-6 bg-parchment-light/25">
              <span className="font-mono-antique text-[10px] text-gold-ancient font-semibold block uppercase mb-1">
                Scribe Instruction
              </span>
              <p className="font-serif-antique text-xs text-ink-faded leading-relaxed">
                Click any layout tab to unfurl the architectural blueprints that
                drive system-level scale.
              </p>
            </div>
          </div>

          {/* Diagram Workspace */}
          <div className="lg:col-span-8 bg-parchment-light border border-gold-ancient/30 rounded-lg p-6 parchment-shadow relative">
            {/* Ink blot visual decoration */}
            <div className="absolute top-4 right-4 pointer-events-none opacity-10">
              <svg viewBox="0 0 100 100" className="w-20 h-20 fill-ink-dark">
                <path d="M50,15 C25,12 15,35 18,50 C21,65 35,75 50,72 C65,75 82,60 80,45 C78,30 75,18 50,15 Z" />
              </svg>
            </div>

            {/* Notebook Margin Line */}
            <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-red-800/15 pointer-events-none" />

            <div className="pl-6">
              <span className="font-mono-antique text-[9px] text-ink-faded tracking-widest uppercase block mb-1">
                Blueprint Catalog
              </span>
              <h3 className="font-display-antique text-lg text-ink-dark font-bold border-b border-ink-faded/10 pb-3 mb-4">
                {currentNote.title}
              </h3>

              {/* Embedded Rendered Blueprint Sketch */}
              <div className="border border-gold-ancient/25 rounded bg-parchment-light/45 p-4 min-h-60 flex items-center justify-center relative mb-5">
                {/* Cache-Aside SVG */}
                {currentNote.diagramType === "cache" && (
                  <svg
                    viewBox="0 0 400 200"
                    className="w-full max-w-md h-auto"
                    stroke="currentColor"
                  >
                    <g fill="none" strokeWidth="1.5" className="text-ink-faded">
                      {/* Client Box */}
                      <rect
                        x="20"
                        y="70"
                        width="70"
                        height="40"
                        rx="3"
                        stroke="#b89c66"
                      />
                      <text
                        x="55"
                        y="94"
                        textAnchor="middle"
                        className="font-mono-antique text-xs fill-ink-dark"
                      >
                        App Gateway
                      </text>

                      {/* Cache Key-Value Store */}
                      <rect
                        x="160"
                        y="15"
                        width="80"
                        height="40"
                        rx="3"
                        stroke="#c5a86d"
                      />
                      <text
                        x="200"
                        y="38"
                        textAnchor="middle"
                        className="font-mono-antique text-[11px] fill-ink-dark font-semibold"
                      >
                        Redis Cache
                      </text>

                      {/* SQL Database Container */}
                      <path
                        d="M300,75 C300,65 370,65 370,75 L370,115 C370,125 300,125 300,115 Z"
                        stroke="#1e1b18"
                      />
                      <path
                        d="M300,75 C300,85 370,85 370,75"
                        stroke="#1e1b18"
                      />
                      <text
                        x="335"
                        y="103"
                        textAnchor="middle"
                        className="font-mono-antique text-xs fill-ink-dark"
                      >
                        Postgres DB
                      </text>

                      {/* Connection arrows */}
                      {/* App to Cache */}
                      <path d="M90,80 L160,35" strokeDasharray="3,3" />
                      <polygon
                        points="160,35 152,35 156,42"
                        className="fill-ink-faded"
                      />
                      <text
                        x="110"
                        y="50"
                        className="font-serif-antique text-[9px] fill-gold-ancient italic font-semibold"
                      >
                        1. Cache Request
                      </text>

                      {/* App to DB */}
                      <path d="M90,90 L295,90" />
                      <polygon
                        points="295,90 287,86 287,94"
                        className="fill-ink-faded"
                      />
                      <text
                        x="180"
                        y="85"
                        className="font-serif-antique text-[9px] fill-gold-ancient italic font-semibold"
                      >
                        2. Direct Query (Miss)
                      </text>

                      {/* DB Backfill */}
                      <path d="M300,110 L220,55" strokeDasharray="3,3" />
                      <polygon
                        points="220,55 228,55 224,48"
                        className="fill-ink-faded"
                      />
                      <text
                        x="270"
                        y="130"
                        className="font-serif-antique text-[9px] fill-gold-ancient italic font-semibold"
                      >
                        3. Sync Backfill cache
                      </text>
                    </g>
                  </svg>
                )}

                {/* Sharding SVG */}
                {currentNote.diagramType === "sharding" && (
                  <svg
                    viewBox="0 0 400 200"
                    className="w-full max-w-md h-auto"
                    stroke="currentColor"
                  >
                    <g fill="none" strokeWidth="1.5" className="text-ink-faded">
                      {/* Master dispatcher */}
                      <rect
                        x="15"
                        y="80"
                        width="80"
                        height="40"
                        rx="3"
                        stroke="#b89c66"
                      />
                      <text
                        x="55"
                        y="104"
                        textAnchor="middle"
                        className="font-mono-antique text-xs fill-ink-dark"
                      >
                        Router Gateway
                      </text>

                      {/* Shard A */}
                      <path
                        d="M220,25 C220,15 280,15 280,25 L280,55 C280,65 220,65 220,55 Z"
                        stroke="#c5a86d"
                      />
                      <path
                        d="M220,25 C220,35 280,35 280,25"
                        stroke="#c5a86d"
                      />
                      <text
                        x="250"
                        y="48"
                        textAnchor="middle"
                        className="font-mono-antique text-[10px] fill-ink-dark"
                      >
                        Shard A (ID: 0-9k)
                      </text>

                      {/* Shard B */}
                      <path
                        d="M220,115 C220,105 280,105 280,115 L280,145 C280,155 220,155 220,145 Z"
                        stroke="#c5a86d"
                      />
                      <path
                        d="M220,115 C220,125 280,125 280,115"
                        stroke="#c5a86d"
                      />
                      <text
                        x="250"
                        y="138"
                        textAnchor="middle"
                        className="font-mono-antique text-[10px] fill-ink-dark"
                      >
                        Shard B (ID: 9k+)
                      </text>

                      {/* Lines */}
                      <path d="M95,90 L210,40" />
                      <polygon
                        points="210,40 202,39 205,46"
                        className="fill-ink-faded"
                      />
                      <text
                        x="130"
                        y="55"
                        className="font-serif-antique text-[9px] fill-gold-ancient italic font-semibold"
                      >
                        User Hash % 2 = 0
                      </text>

                      <path d="M95,110 L210,135" />
                      <polygon
                        points="210,135 204,129 202,137"
                        className="fill-ink-faded"
                      />
                      <text
                        x="130"
                        y="140"
                        className="font-serif-antique text-[9px] fill-gold-ancient italic font-semibold"
                      >
                        User Hash % 2 = 1
                      </text>
                    </g>
                  </svg>
                )}

                {/* Pub/Sub SVG */}
                {currentNote.diagramType === "pubsub" && (
                  <svg
                    viewBox="0 0 400 200"
                    className="w-full max-w-md h-auto"
                    stroke="currentColor"
                  >
                    <g fill="none" strokeWidth="1.5" className="text-ink-faded">
                      {/* Producer */}
                      <rect
                        x="15"
                        y="75"
                        width="70"
                        height="40"
                        rx="3"
                        stroke="#b89c66"
                      />
                      <text
                        x="50"
                        y="99"
                        textAnchor="middle"
                        className="font-mono-antique text-xs fill-ink-dark"
                      >
                        API Publisher
                      </text>

                      {/* RabbitMQ Exchange */}
                      <circle cx="170" cy="95" r="24" stroke="#c5a86d" />
                      <text
                        x="170"
                        y="99"
                        textAnchor="middle"
                        className="font-mono-antique text-[10px] fill-ink-dark font-semibold"
                      >
                        Broker Exch.
                      </text>

                      {/* Queues */}
                      <rect
                        x="250"
                        y="35"
                        width="60"
                        height="25"
                        rx="2"
                        stroke="#1e1b18"
                      />
                      <text
                        x="280"
                        y="51"
                        textAnchor="middle"
                        className="font-mono-antique text-[9px] fill-ink-dark"
                      >
                        Log Queue
                      </text>

                      <rect
                        x="250"
                        y="115"
                        width="60"
                        height="25"
                        rx="2"
                        stroke="#1e1b18"
                      />
                      <text
                        x="280"
                        y="131"
                        textAnchor="middle"
                        className="font-mono-antique text-[9px] fill-ink-dark"
                      >
                        Task Queue
                      </text>

                      {/* Connections */}
                      <path d="M85,95 L143,95" />
                      <polygon
                        points="143,95 135,91 135,99"
                        className="fill-ink-faded"
                      />

                      <path d="M190,80 L248,50" />
                      <polygon
                        points="248,50 240,49 243,56"
                        className="fill-ink-faded"
                      />

                      <path d="M190,110 L248,130" />
                      <polygon
                        points="248,130 242,124 240,132"
                        className="fill-ink-faded"
                      />
                    </g>
                  </svg>
                )}

                <div className="absolute bottom-2 left-2 text-[9px] font-mono-antique text-gold-ancient tracking-wide">
                  FIG. {currentNote.id.toUpperCase()} // SCALING REFERENCE
                  SKETCH
                </div>
              </div>

              {/* Scribe margin notes */}
              <div className="space-y-3">
                <h5 className="font-display-antique text-xs uppercase tracking-widest text-ink-dark font-bold mt-4 mb-2 flex items-center gap-1.5 border-b border-ink-faded/5 pb-1">
                  Scribe Ledger Observations:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentNote.notes.map((bullet, idx) => (
                    <div
                      key={idx}
                      className="flex gap-2 items-start font-serif-antique text-xs md:text-sm text-ink-faded leading-relaxed"
                    >
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
