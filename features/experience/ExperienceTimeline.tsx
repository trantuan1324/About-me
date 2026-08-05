'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { SectionHeader } from '@/components/shared/SectionHeader';

const EXP_KEYS = ['hnue', 'vti', 'ghtk'] as const;

const EXP_TECH_MAP: Record<string, string[]> = {
  hnue: ['Java 21', 'Spring Boot', 'PostgreSQL', 'REST API', 'JUnit 5', 'Mockito', 'Agile/Scrum'],
  vti: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'Postman', 'Git', 'HRM Systems'],
  ghtk: ['Swift', 'iOS', 'WMS', 'REST API', 'Git', 'UIKit'],
};

export function ExperienceTimeline() {
  const t = useTranslations('experience');

  return (
    <section id="experience" className="py-24 relative bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t('sectionBadge')}
          title={t('title')}
          subtitle={t('subtitle')}
        />

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto mt-12">
          {/* Vertical central line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-600 via-indigo-500 to-slate-300 dark:to-slate-800" />

          <div className="space-y-12">
            {EXP_KEYS.map((key, index) => {
              const isEven = index % 2 === 0;
              const techList = EXP_TECH_MAP[key] || [];
              const responsibilities = (t.raw(`items.${key}.responsibilities`) as string[]) || [];
              const highlights = (t.raw(`items.${key}.highlights`) as string[]) || [];

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Point */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-blue-600 dark:bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 border-4 border-white dark:border-slate-900">
                      <Briefcase className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Card Box */}
                  <div className="ml-12 md:ml-0 md:w-1/2 pl-0 md:px-8 w-full">
                    <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-lg hover-card-glow transition-all">
                      {/* Role & Period */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-blue-600 dark:text-cyan-400 bg-blue-500/10 border border-blue-500/20">
                          {t(`items.${key}.type`)}
                        </span>
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {t(`items.${key}.period`)}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                        {t(`items.${key}.role`)}
                      </h3>

                      <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5 flex items-center gap-1">
                        {t(`items.${key}.company`)}
                        <span className="text-xs font-normal text-slate-500 dark:text-slate-400 flex items-center gap-0.5 ml-2">
                          <MapPin className="w-3 h-3 inline" /> {t(`items.${key}.location`)}
                        </span>
                      </p>

                      {/* Responsibilities list */}
                      <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        {responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2">
                            <ChevronRight className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Highlights */}
                      {highlights.length > 0 && (
                        <div className="mt-4 p-3 rounded-xl bg-blue-500/5 dark:bg-blue-500/10 border border-blue-500/15">
                          <p className="text-xs font-bold text-blue-700 dark:text-blue-300 mb-1 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                            {t('keyAchievements')}
                          </p>
                          {highlights.map((hItem, hIdx) => (
                            <p key={hIdx} className="text-xs text-slate-600 dark:text-slate-300">
                              • {hItem}
                            </p>
                          ))}
                        </div>
                      )}

                      {/* Tech Pills */}
                      <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
                        {techList.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-700 dark:text-slate-300 bg-slate-200/60 dark:bg-slate-800/60 border border-slate-300/40 dark:border-slate-700/40"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
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
