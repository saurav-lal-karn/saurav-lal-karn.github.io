
import React, { useEffect, useState, useRef } from 'react';

const AnimatedCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Trail Effect */}
      <div 
        ref={trailRef}
        className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-[9997] -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out opacity-20"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 blur-xl" />
      </div>

      {/* Main Ring */}
      <div 
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out ${
          isClicking 
            ? 'w-6 h-6' 
            : isHovering 
              ? 'w-16 h-16' 
              : 'w-10 h-10'
        }`}
      >
        <div className={`w-full h-full rounded-full border-2 transition-all duration-200 ${
          isClicking
            ? 'border-pink-400 bg-pink-500/20'
            : isHovering 
              ? 'border-indigo-400 bg-indigo-500/10' 
              : 'border-white/40 bg-white/5'
        }`} />
      </div>

      {/* Center Dot */}
      <div 
        ref={dotRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ease-out ${
          isClicking
            ? 'w-2 h-2'
            : isHovering 
              ? 'w-1 h-1' 
              : 'w-2 h-2'
        }`}
      >
        <div className={`w-full h-full rounded-full transition-all duration-200 ${
          isClicking
            ? 'bg-pink-400 shadow-lg shadow-pink-500/50'
            : isHovering 
              ? 'bg-indigo-400 shadow-lg shadow-indigo-500/50' 
              : 'bg-white shadow-lg shadow-white/50'
        }`} />
      </div>

      <style>{`
        * { cursor: none !important; }
        @media (max-width: 768px) {
          .fixed { display: none !important; }
          * { cursor: auto !important; }
        }
      `}</style>
    </>
  );
};

export default AnimatedCursor;
