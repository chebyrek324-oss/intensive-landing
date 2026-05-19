'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToLessons = () => {
    document.getElementById('lessons')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section className="relative pt-24 md:pt-32 pb-0 overflow-hidden md:min-h-[780px] md:flex md:flex-col md:justify-end">
      <div className="absolute inset-0 grid-bg grid-bg-fade pointer-events-none" />
      <div
        aria-hidden
        className="absolute top-1/4 right-1/4 w-[720px] h-[720px] rounded-full bg-gold/[0.12] blur-[140px] pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="hidden md:block absolute bottom-0 right-0 md:right-[-20px] lg:right-[-60px] z-0 pointer-events-none select-none md:w-[58%] lg:w-[52%] md:h-[90%]"
      >
        <Image
          src="/matvey-v2.png"
          alt="Матвей Мешков"
          fill
          priority
          quality={100}
          sizes="900px"
          className="object-contain object-bottom"
        />
      </motion.div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-10 pb-6 md:pb-24">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold text-[40px] md:text-[72px] leading-[0.95] tracking-tight uppercase"
            >
              $1200 на ИИ<br />
              <span className="text-gold">за месяц</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 max-w-xl font-mono text-sm md:text-base text-paper/60 leading-relaxed"
            >
              Бесплатный Интенсив из 3 уроков. Двадцать минут. Без кода, без
              опыта, без команды. В конце - два бонуса за прохождение.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <button
                onClick={scrollToLessons}
                className="group inline-flex items-center gap-3 bg-gold text-ink rounded-full px-6 py-4 font-mono text-xs md:text-sm tracking-[0.2em] uppercase font-semibold hover:bg-paper transition-colors"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
                </svg>
                <span>Начать Урок 01</span>
              </button>
              <a
                href="#lessons"
                className="group inline-flex items-center gap-3 bg-ink2 border border-hair text-paper rounded-full px-6 py-4 font-mono text-xs md:text-sm tracking-[0.2em] uppercase hover:bg-ink3 transition-colors"
              >
                <span>Программа</span>
                <span>↓</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="hidden md:grid mt-12 grid-cols-3 gap-4 md:gap-6 max-w-md"
            >
              <Stat value="3" label="Урока" />
              <Stat value="~20" label="Минут" />
              <Stat value="2" label="Бонуса" />
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="relative md:hidden w-full h-[540px] overflow-hidden"
      >
        <div className="absolute left-1/2 h-[560px] w-[880px] z-10" style={{ transform: 'translateX(-35%)', bottom: '-40px' }}>
          <Image
            src="/matvey-v2.png"
            alt="Матвей Мешков"
            fill
            priority
            quality={95}
            sizes="880px"
            className="object-contain object-bottom"
          />
        </div>
        <div className="absolute left-5 right-5 bottom-4 z-30 px-1">
          <div className="bg-white/[0.06] backdrop-blur-xl border border-white/15 rounded-2xl px-5 py-4">
            <div className="grid grid-cols-3 gap-2 items-center">
              <Stat value="3" label="Урока" />
              <div className="relative">
                <div className="absolute top-1/2 -translate-y-1/2 left-0 h-8 w-px bg-white/15" />
                <Stat value="~20" label="Минут" />
                <div className="absolute top-1/2 -translate-y-1/2 right-0 h-8 w-px bg-white/15" />
              </div>
              <Stat value="2" label="Бонуса" />
            </div>
          </div>
        </div>
      </motion.div>

      <div className="hidden md:flex absolute bottom-5 right-5 md:right-10 z-20 items-center gap-3 pointer-events-none">
        <div className="bg-ink/80 backdrop-blur-md border border-hair rounded-full px-3.5 py-2 font-mono text-[10px] tracking-[0.25em] uppercase">
          Матвей Мешков
        </div>
        <div className="bg-gold text-ink rounded-full px-3.5 py-2 font-mono text-[10px] tracking-[0.25em] uppercase font-bold">
          Мастодонт
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="font-display font-bold text-3xl md:text-5xl leading-none mb-1.5 tabular-nums">
        {value}
      </div>
      <div className="font-mono text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-paper/50">
        {label}
      </div>
    </div>
  );
}
