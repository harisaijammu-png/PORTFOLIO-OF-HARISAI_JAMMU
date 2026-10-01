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
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[var(--color-brand)] hover:border-[var(--color-brand)] transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[var(--color-brand)] hover:border-[var(--color-brand)] transition-colors">
                    <Link2 className="w-4 h-4" />
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
    </section>
  );
};

export default ContactSection;
