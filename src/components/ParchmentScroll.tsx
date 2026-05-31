import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import JourneyTimeline from "./JourneyTimeline";
import CurrentQuest from "./CurrentQuest";
import ProjectsSection from "./ProjectsSection";
import ToolboxSection from "./ToolboxSection";
// import SystemDesignNotes from "./SystemDesignNotes";
import RoadmapMap from "./RoadmapMap";
import ContactSection from "./ContactSection";
import {
  Compass,
  FileText,
  ChevronDown,
  Award,
  ArrowUp,
  Lock,
  Sparkles,
  Feather,
  Menu,
  X,
} from "lucide-react";

export default function ParchmentScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollSoundPlayedRef = useRef<number>(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isTop, setIsTop] = useState(true);
  const [isUnfurled, setIsUnfurled] = useState(false);
  const [isSealingBreaking, setIsSealingBreaking] = useState(false);
  const [unfurlComplete, setUnfurlComplete] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Tracks real scroll fraction when unfurled - throttled with RAF for performance
  useEffect(() => {
    if (!isUnfurled) return;

    let rafId: number;
    let lastScrollTop = 0;
    let menuOpenScrollTop = 0;

    const handleScroll = () => {
      // Cancel any pending RAF to avoid stacking
      if (rafId) cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        const el = document.documentElement;
        const currentScrollTop = el.scrollTop;

        // Only update if scroll position changed significantly (reduces re-renders)
        if (Math.abs(currentScrollTop - lastScrollTop) < 5) return;
        lastScrollTop = currentScrollTop;

        const total = el.scrollHeight - el.clientHeight;
        if (total <= 0) return;

        const progress = Math.min(1, Math.max(0, currentScrollTop / total));
        setScrollProgress(progress);
        setIsTop(currentScrollTop < 60);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isUnfurled]);

  // Handle scroll or touch gestures when scroll is closed to trigger unfurl
  useEffect(() => {
    if (isUnfurled) return;

    const handleClosedScrollAttempt = (e: WheelEvent | TouchEvent) => {
      if (isSealingBreaking) return;

      // Any scroll action breaks the seal and unfurls
      triggerUnfurl();
    };

    // Listen to wheel and touch events on the closed window
    window.addEventListener("wheel", handleClosedScrollAttempt, {
      passive: true,
    });
    window.addEventListener("touchmove", handleClosedScrollAttempt, {
      passive: true,
    });

    return () => {
      window.removeEventListener("wheel", handleClosedScrollAttempt);
      window.removeEventListener("touchmove", handleClosedScrollAttempt);
    };
  }, [isUnfurled, isSealingBreaking]);

  const triggerUnfurl = () => {
    if (isSealingBreaking) return;
    setIsSealingBreaking(true);

    // Wax seal crack & roll animation duration
    setTimeout(() => {
      setIsUnfurled(true);
      setIsSealingBreaking(false);
      // Soft scroll to ensure page initialization starts smoothly
      window.scrollTo({ top: 0 });
    }, 500);
  };

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      // Use smooth scroll with fallback for better mobile support
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#141210] text-ink-dark relative overflow-x-hidden font-serif-antique select-none"
    >
      {/* Procedural Ragged/Torn Edge Generator (0 network overhead) */}
      <svg
        className="absolute w-0 h-0 pointer-events-none"
        aria-hidden="true"
        style={{ position: "absolute", width: 0, height: 0 }}
      >
        <defs>
          <filter id="ragged-edge">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.08"
              numOctaves="4"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="20"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* CLOSED SCROLL HERO OVERLAY (WAX SEAL STATE) */}
      <AnimatePresence>
        {!isUnfurled && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed inset-0 bg-[#0d0a08]/95 flex flex-col items-center justify-center z-50 px-4 overflow-hidden"
          >
            {/* Ambient Background Glow */}

            <div className="max-w-[1000px] w-[92%] text-center space-y-8 relative z-10 mx-auto">
              {/* Introduction Title before opening */}
              <div className="space-y-3">
                <span className="font-mono-antique text-[9px] text-[#c5a86d] tracking-[0.25em] font-bold block uppercase bg-gold-ancient/10 border border-gold-ancient/30 px-3 py-1 rounded-full w-max mx-auto">
                  Engineering Ledger
                </span>

                <h1 className="font-display-antique text-3xl md:text-5xl text-parchment-light font-medium tracking-wide leading-tight">
                  The Chronicles of Saurav Lal Karn
                </h1>

                <p className="font-serif-antique text-sm md:text-base text-parchment-dark/70 italic max-w-md mx-auto">
                  "A certified physical manuscript documenting system designs,
                  active quest projects, and technological horizons."
                </p>
              </div>

              {/* TACTILE CLOSED SCROLL RENDERING WITH WAX SEAL */}
              <div className="relative py-12 flex flex-col items-center justify-center">
                {/* Horizontal bound scroll cylinders */}
                <div className="w-full relative flex flex-col items-center">
                  {/* Top Cylinder half */}
                  <motion.div
                    animate={
                      isSealingBreaking ? { y: -80, opacity: 0 } : { y: 0 }
                    }
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-24 bg-gradient-to-b from-[#bda170] via-[#eedca4] to-[#c7ad74] rounded-t-lg border-x-4 border-double border-gold-ancient/45 relative z-10 rolled-shadow-top flex items-center justify-center border-b border-gold-ancient/10"
                  >
                    {/* Wooden rod details extending outside */}
                    <div className="absolute left-[-2.5%] right-[-2.5%] top-1/2 -translate-y-1/2 h-8 bg-gradient-to-r from-[#211208] via-[#542d13] to-[#211208] rounded-md shadow-2xl flex justify-between px-4 items-center border border-gold-ancient/30">
                      {/* Ornate Gold rod knobs */}
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-ancient via-[#7a5c20] to-gold-ancient border-2 border-[#122c15] shadow-inner flex items-center justify-center -ml-2" />
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-ancient via-[#7a5c20] to-gold-ancient border-2 border-[#122c15] shadow-inner flex items-center justify-center -mr-2" />
                    </div>

                    <div className="relative z-10 text-center">
                      <span className="font-cursive text-3xl md:text-4xl text-[#3d2716] italic select-none">
                        Saurav Lal Karn
                      </span>
                      <div className="w-32 h-[1px] bg-[#3d2716]/30 mx-auto mt-1" />
                    </div>
                  </motion.div>

                  {/* Wrapped Parchment Belt with Wax Seal */}
                  <div className="w-12 md:w-16 h-28 bg-gradient-to-b from-transparent via-[#b89c66]/40 to-transparent absolute top-10 z-0 border-x border-[#3d2716]/10" />

                  {/* Interactive Wax Seal Button */}
                  <button
                    onClick={triggerUnfurl}
                    id="break-seal-btn"
                    disabled={isSealingBreaking}
                    className="absolute z-30 group top-1/2 -translate-y-1/2 animate-pulse hover:animate-none"
                    aria-label="Break Seal and Unroll"
                  >
                    <motion.div
                      animate={
                        isSealingBreaking
                          ? {
                              scale: [1, 1.15, 0.8],
                              opacity: [1, 1, 0],
                              rotate: [0, -10, 15],
                            }
                          : { scale: 1 }
                      }
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="w-30 h-30 rounded-full bg-red-800 hover:bg-red-750 border-4 border-red-950 flex items-center justify-center shadow-2xl relative cursor-pointer transform transition-transform group-hover:scale-105 active:scale-95"
                    >
                      {/* Wax stamp crest engravings */}
                      <span className="font-cursive text-3xl text-gold-ancient font-semibold select-none rotate-6 group-hover:rotate-12 transition-transform duration-300">
                        SLK
                      </span>

                      {/* Mini seal inner details */}
                      <div className="absolute inset-1.5 rounded-full border border-dashed border-red-900/30 pointer-events-none" />

                      {/* Sparkles on hover */}
                      <span className="absolute -top-1 -right-1 text-gold-ancient group-hover:animate-pulse">
                        <Sparkles className="w-4 h-4" />
                      </span>
                    </motion.div>
                  </button>

                  {/* Bottom Cylinder half */}
                  <motion.div
                    animate={
                      isSealingBreaking ? { y: 80, opacity: 0 } : { y: 0 }
                    }
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-20 bg-gradient-to-b from-[#c7ad74] via-[#eedca4] to-[#bda170] rounded-b-lg border-x-4 border-double border-gold-ancient/45 relative z-10 rolled-shadow-bottom flex items-center justify-center border-t border-gold-ancient/10 -mt-[1px]"
                  >
                    {/* Wooden rod details extending outside */}
                    <div className="absolute left-[-2.5%] right-[-2.5%] top-1/2 -translate-y-1/2 h-8 bg-gradient-to-r from-[#211208] via-[#542d13] to-[#211208] rounded-md shadow-2xl flex justify-between px-4 items-center border border-gold-ancient/30">
                      {/* Ornate Gold rod knobs */}
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-ancient via-[#7a5c20] to-gold-ancient border-2 border-[#122c15] shadow-inner flex items-center justify-center -ml-2" />
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-ancient via-[#7a5c20] to-gold-ancient border-2 border-[#122c15] shadow-inner flex items-center justify-center -mr-2" />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Instructive call-to-action details */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center justify-center gap-2 text-gold-ancient/75 tracking-wider font-mono-antique text-xs animate-pulse">
                  <Feather className="w-4 h-4" />
                  <span>
                    {isSealingBreaking
                      ? "Unlocking Blueprint Vault..."
                      : "Scroll down or break the wax seal to unveil"}
                  </span>
                </div>

                <p className="font-serif-antique text-xs text-parchment-dark/40 max-w-sm mx-auto">
                  "Committing to read this ledger provides deep architectural
                  patterns, real repository audits, and system workflows."
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FIXED FLOATING MANUSCRIPT HEADER/BANNER */}
      {isUnfurled && (
        <header className="fixed top-0 inset-x-0 h-16 bg-wood-dark border-b border-gold-ancient/20 z-40 shadow-xl">
          <div className="h-full flex items-center justify-between px-6 md:justify-start">
            {/* Left - Logo */}
            <div className="flex items-center gap-2">
              {/* Miniature Golden Royal Seal - Name Logo */}
              <div className="w-8 h-8 rounded-full bg-[#1a1512] border border-gold-ancient/60 flex items-center justify-center shadow-inner">
                <span className="font-serif text-lg font-bold italic text-gold-ancient">
                  S
                </span>
              </div>
              <div>
                <span className="font-display-antique text-sm tracking-widest font-bold text-parchment-light uppercase">
                  Saurav Lal Karn
                </span>
              </div>
            </div>

            {/* Hamburger Menu Button - Mobile (moved here for flex order) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-parchment-light/75 hover:text-gold-ancient transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Dynamic Navigation anchor deck - Desktop (Centered) */}
          <nav className="hidden md:flex items-center justify-center gap-6 text-xs font-mono-antique uppercase tracking-widest absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <button
              onClick={() => scrollToSection("journey-section")}
              className="text-parchment-light/75 hover:text-gold-ancient transition-colors"
            >
              Journey
            </button>
            <button
              onClick={() => scrollToSection("quest-section")}
              className="text-parchment-light/75 hover:text-gold-ancient transition-colors"
            >
              Current Quest
            </button>
            <button
              onClick={() => scrollToSection("projects-section")}
              className="text-parchment-light/75 hover:text-gold-ancient transition-colors"
            >
              Works
            </button>
            <button
              onClick={() => scrollToSection("roadmap-section")}
              className="text-parchment-light/75 hover:text-gold-ancient transition-colors"
            >
              Chart
            </button>
            <button
              onClick={() => scrollToSection("contact-section")}
              className="text-parchment-light/75 hover:text-gold-ancient transition-colors"
            >
              Contact
            </button>
          </nav>
        </header>
      )}

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isUnfurled && isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 inset-x-0 bg-wood-dark border-b border-gold-ancient/20 z-30 md:hidden"
          >
            <nav className="flex flex-col py-4 px-6 space-y-1">
              {[
                { id: "journey-section", label: "Journey" },
                { id: "quest-section", label: "Current Quest" },
                { id: "projects-section", label: "Works" },
                { id: "roadmap-section", label: "Chart" },
                { id: "contact-section", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left text-parchment-light/75 hover:text-gold-ancient hover:bg-gold-ancient/5 transition-colors font-mono-antique text-xs uppercase tracking-widest py-3 px-4 rounded-md"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BACK TO TOP ANCHOR STRING */}
      {isUnfurled && !isTop && (
        <button
          onClick={scrollToTop}
          id="scroll-to-top-btn"
          className="fixed right-6 bottom-6 z-40 p-2.5 rounded-full bg-gold-ancient text-wood-dark border border-gold-ancient/60 shadow-xl hover:scale-110 active:scale-95 transition-all"
          aria-label="Scroll back up"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}

      {/* THE MAIN FLOATING SCROLL BODY */}
      {isUnfurled && (
        <motion.main
          initial={{ scaleY: 0.05, originY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          onAnimationComplete={() => setUnfurlComplete(true)}
          style={{ willChange: "transform, opacity" }}
          className="max-w-[1000px] w-[92%] mx-auto pt-24 pb-18 relative z-10 flex flex-col items-center select-text"
        >
          {/* 1. SCROLL TOP ROLL: A thick luxurious wood & paper roll element */}
          <div className="w-full relative z-20 mb-[-1px]">
            {/* Wooden rod details extending slightly outside */}
            <div className="absolute left-[-2.5%] right-[-2.5%] top-1/2 -translate-y-1/2 h-8 bg-gradient-to-r from-[#211208] via-[#542d13] to-[#211208] shadow-2xl flex justify-between px-4 items-center border border-gold-ancient/30">
              {/* Ornate Gold rod knobs - static for performance */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-ancient via-[#7a5c20] to-gold-ancient border-2 border-[#122c15] shadow-inner flex items-center justify-center -ml-2">
                <div className="w-4 h-4 rounded-full bg-[#1b0d06] border border-gold-ancient/40" />
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-ancient via-[#7a5c20] to-gold-ancient border-2 border-[#122c15] shadow-inner flex items-center justify-center -mr-2">
                <div className="w-4 h-4 rounded-full bg-[#1b0d06] border border-gold-ancient/40" />
              </div>
            </div>

            {/* Roll cylinder itself representing top unrolled */}
            <div className="w-full h-24 bg-gradient-to-b from-[#bda170] via-[#eedca4] to-[#c7ad74] rounded-t-lg border-x-4 border-double border-gold-ancient/45 rolled-shadow-top flex items-center justify-center p-4">
              <div className="text-center">
                <span className="font-cursive text-3xl md:text-4xl text-[#3d2716] italic select-none">
                  Saurav Lal Karn
                </span>
                <div className="w-32 h-[1px] bg-[#3d2716]/30 mx-auto mt-1" />
              </div>
            </div>
          </div>

          {/* 2. MAIN SCROLL CONTAINER BODY (PARCHMENT SHEET) */}
          <div className="w-full relative shadow-2xl min-h-[400px]">
            {/* PROCEDURAL PARCHMENT BACKGROUND LAYER (STABLE & HIGH-PERFORMANCE BASE) */}
            <div
              className="parchment-texture z-0"
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: "4px",
                right: "4px",
              }}
            />

            {/* LEFT PROCEDURAL RAGGED EDGE STRIP */}
            <div
              className="parchment-texture border-l-4 border-double border-gold-ancient/45 ragged-border z-0"
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                width: "16px",
              }}
            />

            {/* RIGHT PROCEDURAL RAGGED EDGE STRIP */}
            <div
              className="parchment-texture border-r-4 border-double border-gold-ancient/45 ragged-border z-0"
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                width: "16px",
              }}
            />

            {/* SIBLING CONTENT LAYER (KEPT 100% STRAIGHT & CRISP ON AN INDEPENDENT COMPOSITING LAYER) */}
            <div
              className="relative z-10 w-full"
              style={{ transform: "translate3d(0,0,0)" }}
            >
              {/* Custom Side Torn Edge effect overlays (Using elegant repeating gradients inside absolute columns) */}
              <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-gradient-to-r from-black/10 via-transparent to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-2.5 bg-gradient-to-l from-black/10 via-transparent to-transparent pointer-events-none" />

              {/* HEADER HERO (SECTION 1) - with max-width containment inside for comfortable readability */}
              <section className="py-20 px-6 md:px-12 text-center border-b border-ink-faded/15 manuscript-lines relative max-w-[1200px] mx-auto">
                {/* Antique Seal watermark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03] text-gold-ancient rotate-12">
                  <Compass className="w-96 h-96" />
                </div>

                <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                  {/* Hand Drawn Title signature effect */}
                  <div className="space-y-1">
                    <p className="font-cursive text-4xl md:text-5xl text-gold-ancient select-none italic text-center text-ink-bleed-text">
                      Saurav Lal Karn
                    </p>
                    <h1 className="font-display-antique text-3xl md:text-5xl lg:text-6xl text-ink-dark font-medium tracking-wide leading-tight">
                      Senior Software Engineer
                    </h1>
                  </div>

                  {/* Subtitles & Descriptions */}
                  <div className="w-16 h-[2px] bg-gold-ancient/50 mx-auto my-3" />

                  <p className="font-display-antique text-base md:text-lg text-ink-faded font-medium italic select-text flex justify-center">
                    “Building practical software, systems, and AI-powered
                    solutions.”
                  </p>

                  <p className="font-serif-antique text-sm md:text-base text-ink-faded/90 leading-relaxed max-w-lg mx-auto select-text text-center">
                    Leveraging rigorous material training and type-safe
                    infrastructure principles to forge elegant web applications,
                    sub-millisecond API boundaries, and modular RAG services.
                  </p>

                  {/* Hero CTA buttons */}
                  <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      onClick={() => scrollToSection("projects-section")}
                      id="hero-view-projects-btn"
                      className="w-full sm:w-auto bg-wood-dark hover:bg-black text-parchment-light font-display-antique text-xs uppercase tracking-widest font-extrabold px-6 py-3.5 rounded-md border border-gold-ancient/35 hover:border-gold-ancient transition-all duration-300 shadow-md cursor-pointer inline-flex items-center justify-center gap-2 hover:translate-y-[-1px]"
                    >
                      <FileText className="w-4 h-4 text-gold-ancient" />
                      <span>View Projects</span>
                    </button>
                    <button
                      onClick={() => scrollToSection("contact-section")}
                      id="hero-contact-btn"
                      className="w-full sm:w-auto bg-transparent hover:bg-gold-ancient/5 text-ink-dark font-display-antique text-xs uppercase tracking-widest font-extrabold px-6 py-3.5 rounded-md border border-gold-ancient/35 hover:border-gold-ancient transition-all duration-300 cursor-pointer inline-flex items-center justify-center gap-2"
                    >
                      <Award className="w-4 h-4 text-[#c5a86d]" />
                      <span>Contact Me</span>
                    </button>
                  </div>

                  {/* Feather arrow indicator */}
                  <div className="pt-12 text-ink-faded/45 animate-bounce flex flex-col items-center">
                    <span className="font-cursive text-lg">
                      Scroll to Unroll
                    </span>
                    <ChevronDown className="w-5 h-5 text-gold-ancient" />
                  </div>
                </div>
              </section>

              {unfurlComplete ? (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full"
                  style={{ willChange: "transform, opacity" }}
                >
                  {/* CHRONICLES (JOURNEY) SECTION */}
                  <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                    <JourneyTimeline />
                  </div>

                  {/* BLUEPRINTS (CURRENT QUEST) SECTION */}
                  <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                    <CurrentQuest />
                  </div>

                  {/* WORKS (PROJECTS) SECTION */}
                  <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                    <ProjectsSection />
                  </div>

                  {/* SEAL SEALS (TOOLBOX) */}
                  <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                    <ToolboxSection />
                  </div>

                  {/* MANUSCRIPT MARGINS NOTES (SYSTEM DESIGNS)
                  <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                    <SystemDesignNotes />
                  </div> */}

                  {/* PROGRESS MAP (ROADMAP) */}
                  <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                    <RoadmapMap />
                  </div>

                  {/* SENT DISPATCH (CONTACT FORM) */}
                  <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                    <ContactSection />
                  </div>
                </motion.div>
              ) : (
                <div className="h-64 flex items-center justify-center pointer-events-none">
                  <span className="font-cursive text-gold-ancient/40 text-xl animate-pulse">
                    Revealing chronicles...
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* 3. SCROLL BOTTOM ROLL: Recoils inward beautifully */}
          <div className="w-full relative z-20 mt-[-1px]">
            {/* Wooden rod details extending slightly outside */}
            <div className="absolute left-[-2.5%] right-[-2.5%] top-1/2 -translate-y-1/2 h-8 bg-gradient-to-r from-[#211208] via-[#542d13] to-[#211208] shadow-2xl flex justify-between px-4 items-center border border-gold-ancient/30">
              {/* Ornate Gold rod knobs - static for performance */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-ancient via-[#7a5c20] to-gold-ancient border-2 border-[#122c15] shadow-inner flex items-center justify-center -ml-2">
                <div className="w-4 h-4 rounded-full bg-[#1b0d06] border border-gold-ancient/40" />
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-ancient via-[#7a5c20] to-gold-ancient border-2 border-[#122c15] shadow-inner flex items-center justify-center -mr-2">
                <div className="w-4 h-4 rounded-full bg-[#1b0d06] border border-gold-ancient/40" />
              </div>
            </div>

            {/* Roll cylinder itself representing bottom rolling inward */}
            <div className="w-full h-20 bg-gradient-to-b from-[#c7ad74] via-[#eedca4] to-[#bda170] rounded-b-lg border-x-4 border-double border-gold-ancient/45 rolled-shadow-bottom flex items-center justify-center p-3">
              <p className="font-mono-antique text-[9px] text-[#463920] tracking-widest uppercase font-semibold">
                End of Manuscript // Soli Deo Gloria
              </p>
            </div>
          </div>
        </motion.main>
      )}
    </div>
  );
}
