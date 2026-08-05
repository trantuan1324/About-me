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
  Sparkles,
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
                className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-lg hover-card-glow flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200/60 dark:border-slate-800/60">
                    <div className="p-3 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20">
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

                  {/* Skills Cards Grid (Without progress bars) */}
                  <div className="space-y-4">
                    {category.skills.map((skill) => {
                      const SkillIcon = SKILL_ICON_MAP[skill.iconName] || Code2;
                      const subItems = skill.description
                        ? skill.description.split(',').map((s) => s.trim())
                        : [];

                      return (
                        <div
                          key={skill.name}
                          className="p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/70 hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-all duration-300 group"
                        >
                          {/* Top Row: Prominent Skill Name & Badges */}
                          <div className="flex items-center justify-between mb-2.5">
                            <div className="flex items-center gap-2.5">
                              <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                                <SkillIcon className="w-4 h-4" />
                              </div>
                              <span className="text-base font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                                {skill.name}
                              </span>
                            </div>

                            {skill.isFeatured && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 shadow-xs">
                                <Sparkles className="w-3 h-3 text-cyan-500 animate-pulse" />
                                {t('primaryTag')}
                              </span>
                            )}
                          </div>

                          {/* Bottom Row: Highlighted Sub-technology Pills */}
                          {subItems.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {subItems.map((item, idx) => (
                                <span
                                  key={idx}
                                  className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-white dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80 shadow-xs hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-cyan-300 transition-colors"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
