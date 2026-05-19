'use client';
import { motion } from 'framer-motion';

const items = [
  {
    no: '01',
    title: 'Куда податься',
    desc: 'Ясная дорожная карта вместо хаоса из блогеров и волшебных нейронок.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v9l5 3" />
      </svg>
    ),
  },
  {
    no: '02',
    title: 'Создание продукта',
    desc: 'Сайт за 10 минут вместо месяца работы студии. Вживую на твоих глазах.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    no: '03',
    title: 'Поиск клиентов',
    desc: 'Система которая ищет бизнесы и отдаёт тебе готовые тёплые лиды.',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-5-5" />
      </svg>
    ),
  },
];

export default function AboutCourse() {
  return (
    <section className="relative py-20 md:py-28 hair-top">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 mb-12 md:mb-16">
          <div className="col-span-12 md:col-span-8">
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-gold mb-4">
              / Что внутри
            </div>
            <h2 className="font-display font-bold text-3xl md:text-5xl leading-[0.95] tracking-tight uppercase">
              Короткий путь<br />
              <span className="text-gold">вместо хаоса</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.no}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="col-span-12 md:col-span-4 bg-card border border-hair rounded-2xl p-7 md:p-8 relative group hover:border-gold/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 rounded-xl bg-ink2 border border-hair flex items-center justify-center text-gold">
                  {it.icon}
                </div>
                <div className="font-display font-bold text-xl text-paper/20">
                  {it.no}
                </div>
              </div>
              <h3 className="font-display font-bold text-xl md:text-2xl leading-tight tracking-tight uppercase mb-3">
                {it.title}
              </h3>
              <p className="font-mono text-[13px] leading-relaxed text-paper/60">
                {it.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
