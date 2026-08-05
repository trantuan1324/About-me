'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Lock,
  Wrench,
  Workflow,
  Coffee,
  Server,
  Smartphone,
  Layers,
  KeyRound,
  ShieldAlert,
  UserCheck,
  Box,
  GitBranch,
  Send,
  Globe,
  FolderTree,
  Repeat,
  FileCode2,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '@/constants/profile';
import { SectionHeader } from '@/components/shared/SectionHeader';

const CATEGORY_ICON_MAP: Record<string, any> = {
  Code2,
  Database,
  Lock,
  Wrench,
  Workflow,
};

const SKILL_ICON_MAP: Record<string, any> = {
  Coffee,
  Server,
  Smartphone,
  Database,
  Layers,
  KeyRound,
  ShieldAlert,
  UserCheck,
  Box,
  GitBranch,
  Send,
  Globe,
  FolderTree,
  Repeat,
  FileCode2,
};

export function SkillsSection() {
  const t = useTranslations('skills');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredCategories =
    activeCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge={t('sectionBadge')}
          title={t('title')}
          subtitle={t('subtitle')}
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                : 'glass-panel text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {t('allSkills')}
          </button>
          {SKILL_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'glass-panel text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t(`categories.${category.id}`)}
            </button>
          ))}
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCategories.map((category, cIdx) => {
            const CategoryIcon = CATEGORY_ICON_MAP[category.icon] || Code2;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: cIdx * 0.1 }}
                className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-lg hover-card-glow"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200/60 dark:border-slate-800/60">
                  <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-cyan-400">
                    <CategoryIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {t(`categories.${category.id}`)}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills Progress List */}
                <div className="space-y-6">
                  {category.skills.map((skill) => {
                    const SkillIcon = SKILL_ICON_MAP[skill.iconName] || Code2;
                    return (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <SkillIcon className="w-4 h-4 text-blue-500" />
                            <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                              {skill.name}
                            </span>
                            {skill.isFeatured && (
                              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                                {t('primaryTag')}
                              </span>
                            )}
                          </div>
                          <span className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress Bar Container */}
                        <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden relative">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className="h-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400"
                          />
                        </div>

                        {skill.description && (
                          <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                            {skill.description}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
