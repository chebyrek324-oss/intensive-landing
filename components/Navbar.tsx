'use client';
import { useEffect, useState } from 'react';
import { loadProgress } from '@/lib/progress';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    setUnlocked(!!loadProgress().bonusesUnlocked);
    const handler = () => setUnlocked(!!loadProgress().bonusesUnlocked);
    window.addEventListener('storage', handler);
    const interval = setInterval(handler, 1500);
    return () => {
      window.removeEventListener('storage', handler);
      clearInterval(interval);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-ink/60 border-b border-hair">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-xl bg-paper flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-ink" fill="currentColor">
              <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
            </svg>
          </div>
          <span className="font-display font-bold text-lg md:text-xl tracking-tight uppercase">
            Mastodont
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-mono text-[11px] tracking-[0.2em] uppercase text-paper/70">
          <a href="#lessons" className="hover:text-paper transition-colors">
            Уроки
          </a>
          <a
            href="https://youtube.com/@aiBoomb"
            target="_blank"
            rel="noreferrer"
            className="hover:text-paper transition-colors"
          >
            YouTube
          </a>
        </nav>

        {unlocked ? (
          <a
            href="https://t.me/Mastatop"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-ink2 border border-hair rounded-full px-4 py-2 font-mono text-[11px] tracking-[0.2em] uppercase hover:bg-ink3 transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="currentColor"
              className="text-[#26A5E4]"
            >
              <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16l-1.97 9.302c-.146.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.294.294-.603.294l.213-3.053 5.56-5.023c.24-.213-.054-.334-.373-.121L8.48 13.197l-2.96-.924c-.64-.203-.654-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.83z" />
            </svg>
            <span>TG Kanal</span>
          </a>
        ) : (
          <div
            className={cn(
              'inline-flex items-center gap-2 bg-ink2 border border-hair rounded-full px-4 py-2 font-mono text-[11px] tracking-[0.2em] uppercase text-paper/40'
            )}
          >
            <svg
              viewBox="0 0 24 24"
              width="11"
              height="11"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="5" y="11" width="14" height="10" />
              <path d="M8 11V8a4 4 0 118 0v3" />
            </svg>
            <span>TG Kanal</span>
          </div>
        )}
      </div>
    </header>
  );
}
