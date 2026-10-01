import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: "SMART HOSPITAL OP & QUEUE MANAGEMENT SYSTEM",
    role: "Full Stack Developer",
    points: [
      "Architected a real-time management platform featuring customized, secure dashboards for staff, doctors, and patients.",
      "Engineered a live tracking system to estimate patient wait times, conducting rigorous scenario testing to handle concurrency and unexpected operational delays.",
      "Authored comprehensive technical documentation and system rules to enforce data privacy, ensure system reliability, and maintain clear API/database interactions."
    ],
    tech: ["MySQL", "Real-Time Sync", "Web Architecture"],
    link: "https://smart-hospital-management-cp9n.onrender.com",
    github: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative min-h-screen flex items-start justify-center pt-32 pb-24 md:pt-40 overflow-hidden snap-center">


      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-10 flex items-center space-x-4 max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-100">Academic Project</h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-[var(--color-brand)]/50 to-transparent"></div>
        </motion.div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="glass-panel p-8 md:p-10 rounded-2xl group transition-all duration-500 relative overflow-hidden bg-slate-900/40"
            >
              {/* Subtle gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row gap-8 justify-between">
                <div className="flex-1">
                  <div className="text-[var(--color-brand)] text-sm font-mono tracking-widest mb-2 uppercase">{project.role}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4 group-hover:text-[var(--color-brand)] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <ul className="text-slate-400 mb-6 space-y-2 list-disc list-outside ml-4">
                    {project.points.map((point, pIdx) => (
                      <li key={pIdx} className="leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs font-medium text-slate-300 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex md:flex-col gap-4 justify-end items-end h-full pt-4 md:pt-0">
                  <a href={project.link} className="p-3 rounded-full bg-[var(--color-brand)] text-slate-950 transition-all duration-300 hover:brightness-110 shadow-md shadow-black/20 md:mt-auto" aria-label="External Link">
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
