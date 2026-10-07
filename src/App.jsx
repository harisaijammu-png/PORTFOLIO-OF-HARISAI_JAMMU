import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Chatbot from './components/Chatbot';

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
      x: "0%",
      opacity: 1,
      zIndex: 10,
      pointerEvents: "auto",
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
    },
    past: {
      x: "-50%",
      opacity: 0,
      zIndex: 0,
      pointerEvents: "none",
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
    },
    future: {
      x: "50%",
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
      className={`absolute inset-0 w-full h-full transform-gpu overflow-x-hidden ${isActive ? 'overflow-y-auto' : 'overflow-y-hidden'} hide-scrollbar`}
      style={{ transformStyle: 'preserve-3d', transformOrigin: 'center center' }}
    >
      <motion.div 
        className="absolute inset-0 bg-black/60 z-50 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 0 : 1 }}
        transition={{ duration: 0.8 }}
      />
      {children}
    </motion.div>
  );
};

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolling = useRef(false);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
  }, [handleNext, handlePrev]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isScrolling.current) return;

      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === 'ArrowRight') {
        isScrolling.current = true;
        handleNext();
        setTimeout(() => isScrolling.current = false, 1000);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp' || e.key === 'ArrowLeft') {
        isScrolling.current = true;
        handlePrev();
        setTimeout(() => isScrolling.current = false, 1000);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  useEffect(() => {
    const handleNavigate = (e) => {
      const targetIndex = e.detail;
      if (typeof targetIndex === 'number' && targetIndex >= 0 && targetIndex < sections.length) {
        setActiveIndex(targetIndex);
      }
    };
    window.addEventListener('navigateToSection', handleNavigate);
    return () => window.removeEventListener('navigateToSection', handleNavigate);
  }, []);

  const handleDragEnd = (event, info) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      handleNext();
    } else if (info.offset.x > threshold) {
      handlePrev();
    }
  };

  return (
    <div className="fixed inset-0 bg-[var(--color-bg-deep)] text-white font-sans selection:bg-[var(--color-brand)]/30 selection:text-white overflow-hidden">
      
      {/* Universal Navigation */}
      <nav className="flex fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 items-center gap-1 px-2 py-2 rounded-full bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 shadow-2xl overflow-x-auto max-w-[95vw] hide-scrollbar">
        {sections.map((section, idx) => (
          <button
            key={section.id}
            onClick={() => setActiveIndex(idx)}
            className={`relative shrink-0 px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-medium tracking-wide transition-colors duration-300 ${
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
        drag={isMobile ? false : "x"}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        onDragEnd={isMobile ? undefined : handleDragEnd}
      >
        {sections.map((section, idx) => (
          <Card3DWrapper key={section.id} index={idx} activeIndex={activeIndex}>
            {section.component}
          </Card3DWrapper>
        ))}
      </motion.main>
      
      {/* Navigation Arrows */}
      <button 
        onClick={handlePrev}
        disabled={activeIndex === 0}
        className="fixed left-2 md:left-6 top-1/2 -translate-y-1/2 z-40 p-2 md:p-3 rounded-full bg-slate-900/50 backdrop-blur-md border border-white/10 text-gray-300 hover:text-[var(--color-brand)] hover:border-[var(--color-brand)]/50 transition-all disabled:opacity-0 disabled:pointer-events-none"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button 
        onClick={handleNext}
        disabled={activeIndex === sections.length - 1}
        className="fixed right-2 md:right-6 top-1/2 -translate-y-1/2 z-40 p-2 md:p-3 rounded-full bg-slate-900/50 backdrop-blur-md border border-white/10 text-gray-300 hover:text-[var(--color-brand)] hover:border-[var(--color-brand)]/50 transition-all disabled:opacity-0 disabled:pointer-events-none"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>

      <Chatbot />
    </div>
  );
}

export default App;
