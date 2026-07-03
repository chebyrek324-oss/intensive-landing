'use client';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const MANAGER_URL =
  'https://t.me/Mastatop?text=%D0%9F%D1%80%D0%BE%D1%88%D1%91%D0%BB%20%D0%B3%D0%B0%D0%B9%D0%B4.%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%80%D0%B0%D0%B7%D0%B1%D0%BE%D1%80%20%D0%B8%20%D0%BF%D0%BB%D0%B0%D0%BD%20%D0%BF%D0%BE%D0%B4%20%D0%BC%D0%BE%D1%8E%20%D1%81%D0%B8%D1%82%D1%83%D0%B0%D1%86%D0%B8%D1%8E';

const CONVERTED_FLAG = 'mastodont_intensive_converted_v1';

function markConverted() {
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem(CONVERTED_FLAG, '1');
    }
  } catch {}
}

export default function BookingSection({ unlocked }: { unlocked: boolean }) {
  return (
    <section className="relative py-20 md:py-28 hair-top overflow-hidden">
      <div className="absolute inset-0 grid-bg grid-bg-fade opacity-60 pointer-events-none" />
      <div className="relative max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <div
              className={cn(
                'relative bg-card border rounded-3xl p-7 md:p-12 overflow-hidden',
                unlocked ? 'border-gold/30' : 'border-hair'
              )}
            >
              {!unlocked && (
                <div className="absolute inset-0 z-10 backdrop-blur-[3px] bg-ink/70 flex flex-col items-center justify-center gap-4">
                  <div className="w-14 h-14 rounded-full border border-hair bg-ink2 flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-paper/60"
                    >
                      <rect x="5" y="11" width="14" height="10" />
                      <path d="M8 11V8a4 4 0 118 0v3" />
                    </svg>
                  </div>
                  <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-paper/60 text-center px-6">
                    Посмотри 3 урока - откроется запись на разбор
                  </div>
                </div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-gold mb-5">
                  💬 Личный разбор + план под тебя
                </div>

                <h2 className="font-display font-bold text-2xl md:text-5xl leading-[1.02] tracking-tight uppercase mb-6 max-w-3xl">
                  20 минут один на один<br />
                  <span className="text-gold">с командой Мастодонта</span>
                </h2>

                <p className="font-mono text-[13px] md:text-base text-paper/70 leading-relaxed max-w-2xl mb-8">
                  Разбираем твою ситуацию: что уже есть, что мешает, с чего
                  начать.
                </p>

                <div className="mb-8">
                  <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-paper/50 mb-4">
                    Что унесёшь с разбора
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3 max-w-2xl">
                    <div className="bg-ink2 border border-hair rounded-2xl p-4 flex items-start gap-3">
                      <span className="text-xl leading-none">📋</span>
                      <span className="font-mono text-[13px] text-paper/80 leading-relaxed">
                        Пошаговый план до первых денег
                      </span>
                    </div>
                    <div className="bg-ink2 border border-hair rounded-2xl p-4 flex items-start gap-3">
                      <span className="text-xl leading-none">🎯</span>
                      <span className="font-mono text-[13px] text-paper/80 leading-relaxed">
                        Первые компании, кому предложить свои услуги
                      </span>
                    </div>
                  </div>
                </div>

                <p className="font-mono text-[13px] md:text-sm text-paper/60 leading-relaxed max-w-2xl mb-6">
                  И если увидим, что тебе это подходит - расскажем про программу,
                  которая закрывает весь путь: от первых денег до стабильного
                  дохода.
                </p>

                <div className="bg-gold/10 border border-gold/30 rounded-2xl px-5 py-4 mb-8 max-w-2xl">
                  <p className="font-mono text-[12px] md:text-[13px] text-gold/90 leading-relaxed">
                    ⏳ Мест мало, берём не всех: разбор для тех, кто готов делать,
                    а не «послушать на подумать».
                  </p>
                </div>

                <a
                  href={MANAGER_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={markConverted}
                  className="inline-flex items-center justify-center gap-3 bg-gold text-ink rounded-full px-8 md:px-12 py-5 md:py-7 font-mono text-sm md:text-base tracking-[0.2em] uppercase font-bold hover:bg-paper transition-all hover:shadow-[0_0_50px_rgba(255,209,102,0.5)]"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
                  </svg>
                  <span>Хочу разбор</span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
