'use client';
import { motion } from 'framer-motion';

// подарок за почту: бот сразу просит почту и отдаёт карту заработка
const GIFT_URL = 'https://t.me/mastodont_aibot?start=gift';

export default function BookingSection() {
  return (
    <section className="relative py-20 md:py-28 hair-top overflow-hidden">
      <div className="absolute inset-0 grid-bg grid-bg-fade opacity-60 pointer-events-none" />
      <div className="relative max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <div className="relative bg-card border border-gold/30 rounded-3xl p-7 md:p-12 overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-gold mb-5">
                  🎁 Ещё один подарок
                </div>

                <h2 className="font-display font-bold text-2xl md:text-5xl leading-[1.02] tracking-tight uppercase mb-6 max-w-3xl">
                  Карта заработка на ИИ<br />
                  <span className="text-gold">за твою почту</span>
                </h2>

                <p className="font-mono text-[13px] md:text-base text-paper/70 leading-relaxed max-w-2xl mb-8">
                  Что сейчас покупают, кто платит и где этих людей искать, путь от
                  нуля до первых денег по шагам и 10 бесплатных инструментов.
                  Оставь почту в боте - и подарок твой. Туда же буду присылать
                  новые видео и материалы к ним.
                </p>

                <a
                  href={GIFT_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-gold text-ink rounded-full px-8 md:px-12 py-5 md:py-7 font-mono text-sm md:text-base tracking-[0.2em] uppercase font-bold hover:bg-paper transition-all hover:shadow-[0_0_50px_rgba(255,209,102,0.5)]"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
                  </svg>
                  <span>Забрать подарок</span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
