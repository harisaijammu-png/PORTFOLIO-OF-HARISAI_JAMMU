import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  { title: "Languages", skills: ["C", "Python", "JavaScript", "SQL", "HTML5", "CSS3"] },
  { title: "Databases & Data Systems", skills: ["MySQL", "Database Normalization", "Structured Data Analysis (CSV/SQL)"] },
  { title: "Developer Tools", skills: ["Git", "GitHub", "Version Control", "VS Code", "MySQL Workbench"] },
  { title: "Technologies", skills: ["APIs", "prompt-Engineering", "openCV", "Machine Learning"] }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative min-h-screen flex items-center justify-center pt-32 pb-24 md:pt-40 overflow-hidden snap-center">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex items-center space-x-4 max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-100">Skills</h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-[var(--color-brand)]/50 to-transparent"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass-panel px-8 py-10 md:px-14 md:py-14 rounded-3xl relative group border-[var(--color-card-border)] bg-slate-900/40">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-12">
              {skillCategories.map((category, idx) => (
                <div key={idx} className="space-y-5">
                  <h3 className="text-lg md:text-xl font-bold text-gray-200 tracking-wide uppercase border-l-2 border-[var(--color-brand)] pl-3">{category.title}</h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-bold tracking-widest border border-slate-700 rounded-full text-slate-300 bg-slate-800 hover:text-white hover:bg-slate-700 transition-colors duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
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

export default SkillsSection;
