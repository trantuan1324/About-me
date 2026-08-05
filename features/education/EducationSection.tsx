'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '@/components/shared/SectionHeader';

export function EducationSection() {
  const t = useTranslations('education');

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t('sectionBadge')}
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-xl hover-card-glow relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {t('degree')}
                  </h3>
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {t('institution')}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start sm:items-end gap-1">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-700 dark:text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {t('period')}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {t('location')}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 space-y-3">
              {((t.raw('details') as string[]) || []).map((detail, dIdx) => (
                <div key={dIdx} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
