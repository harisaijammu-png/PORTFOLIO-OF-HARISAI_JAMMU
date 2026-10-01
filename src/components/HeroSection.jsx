import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Typewriter = ({ text, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1, delay }}
      className="inline-block uppercase tracking-widest text-sm text-white font-medium drop-shadow-md"
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, display: 'none' }}
          animate={{ opacity: 1, display: 'inline' }}
          transition={{
            duration: 0.1,
            delay: delay + index * 0.05,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

const HeroSection = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 20,
      },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 snap-center bg-[#0a0a0a]">
      
      <div className="absolute inset-0 z-0 opacity-30">
        <ParticleBackground />
      </div>

      <div className="w-full max-w-[100rem] mx-auto px-6 md:px-12 lg:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-16 xl:gap-24 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start space-y-6 max-w-xl xl:max-w-2xl"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[var(--color-brand)]/30 bg-[var(--color-brand)]/10 backdrop-blur-sm mb-2">
            <span className="w-2 h-2 rounded-full bg-[var(--color-brand)] animate-pulse"></span>
            <span className="text-xs font-bold tracking-wider text-[var(--color-brand)] uppercase">OPEN TO WORK</span>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col items-start w-full">
            <h2 className="text-xl md:text-2xl text-gray-300 font-medium mb-1">Hi, I'm</h2>
            <h1 className="text-[10vw] sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] 2xl:text-[5.5rem] font-black tracking-tighter leading-[1.05] uppercase drop-shadow-xl whitespace-nowrap">
              <span className="text-[var(--color-brand)]">HARISAI</span>
              <span className="text-white ml-3 md:ml-4">JAMMU</span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="h-6 mt-4 text-sm md:text-base font-semibold tracking-wider text-slate-400">
            <Typewriter text="4TH YEAR COMPUTER SCIENCE STUDENT • FULL STACK DEVELOPER" delay={1} />
          </motion.div>

          <motion.div variants={itemVariants} className="mt-6 flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  window.dispatchEvent(new CustomEvent('navigateToSection', { detail: 4 }));
                }}
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-[var(--color-brand)] text-slate-950 font-bold hover:brightness-110 transition-colors shadow-lg shadow-black/20 group"
              >
                <span className="relative z-10 flex items-center tracking-widest text-sm uppercase">
                  VIEW ACADEMIC PROJECT <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <a 
                href="/harisaijammu.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-[var(--color-brand)] text-slate-950 font-bold hover:brightness-110 transition-colors shadow-lg shadow-black/20 group"
              >
                <span className="relative z-10 flex items-center tracking-widest text-sm uppercase">
                  VIEW RESUME <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.linkedin.com/in/harisai-jammu-6bbab1366?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-slate-800/50 border border-slate-700 text-slate-200 font-bold hover:bg-slate-700 hover:text-white transition-colors shadow-lg shadow-black/20 group w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center tracking-widest text-sm">
                  <svg className="mr-2 w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.924 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg> LinkedIn
                </span>
              </a>

              <a 
                href="https://github.com/harisaijammu-png"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-slate-800/50 border border-slate-700 text-slate-200 font-bold hover:bg-slate-700 hover:text-white transition-colors shadow-lg shadow-black/20 group w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center tracking-widest text-sm">
                  <svg className="mr-2 w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg> GitHub
                </span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end mt-10 md:mt-0"
        >
          <div className="relative w-full max-w-lg md:max-w-xl aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-white/5 shadow-2xl glass-panel">
            <img 
              src="/avatar.png"
              alt="Avatar"
              className="w-full h-full object-cover object-center pointer-events-none select-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
