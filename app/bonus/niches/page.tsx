import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '50 ниш без конкуренции (апрель 2026) · Бонус 01 · Mastodont',
};

type Niche = {
  n: number;
  name: string;
  why: string;
  avg: string;
  category: string;
};

const niches: Niche[] = [
  { n: 1, name: 'Ремонт кровли (плоские кровли коммерческих зданий)', why: 'В СНГ после массовых подтоплений 2025-2026 спрос рекордный. Full replacement стоит $10-25K, подрядчики работают по сарафану, 70% без сайта.', avg: '$500-800', category: 'Строительство' },
  { n: 2, name: 'Монтаж фасадных панелей и сайдинг', why: 'В РФ и Казахстане массовая замена советских фасадов. Компании по 3-5 человек, сайтов почти ни у кого нет.', avg: '$400-700', category: 'Строительство' },
  { n: 3, name: 'Утепление домов (эковата, пенополиуретан)', why: 'Рост тарифов на отопление в 2026 на 18% в РФ. Стабильный спрос, клиенты ищут через сарафан.', avg: '$400-600', category: 'Строительство' },
  { n: 4, name: 'Монтаж септиков (ТОПАС, Юнилос)', why: 'Дачное строительство в РФ и КЗ растёт, чек монтажа $1500-3000, маржа высокая.', avg: '$500-800', category: 'Строительство' },
  { n: 5, name: 'Бурение скважин на воду', why: 'Засухи 2025 в южных регионах СНГ взвинтили спрос. Средний чек услуги $2000-5000.', avg: '$500-900', category: 'Строительство' },
  { n: 6, name: 'Промышленный альпинизм и мойка фасадов', why: 'B2B клиенты проверяют через Google. В городах РФ и КЗ муниципальные контракты, но частники без сайтов.', avg: '$400-700', category: 'Строительство' },
  { n: 7, name: 'Монтаж вентилируемых фасадов', why: 'Чек на объект $20-100K. Коммерческая недвижимость требует обновления. Сайт с портфолио окупается с первого клиента.', avg: '$500-800', category: 'Строительство' },
  { n: 8, name: 'Гидроизоляция фундаментов', why: 'После наводнений 2025 в Орске, Оренбуржье, Актобе массовый спрос на ремонт.', avg: '$400-600', category: 'Строительство' },
  { n: 9, name: 'Забивка свай (малогабаритные установки)', why: 'Частное домостроение растёт. Компании на 2-3 сваебоя без сайтов, но с оборотом $300K+ в год.', avg: '$500-800', category: 'Строительство' },
  { n: 10, name: 'Устройство полусухой стяжки', why: 'Тренд последних трёх лет, квадрат $8-12. Клиенты застройщики и частники.', avg: '$400-600', category: 'Строительство' },

  { n: 11, name: 'Клининг офисов (B2B постоянное обслуживание)', why: 'Контракты $2-10K в месяц, LTV огромный. Конкуренты в 2ГИС есть, но у 60% сайт либо мёртвый, либо на Tilda 2018 года.', avg: '$500-800', category: 'Услуги' },
  { n: 12, name: 'Дезинфекция и дератизация для HoReCa', why: 'Проверки Роспотребнадзора в 2026 ужесточились. Рестораны обязаны заключать договоры, подрядчики без сайтов теряют клиентов.', avg: '$400-700', category: 'Услуги' },
  { n: 13, name: 'Мойка ковров с вывозом', why: 'Чек услуги 200-500 руб за м², сезон круглый год, маржа 50%+. Реклама в Instagram закрылась в РФ, ищут сайт.', avg: '$300-500', category: 'Услуги' },
  { n: 14, name: 'Химчистка мягкой мебели с выездом', why: 'Ниша без онлайн-конкуренции в городах до 500К. Работают через Avito, но 2ГИС не индексирует без сайта.', avg: '$300-500', category: 'Услуги' },
  { n: 15, name: 'Промышленный клининг (после стройки, после ЧС)', why: 'Чеки $5-30K за объект. Новостройки сдаются массово, сайт с кейсами закрывает B2B клиентов.', avg: '$500-800', category: 'Услуги' },
  { n: 16, name: 'Вывоз строительного мусора', why: 'Классика скучных ниш. В каждом городе 20-50 частников с ГАЗонами без сайтов. Чек услуги 3-8К руб.', avg: '$300-500', category: 'Логистика' },
  { n: 17, name: 'Аренда биотуалетов для стройки и ивентов', why: 'Сезонный пик апрель-октябрь, контракты с застройщиками $3-20K в месяц.', avg: '$400-600', category: 'Аренда' },
  { n: 18, name: 'Аутсорсинг бухгалтерии для ИП и самозанятых', why: 'В РФ в 2026 новые налоговые реформы, ИП в панике. Бухгалтеры-фрилансеры берут $100-300 в месяц с клиента, сайтов нет.', avg: '$500-800', category: 'Услуги' },
  { n: 19, name: 'Юристы по банкротству физлиц', why: 'Количество банкротств в РФ в 2025 выросло на 30%. Чек одного дела $1-3K. Сайты нужны для доверия.', avg: '$500-900', category: 'Услуги' },
  { n: 20, name: 'Переводческое агентство (нотариальные переводы)', why: 'Мигрантский поток в РФ и КЗ стабильный, очереди в МФЦ. Перевод паспорта $10-30, обороты хорошие.', avg: '$300-500', category: 'Услуги' },

  { n: 21, name: 'Детейлинг авто (полировка, керамика)', why: 'Чек услуги $200-1500, аудитория владельцы бизнес-авто. Доверяют визуалу сайта.', avg: '$400-700', category: 'Авто' },
  { n: 22, name: 'Автохимчистка салонов с выездом', why: 'Новое направление, мобильные бригады работают без сайтов. Чек $50-150 за авто.', avg: '$300-500', category: 'Авто' },
  { n: 23, name: 'Шиномонтаж (сезонный, выездной)', why: 'Два сезонных пика в год, выездные бригады в больших городах РФ и КЗ. Avito уже не хватает.', avg: '$300-500', category: 'Авто' },
  { n: 24, name: 'Эвакуатор (B2B контракты со СТО)', why: 'СТО и страховые ищут подрядчиков с сайтом и прайсом. Без сайта не включают в пул.', avg: '$400-600', category: 'Авто' },
  { n: 25, name: 'Аренда спецтехники (экскаваторы, манипуляторы)', why: 'Рынок B2B, чеки смены $200-1000. Сайт с парком техники обязателен в 2026.', avg: '$500-800', category: 'Аренда' },
  { n: 26, name: 'Ремонт грузовиков и автобусов', why: 'Автопарки логистов ищут свою СТО надолго. Решение принимается по сайту.', avg: '$500-800', category: 'Авто' },
  { n: 27, name: 'Перевозка негабаритных грузов (трал, низкорамник)', why: 'Промышленные заказчики проверяют наличие сайта при выборе подрядчика.', avg: '$500-900', category: 'Логистика' },
  { n: 28, name: 'Услуги ассенизатора (откачка выгребных ям)', why: 'Чек услуги 2-5К руб, постоянный спрос в частном секторе. Почти ни у кого нет сайта.', avg: '$300-500', category: 'Услуги' },

  { n: 29, name: 'Чистка бассейнов (частные и коммерческие)', why: 'В южных регионах СНГ рост частных бассейнов, контракты на обслуживание $100-300 в месяц.', avg: '$400-600', category: 'Услуги' },
  { n: 30, name: 'Монтаж систем видеонаблюдения для магазинов', why: 'Закон 2024 об охране торговых точек в РФ обязал магазины иметь видео. Подрядчики не успевают.', avg: '$500-800', category: 'Услуги' },
  { n: 31, name: 'Установка и обслуживание сигнализаций', why: 'Конкуренция есть, но частники без сайтов теряют B2B клиентов.', avg: '$400-700', category: 'Услуги' },
  { n: 32, name: 'Груминг собак (салоны и выездные)', why: 'Чек $30-80 за процедуру, постоянная клиентура. Instagram в РФ просел, нужен сайт.', avg: '$300-500', category: 'Услуги' },
  { n: 33, name: 'Ветеринарные клиники в малых городах', why: 'В городах до 300К обычно 2-5 клиник, у 70% сайта нет. Запись на приём через звонки.', avg: '$400-600', category: 'Услуги' },
  { n: 34, name: 'Ритуальные услуги (памятники, установка)', why: '15000+ компаний в РФ, средний чек памятника $500-3000. Ниша табуирована, конкуренция слабая.', avg: '$500-800', category: 'Ритуал' },
  { n: 35, name: 'Изготовление надгробий и гравировка', why: 'Устойчивый спрос, клиенты 45+, ищут в Яндексе. Сайтов почти нет.', avg: '$400-700', category: 'Ритуал' },
  { n: 36, name: 'Установка памятников и благоустройство могил', why: 'Сезонный пик апрель-май (Радоница). Ниша консервативная, сайт даёт легитимность.', avg: '$400-600', category: 'Ритуал' },

  { n: 37, name: 'Корпусная мебель на заказ (цех 3-5 человек)', why: 'Чек заказа $500-5000. Без сайта только 1С Торговля и Avito.', avg: '$500-900', category: 'Производство' },
  { n: 38, name: 'Металлоконструкции (ворота, заборы, лестницы)', why: 'Малые цеха в каждом райцентре, чеки $500-5000. Онлайн-конкуренции мало.', avg: '$500-800', category: 'Производство' },
  { n: 39, name: 'Полиграфия малого формата (баннеры, визитки, наклейки)', why: 'Местный B2B рынок, постоянные клиенты. Сайт с онлайн-калькулятором выигрывает у типографий без сайта.', avg: '$300-500', category: 'Полиграфия' },
  { n: 40, name: 'Широкоформатная печать (баннеры, вывески)', why: 'Рекламные агентства ищут подрядчиков с портфолио на сайте.', avg: '$400-700', category: 'Полиграфия' },
  { n: 41, name: 'Швейный цех (пошив униформы, спецодежды)', why: 'Импортозамещение в РФ создало спрос. B2B закупки идут через тендеры, где сайт обязателен.', avg: '$500-800', category: 'Производство' },
  { n: 42, name: 'Изделия из камня (подоконники, столешницы)', why: 'Премиум-сегмент, чек $500-3000. Клиенты выбирают глазами, сайт с фото кейсов закрывает.', avg: '$500-800', category: 'Производство' },
  { n: 43, name: 'Пилорамы и пиломатериалы', why: 'Оптовые закупки B2B (строители, мебельщики). Прайс на сайте экономит часы на звонках.', avg: '$400-700', category: 'Производство' },
  { n: 44, name: 'Металлические двери и сейфы', why: 'Малые цеха в регионах работают только через Avito. Сайт открывает B2B с застройщиками.', avg: '$400-700', category: 'Производство' },

  { n: 45, name: 'Ландшафтный дизайн (частные участки)', why: 'Премиум-сегмент $3-30K за проект. Клиенты 40+ ищут глазами.', avg: '$500-900', category: 'Архитектура' },
  { n: 46, name: 'Архитектурное проектирование частных домов', why: 'Чек проекта $1500-5000. Сайт с 3D рендерами продаёт сам.', avg: '$600-1000', category: 'Архитектура' },
  { n: 47, name: 'Дизайн интерьера (студии 1-2 человека)', why: 'Огромный рынок после бума новостроек, но 80% работают по сарафану. Сайт даёт преимущество.', avg: '$500-800', category: 'Архитектура' },
  { n: 48, name: 'Геодезические работы и межевание', why: 'Обязательная процедура при продаже земли, постоянный спрос. Конкуренции онлайн почти нет.', avg: '$400-700', category: 'Услуги' },
  { n: 49, name: 'Кадастровый инженер', why: 'Узкая B2B/B2C ниша, чеки $50-300 за услугу. Клиенты находят через поиск.', avg: '$400-700', category: 'Услуги' },
  { n: 50, name: 'Бурение и обслуживание систем полива', why: 'Рост частного домостроения и засухи 2025. Подрядчики по 2-3 человека без сайтов.', avg: '$400-600', category: 'Услуги' },
];

const categoryOrder = [
  'Строительство',
  'Услуги',
  'Авто',
  'Логистика',
  'Аренда',
  'Производство',
  'Полиграфия',
  'Ритуал',
  'Архитектура',
];

export default function NichesBonusPage() {
  return (
    <main className="min-h-screen py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg grid-bg-fade pointer-events-none" />

      <div className="relative max-w-[1100px] mx-auto px-6 md:px-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] uppercase text-paper/60 hover:text-paper transition-colors mb-10"
        >
          <span>←</span> Вернуться в Intensive
        </Link>

        <div className="mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] uppercase text-gold bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            Бонус 01 · Актуально на апрель 2026
          </div>
          <h1 className="font-display font-bold text-[40px] md:text-[68px] leading-[0.95] tracking-tight uppercase mb-6">
            50 скучных ниш<br />
            <span className="text-gold">без конкуренции</span>
          </h1>
          <p className="font-mono text-sm md:text-base text-paper/60 leading-relaxed max-w-2xl">
            Готовый список ниш, где компании либо без сайтов, либо с сайтами 2008 года.
            Средний чек за сайт $300-1000, срок работы от вечера до 4 дней. Данные
            собраны на апрель 2026 по рынку СНГ.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#list"
              className="inline-flex items-center gap-3 bg-gold text-ink rounded-full px-5 py-3 font-mono text-xs tracking-[0.2em] uppercase font-semibold hover:bg-paper transition-colors"
            >
              <span>К списку ниш</span>
              <span>↓</span>
            </a>
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-paper/40 self-center print:hidden">
              Ctrl+P / Cmd+P чтобы сохранить как PDF
            </div>
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-14 md:mb-16">
          <div className="bg-card border border-hair rounded-2xl p-5">
            <div className="font-display font-bold text-3xl md:text-4xl text-gold leading-none mb-2">50</div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-paper/60">Ниш в списке</div>
          </div>
          <div className="bg-card border border-hair rounded-2xl p-5">
            <div className="font-display font-bold text-3xl md:text-4xl text-gold leading-none mb-2">$300-1000</div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-paper/60">Чек за сайт</div>
          </div>
          <div className="bg-card border border-hair rounded-2xl p-5">
            <div className="font-display font-bold text-3xl md:text-4xl text-gold leading-none mb-2">~45%</div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-paper/60">Малых бизнесов СНГ без сайта</div>
          </div>
          <div className="bg-card border border-hair rounded-2xl p-5">
            <div className="font-display font-bold text-3xl md:text-4xl text-gold leading-none mb-2">6.8M</div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-paper/60">МСП в РФ (янв 2026)</div>
          </div>
        </section>

        <div id="list" className="space-y-5 scroll-mt-10">
          {(() => {
            const sorted = categoryOrder.flatMap((cat) =>
              niches.filter((n) => n.category === cat)
            );
            let globalIdx = 0;
            return categoryOrder.map((cat) => {
              const items = niches.filter((n) => n.category === cat);
              if (!items.length) return null;
              return (
                <section
                  key={cat}
                  className="bg-card border border-hair rounded-2xl overflow-hidden"
                >
                  <div className="px-6 md:px-8 py-5 border-b border-hair flex items-center justify-between flex-wrap gap-3">
                    <div className="font-display font-bold text-xl md:text-2xl tracking-tight uppercase">
                      {cat}
                    </div>
                    <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-paper/50">
                      {items.length} ниш
                    </div>
                  </div>
                  <div className="divide-y divide-hair">
                    {items.map((item) => {
                      globalIdx += 1;
                      const num = globalIdx;
                      return (
                        <div
                          key={item.n}
                          className="px-6 md:px-8 py-5 md:py-6 flex gap-4 md:gap-6"
                        >
                          <div className="shrink-0 font-display font-bold text-2xl md:text-3xl text-gold leading-none w-12 md:w-14">
                            {String(num).padStart(2, '0')}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-baseline justify-between gap-4 flex-wrap mb-2">
                              <h3 className="font-display font-bold text-lg md:text-xl tracking-tight">
                                {item.name}
                              </h3>
                              <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-gold bg-gold/10 border border-gold/30 rounded-full px-2.5 py-1 shrink-0">
                                {item.avg}
                              </div>
                            </div>
                            <p className="font-mono text-[12px] md:text-[13px] leading-relaxed text-paper/60">
                              {item.why}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            });
          })()}
        </div>

        <div className="mt-14 md:mt-20 bg-card border border-hair rounded-2xl p-8 md:p-10 text-center">
          <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-gold mb-4">
            / Что дальше
          </div>
          <h2 className="font-display font-bold text-2xl md:text-4xl leading-tight tracking-tight uppercase mb-5">
            Выбрал нишу?<br />
            <span className="text-gold">Смотри бонус 02.</span>
          </h2>
          <p className="font-mono text-sm text-paper/60 max-w-xl mx-auto mb-6">
            Пошаговый план первых $500 за 7 дней с актуальными инструментами,
            шаблонами писем и реальной математикой конверсий на 2026 год.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
            <Link
              href="/bonus/500"
              className="inline-flex items-center justify-center gap-3 bg-gold text-ink rounded-full px-6 py-4 font-mono text-xs tracking-[0.2em] uppercase font-semibold hover:bg-paper transition-colors"
            >
              <span>Открыть Бонус 02</span>
              <span>→</span>
            </Link>
            <a
              href="https://t.me/Mastatop?text=%D0%9F%D1%80%D0%BE%D1%88%D1%91%D0%BB%20%D0%98%D0%BD%D1%82%D0%B5%D0%BD%D1%81%D0%B8%D0%B2.%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%80%D0%B0%D0%B7%D0%B1%D0%BE%D1%80%20%D0%BF%D0%BE%D0%B4%20%D0%BC%D0%BE%D1%8E%20%D0%B7%D0%B0%D0%B4%D0%B0%D1%87%D1%83.%20%D0%9F%D0%BE%D0%B4%D0%B1%D0%B5%D1%80%D1%91%D0%BC%20%D0%B2%D1%80%D0%B5%D0%BC%D1%8F"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-ink2 border border-hair text-paper rounded-full px-6 py-4 font-mono text-xs tracking-[0.2em] uppercase hover:bg-ink3 transition-colors"
            >
              <span>Записаться на разбор</span>
              <span>→</span>
            </a>
          </div>
        </div>

        <div className="mt-14 text-center font-mono text-[11px] tracking-[0.25em] uppercase text-paper/40">
          AI Мастодонт · Intensive Vol. 01 · Bonus 01 · April 2026
        </div>
      </div>
    </main>
  );
}
