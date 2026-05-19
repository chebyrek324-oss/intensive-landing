'use client';

export type Progress = {
  lesson1Watched: boolean;
  lesson1Homework?: string;
  lesson2Unlocked: boolean;
  lesson2Watched: boolean;
  lesson2Homework?: string;
  lesson3Unlocked: boolean;
  lesson3Watched: boolean;
  bonusesUnlocked: boolean;
};

const KEY = 'mastodont_intensive_progress_v1';

export const defaultProgress: Progress = {
  lesson1Watched: false,
  lesson2Unlocked: false,
  lesson2Watched: false,
  lesson3Unlocked: false,
  lesson3Watched: false,
  bonusesUnlocked: false,
};

export function loadProgress(): Progress {
  if (typeof window === 'undefined') return defaultProgress;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultProgress;
    return { ...defaultProgress, ...JSON.parse(raw) };
  } catch {
    return defaultProgress;
  }
}

export function saveProgress(p: Progress) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(KEY, JSON.stringify(p));
  } catch {
    /* quota / private mode - ignore */
  }
}
