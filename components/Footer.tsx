export default function Footer() {
  return (
    <footer className="relative hair-top">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-10 md:py-14 grid grid-cols-12 gap-6 items-center">
        <div className="col-span-12 md:col-span-6 flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-paper flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-ink" fill="currentColor">
              <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
            </svg>
          </div>
          <div>
            <div className="font-display font-bold text-lg tracking-tight uppercase">
              Mastodont
            </div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-paper/50 mt-0.5">
              © 2026 · Intensive Vol. 01
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 flex flex-wrap md:justify-end items-center gap-5 font-mono text-[11px] tracking-[0.25em] uppercase text-paper/60">
          <a
            href="https://youtube.com/@aiBoomb"
            target="_blank"
            rel="noreferrer"
            className="hover:text-paper transition-colors"
          >
            YouTube ↗
          </a>
          <a
            href="https://t.me/Mastatop"
            target="_blank"
            rel="noreferrer"
            className="hover:text-paper transition-colors"
          >
            Telegram ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
