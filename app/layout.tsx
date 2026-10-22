import type { Metadata } from 'next';
import './globals.css';
import { manrope, unbounded, jetBrainsMono } from './fonts';

export const metadata: Metadata = {
  title: 'Видео-гайд: первые деньги на ИИ · Мастодонт',
  description:
    'Как за месяц начать зарабатывать $2000+ на ИИ без кода, без опыта, без команды. Три урока, два бонуса.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${unbounded.variable} ${jetBrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
