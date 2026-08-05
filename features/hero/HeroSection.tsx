'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { FileDown, Mail, ArrowRight, Code2, ShieldCheck, Database, Server } from 'lucide-react';
import { PERSONAL_INFO } from '@/constants/profile';
import { TypingText } from '@/components/shared/TypingText';
import { TerminalWindow } from '@/components/shared/TerminalWindow';

export function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-developer-grid bg-radial-spotlight overflow-hidden"
    >
      {/* Ambient background glow elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-blue-700 dark:text-blue-300 bg-blue-500/10 border border-blue-500/20 mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>{t('badge')}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              {t('greeting')}{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Role & Typing Tech */}
            <div className="mt-4 text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-700 dark:text-slate-200 flex flex-wrap items-center gap-2">
              <span className="text-blue-600 dark:text-blue-400">{t('roleTitle')}</span>
              <span>{t('roleTechPrefix')}</span>
              <TypingText words={PERSONAL_INFO.typedSkills} />
            </div>

            {/* Storytelling Intro */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              {t('introduction')}
            </p>

            {/* Quick Tech Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-slate-200/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border border-slate-300/50 dark:border-slate-700/50">
                <Server className="w-3.5 h-3.5 text-blue-500" />
                {t('javaBadge')}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-slate-200/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border border-slate-300/50 dark:border-slate-700/50">
                <Database className="w-3.5 h-3.5 text-cyan-500" />
                {t('dbBadge')}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-slate-200/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border border-slate-300/50 dark:border-slate-700/50">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                {t('secBadge')}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#project"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-100"
              >
                <span>{t('primaryCta')}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-100 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300/70 dark:border-slate-800 backdrop-blur-md shadow-sm transition-all hover:scale-[1.02] active:scale-100"
              >
                <Mail className="w-4 h-4 text-blue-500" />
                <span>{t('secondaryCta')}</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 transition-all hover:scale-[1.02]"
              >
                <FileDown className="w-4 h-4" />
                <span>{t('cvCta')}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Avatar & Code Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Professional Developer Avatar Card */}
            <div className="relative group p-1 rounded-3xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 shadow-xl shadow-blue-500/10">
              <div className="relative rounded-[22px] bg-slate-900 p-6 overflow-hidden">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-2xl shadow-inner border border-white/20">
                    <Code2 className="w-8 h-8 text-cyan-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {PERSONAL_INFO.name}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400">
                      {t('location')}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Java • Spring Boot • PostgreSQL
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Terminal Window Preview */}
            <TerminalWindow />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
