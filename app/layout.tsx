import type { Metadata } from 'next';
import './globals.css';
import { manrope, unbounded, jetBrainsMono } from './fonts';

export const metadata: Metadata = {
  title: 'Интенсив по заработку на ИИ в 2026',
  description:
    'Как за месяц начать зарабатывать $1200 на ИИ без кода, без опыта, без команды. Три урока, двадцать минут, два бонуса.',
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
