import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini API using the Vite environment variable
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey || 'dummy-key');

const systemInstruction = `You are a friendly and professional AI assistant for Jammu Harisai's portfolio website. 
Jammu Harisai is a 4th Year Computer Science Student and Full Stack Developer.
His skills include: React, Node.js, PostgreSQL, Next.js, and Framer Motion.
He is currently "Open to Work".
Keep your answers concise, friendly, and helpful. Always try to promote Harisai's skills and encourage the visitor to look at his projects, resume, or contact him on LinkedIn.`;

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'model', content: "Hi! I'm Harisai's AI assistant. Ask me anything about his skills, experience, or projects!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // We need to keep a reference to the chat session to maintain conversation history
  const chatSessionRef = useRef(null);

  useEffect(() => {
    // Initialize the chat session when the component mounts
    try {
      if (apiKey) {
        const model = genAI.getGenerativeModel({ 
          model: "gemini-3.8-flash",
          systemInstruction: systemInstruction,
        });
        chatSessionRef.current = model.startChat({
          history: [],
        });
      }
    } catch (error) {
      console.error("Failed to initialize Gemini:", error);
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');
    setIsTyping(true);

    if (!apiKey) {
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'model', content: "API key is missing! Please set VITE_GEMINI_API_KEY in your .env file." }]);
        setIsTyping(false);
      }, 1000);
      return;
    }

    try {
      const result = await chatSessionRef.current.sendMessage(userMessage);
      const text = result.response.text();
      
      setMessages(prev => [...prev, { role: 'model', content: text }]);
    } catch (error) {
      console.error("Error communicating with Gemini:", error);
      setMessages(prev => [...prev, { 
        role: 'model', 
        content: "Oops! I encountered an error. The API might be rate-limited or the key might be invalid." 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 md:right-8 w-[90vw] md:w-[400px] h-[500px] max-h-[75vh] bg-slate-900/95 backdrop-blur-xl border border-[var(--color-brand)]/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-50"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/20">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[var(--color-brand)]/20 flex items-center justify-center text-[var(--color-brand)]">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-white">Harisai AI</h3>
                  <p className="text-xs text-[var(--color-brand)] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] animate-pulse"></span>
                    Online
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-1"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 hide-scrollbar">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'model' && (
                    <div className="w-8 h-8 shrink-0 rounded-full bg-slate-800 flex items-center justify-center border border-white/5">
                      <Bot size={16} className="text-gray-400" />
                    </div>
                  )}
                  <div 
                    className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-[var(--color-brand)] text-slate-950 rounded-tr-sm font-medium shadow-md' 
                        : 'bg-slate-800/80 text-gray-200 rounded-tl-sm border border-white/5 shadow-md'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-3 justify-start">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-slate-800 flex items-center justify-center border border-white/5">
                    <Bot size={16} className="text-gray-400" />
                  </div>
                  <div className="bg-slate-800/80 p-4 rounded-2xl rounded-tl-sm border border-white/5 flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="p-3 border-t border-white/10 bg-black/20">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="w-full bg-slate-800/50 border border-white/10 rounded-full pl-4 pr-12 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[var(--color-brand)]/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="absolute right-1.5 p-2 rounded-full bg-[var(--color-brand)] text-slate-950 hover:brightness-110 disabled:opacity-50 disabled:hover:brightness-100 transition-all"
                >
                  <Send size={16} className={input.trim() && !isTyping ? "translate-x-0.5 -translate-y-0.5" : ""} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[60] p-4 rounded-full bg-[var(--color-brand)] text-slate-950 shadow-lg shadow-[var(--color-brand)]/20 hover:scale-105 transition-transform"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </>
  );
};

export default Chatbot;
