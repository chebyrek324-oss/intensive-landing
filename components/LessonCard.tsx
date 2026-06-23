'use client';

type Props = {
  no: string;
  title: string;
  duration: string;
  description: string;
  videoId: string;
  botUrl: string;
};

export default function LessonCard({
  no,
  title,
  duration,
  description,
  videoId,
  botUrl,
}: Props) {
  return (
    <div className="bg-card border border-hair rounded-2xl overflow-hidden">
      <div className="p-6 md:p-8 pb-5 md:pb-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="font-display font-bold text-3xl md:text-4xl leading-none text-gold">
            {no}
          </div>
          {duration && (
            <div className="font-mono text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-paper/50 bg-ink2 border border-hair rounded-full px-3 py-1.5">
              {duration}
            </div>
          )}
        </div>

        <h3 className="font-display font-bold text-2xl md:text-4xl leading-[1.05] tracking-tight uppercase mb-3">
          {title}
        </h3>
        <p className="font-mono text-[13px] md:text-sm leading-relaxed text-paper/60 max-w-2xl">
          {description}
        </p>
      </div>

      {/* Видео всегда открыто — никаких замков, прохождение в боте */}
      <div className="relative aspect-video bg-ink2 border-y border-hair">
        <iframe
          src={`https://kinescope.io/embed/${videoId}`}
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;"
          allowFullScreen
          frameBorder="0"
          className="absolute inset-0 w-full h-full"
          loading="lazy"
        />
      </div>

      {/* Единственное действие — вернуться в бота */}
      <div className="p-6 md:p-8">
        <a
          href={botUrl}
          className="w-full sm:w-auto bg-gold text-ink font-mono text-sm md:text-base tracking-[0.2em] uppercase font-bold rounded-full px-8 md:px-10 py-5 md:py-6 inline-flex items-center justify-center gap-3 hover:bg-paper transition-all hover:shadow-[0_0_32px_rgba(255,209,102,0.5)]"
        >
          <span>←</span>
          <span>Посмотрел? Вернись в бота</span>
        </a>
        <p className="mt-3 font-mono text-[11px] tracking-[0.2em] uppercase text-paper/40">
          В боте жми «Я посмотрел» — урок засчитается
        </p>
      </div>
    </div>
  );
}
