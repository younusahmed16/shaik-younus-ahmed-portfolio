import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["Software Developer", "B.Tech CSE Student", "Full Stack Developer"];

  useEffect(() => {
    let ticker = setTimeout(() => {
      handleTyping();
    }, typingSpeed);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, typingSpeed, loopNum]);

  const handleTyping = () => {
    const i = loopNum % roles.length;
    const fullText = roles[i];

    setText(isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1)
    );

    setTypingSpeed(isDeleting ? 30 : 150);

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 1500);
      setTypingSpeed(30);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-500/20 rounded-full blur-[120px] mix-blend-screen opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent-500/20 rounded-full blur-[150px] mix-blend-screen opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm font-medium mb-6">
              Welcome to my portfolio
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-4">
              Hi, I'm <br />
              <span className="text-gradient">{personalInfo.name}</span>
            </h1>
            
            <div className="h-10 mb-6">
              <h2 className="text-2xl md:text-3xl font-medium text-slate-300">
                <span className="opacity-80">I am a </span>
                <span className="text-white border-r-2 border-brand-400 pr-1 animate-pulse">{text}</span>
              </h2>
            </div>
            
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.shortDesc}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <a 
                href="#projects"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-medium flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] bg-gradient-to-r from-brand-600 to-brand-500"
              >
                View My Work
                <ArrowRight size={18} />
              </a>
              <a 
                href={personalInfo.resume}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full glass-card text-white font-medium flex items-center justify-center gap-2"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-5">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-slate-300 hover:text-white hover:-translate-y-1 transition-all">
                <Github size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-slate-300 hover:text-white hover:-translate-y-1 transition-all">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-slate-300 hover:text-white hover:-translate-y-1 transition-all">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full border-2 border-brand-500/30 animate-spin-slow"></div>
              <div className="absolute inset-4 rounded-full border-2 border-accent-500/30 border-dashed animate-spin-reverse-slow"></div>
              <div className="absolute inset-8 rounded-full overflow-hidden bg-slate-800 border-2 border-slate-700 shadow-2xl glass-card z-10 flex items-center justify-center">
                {/* Fallback image representing developer */}
                <div className="text-center p-8 text-slate-400">
                  <div className="text-6xl font-display font-bold text-gradient mb-2">SYA</div>
                  <div className="text-sm tracking-widest uppercase">Software Engineer</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs text-slate-500 tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }} 
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-brand-500 rounded-full"
          />
        </div>
      </motion.div>

    </section>
  );
}
