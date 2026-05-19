'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { loadProgress } from '@/lib/progress';

const CONVERTED_FLAG = 'mastodont_intensive_converted_v1';
const DISMISSED_FLAG = 'mastodont_intensive_modal_dismissed_v1';

const MANAGER_URL =
  'https://t.me/Mastatop?text=' +
  encodeURIComponent(
    'Прошёл Интенсив. Хочу разбор под мою задачу. Подберём время'
  );

const HUB_URL = 'https://t.me/+vI0ATA1pS1o0ZjMy';

function markConverted() {
  try {
    localStorage.setItem(CONVERTED_FLAG, '1');
  } catch {}
}

export default function CompletionModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const check = () => {
      const p = loadProgress();
      const converted = !!localStorage.getItem(CONVERTED_FLAG);
      const dismissed = !!sessionStorage.getItem(DISMISSED_FLAG);
      if (p.bonusesUnlocked && !converted && !dismissed) {
        setOpen(true);
      }
    };
    check();
    const interval = setInterval(check, 1500);
    return () => clearInterval(interval);
  }, []);

  const dismiss = () => {
    try {
      sessionStorage.setItem(DISMISSED_FLAG, '1');
    } catch {}
    setOpen(false);
    setTimeout(() => {
      document
        .getElementById('bonuses')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 200);
  };

  const handleConvert = () => {
    markConverted();
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] bg-ink/90 backdrop-blur-xl overflow-y-auto"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

          <button
            onClick={dismiss}
            className="fixed top-4 right-4 md:top-8 md:right-8 w-11 h-11 rounded-full bg-ink2 border border-hair flex items-center justify-center hover:bg-ink3 transition-colors z-[110]"
            aria-label="Закрыть"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-paper/70"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="relative max-w-3xl w-full text-center mx-auto px-5 md:px-8 py-20 md:py-24 min-h-full flex flex-col justify-center"
          >
            <div className="mx-auto inline-flex items-center gap-2 font-mono text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-gold bg-gold/10 border border-gold/30 rounded-full px-3.5 py-1.5 md:px-4 md:py-2 mb-6 md:mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Интенсив пройден
            </div>

            <h2 className="font-display font-bold text-[28px] sm:text-[34px] md:text-[68px] leading-[0.98] tracking-tight uppercase mb-5 md:mb-6">
              Следующий шаг -<br />
              <span className="text-gold">твой первый заказ</span>
            </h2>

            <p className="font-mono text-[13px] md:text-base text-paper/70 max-w-xl mx-auto mb-8 md:mb-10 leading-relaxed">
              На разборе за 30 минут смотрим на твою ситуацию: с чего тебе
              начать и где быстрее всего выйти на первые деньги через AI.
              Конкретный план, не общий курс.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full">
              <a
                href={MANAGER_URL}
                target="_blank"
                rel="noreferrer"
                onClick={handleConvert}
                className="inline-flex items-center justify-center gap-2.5 bg-gold text-ink rounded-full px-6 sm:px-8 md:px-10 py-4 md:py-7 font-mono text-xs sm:text-sm md:text-base tracking-[0.2em] uppercase font-bold hover:bg-paper transition-all hover:shadow-[0_0_50px_rgba(255,209,102,0.5)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="currentColor"
                >
                  <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
                </svg>
                <span>Записаться на разбор</span>
              </a>
              <a
                href={HUB_URL}
                target="_blank"
                rel="noreferrer"
                onClick={handleConvert}
                className="inline-flex items-center justify-center gap-2.5 bg-ink2 border border-paper/20 text-paper rounded-full px-6 sm:px-8 md:px-10 py-4 md:py-7 font-mono text-xs sm:text-sm md:text-base tracking-[0.2em] uppercase font-bold hover:bg-ink3 hover:border-paper/40 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="text-[#26A5E4]"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16l-1.97 9.302c-.146.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.294.294-.603.294l.213-3.053 5.56-5.023c.24-.213-.054-.334-.373-.121L8.48 13.197l-2.96-.924c-.64-.203-.654-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.83z" />
                </svg>
                <span>Закрытый канал</span>
              </a>
            </div>

            <div className="mt-6 md:mt-8 font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase text-paper/50">
              Диагностика бесплатная / Отвечаем в течение часа
            </div>

            <button
              onClick={dismiss}
              className="mt-8 md:mt-10 font-mono text-[11px] tracking-[0.25em] uppercase text-paper/40 hover:text-paper transition-colors underline underline-offset-4"
            >
              Сначала забрать бонусы
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
