import React from 'react';
import { personalInfo } from '../data';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 pt-16 pb-8 border-t border-slate-800 border-opacity-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-display font-bold tracking-tight inline-block mb-2">
              <span className="text-gradient">SYA</span>.
            </a>
            <p className="text-slate-400 text-sm max-w-xs mx-auto md:mx-0">
              Building scalable web applications, robust backend systems, and crafting responsive user experiences.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-white hover:-translate-y-1 transition-all">
                <Github size={18} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-white hover:-translate-y-1 transition-all">
                <Linkedin size={18} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-white hover:-translate-y-1 transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-2 text-center md:text-right">
             <nav className="flex items-center justify-center md:justify-end gap-6 text-sm font-medium text-slate-400">
               <a href="#about" className="hover:text-white transition-colors">About</a>
               <a href="#projects" className="hover:text-white transition-colors">Projects</a>
               <a href="#education" className="hover:text-white transition-colors">Education</a>
             </nav>
          </div>

        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="md:absolute md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
          <p className="text-slate-500 text-sm hidden md:block">
            Designed & Built with React
          </p>
        </div>
      </div>
    </footer>
  );
}
