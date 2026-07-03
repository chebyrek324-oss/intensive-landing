'use client';
import { useEffect, useState } from 'react';
import LessonCard from './LessonCard';
import BonusesSection from './BonusesSection';
import BookingSection from './BookingSection';
import {
  defaultProgress,
  loadProgress,
  saveProgress,
  type Progress,
} from '@/lib/progress';

// Вернуться в бота - сюда ведёт вторичная ссылка уроков
const BOT_URL = 'https://t.me/Mastatop';

const lessons = [
  {
    no: '01',
    title: 'Куда податься?',
    duration: '',
    description:
      'Карта рынка ИИ. Модель которая реально работает: продукт + клиенты. Реальные кейсы учеников в $.',
    videoId: 'gUiAGVr5PmdtgwdVwWiuhi',
  },
  {
    no: '02',
    title: 'Создание продукта',
    duration: '',
    description:
      'Демо вживую: сайт за 10 минут на Claude. Виджет-пассив $50-100 в месяц с каждого клиента.',
    videoId: '2vhBDHWv1d5jVmjVEaqwgT',
  },
  {
    no: '03',
    title: 'Поиск клиентов',
    duration: '',
    description:
      'Стратегия «Снайпер». ИИ находит бизнесы без сайтов и пишет им за тебя - готовые тёплые лиды.',
    videoId: 'mNGeZDJecd8C2JMSJyKCvP',
  },
];

export default function LessonsSection() {
  const [progress, setProgress] = useState<Progress>(defaultProgress);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setProgress(loadProgress());
    setHydrated(true);
  }, []);

  const watchedFlags = [
    progress.lesson1Watched,
    progress.lesson2Watched,
    progress.lesson3Watched,
  ];
  const watchedCount = watchedFlags.filter(Boolean).length;
  const allWatched = watchedCount >= 3;

  const markWatched = (idx: number) => {
    setProgress((prev) => {
      const next = { ...prev };
      if (idx === 0) next.lesson1Watched = true;
      if (idx === 1) next.lesson2Watched = true;
      if (idx === 2) next.lesson3Watched = true;
      if (next.lesson1Watched && next.lesson2Watched && next.lesson3Watched) {
        next.bonusesUnlocked = true;
      }
      saveProgress(next);
      return next;
    });
  };

  return (
    <>
      <section id="lessons" className="relative py-20 md:py-28">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10">
          <div className="mb-10 md:mb-14 max-w-2xl">
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-gold mb-4">
              / Видео уроков
            </div>
            <h2 className="font-display font-bold text-3xl md:text-5xl leading-[0.95] tracking-tight uppercase">
              Смотри уроки<br />
              <span className="text-gold">забирай подарки</span>
            </h2>
            <p className="mt-5 font-mono text-[13px] md:text-sm leading-relaxed text-paper/60">
              Посмотри все 3 урока и отметь каждый - откроются два подарка и
              запись на личный разбор. Если видео не грузится в боте - смотри
              его здесь.
            </p>

            <div className="mt-6 flex items-center gap-3 max-w-xs">
              <div className="flex-1 h-1.5 bg-ink2 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gold transition-all duration-500"
                  style={{
                    width: `${hydrated ? (watchedCount / 3) * 100 : 0}%`,
                  }}
                />
              </div>
              <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-paper/50 shrink-0">
                <span className="text-gold">{hydrated ? watchedCount : 0}</span>
                <span> / 3</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {lessons.map((l, i) => (
              <LessonCard
                key={l.no}
                {...l}
                botUrl={BOT_URL}
                watched={hydrated && watchedFlags[i]}
                onWatch={() => markWatched(i)}
              />
            ))}
          </div>
        </div>
      </section>

      <BonusesSection unlocked={hydrated && allWatched} />
      <BookingSection unlocked={hydrated && allWatched} />
    </>
  );
}
