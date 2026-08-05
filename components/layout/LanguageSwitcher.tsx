'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const LOCALES = [
  { code: 'en', label: 'EN', flag: '🇺🇸', name: 'English' },
  { code: 'vi', label: 'VI', flag: '🇻🇳', name: 'Tiếng Việt' },
];

export function LanguageSwitcher() {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (newLocale: string) => {
    if (newLocale === currentLocale) return;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div
      className="relative flex items-center p-1 rounded-full bg-slate-200/60 dark:bg-slate-800/60 border border-slate-300/40 dark:border-slate-700/40"
      role="region"
      aria-label="Language selector"
    >
      {LOCALES.map((loc) => {
        const isActive = currentLocale === loc.code;
        return (
          <button
            key={loc.code}
            onClick={() => handleLanguageChange(loc.code)}
            aria-label={`Switch language to ${loc.name}`}
            aria-pressed={isActive}
            className={`relative flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${
              isActive
                ? 'text-blue-600 dark:text-cyan-300 font-extrabold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <span>{loc.flag}</span>
            <span>{loc.label}</span>
            {isActive && (
              <motion.div
                layoutId="activeLangIndicator"
                className="absolute inset-0 rounded-full bg-white dark:bg-slate-900 shadow-sm border border-slate-200/80 dark:border-slate-700/80 -z-10"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
