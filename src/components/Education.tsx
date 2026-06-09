import React from 'react';
import { motion } from 'motion/react';
import { education, certifications, achievements } from '../data';
import { Award, Trophy, GraduationCap, MapPin } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Education & <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-display font-semibold mb-8 flex items-center gap-3">
              <GraduationCap className="text-brand-400" size={28} />
              Academic Journey
            </h3>
            
            <div className="space-y-8">
              {education.map((edu, i) => {
                const Icon = edu.icon;
                return (
                  <motion.div 
                    key={edu.id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-full glass-card flex items-center justify-center text-brand-400">
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-brand-400 font-medium text-sm">{edu.duration}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                        <span className="text-slate-400 font-medium text-sm">{edu.grade}</span>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                      <h5 className="text-slate-400 mb-3">{edu.institution}</h5>
                      <p className="text-slate-300 text-sm">
                        {edu.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Achievements */}
            <h3 className="text-2xl font-display font-semibold mt-16 mb-8 flex items-center gap-3">
              <Trophy className="text-accent-400" size={28} />
              Key Achievements
            </h3>
            <ul className="space-y-4">
              {achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex gap-4 items-start bg-slate-800/30 p-4 rounded-xl border border-slate-800/50 hover:border-slate-700 transition-colors"
                >
                  <Award className="text-accent-400 flex-shrink-0 mt-0.5" size={20} />
                  <p className="text-slate-300 text-sm leading-relaxed">{achievement}</p>
                </motion.div>
              ))}
            </ul>
          </div>

          {/* Certifications Grid */}
          <div>
            <h3 className="text-2xl font-display font-semibold mb-8 flex items-center gap-3">
              <Award className="text-brand-400" size={28} />
              Certifications
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card flex items-center gap-4 p-3 rounded-2xl pr-6 group hover:-translate-y-1"
                >
                  <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-brand-400 mb-1 block">Issued {cert.date}</span>
                    <h4 className="font-bold text-white leading-tight mb-1">{cert.title}</h4>
                    <p className="text-sm text-slate-400">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
