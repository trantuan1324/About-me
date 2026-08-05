'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  ShieldCheck,
  FolderTree,
  Box,
  Layers,
  CheckCircle2,
  Lock,
  Database,
  Server,
  Terminal,
} from 'lucide-react';
import { GithubIcon } from '@/components/shared/BrandIcons';
import { FEATURED_PROJECT } from '@/constants/profile';
import { SectionHeader } from '@/components/shared/SectionHeader';

const ARCH_ICON_MAP: Record<string, any> = {
  FolderTree,
  ShieldCheck,
  Box,
};

export function ProjectSection() {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'rationale'>('overview');

  return (
    <section id="project" className="py-24 relative bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Featured Engineering Work"
          title="Featured Project Showcase"
          subtitle="Deep dive into E-Flow Learning — an enterprise-grade backend for modern online learning platforms."
        />

        {/* Project Card */}
        <div className="glass-panel rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xl overflow-hidden">
          {/* Header Banner */}
          <div className="p-6 sm:p-10 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/20 text-cyan-400 border border-blue-500/30">
                    {FEATURED_PROJECT.version || 'v1.0.0'}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Production Architecture Ready
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {FEATURED_PROJECT.title}
                </h3>
                <p className="mt-2 text-base text-slate-300 max-w-3xl">
                  {FEATURED_PROJECT.tagline}
                </p>
              </div>

              {/* GitHub Link Button */}
              <div className="flex items-center gap-3">
                <a
                  href={FEATURED_PROJECT.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/30 transition-all hover:scale-105"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-2 mt-8 pt-6 border-t border-slate-800">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                  activeTab === 'overview'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                Overview & Features
              </button>
              <button
                onClick={() => setActiveTab('architecture')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                  activeTab === 'architecture'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                Architecture Highlights
              </button>
              <button
                onClick={() => setActiveTab('rationale')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                  activeTab === 'rationale'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                Technology Rationale
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6 sm:p-10">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Project Description
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                    {FEATURED_PROJECT.longDescription}
                  </p>
                </div>

                {/* Key Technical Accomplishments */}
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                    Key Technical Achievements
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {FEATURED_PROJECT.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60"
                      >
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* All Tech Badges */}
                <div>
                  <h4 className="text-sm font-mono text-slate-500 dark:text-slate-400 mb-3">
                    COMPREHENSIVE TECH STACK
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {FEATURED_PROJECT.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-blue-500/10 text-blue-700 dark:text-cyan-300 border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Architecture Tab */}
            {activeTab === 'architecture' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {FEATURED_PROJECT.architectureHighlights.map((arch, idx) => {
                    const ArchIcon = ARCH_ICON_MAP[arch.icon || 'FolderTree'] || FolderTree;
                    return (
                      <div
                        key={idx}
                        className="p-6 rounded-2xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 flex flex-col justify-between"
                      >
                        <div>
                          <div className="p-3 rounded-xl bg-blue-600 text-white w-fit mb-4">
                            <ArchIcon className="w-5 h-5" />
                          </div>
                          <h5 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                            {arch.title}
                          </h5>
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            {arch.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Package-by-feature visual tree */}
                <div className="p-6 rounded-2xl bg-slate-950 text-slate-200 font-mono text-xs overflow-x-auto border border-slate-800">
                  <p className="text-slate-400 mb-2 font-bold flex items-center gap-2">
                    <FolderTree className="w-4 h-4 text-cyan-400" />
                    Package-by-Feature Directory Structure
                  </p>
                  <pre className="text-slate-300 leading-tight">
{`com.eflow.learning
├── auth/
│   ├── dto/ (LoginRequest, TokenResponse)
│   ├── security/ (JwtTokenProvider, CustomUserDetailsService)
│   └── AuthController.java
├── course/
│   ├── domain/ (Course.java, Lesson.java)
│   ├── repository/ (CourseRepository.java)
│   ├── security/ (CourseOwnershipEvaluator.java)
│   └── CourseController.java
└── common/
    ├── exception/ (GlobalExceptionHandler.java)
    └── config/ (SecurityConfig.java, FlywayConfig.java)`}
                  </pre>
                </div>
              </motion.div>
            )}

            {/* Rationale Tab */}
            {activeTab === 'rationale' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {FEATURED_PROJECT.techChoices.map((choice, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60"
                  >
                    <h5 className="text-sm font-mono font-bold text-blue-600 dark:text-cyan-400 mb-1">
                      Why {choice.tech}?
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {choice.reason}
                    </p>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
