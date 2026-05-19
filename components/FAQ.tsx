'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  {
    q: 'Сколько длится Интенсив?',
    a: 'Три урока: 5:36, 5:51 и 7:59. Всего около 20 минут. Можно пройти за один заход, можно растянуть - прогресс сохранится в браузере.',
  },
  {
    q: 'Это правда бесплатно?',
    a: 'Да. Без карт, без подписок, без скрытых платежей. Цель - показать как работает система и дать попробовать. Если зайдёт, есть полная программа.',
  },
  {
    q: 'Нужен ли опыт в ИИ или программировании?',
    a: 'Нет. Курс сделан именно для тех, кто слышал про ИИ, но не знает с чего начать. Всё на русском, простыми словами. Показываем путь, не грузим теорией.',
  },
  {
    q: 'Что я получу в конце?',
    a: 'Понимание куда двигаться, два бонуса (50 ниш без конкуренции + чек-лист «$500 за 7 дней») и приглашение в закрытый канал с кейсами учеников.',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-card border border-hair rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-6 py-5 md:py-6 px-6 md:px-7 text-left hover:bg-ink2 transition-colors"
      >
        <span className="font-display font-semibold text-base md:text-xl leading-tight pr-4">
          {q}
        </span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center font-mono text-sm transition-all ${
            open
              ? 'bg-gold text-ink border-gold rotate-45'
              : 'bg-ink2 text-paper/60 border-hair'
          }`}
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-7 pb-6 font-mono text-[13px] md:text-sm text-paper/60 leading-relaxed">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="relative py-20 md:py-28 hair-top">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 mb-10 md:mb-14">
          <div className="col-span-12 md:col-span-8">
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-gold mb-4">
              / FAQ
            </div>
            <h2 className="font-display font-bold text-3xl md:text-5xl leading-[0.95] tracking-tight uppercase">
              Частые<br />
              <span className="text-gold">вопросы</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-10 md:col-start-2 flex flex-col gap-3">
            {items.map((it, i) => (
              <FaqItem key={i} {...it} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
