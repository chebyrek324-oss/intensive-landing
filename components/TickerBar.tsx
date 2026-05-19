export default function TickerBar() {
  const items = [
    'LIVE',
    'INTENSIVE VOL. 01',
    'FREE ACCESS',
    '3 LESSONS · 20 MIN',
    'MATVEY MESHKOV',
    'AI MASTODONT',
    'APR 2026',
    'NO CODE · NO TEAM',
  ];
  const loop = [...items, ...items, ...items];

  return (
    <div className="bg-gold text-ink overflow-hidden border-b border-ink/20 mt-[60px] md:mt-[64px]">
      <div className="flex whitespace-nowrap animate-marquee py-2 font-mono text-[11px] tracking-[0.25em] uppercase font-semibold">
        {loop.map((t, i) => (
          <span key={i} className="px-6 shrink-0 inline-flex items-center gap-6">
            {t}
            <span className="opacity-50">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
