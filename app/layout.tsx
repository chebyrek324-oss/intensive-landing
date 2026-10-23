import type { Metadata } from 'next';
import Script from 'next/script';
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
      <body>
        {children}
        <Script id="yandex-metrika" strategy="afterInteractive">{`
          (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=113751259', 'ym');
          ym(113751259, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
        `}</Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/113751259" style={{ position: 'absolute', left: '-9999px' }} alt="" />
          </div>
        </noscript>
      </body>
    </html>
  );
}
