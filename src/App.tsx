
import React, { useEffect, useState, useRef } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import ThreeCanvas from './components/ThreeCanvas';
import ProjectCard from './components/ProjectCard';
import AnimatedCursor from './components/AnimatedCursor';
import ParticleBackground from './components/ParticleBackground';
import { PERSONAL_INFO, PROJECTS, SKILLS, EXPERIENCES } from './constants/constants';

// Bypassing potential React Router version/type mismatch issues
const { HashRouter, Routes, Route } = ReactRouterDOM as any;
const Router = HashRouter;

const useIntersection = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
      } else {
        setIsIntersecting(false);
      }
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return [elementRef, isIntersecting] as const;
};

const RevealSection: React.FC<{ children: React.ReactNode; id: string; className?: string }> = ({ children, id, className }) => {
  const [ref, isVisible] = useIntersection({ threshold: 0.1 });

  return (
    <section 
      id={id} 
      ref={ref}
      className={`relative py-32 px-6 transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
    >
      {children}
    </section>
  );
};

const Navbar = ({ scrolled }: { scrolled: number }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${
      scrolled > 50 ? 'bg-black/60 backdrop-blur-2xl border-b border-white/10 py-4 shadow-lg shadow-black/50' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div 
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-2xl font-bold tracking-tighter font-heading gradient-text-animated cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          SLK<span className="text-white">.</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-400">
          {['experience', 'projects', 'skills'].map((item) => (
            <a 
              key={item}
              href={`#${item}`} 
              onClick={(e) => scrollToSection(e, item)}
              className="relative hover:text-white transition-all duration-300 capitalize group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a 
            href="/Saurav-Resume.pdf"
            download
            className="glass-button px-6 py-2.5 text-white font-bold hover:text-white transition-all duration-300"
          >
            Resume
          </a>
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="glass-button px-6 py-2.5 text-white font-bold hover:text-white transition-all duration-300"
          >
            Let's talk
          </a>
        </div>
      </div>
    </nav>
  );
};

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030014]">
      <ParticleBackground />
      <AnimatedCursor />
      <ThreeCanvas scrollY={scrollY} />
      <Navbar scrolled={scrollY} />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        <div 
          className="z-10 max-w-4xl transition-transform duration-300 ease-out"
          style={{ transform: `translateY(${scrollY * 0.2}px)`, opacity: 1 - scrollY / 700 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-[0.2em] mb-8 animate-pulse backdrop-blur-sm">
            ✦ Open to opportunities
          </span>
          <h1 className="text-6xl md:text-9xl font-heading font-extrabold mb-8 tracking-tighter leading-[0.9] text-white">
            Senior <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient-x">
              Software Engineer
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed mb-12 font-light">
            {PERSONAL_INFO.bio}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => {
                const el = document.getElementById('projects');
                if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
              }}
              className="btn-primary group relative overflow-hidden"
            >
              <span className="relative z-10">Explore Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </button>
            <button 
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
              }}
              className="btn-secondary group"
            >
              <span className="relative z-10">Start Conversation</span>
            </button>
          </div>
        </div>

        {/* Floating gradient glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-pink-600/15 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 text-gray-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </section>

      {/* Experience Section */}
      <RevealSection id="experience" className="bg-gradient-to-b from-[#030014]/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <h2 className="text-5xl md:text-7xl font-heading font-extrabold mb-6 tracking-tight gradient-text">Timeline</h2>
            <div className="section-divider" />
            <p className="text-gray-400 text-lg mt-6 max-w-2xl font-light">Journey through innovation and impact</p>
          </div>
          <div className="space-y-16">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="relative">
                <div className="md:grid md:grid-cols-5 gap-8 group">
                  <div className="hidden md:block col-span-1 pt-3">
                    <p className="text-indigo-400 font-bold font-heading text-lg opacity-60 group-hover:opacity-100 transition-opacity">{exp.period}</p>
                  </div>
                  <div className="col-span-4 relative pb-12">
                    <div className="absolute -left-10 top-0 bottom-0 w-px bg-white/10 hidden md:block">
                      <div className="absolute top-4 -left-[6px] w-3 h-3 rounded-full bg-indigo-500 border-4 border-[#030014] group-hover:scale-[2] transition-transform duration-500 group-hover:bg-white" />
                    </div>
                    
                    <div className="premium-card p-10">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                        <div>
                          <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">{exp.role}</h3>
                          <p className="text-indigo-400 font-semibold text-xl">{exp.company}</p>
                        </div>
                        <span className="md:hidden text-sm text-gray-500 font-bold tracking-widest">{exp.period}</span>
                      </div>
                      <ul className="space-y-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-4 text-gray-400 text-lg leading-relaxed">
                            <span className="text-indigo-500 mt-2 text-xs">◆</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Projects Section */}
      <RevealSection id="projects">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div>
              <h2 className="text-5xl md:text-7xl font-heading font-extrabold mb-6 tracking-tight gradient-text">Ventures</h2>
              <div className="section-divider mb-6" />
              <p className="text-gray-300 text-xl max-w-2xl font-light">Synthesizing code and creativity into functional masterpieces.</p>
            </div>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-3 text-indigo-400 hover:text-white transition-all font-semibold text-lg"
            >
              Back to Top 
              <span className="group-hover:-translate-y-2 transition-transform">↑</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROJECTS.map((project) => (
              <div key={project.id}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Skills Section */}
      <RevealSection id="skills" className="bg-gradient-to-b from-transparent to-[#030014]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-heading font-extrabold mb-6 tracking-tight gradient-text">Arsenal</h2>
            <div className="section-divider mx-auto mb-6" />
            <p className="text-gray-300 text-xl font-light">Specialized weaponry for the modern digital frontier.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {SKILLS.map((skill) => (
              <div 
                key={skill.name} 
                className="premium-card p-8 flex flex-col items-center justify-center gap-4 group cursor-default hover:bg-indigo-600/10 hover:border-indigo-500/50"
              >
                <span className="text-5xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">{skill.icon}</span>
                <div className="text-center">
                  <h4 className="font-bold text-lg text-white mb-1">{skill.name}</h4>
                  <p className="text-xs text-indigo-400 uppercase tracking-[0.2em] font-bold">{skill.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Contact Section */}
      <RevealSection id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative p-16 md:p-24 rounded-[3rem] bg-gradient-to-br from-indigo-900/30 via-purple-900/30 to-pink-900/30 border border-white/10 backdrop-blur-3xl overflow-hidden group hover:border-white/20 transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-indigo-500/20 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl group-hover:bg-purple-500/20 transition-all duration-500" />
            
            <h2 className="relative z-10 text-5xl md:text-8xl font-heading font-extrabold mb-10 tracking-tighter gradient-text-animated">Let's Build.</h2>
            <p className="relative z-10 text-2xl text-gray-200 mb-12 leading-relaxed font-light">
              Architecting the future one pixel at a time. <br />
              Ready to embark on the next expedition?
            </p>
            <a 
              href={`mailto:${PERSONAL_INFO.email}`}
              className="relative z-10 inline-block px-14 py-6 bg-white text-black font-extrabold text-xl rounded-full hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 transition-all shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:-translate-y-2 active:scale-95 group/cta"
            >
              <span className="relative z-10">Reach Out</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover/cta:opacity-10 rounded-full transition-opacity duration-300" />
            </a>
          </div>
        </div>
      </RevealSection>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 px-6 mt-32 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-2xl font-bold tracking-tighter font-heading text-white cursor-pointer"
            >
              SLK.
            </div>
            <p className="text-gray-500 text-sm max-w-[250px] text-center md:text-left leading-relaxed">
              Synthesized by {PERSONAL_INFO.name} with passion, precision, and a dash of AI.
            </p>
          </div>
          <div className="flex gap-10">
            {Object.entries(PERSONAL_INFO.socials).map(([name, url]) => (
              <a 
                key={name} 
                href={url} 
                className="text-gray-500 hover:text-white transition-all hover:scale-110 capitalize font-medium tracking-widest text-sm"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
