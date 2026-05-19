'use client';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const MANAGER_URL =
  'https://t.me/Mastatop?text=' +
  encodeURIComponent(
    'Прошёл Интенсив. Хочу разбор под мою задачу. Подберём время'
  );

const CONVERTED_FLAG = 'mastodont_intensive_converted_v1';

function markConverted() {
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem(CONVERTED_FLAG, '1');
    }
  } catch {}
}

const bonuses = [
  {
    label: 'Бонус 01',
    title: '50 скучных ниш без конкуренции',
    desc: 'Готовый список: чистка бассейнов, вывоз мусора, ремонт кровли и ещё 47 ниш. С пометкой почему каждая прибыльная и как туда заходить.',
    format: 'Актуально апрель 2026',
    href: '/bonus/niches',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9l-6-6z" />
        <path d="M14 3v6h6M8 13h8M8 17h6" />
      </svg>
    ),
  },
  {
    label: 'Бонус 02',
    title: 'Первые $500 за 7 дней',
    desc: 'Пошаговый план: день 1 - ниша, день 2 - сайт, день 3 - компании. Инструменты и шаблоны, актуальные на апрель 2026.',
    format: 'Актуально апрель 2026',
    href: '/bonus/500',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8l2 2 4-4M8 14l2 2 4-4" />
      </svg>
    ),
  },
];

export default function BonusesSection({ unlocked }: { unlocked: boolean }) {
  return (
    <section
      id="bonuses"
      className="relative py-20 md:py-28 hair-top"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 mb-10 md:mb-14">
          <div className="col-span-12 md:col-span-8">
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-gold mb-4">
              / Бонусы за прохождение
            </div>
            <h2 className="font-display font-bold text-3xl md:text-5xl leading-[0.95] tracking-tight uppercase">
              Два файла<br />
              <span className="text-gold">чтобы начать сегодня</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 flex md:justify-end items-end">
            <div
              className={cn(
                'inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] uppercase px-4 py-2.5 rounded-full border',
                unlocked
                  ? 'bg-success/10 border-success/40 text-success'
                  : 'bg-ink2 border-hair text-paper/50'
              )}
            >
              <span
                className={cn(
                  'w-1.5 h-1.5 rounded-full',
                  unlocked ? 'bg-success animate-pulse' : 'bg-paper/30'
                )}
              />
              {unlocked ? 'Разблокировано' : 'Пройди 3 урока'}
            </div>
          </div>
        </div>

        {unlocked && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-5 bg-gradient-to-r from-gold/15 via-gold/5 to-transparent border border-gold/30 rounded-2xl p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
          >
            <div className="flex-1 min-w-0">
              <div className="font-mono text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-gold mb-2">
                / Готов внедрить?
              </div>
              <div className="font-display font-bold text-lg md:text-2xl leading-tight tracking-tight uppercase">
                Следующий шаг -{' '}
                <span className="text-gold">твой первый заказ</span>
              </div>
              <div className="font-mono text-[12px] md:text-[13px] text-paper/60 leading-relaxed mt-2 max-w-2xl">
                Разбор за 30 минут - подберём с чего тебе начать и где быстрее
                выйти на первые деньги.
              </div>
            </div>
            <a
              href={MANAGER_URL}
              target="_blank"
              rel="noreferrer"
              onClick={markConverted}
              className="shrink-0 inline-flex items-center justify-center gap-3 bg-gold text-ink rounded-full px-6 md:px-7 py-4 md:py-5 font-mono text-xs md:text-sm tracking-[0.2em] uppercase font-bold hover:bg-paper transition-all hover:shadow-[0_0_40px_rgba(255,209,102,0.55)]"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
              </svg>
              <span>Записаться на разбор</span>
            </a>
          </motion.div>
        )}

        <div className="grid grid-cols-12 gap-5">
          {bonuses.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="col-span-12 md:col-span-6 bg-card border border-hair rounded-2xl p-7 md:p-9 relative min-h-[320px] flex flex-col justify-between gap-6 overflow-hidden"
            >
              {!unlocked && (
                <div className="absolute inset-0 backdrop-blur-[2px] bg-ink/60 z-10 flex flex-col items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full border border-hair bg-ink2 flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-paper/60"
                    >
                      <rect x="5" y="11" width="14" height="10" />
                      <path d="M8 11V8a4 4 0 118 0v3" />
                    </svg>
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-paper/60">
                    Пройди 3 урока
                  </div>
                </div>
              )}

              <div>
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-ink2 border border-hair flex items-center justify-center text-gold">
                    {b.icon}
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold">
                    / {b.label}
                  </div>
                </div>
                <h3 className="font-display font-bold text-xl md:text-2xl leading-tight tracking-tight uppercase mb-3 max-w-md">
                  {b.title}
                </h3>
                <p className="font-mono text-[13px] leading-relaxed text-paper/60 max-w-md">
                  {b.desc}
                </p>
              </div>

              <div className="flex items-center justify-between gap-4 flex-wrap border-t border-hair pt-5">
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-paper/50">
                  {b.format}
                </div>
                <a
                  href={unlocked ? b.href : '#'}
                  target={unlocked ? '_blank' : undefined}
                  rel={unlocked ? 'noreferrer' : undefined}
                  onClick={(e) => !unlocked && e.preventDefault()}
                  className={cn(
                    'font-mono text-xs tracking-[0.2em] uppercase font-semibold rounded-full px-5 py-3 inline-flex items-center gap-2 transition-all',
                    unlocked
                      ? 'bg-gold text-ink hover:bg-paper'
                      : 'bg-ink2 border border-hair text-paper/40'
                  )}
                >
                  <span>Открыть</span>
                  <span>↗</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
