'use client';
import LessonCard from './LessonCard';

// Вернуться в бота — сюда ведут все кнопки уроков
const BOT_URL = 'https://t.me/sdasd231s_bot';

const lessons = [
  {
    no: '01',
    title: 'Куда податься?',
    duration: '5:36',
    description:
      'Карта рынка ИИ. Модель которая реально работает: продукт + клиенты. Реальные кейсы учеников в $.',
    videoId: 'gUiAGVr5PmdtgwdVwWiuhi',
  },
  {
    no: '02',
    title: 'Создание продукта',
    duration: '5:51',
    description:
      'Демо вживую: сайт за 10 минут на Claude. Виджет-пассив $50-100 в месяц с каждого клиента.',
    videoId: 'b2gyqf1YRyTVoRbC4rV8UA',
  },
  {
    no: '03',
    title: 'Поиск клиентов',
    duration: '7:59',
    description:
      'Стратегия «Снайпер». ИИ находит бизнесы без сайтов и пишет им за тебя - готовые тёплые лиды.',
    videoId: 'mFx4ReZP6WszTiFojwoEPQ',
  },
];

export default function LessonsSection() {
  return (
    <section id="lessons" className="relative py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="mb-10 md:mb-14 max-w-2xl">
          <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-gold mb-4">
            / Видео уроков
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl leading-[0.95] tracking-tight uppercase">
            Смотри здесь<br />
            <span className="text-gold">проходи в боте</span>
          </h2>
          <p className="mt-5 font-mono text-[13px] md:text-sm leading-relaxed text-paper/60">
            Если видео не грузится в Telegram — смотри его тут. Посмотрел —
            возвращайся в бота и жми «Я посмотрел», чтобы засчитать урок и
            поднять шанс в розыгрыше.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {lessons.map((l) => (
            <LessonCard key={l.no} {...l} botUrl={BOT_URL} />
          ))}
        </div>
      </div>
    </section>
  );
}
