'use client';

import { motion } from 'framer-motion';
import { Users, ShieldCheck, Zap, Sparkles, Server, Cpu, CheckCircle2 } from 'lucide-react';
import { CSF_PHILOSOPHY, PERSONAL_INFO } from '@/constants/profile';
import { SectionHeader } from '@/components/shared/SectionHeader';

const ICON_MAP = {
  Users: Users,
  ShieldCheck: ShieldCheck,
  Zap: Zap,
};

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Behind the Code"
          title="About & Engineering Philosophy"
          subtitle="Transforming complex domain logic into scalable, robust, and maintainable backend systems."
        />

        {/* Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden border border-slate-200/80 dark:border-slate-800/80 shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-500" />
                Crafting Scalable Backend Ecosystems
              </h3>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                My software engineering journey is driven by a deep fascination with how large-scale enterprise systems handle data flow, security, and high concurrency. Rather than building superficial interfaces, I derive immense fulfillment from architecting server-side foundations that work flawlessly under load.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                From developing core APIs for university-wide E-learning platforms at the IT Center (HNUE) to designing Spring Boot microservices for Enterprise HRM at VTI Academy, I treat every API endpoint as a contract of trust. My experience also extends to client-side mobile engineering with Swift at GHTK, giving me unique foresight into how frontends consume backend APIs.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4 border-t border-slate-200/50 dark:border-slate-800/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">API First</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">RESTful & OpenAPI</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Clean Architecture</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Package-by-Feature</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Principles List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-2xl border border-slate-800">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center justify-between">
                <span>Core Competencies</span>
                <span className="text-xs font-mono text-cyan-400">JAVA & SPRING BOOT</span>
              </h4>

              <ul className="space-y-3.5 text-sm text-slate-300">
                {[
                  'Enterprise Application Architecture & REST API Design',
                  'Spring Security & Stateless Dual-Token JWT Auth',
                  'Database Schema Migration with Flyway & PostgreSQL',
                  'Unit Testing (JUnit 5, Mockito) & Automated Quality Gates',
                  'Cross-functional Agile Delivery & Frontend Synchronization',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* C.S.F Philosophy Cards */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              The <span className="text-blue-600 dark:text-blue-400 font-mono">C.S.F</span> Philosophy
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Three core pillars guiding my engineering mindset and professional conduct.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CSF_PHILOSOPHY.map((principle, index) => {
              const IconComponent = ICON_MAP[principle.icon as keyof typeof ICON_MAP] || Users;
              return (
                <motion.div
                  key={principle.letter}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="glass-panel p-8 rounded-3xl relative group hover-card-glow border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between"
                >
                  <div>
                    {/* Big Letter Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-4xl font-extrabold font-mono text-slate-300 dark:text-slate-700 group-hover:text-blue-500/40 transition-colors">
                        {principle.letter}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                      {principle.title}
                    </h4>
                    <p className="text-xs font-mono text-blue-600 dark:text-cyan-400 mb-3">
                      {principle.subtitle}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      {principle.description}
                    </p>
                  </div>

                  {/* Traits List */}
                  <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 space-y-2">
                    {principle.traits.map((trait, tIdx) => (
                      <div key={tIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        <span>{trait}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
