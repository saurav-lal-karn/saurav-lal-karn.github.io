
import type { Project, Skill, Experience } from '../types/types';

export const PERSONAL_INFO = {
  name: "Saurav Lal Karn",
  role: "Senior Software Engineer",
  bio: "9+ years of experience in full-stack, blockchain, and AI/ML solutions. Proven track record in delivering scalable products, integrating cutting-edge AI models, and leading end-to-end software development for fintech, SaaS, and enterprise projects.",
  location: "Lalitpur, Nepal",
  email: "sauravkarn541@gmail.com",
  socials: {
    github: "https://github.com/sauravlalkarn",
    linkedin: "https://linkedin.com/in/saurav-lal-karn",
    email: "mailto:saurav_karn@outlook.com"
  }
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Document Processing with LLM",
    description: "Implemented an LLM-powered assistant for document processing, including parsing and presenting documents for user-friendly viewing.",
    tags: ["LLM", "AI", "Document Processing", "NLP"],
    imageUrl: "https://picsum.photos/seed/llm-doc/800/600",
    link: "#"
  },
  {
    id: "2",
    title: "Blockchain-Based Voting System",
    description: "Integrated a secure voting system with blockchain technology, enabling seamless functionality with MetaMask. Customized MetaMask for compatibility with the system.",
    tags: ["Blockchain", "Solidity", "MetaMask", "Web3"],
    imageUrl: "https://picsum.photos/seed/blockchain-vote/800/600",
    link: "#"
  },
  {
    id: "3",
    title: "FlipPay — Payment Plans Portal",
    description: "Led a team to engineer merchant, admin, and customer portals with payment plans specific to merchants, enabling users to pay as per plan. Built APIs using Node.js and the frontend using Vue.js.",
    tags: ["Node.js", "Vue.js", "Payment Gateway", "Fintech"],
    imageUrl: "https://picsum.photos/seed/flippay/800/600",
    link: "#"
  },
  {
    id: "4",
    title: "Dwell — Tenancy Management System",
    description: "Led a team to craft APIs and a backend portal for landlord, tenant, and property management. Integrated Assembly Payment Gateway and used Laravel for development with MongoDB as the database.",
    tags: ["Laravel", "MongoDB", "Payment Gateway", "SaaS"],
    imageUrl: "https://picsum.photos/seed/dwell/800/600",
    link: "#"
  },
  {
    id: "5",
    title: "Farm Service Manager",
    description: "Built APIs and a backend portal for farm owner management, operators, and equipment. Integrated Braintree Payment Gateway and used Laravel and MySQL for the system.",
    tags: ["Laravel", "MySQL", "Braintree", "API"],
    imageUrl: "https://picsum.photos/seed/farm/800/600",
    link: "#"
  },
  {
    id: "6",
    title: "FoodMario — Food Platform",
    description: "Developed APIs for vendor and customer portals, including food preferences, vendor proximity, and type-based filtering. Worked on API optimization and backend portal integration.",
    tags: ["API", "Geolocation", "Optimization", "Backend"],
    imageUrl: "https://picsum.photos/seed/foodmario/800/600",
    link: "#"
  }
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: "React / Next.js", category: "Frontend", icon: "⚛️" },
  { name: "Vue.js", category: "Frontend", icon: "💚" },
  
  // Backend
  { name: "Node.js / Nest.js", category: "Backend", icon: "🟢" },
  { name: "Laravel / PHP", category: "Backend", icon: "🔴" },
  { name: "Golang", category: "Backend", icon: "🔵" },
  
  // Database
  { name: "MySQL", category: "Database", icon: "🐬" },
  { name: "MongoDB", category: "Database", icon: "🍃" },
  { name: "PostgreSQL", category: "Database", icon: "🐘" },
  
  // Blockchain
  { name: "Solidity", category: "Blockchain", icon: "⛓️" },
  { name: "Web3", category: "Blockchain", icon: "🌐" },
  
  // AI/ML
  { name: "Python / Keras", category: "AI/ML", icon: "🐍" },
  { name: "NLP", category: "AI/ML", icon: "💬" },
  { name: "Computer Vision", category: "AI/ML", icon: "👁️" },
  { name: "LLM Integration", category: "AI/ML", icon: "🤖" },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "e1",
    company: "Whitehat Engineering",
    role: "Senior Software Engineer",
    period: "Sep 2021 - Present",
    description: [
      "Developed and maintained web applications and blockchain solutions tailored to client requirements.",
      "Integrated cutting-edge large language models (LLMs) for AI-driven client projects.",
      "Led OpenAI assistant implementations to meet client-specific needs."
    ]
  },
  {
    id: "e2",
    company: "Ebpearls Pvt Ltd",
    role: "Web Developer",
    period: "Apr 2017 - Aug 2021",
    description: [
      "Spearheaded web application and API development projects to enhance user experience.",
      "Integrated third-party APIs to enhance application functionality.",
      "Designed and managed databases for seamless application functionality."
    ]
  },
  {
    id: "e3",
    company: "SmartMobe Solutions Pvt Ltd",
    role: "Associate Web Developer",
    period: "Apr 2016 - Apr 2017",
    description: [
      "Developed web applications and services.",
      "Managed database systems to support project objectives."
    ]
  }
];

// Education information (can be added to About section if needed)
export const EDUCATION = [
  {
    id: "edu1",
    institution: "IOE, Pulchowk",
    degree: "Masters in Computer Systems and Knowledge Engineering",
    year: "2019",
    focus: "Machine Learning and Artificial Intelligence"
  },
  {
    id: "edu2",
    institution: "IOE, Pulchowk",
    degree: "Bachelor in Computer Engineering",
    year: "2016",
    focus: "NLP with Tweet Analysis"
  }
];

// Publications (can be displayed in a separate section if needed)
export const PUBLICATIONS = [
  {
    id: "pub1",
    title: "Rapid Earthquake Assessment from Satellite Imagery Using RPN and Yolo v3",
    publisher: "Springer",
    year: "2021",
    link: "https://link.springer.com/chapter/10.1007/978-981-16-0878-0_1"
  }
];
