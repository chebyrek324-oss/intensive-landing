'use client';
import { useRef } from 'react';
import LessonCard from './LessonCard';
import type { Progress } from '@/lib/progress';

type Props = {
  progress: Progress;
  update: (p: Partial<Progress>) => void;
  hydrated: boolean;
};

const lessons = [
  {
    n: 1,
    no: '01',
    title: 'Куда податься?',
    duration: '5:36',
    description:
      'Карта рынка ИИ. Модель которая реально работает: продукт + клиенты. Реальные кейсы учеников в $.',
    videoId: 'gUiAGVr5PmdtgwdVwWiuhi',
    homework:
      'Ты уже пробовал зарабатывать с помощью ИИ? Если да - сколько получилось?',
  },
  {
    n: 2,
    no: '02',
    title: 'Создание продукта',
    duration: '5:51',
    description:
      'Демо вживую: сайт за 10 минут на AntiGravity. Виджет-пассив $50-100 в месяц с каждого клиента.',
    videoId: 'b2gyqf1YRyTVoRbC4rV8UA',
    homework:
      'Какой бизнес в твоём городе больше всего нуждается в сайте? Напиши одним сообщением.',
  },
  {
    n: 3,
    no: '03',
    title: 'Поиск клиентов',
    duration: '7:59',
    description:
      'Стратегия «Снайпер». ИИ находит бизнесы без сайтов и пишет им за тебя - готовые тёплые лиды.',
    videoId: 'mFx4ReZP6WszTiFojwoEPQ',
    homework: null,
  },
];

export default function LessonsSection({ progress, update, hydrated }: Props) {
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  const onLesson1Done = (answer: string) => {
    // TODO: заменить на fetch в Supabase / n8n webhook
    console.log('[TODO webhook] lesson 1:', { answer });
    update({
      lesson1Watched: true,
      lesson1Homework: answer,
      lesson2Unlocked: true,
    });
    setTimeout(
      () =>
        card2Ref.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        }),
      400
    );
  };

  const onLesson2Done = (answer: string) => {
    // TODO: заменить на fetch в Supabase / n8n webhook
    console.log('[TODO webhook] lesson 2:', { answer });
    update({
      lesson2Watched: true,
      lesson2Homework: answer,
      lesson3Unlocked: true,
    });
    setTimeout(
      () =>
        card3Ref.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        }),
      400
    );
  };

  const onLesson3Done = () => {
    // TODO: заменить на fetch в Supabase / n8n webhook
    console.log('[TODO webhook] lesson 3 completed');
    update({ lesson3Watched: true, bonusesUnlocked: true });
    setTimeout(() => {
      document
        .getElementById('bonuses')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 500);
  };

  const watchedCount = [
    progress.lesson1Watched,
    progress.lesson2Watched,
    progress.lesson3Watched,
  ].filter(Boolean).length;

  return (
    <section id="lessons" className="relative py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-6 mb-10 md:mb-14">
          <div className="col-span-12 md:col-span-7">
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-gold mb-4">
              / Программа
            </div>
            <h2 className="font-display font-bold text-3xl md:text-5xl leading-[0.95] tracking-tight uppercase">
              Три урока<br />
              <span className="text-gold">Одна система</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:justify-end items-end">
            <div className="w-full md:max-w-xs bg-card border border-hair rounded-2xl p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-paper/50">
                  Прогресс
                </div>
                <div className="font-mono text-xs tracking-[0.2em] uppercase">
                  <span className="text-gold">{hydrated ? watchedCount : 0}</span>
                  <span className="text-paper/50"> / 3</span>
                </div>
              </div>
              <div className="h-1.5 bg-ink2 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gold transition-all duration-500"
                  style={{
                    width: `${hydrated ? (watchedCount / 3) * 100 : 0}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <LessonCard
            {...lessons[0]}
            unlocked={true}
            watched={progress.lesson1Watched}
            homeworkSaved={progress.lesson1Homework}
            onSubmit={onLesson1Done}
          />
          <div ref={card2Ref} className="scroll-mt-24">
            <LessonCard
              {...lessons[1]}
              unlocked={progress.lesson2Unlocked}
              watched={progress.lesson2Watched}
              homeworkSaved={progress.lesson2Homework}
              onSubmit={onLesson2Done}
            />
          </div>
          <div ref={card3Ref} className="scroll-mt-24">
            <LessonCard
              {...lessons[2]}
              unlocked={progress.lesson3Unlocked}
              watched={progress.lesson3Watched}
              homeworkSaved={null}
              onSubmit={() => onLesson3Done()}
              finalCta="Открыть бонусы"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
