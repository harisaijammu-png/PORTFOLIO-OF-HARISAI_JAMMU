import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

const sections = [
  { id: 'hero', label: 'Home', component: <HeroSection /> },
  { id: 'about', label: 'About', component: <AboutSection /> },
  { id: 'skills', label: 'Skills', component: <SkillsSection /> },
  { id: 'education', label: 'Education', component: <EducationSection /> },
  { id: 'projects', label: 'Project', component: <ProjectsSection /> },
  { id: 'contact', label: 'Contact', component: <ContactSection /> }
];

const Card3DWrapper = ({ index, activeIndex, children }) => {
  const isActive = index === activeIndex;
  const isPast = index < activeIndex;
  
  const variants = {
    active: {
      y: "0%",
      opacity: 1,
      zIndex: 10,
      pointerEvents: "auto",
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
    },
    past: {
      y: "-50%",
      opacity: 0,
      zIndex: 0,
      pointerEvents: "none",
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
    },
    future: {
      y: "50%",
      opacity: 0,
      zIndex: 20,
      pointerEvents: "none",
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
    }
  };

  let state = "future";
  if (isActive) state = "active";
  else if (isPast) state = "past";

  return (
    <motion.div
      variants={variants}
      initial="future"
      animate={state}
      className="absolute inset-0 w-full h-full transform-gpu overflow-y-auto hide-scrollbar"
      style={{ transformStyle: 'preserve-3d', transformOrigin: 'center center' }}
    >
      <motion.div 
        className="absolute inset-0 bg-black/60 z-50 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 0 : 1 }}
        transition={{ duration: 0.8 }}
      />
      <div className="min-h-full pb-20">
        {children}
      </div>
    </motion.div>
  );
};

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isScrolling = useRef(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleNext = useCallback(() => {
    if (activeIndex < sections.length - 1) {
      setActiveIndex(prev => prev + 1);
    }
  }, [activeIndex]);

  const handlePrev = useCallback(() => {
    if (activeIndex > 0) {
      setActiveIndex(prev => prev - 1);
    }
  }, [activeIndex]);

  useEffect(() => {
    if (isMobile) return;
    const handleWheel = (e) => {
      e.preventDefault();
      if (isScrolling.current) return;

      if (Math.abs(e.deltaY) > 20) {
        isScrolling.current = true;
        if (e.deltaY > 0) {
          handleNext();
        } else {
          handlePrev();
        }
        
        setTimeout(() => {
          isScrolling.current = false;
        }, 1000);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [handleNext, handlePrev, isMobile]);

  useEffect(() => {
    if (isMobile) return;
    const handleKeyDown = (e) => {
      if (isScrolling.current) return;

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        isScrolling.current = true;
        handleNext();
        setTimeout(() => isScrolling.current = false, 1000);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        isScrolling.current = true;
        handlePrev();
        setTimeout(() => isScrolling.current = false, 1000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, isMobile]);

  useEffect(() => {
    const handleNavigate = (e) => {
      const targetIndex = e.detail;
      if (typeof targetIndex === 'number' && targetIndex >= 0 && targetIndex < sections.length) {
        if (!isMobile) {
          setActiveIndex(targetIndex);
        } else {
          const el = document.getElementById(sections[targetIndex].id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };
    window.addEventListener('navigateToSection', handleNavigate);
    return () => window.removeEventListener('navigateToSection', handleNavigate);
  }, [isMobile]);

  const handleDragEnd = (event, info) => {
    if (isMobile) return;
    const threshold = 50;
    if (info.offset.y < -threshold) {
      handleNext();
    } else if (info.offset.y > threshold) {
      handlePrev();
    }
  };

  if (isMobile) {
    return (
      <div className="bg-[var(--color-bg-deep)] text-white font-sans selection:bg-[var(--color-brand)]/30 selection:text-white min-h-screen">
        <nav className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 px-2 py-2 rounded-full bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/5 shadow-2xl overflow-x-auto max-w-[95vw] hide-scrollbar">
          {sections.map((section, idx) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="relative px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-colors duration-300 text-gray-400 hover:text-white whitespace-nowrap"
            >
              {section.label}
            </a>
          ))}
        </nav>

        <main className="flex flex-col w-full">
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="w-full relative">
              {section.component}
            </div>
          ))}
        </main>
        
        <div className="w-full text-center text-gray-500 text-xs py-8">
          <p>&copy; {new Date().getFullYear()} JAMMU HARISAI. Built with Next.js & Framer Motion.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-[var(--color-bg-deep)] text-white font-sans selection:bg-[var(--color-brand)]/30 selection:text-white overflow-hidden">
      
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 px-2 py-2 rounded-full bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 shadow-2xl overflow-x-auto max-w-[95vw] hide-scrollbar">
        {sections.map((section, idx) => (
          <button
            key={section.id}
            onClick={() => setActiveIndex(idx)}
            className={`relative px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-colors duration-300 ${
              activeIndex === idx 
                ? 'text-[var(--color-brand)]' 
                : 'text-gray-400 hover:text-white'
            }`}
            aria-label={`Go to ${section.label}`}
          >
            {activeIndex === idx && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/30 rounded-full"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{section.label}</span>
          </button>
        ))}
      </nav>

      <motion.main 
        className="relative w-full h-full" 
        style={{ perspective: "1000px" }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
      >
        {sections.map((section, idx) => (
          <Card3DWrapper key={section.id} index={idx} activeIndex={activeIndex}>
            {section.component}
          </Card3DWrapper>
        ))}
      </motion.main>
      
      {activeIndex === sections.length - 1 && (
        <div className="fixed bottom-4 left-0 w-full text-center text-gray-500 text-xs z-50 animate-pulse">
          <p>&copy; {new Date().getFullYear()} JAMMU HARISAI. Built with Next.js & Framer Motion.</p>
        </div>
      )}
    </div>
  );
}

export default App;
