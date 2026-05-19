'use client';
import { cn } from '@/lib/utils';

type Props = {
  n: number;
  no: string;
  title: string;
  duration: string;
  description: string;
  videoId: string;
  unlocked: boolean;
  watched: boolean;
  homework: string | null;
  homeworkSaved?: string | null;
  onSubmit: (answer: string) => void;
  finalCta?: string;
};

export default function LessonCard({
  n,
  no,
  title,
  duration,
  description,
  videoId,
  unlocked,
  watched,
  homework,
  onSubmit,
  finalCta,
}: Props) {
  return (
    <div
      className={cn(
        'bg-card border border-hair rounded-2xl overflow-hidden',
        !unlocked && 'opacity-80'
      )}
    >
      <div className="p-6 md:p-8 pb-5 md:pb-6">
        <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
          <div className="flex items-center gap-4">
            <div className="font-display font-bold text-3xl md:text-4xl leading-none text-gold">
              {no}
            </div>
            <div className="font-mono text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-paper/50 bg-ink2 border border-hair rounded-full px-3 py-1.5">
              {duration}
            </div>
          </div>
          <div className="flex items-center gap-2">
            {watched && (
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase px-3 py-1.5 rounded-full bg-success/15 border border-success/40 text-success inline-flex items-center gap-1.5">
                <span>✓</span> Пройден
              </span>
            )}
            {!unlocked && (
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase px-3 py-1.5 rounded-full bg-ink2 border border-hair text-paper/50 inline-flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="5" y="11" width="14" height="10" />
                  <path d="M8 11V8a4 4 0 118 0v3" />
                </svg>
                Залочен
              </span>
            )}
          </div>
        </div>

        <h3 className="font-display font-bold text-2xl md:text-4xl leading-[1.05] tracking-tight uppercase mb-3">
          {title}
        </h3>
        <p className="font-mono text-[13px] md:text-sm leading-relaxed text-paper/60 max-w-2xl">
          {description}
        </p>
      </div>

      <div className="relative aspect-video bg-ink2 border-y border-hair">
        {unlocked ? (
          <iframe
            src={`https://kinescope.io/embed/${videoId}`}
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;"
            allowFullScreen
            frameBorder="0"
            className="absolute inset-0 w-full h-full"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-ink2">
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="relative w-16 h-16 rounded-full border border-hair bg-ink flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-paper/50"
              >
                <rect x="5" y="11" width="14" height="10" />
                <path d="M8 11V8a4 4 0 118 0v3" />
              </svg>
            </div>
            <div className="relative font-mono text-[11px] tracking-[0.3em] uppercase text-paper/50 text-center px-6">
              Откроется после ответа на Урок {String(n - 1).padStart(2, '0')}
            </div>
          </div>
        )}
      </div>

      {unlocked && n === 1 && (
        <div className="md:hidden flex items-center gap-3 w-full bg-gold text-ink px-4 py-2.5 border-b border-ink/20">
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="shrink-0"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v4M12 16h.01" />
          </svg>
          <div className="font-mono text-[11px] leading-tight font-bold flex-1">
            Нет кнопки на весь экран?
            <br />
            <span className="text-ink/70 font-medium normal-case">
              Нажми на 3 точки в углу и выбери «Открыть в...»
            </span>
          </div>
        </div>
      )}

      {unlocked && !watched && (
        <div className="p-6 md:p-8">
          <button
            onClick={() => onSubmit('')}
            className="w-full sm:w-auto bg-gold text-ink font-mono text-sm md:text-base tracking-[0.2em] uppercase font-bold rounded-full px-8 md:px-10 py-5 md:py-6 inline-flex items-center justify-center gap-3 hover:bg-paper transition-all hover:shadow-[0_0_32px_rgba(255,209,102,0.5)]"
          >
            <span>{finalCta || (homework ? 'Я прошёл, дальше' : 'Открыть бонусы')}</span>
            <span>→</span>
          </button>
        </div>
      )}

      {unlocked && watched && (
        <div className="p-6 md:p-8 font-mono text-[11px] tracking-[0.25em] uppercase text-success inline-flex items-center gap-2">
          <span>✓</span> {homework ? 'Урок пройден' : 'Бонусы разблокированы'}
        </div>
      )}
    </div>
  );
}
