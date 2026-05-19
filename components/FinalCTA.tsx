'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { loadProgress } from '@/lib/progress';

const MANAGER_URL =
  'https://t.me/Mastatop?text=' +
  encodeURIComponent(
    'Прошёл Интенсив. Хочу разбор под мою задачу. Подберём время'
  );

const HUB_URL = 'https://t.me/+vI0ATA1pS1o0ZjMy';
const CONVERTED_FLAG = 'mastodont_intensive_converted_v1';

function markConverted() {
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem(CONVERTED_FLAG, '1');
    }
  } catch {}
}

export default function FinalCTA() {
  const [unlocked, setUnlocked] = useState(false);
  const [watchedCount, setWatchedCount] = useState(0);

  useEffect(() => {
    const p = loadProgress();
    setUnlocked(!!p.bonusesUnlocked);
    setWatchedCount(
      [p.lesson1Watched, p.lesson2Watched, p.lesson3Watched].filter(Boolean)
        .length
    );
    const handler = () => {
      const next = loadProgress();
      setUnlocked(!!next.bonusesUnlocked);
      setWatchedCount(
        [next.lesson1Watched, next.lesson2Watched, next.lesson3Watched].filter(
          Boolean
        ).length
      );
    };
    window.addEventListener('storage', handler);
    const interval = setInterval(handler, 1500);
    return () => {
      window.removeEventListener('storage', handler);
      clearInterval(interval);
    };
  }, []);

  const scrollToLessons = () => {
    document
      .getElementById('lessons')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative py-20 md:py-28 hair-top overflow-hidden">
      <div className="absolute inset-0 grid-bg grid-bg-fade opacity-60 pointer-events-none" />
      <div className="relative max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={cn(
                'inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] uppercase rounded-full px-4 py-2 mb-8 border',
                unlocked
                  ? 'text-gold bg-gold/10 border-gold/30'
                  : 'text-paper/60 bg-ink2 border-hair'
              )}
            >
              <span
                className={cn(
                  'w-1.5 h-1.5 rounded-full',
                  unlocked ? 'bg-gold animate-pulse' : 'bg-paper/40'
                )}
              />
              {unlocked ? 'Что дальше' : `Пройди 3 урока (${watchedCount}/3)`}
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-display font-bold text-3xl md:text-6xl leading-[0.98] tracking-tight uppercase mb-8"
            >
              Следующий шаг -<br />
              <span className="text-gold">твой первый заказ</span>
            </motion.h2>
            <p className="font-mono text-sm md:text-base text-paper/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              На разборе за 30 минут смотрим на твою ситуацию: с чего тебе
              начать и где быстрее всего выйти на первые деньги через AI.
              Конкретный план, не общий курс.
            </p>

            {unlocked ? (
              <>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={MANAGER_URL}
                    target="_blank"
                    rel="noreferrer"
                    onClick={markConverted}
                    className="inline-flex items-center justify-center gap-3 bg-gold text-ink rounded-full px-8 md:px-10 py-5 md:py-7 font-mono text-sm md:text-base tracking-[0.2em] uppercase font-bold hover:bg-paper transition-all hover:shadow-[0_0_50px_rgba(255,209,102,0.5)]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
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
                    onClick={markConverted}
                    className="inline-flex items-center justify-center gap-3 bg-ink2 border border-paper/20 text-paper rounded-full px-8 md:px-10 py-5 md:py-7 font-mono text-sm md:text-base tracking-[0.2em] uppercase font-bold hover:bg-ink3 hover:border-paper/40 transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="text-[#26A5E4]"
                    >
                      <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16l-1.97 9.302c-.146.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.294.294-.603.294l.213-3.053 5.56-5.023c.24-.213-.054-.334-.373-.121L8.48 13.197l-2.96-.924c-.64-.203-.654-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.83z" />
                    </svg>
                    <span>Закрытый канал</span>
                  </a>
                </div>
                <div className="mt-6 font-mono text-[11px] tracking-[0.25em] uppercase text-paper/40">
                  Диагностика бесплатная / Отвечаем в течение часа
                </div>
              </>
            ) : (
              <div className="relative max-w-xl mx-auto">
                <div className="bg-card border border-hair rounded-2xl p-6 md:p-8 relative overflow-hidden">
                  <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
                  <div className="relative flex flex-col items-center gap-5">
                    <div className="w-14 h-14 rounded-full border border-hair bg-ink2 flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        width="22"
                        height="22"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-paper/60"
                      >
                        <rect x="5" y="11" width="14" height="10" />
                        <path d="M8 11V8a4 4 0 118 0v3" />
                      </svg>
                    </div>
                    <div className="text-center">
                      <div className="font-display font-bold text-xl md:text-2xl tracking-tight uppercase mb-2">
                        Кнопки откроются<br />
                        <span className="text-gold">после 3 уроков</span>
                      </div>
                      <p className="font-mono text-[12px] md:text-[13px] text-paper/60 leading-relaxed max-w-md mx-auto">
                        Пройди Интенсив целиком. Менеджер и закрытый канал - для
                        тех, кто действительно вложился.
                      </p>
                    </div>
                    <div className="w-full max-w-xs">
                      <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.25em] uppercase text-paper/50 mb-2">
                        <span>Прогресс</span>
                        <span>
                          <span className="text-gold">{watchedCount}</span>
                          <span className="text-paper/40"> / 3</span>
                        </span>
                      </div>
                      <div className="h-1.5 bg-ink2 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gold transition-all duration-500"
                          style={{ width: `${(watchedCount / 3) * 100}%` }}
                        />
                      </div>
                    </div>
                    <button
                      onClick={scrollToLessons}
                      className="inline-flex items-center gap-3 bg-gold text-ink rounded-full px-6 py-3.5 font-mono text-xs tracking-[0.2em] uppercase font-semibold hover:bg-paper transition-colors"
                    >
                      <span>К урокам</span>
                      <span>↓</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute right-0 bottom-[-4%] font-display italic text-[22vw] md:text-[16vw] leading-none text-ink/[0.05] select-none pointer-events-none"
      >
        Hub
      </div>
    </section>
  );
}
