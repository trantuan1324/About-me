'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypingTextProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export function TypingText({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1800,
}: TypingTextProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetWord = words[wordIndex % words.length];

    let timer: NodeJS.Timeout;

    if (!isDeleting && currentText === targetWord) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setWordIndex((prev) => prev + 1);
    } else {
      const nextChar = isDeleting
        ? targetWord.substring(0, currentText.length - 1)
        : targetWord.substring(0, currentText.length + 1);

      timer = setTimeout(
        () => setCurrentText(nextChar),
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="inline-flex items-center text-blue-600 dark:text-cyan-400 font-mono font-bold">
      <span>{currentText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-2 h-6 ml-1 bg-blue-600 dark:bg-cyan-400 rounded-sm"
      />
    </span>
  );
}
