export interface JourneyEvent {
  id: string;
  year: string;
  title: string;
  category: string;
  description: string;
  details: string[];
}

export interface Project {
  id: string;
  title: string;
  problem: string;
  solution: string;
  technologies: string[];
  lessons: string;
  pinned: boolean;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface SystemDesignNote {
  id: string;
  title: string;
  description: string;
  diagramType: "cache" | "sharding" | "pubsub";
  notes: string[];
}

export interface RoadmapNode {
  id: string;
  title: string;
  status: "completed" | "active" | "future";
  description: string;
  coordinates: { x: number; y: number }; // Relative percentage for map plotting
}
