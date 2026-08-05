'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS } from '@/constants/profile';
import { SectionHeader } from '@/components/shared/SectionHeader';

export function CertificationsSection() {
  const t = useTranslations('certifications');

  return (
    <section id="certifications" className="py-24 relative bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t('sectionBadge')}
          title={t('title')}
          subtitle={t('subtitle')}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-lg hover-card-glow flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {cert.title}
                      </h3>
                      <p className="text-xs font-mono text-blue-600 dark:text-blue-400">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                  </div>

                  {cert.badge && (
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 shrink-0">
                      {cert.badge}
                    </span>
                  )}
                </div>

                {/* Score Breakdown (e.g. Aptis ESOL scores) */}
                {cert.scores && cert.scores.length > 0 && (
                  <div className="mt-6 p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60">
                    <p className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 mb-3">
                      {t('scoresBreakdown')}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {cert.scores.map((s) => (
                        <div
                          key={s.skill}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700/50"
                        >
                          <span className="text-xs font-medium text-slate-700 dark:text-slate-200">
                            {s.skill}
                          </span>
                          <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-blue-600 text-white">
                            {s.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer link or badge */}
              {cert.credentialUrl && (
                <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between">
                  <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    {t('verifiedTag')}
                  </span>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-cyan-400 hover:underline"
                  >
                    <span>{t('viewProfile')}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
