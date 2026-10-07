import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ExternalLink, Link2, Send } from 'lucide-react';

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
    window.location.href = `mailto:harisaijammu@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <section id="contact" className="relative min-h-screen flex flex-col items-center justify-center py-24 overflow-hidden snap-center">
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center justify-center w-full scale-90 transform-origin-center">
        
        <div className="w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-10 flex items-center space-x-4 w-full"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-100">Contact</h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-[var(--color-brand)]/50 to-transparent"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full"
          >
          <div className="glass-panel p-5 md:p-8 rounded-3xl relative group border-[var(--color-card-border)] bg-slate-900/40">
            
            {/* Top pill inside the box matching the image */}
            <div className="inline-flex px-4 py-1.5 rounded-full border border-[var(--color-brand)]/40 bg-[var(--color-brand)]/10 text-[var(--color-brand)] text-xs font-bold tracking-widest uppercase mb-6">
              CONTACT DETAILS
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">Let's Build Something Together</h3>
            <p className="text-gray-400 mb-8 font-light text-sm">Open to full-time roles and new opportunities.</p>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 md:gap-6">
              
              {/* Left Column: Contact Info */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-5 flex flex-col h-full">
                <h4 className="text-lg font-bold text-white mb-6">Contact Info</h4>
                
                <div className="space-y-6 flex-grow">
                  <div className="flex items-center space-x-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-brand)] group-hover:bg-[var(--color-brand)]/10 transition-colors shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <a href="mailto:harisaijammu@gmail.com" className="text-gray-300 hover:text-white transition-colors text-sm break-all">
                      harisaijammu@gmail.com
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-4 group">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[var(--color-brand)] group-hover:bg-[var(--color-brand)]/10 transition-colors shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <a href="tel:8328493815" className="text-gray-300 hover:text-white transition-colors text-sm">
                      8328493815
                    </a>
                  </div>
                </div>

                {/* Social/Action Links */}
                <div className="mt-6 flex space-x-4">
                  <a href="https://www.linkedin.com/in/harisai-jammu-6bbab1366?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[var(--color-brand)] hover:border-[var(--color-brand)] transition-colors" title="LinkedIn">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href="https://github.com/harisaijammu-png" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[var(--color-brand)] hover:border-[var(--color-brand)] transition-colors" title="GitHub">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-5 flex flex-col h-full">
                <form onSubmit={handleSubmit} className="space-y-4 flex flex-col h-full">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
                    
                    {/* Form Left Side: Name, Email, Subject */}
                    <div className="space-y-4 flex flex-col justify-between">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Name</label>
                        <input 
                          type="text"
                          name="name"
                          placeholder="Your name" 
                          required
                          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[var(--color-brand)] transition-colors"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email</label>
                        <input 
                          type="email"
                          name="email"
                          placeholder="you@example.com" 
                          required
                          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[var(--color-brand)] transition-colors"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Subject</label>
                        <input 
                          type="text"
                          name="subject"
                          placeholder="What's this about?" 
                          required
                          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[var(--color-brand)] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Form Right Side: Message */}
                    <div className="space-y-1.5 flex flex-col h-full">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Message</label>
                      <textarea 
                        name="message"
                        placeholder="Tell me about the opportunity or project..." 
                        required
                        className="w-full flex-grow min-h-[120px] bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[var(--color-brand)] transition-colors resize-none"
                      ></textarea>
                    </div>

                  </div>

                  <button 
                    type="submit"
                    className="w-full mt-4 bg-[var(--color-brand)] text-slate-950 font-bold py-3 rounded-xl flex items-center justify-center space-x-2 hover:brightness-110 transition-colors shadow-lg shadow-black/20 text-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>

                </form>
              </div>

            </div>
          </div>
          </motion.div>
        </div>
      </div>
      {/* Footer placed statically at the bottom of the last section */}
      <div className="w-full text-center text-gray-500 text-xs pb-6 pt-12 animate-pulse relative z-10">
        <p>&copy; {new Date().getFullYear()} JAMMU HARISAI. Built with Next.js & Framer Motion.</p>
      </div>
    </section>
  );
};

export default ContactSection;
