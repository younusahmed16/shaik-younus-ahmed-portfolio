import React from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '../data';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-display font-semibold text-white">Professional Summary</h3>
            <p className="text-slate-300 leading-relaxed text-lg">
              {personalInfo.about}
            </p>
            <div className="glass-card p-6 rounded-2xl border-l-4 border-l-brand-500">
              <h4 className="text-xl font-medium text-white mb-2">Career Objective</h4>
              <p className="text-slate-400 italic">"{personalInfo.objective}"</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {personalInfo.strengths.map((strength, index) => (
              <div 
                key={index} 
                className={`glass-card p-6 rounded-2xl text-center flex flex-col justify-center min-h-32 ${index === personalInfo.strengths.length - 1 ? 'col-span-2' : ''}`}
              >
                <div className="text-brand-400 font-medium text-lg">{strength}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
