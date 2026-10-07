import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Rise Krishna Sai Prakasam Group of Institutions",
    duration: "2023 - 2027"
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Br. Oxford Junior College, Kandukur",
    duration: "2021 - 2023"
  },
  {
    degree: "10th Standard (SSC)",
    institution: "Sri Vidyaniketan English Medium High School",
    duration: "2020 - 2021"
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="relative min-h-screen flex items-start justify-center pt-32 pb-24 md:pt-40 overflow-hidden snap-center">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-10 flex items-center space-x-4 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-100">Education</h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-[var(--color-brand)]/50 to-transparent"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-panel p-8 md:p-12 rounded-3xl relative group border-[var(--color-card-border)] bg-slate-900/40">

            <div className="space-y-8 relative pl-4 md:pl-0">
              {/* Vertical timeline line for mobile */}
              <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-[var(--color-card-border)] to-transparent md:hidden"></div>
              
              {educationData.map((edu, idx) => (
                <div key={idx} className="flex flex-col gap-1.5 relative border-b border-slate-800/50 pb-6 last:border-0 last:pb-0">
                  {/* Timeline dot for mobile */}
                  <div className="absolute -left-5 top-2.5 w-2 h-2 rounded-full bg-[var(--color-brand)] md:hidden"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-center text-slate-100 font-bold text-lg md:text-xl leading-tight">
                    <span>{edu.degree}</span>
                    <span className="hidden md:inline text-[var(--color-brand)] font-medium text-base md:text-lg mx-2">|</span>
                    <span className="text-slate-300 font-medium text-base md:text-lg mt-1 md:mt-0">{edu.duration}</span>
                  </div>
                  <div className="text-slate-400 font-light text-base md:text-lg">
                    {edu.institution}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
