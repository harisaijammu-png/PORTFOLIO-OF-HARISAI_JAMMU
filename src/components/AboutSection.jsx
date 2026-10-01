import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-start justify-center pt-32 pb-24 md:pt-40 overflow-hidden snap-center">


      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-10 flex items-center space-x-4 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-100">About</h2>
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

            <div className="space-y-6 text-lg md:text-xl text-slate-400 leading-relaxed font-light">
              <p>
                I'm <strong className="text-white font-medium">Jammu Harisai</strong>, a final-year Computer Science student and full-stack developer dedicated to designing clean, high-performance web applications.
              </p>
              <p>
                My expertise lies in building scalable modern architectures, real-time management systems, and structured relational databases using <span className="text-[var(--color-brand)] font-medium">Next.js</span>, <span className="text-[var(--color-brand)] font-medium">React</span>, <span className="text-[var(--color-brand)] font-medium">Node.js</span>, and <span className="text-[var(--color-brand)] font-medium">PostgreSQL</span>.
              </p>
              <p>
                Whether I'm designing live tracking features or optimizing backend data pipelines, my focus is always on writing reliable, production-ready code and delivering seamless user experiences.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
