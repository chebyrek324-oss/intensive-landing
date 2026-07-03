import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Первые $500 за 7 дней (июль 2026) · Бонус 02 · Mastodont',
};

type Day = {
  n: string;
  title: string;
  tagline: string;
  time: string;
  blocks: { heading: string; bullets: string[] }[];
  math?: string;
  errors: string[];
};

const days: Day[] = [
  {
    n: 'День 01',
    title: 'Выбор ниши',
    tagline: 'Определяешь куда бить. Решение за один вечер.',
    time: '2-3 часа',
    blocks: [
      {
        heading: 'Критерии выбора',
        bullets: [
          'B2B или B2C с чеком услуги от $150 (клиент может позволить $300-700 за сайт)',
          'Клиенты 35+, консервативные, ценят надёжность и визуал',
          'Низкая онлайн-конкуренция: на первой странице Яндекса и Google меньше 5 качественных сайтов по запросу "ниша + город"',
          'Сезонный пик или постоянный спрос',
          'Техника продажи объясняется по телефону за 3 минуты',
        ],
      },
      {
        heading: 'Инструменты проверки спроса (актуально июль 2026)',
        bullets: [
          'Яндекс.Вордстат (wordstat.yandex.ru) - бесплатно. Если 500+ запросов в месяц по "услуга + город" - рынок живой',
          'Google Trends - работает в РФ без VPN. Проверка сезонности',
          '2ГИС (2gis.ru) - смотри категорию в городе, сколько компаний и у скольких живой сайт',
          'Яндекс.Карты - фильтр "без сайта" работает напрямую',
          'Avito и Яндекс.Услуги - косвенный индикатор живости ниши',
        ],
      },
    ],
    errors: [
      'Лезть в перегретые ниши (криптоуслуги, AI-ассистенты, онлайн-школы)',
      'Идти в нишу, где клиенты сами знают про AntiGravity и AI-сайты',
      'Выбирать по принципу "мне нравится", а не "там мало конкурентов"',
    ],
  },
  {
    n: 'День 02',
    title: 'Создание демо-сайта',
    tagline: 'Главный элемент снайперской продажи. Пустые руки не работают.',
    time: '3-4 часа',
    blocks: [
      {
        heading: 'AntiGravity (статус на июль 2026)',
        bullets: [
          'Вышел из preview: Antigravity CLI доступен всем, Google перевёл на него весь Gemini CLI (июнь 2026)',
          'Работает на топовых моделях июля 2026: Gemini 3.5 Flash (в 4 раза быстрее, обходит 3.1 Pro), Claude Opus 4.8, GPT-5',
          'Обновления июня 2026: мультиагентные фоновые задачи, встроенный Guide-скилл, умный поиск по файлам',
          'Интеграция с Google AI Studio + Firebase: база данных, авторизация, уведомления из коробки',
          'Из РФ доступ через VPN. В КЗ, Беларуси, Узбекистане работает напрямую',
        ],
      },
      {
        heading: 'Лучшие промпты 2026',
        bullets: [
          'Ставь задачу как тимлид, не как пользователь. Вместо "сделай сайт" - "создай одностраничный сайт для компании X, цели: заявки и звонки, структура: hero, 3 преимущества, калькулятор, портфолио из 6 объектов, FAQ из 8 вопросов, форма, футер"',
          'Используй Planning Mode: AntiGravity сначала показывает план, подтверждаешь и только потом пишет код',
          'Вставляй скриншот референсного сайта и пиши "сделай в таком визуальном языке под мою нишу" - Gemini 3.5 Flash и Opus 4.8 отлично читают референсы',
          'Требуй mobile-first, lazy loading, SEO-теги title/description под конкретный поисковый запрос',
        ],
      },
      {
        heading: 'Альтернативы если AntiGravity недоступен',
        bullets: [
          'Lovable (lovable.dev) - лидер full-stack вибкодинга 2026, React + Supabase, GitHub-экспорт',
          'Bolt.new - быстрый прототип в браузере, WebContainer, zero setup',
          'v0.dev от Vercel - красивые Next.js + shadcn/ui',
          'Replit Agent - хорош для полных приложений',
        ],
      },
    ],
    math: 'Тайминг: 30 мин бриф, 2-3 часа генерация и правки, 30 мин публикация на Vercel или Firebase Hosting.',
    errors: [
      'Генерировать "красивый сайт" без чёткой структуры заявок',
      'Не проверять мобильную версию (80% B2B клиентов открывают сначала с телефона)',
      'Забывать SEO-теги title/description',
    ],
  },
  {
    n: 'День 03',
    title: 'Поиск 10 компаний без сайта',
    tagline: 'База лидов - фундамент недели.',
    time: '2 часа',
    blocks: [
      {
        heading: 'Где искать (по эффективности, июль 2026)',
        bullets: [
          '2ГИС - лучший для СНГ. В карточке компании поле "сайт", часто пустое. Контакты (телефон, email) публичны',
          'Яндекс.Карты - вторая лучшая опция для РФ, особенно малые города',
          'Google Maps - слабее в РФ, но хорош для КЗ, Беларуси, Узбекистана',
          'Flamp.ru - каталог отзывов, часто находятся компании без сайта но с живыми отзывами',
          'Avito B2B и Яндекс.Услуги - для самозанятых и ИП',
        ],
      },
      {
        heading: 'Парсеры (актуальны 2026)',
        bullets: [
          'Parser2GIS (github.com/interlark/parser-2gis) - open-source, бесплатно, через Chrome',
          'ParseLab Parser 2GIS - платный, от 1500 руб в месяц, многопоточный',
          'Octoparse - для тех, кто не дружит с кодом',
          'A-Parser - универсальный, сложнее освоить',
        ],
      },
      {
        heading: 'Как отфильтровать компании без сайта',
        bullets: [
          'В 2ГИС выбираешь категорию + город',
          'Парсер экспортирует в Excel с колонкой "сайт"',
          'Сортируешь по пустым ячейкам - это твоя база',
          'Дополнительно пробиваешь в Google "название + город" чтобы исключить те, что есть в Гугле, но не в 2ГИС',
        ],
      },
      {
        heading: 'Критерии качественного лида',
        bullets: [
          'Есть телефон и адрес - реальная компания',
          'Отзывы 4+ звёзд - не мошенники',
          'В бизнесе 2+ года - не закроются завтра',
          '3+ сотрудника - есть деньги на сайт',
        ],
      },
    ],
    math: 'Математика дня: 100 карточек через парсер → ~30 без сайта → ~15 с нормальной репутацией → 10 тёплых лидов в таблицу.',
    errors: [
      'Парсить большие компании (50+ сотрудников) - у них маркетологи, тебя сольют',
      'Писать всем подряд без проверки в Google',
      'Не сохранять контакты сразу в таблицу (потом ищешь по два часа)',
    ],
  },
  {
    n: 'День 04',
    title: 'Холодный контакт',
    tagline: 'Касание. 3 канала работают одновременно.',
    time: '3-5 часов активной работы',
    blocks: [
      {
        heading: 'Статистика холодного outreach (2026)',
        bullets: [
          'Средний open rate B2B email: ~28%, но метрика неточная из-за Apple Mail Privacy - смотри на ответы',
          'Средний reply rate: 3,4% по индустрии (Instantly, июль 2026). Топ-10% кампаний дают 10%+',
          'Хорошая reply rate: 5-8%. Малые кампании до 50 адресов дают 5,8% против 2,1% у массовых на 500+',
          'Проверенный список email даёт x2 ответов против непроверенного - чисти базу перед отправкой',
        ],
      },
      {
        heading: 'Cold Email (сервисы июль 2026)',
        bullets: [
          'Instantly.ai - лидер 2026, продвинутый warmup, от $37/мес',
          'Smartlead.ai - сильная аналитика, от $39/мес',
          'Lemlist - персонализация, от $59/мес',
          'Snov.io - поиск email + отправка, от $39/мес',
          'DashaMail - российский ESP, хранение данных в РФ (ФЗ-152), от 500 руб/мес',
          'Coldy.ai - русскоязычный под холодные рассылки, 2026',
        ],
      },
      {
        heading: 'Шаблон письма, который работает в 2026',
        bullets: [
          'Тема: "сайт для [название компании]"',
          'Первый абзац: "Я зашёл в 2ГИС искать [услугу] в [город] и заметил, что у вас нет сайта. При этом отзывы 4.8 из 5 - значит клиенты довольны"',
          'Проблема: "Прямо сейчас 7 из 10 людей, которые ищут [услугу], не узнают о вас, потому что ищут в Яндексе и Google"',
          'Крючок: "Я уже сделал для вас демо-сайт, можно посмотреть здесь: [ссылка]"',
          'Оффер: "Если нравится - доделаю под вас за 3-5 дней. Стоимость $500"',
          'Выход: "Если не подойдёт - удалю демо и не побеспокою больше"',
        ],
      },
      {
        heading: 'Звонок (3 минуты)',
        bullets: [
          '"Добрый день, [имя] говорит? Я [имя], делаю сайты для компаний по [нише]"',
          '"Увидел вас в 2ГИС, у вас 50+ положительных отзывов - реально классно работаете"',
          '"У меня уже готово демо сайта под вашу компанию: [короткая ссылка]. Можете глянуть 2 минуты?"',
          '"Если нравится - доделаю за 3 дня, полная стоимость $500. Если нет - ничего не должны"',
        ],
      },
      {
        heading: 'DM в Telegram / WhatsApp (самый быстрый способ для СНГ)',
        bullets: [
          'В 2ГИС прямые номера, большинство в РФ и КЗ имеют WhatsApp на том же номере',
          'Первое сообщение короче email: 3 предложения + ссылка на демо',
          'Ответ приходит в 2-3 раза быстрее, чем по email',
        ],
      },
    ],
    math: 'Ожидаемая математика дня: 100 cold email (с warmup и персонализацией) → 8-12 ответов; 20 звонков → 10 разговоров → 3-5 заинтересованных; 30 Telegram DM → 10-15 ответов.',
    errors: [
      'Слать с Gmail без прогрева домена - письма в спам',
      'Не персонализировать - AI-детекторы почтовых клиентов в 2026 банят шаблоны',
      'Слать 500 писем в день с нового ящика - блокировка за сутки',
    ],
  },
  {
    n: 'День 05',
    title: 'Работа с откликами',
    tagline: 'Скорость = конверсия. Отвечай в течение часа.',
    time: '2-3 часа',
    blocks: [
      {
        heading: 'Воронка отклик → встреча',
        bullets: [
          'Ответ пришёл - отвечай в течение часа. Каждые 60 минут снижают конверсию на 10%',
          'Сообщение-зацепка: "Спасибо, что откликнулись! Удобно 15 минут созвониться сегодня в 17:00 или завтра в 11:00?"',
          'Фиксируй встречу в календаре сразу: Calendly, Яндекс.Календарь',
          'За час до встречи - напоминание в Telegram/WhatsApp: "Через час встреча, жду вас по ссылке"',
        ],
      },
      {
        heading: 'Типичные возражения 2026 и ответы',
        bullets: [
          '"У нас уже есть сайт на Tilda" → "Покажу чем мой вариант лучше. Если не впечатлит - не возьму ни копейки. 10 минут?"',
          '"Сейчас не сезон" → "Понимаю. Давайте сделаем сейчас - оплатите через месяц, когда будут деньги. Мне нужен кейс в портфолио"',
          '"Присылайте КП на email" → "КП скучно. Я уже сделал живое демо - вот ссылка. Посмотрите 2 минуты, потом решим"',
          '"Надо подумать" → "Конечно. Что именно сомневает? Цена, сроки, доверие? Разберём за 5 минут"',
          '"Я думал сайт стоит 100К рублей" → "Раньше так было. С AI-инструментами 2026 я делаю за 3 дня то, что студия делает 2 месяца. $500 - это моё время, не код"',
        ],
      },
    ],
    math: 'Реальная конверсия: 100 писем → 44 открытия → 3-5 ответов → 1-3 встречи → 0.5-1 продажа. 20 звонков → 3-5 заинтересованных → 1-2 встречи → 1 продажа. 30 DM → 10-15 ответов → 3-5 встреч → 1-2 продажи.',
    errors: [
      'Давить на клиента сразу после ответа - сольёт',
      'Не фиксировать встречу в календаре - забудет',
      'Бояться возражений - не будет продаж вообще',
    ],
  },
  {
    n: 'День 06-07',
    title: 'Переговоры и закрытие',
    tagline: 'Здесь появляются деньги на счету.',
    time: '2-3 встречи по 30 мин',
    blocks: [
      {
        heading: 'Структура встречи (20-30 минут)',
        bullets: [
          'Small talk (2 мин): приятные слова про отзывы компании, откуда узнал о них',
          'Диагностика (5 мин): сколько клиентов в месяц? откуда приходят? есть проблема что звонят мало?',
          'Показ демо (10 мин): делишь экран, прокручиваешь сайт, поясняешь каждую секцию и где будет заявка/WhatsApp',
          'Цена и закрытие (5 мин): "$500 - включает доработку, ваши тексты и фото, домен, форму заявок на WhatsApp. 50% предоплата ($250), 50% после готовности"',
        ],
      },
      {
        heading: 'Опционально: подписка на поддержку',
        bullets: [
          '$50/мес - минимум: 1 правка в месяц, бэкапы',
          '$100/мес - стандарт: 2 правки, 1 созвон, мини-аналитика',
          '$150/мес - про: безлимит мелких правок, приоритет, SEO-отчёт раз в месяц',
          '10 клиентов на $100/мес = $1000 recurring. Это твоя свобода, важнее разовых $500',
        ],
      },
      {
        heading: 'Закрытие сомнения',
        bullets: [
          '"Чтобы закрепить место в очереди - $100 сегодня. Возвращаемые если что не понравится"',
          '"Делаем за 3 дня. Если сроки горят, я в вашей теме уже работал"',
          '"50% предоплата - гарант для вас, 50% после готовности - гарант для меня. Стандарт рынка"',
        ],
      },
    ],
    math: 'Итоговая математика недели: 100 писем + 20 звонков + 20 WhatsApp → ~15 ответов → ~5 встреч → 1 сделка $500-700.',
    errors: [
      'Соглашаться делать бесплатно "в портфолио" - клиент не уважает, не возвращается',
      'Брать 100% предоплату - клиент думает, что ты мошенник',
      'Не брать 50% предоплату - клиент тянет, пропадает',
      'Не предлагать поддержку - теряешь LTV в 10 раз',
    ],
  },
];

export default function PlanBonusPage() {
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
            Бонус 02 · Актуально на июль 2026
          </div>
          <h1 className="font-display font-bold text-[40px] md:text-[68px] leading-[0.95] tracking-tight uppercase mb-6">
            Первые $500<br />
            <span className="text-gold">за 7 дней</span>
          </h1>
          <p className="font-mono text-sm md:text-base text-paper/60 leading-relaxed max-w-2xl">
            Пошаговый план с актуальными инструментами, шаблонами писем, скриптами
            звонков и реальной математикой конверсий на июль 2026. Ниша + сайт +
            10 писем + 20 звонков = 1 сделка $500-700.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#day-01"
              className="inline-flex items-center gap-3 bg-gold text-ink rounded-full px-5 py-3 font-mono text-xs tracking-[0.2em] uppercase font-semibold hover:bg-paper transition-colors"
            >
              <span>К первому дню</span>
              <span>↓</span>
            </a>
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-paper/40 self-center print:hidden">
              Ctrl+P / Cmd+P чтобы сохранить как PDF
            </div>
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-14 md:mb-16">
          <div className="bg-card border border-hair rounded-2xl p-5">
            <div className="font-display font-bold text-3xl md:text-4xl text-gold leading-none mb-2">7</div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-paper/60">Дней до первых $500</div>
          </div>
          <div className="bg-card border border-hair rounded-2xl p-5">
            <div className="font-display font-bold text-3xl md:text-4xl text-gold leading-none mb-2">5,8%</div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-paper/60">Reply rate малых кампаний до 50 адресов</div>
          </div>
          <div className="bg-card border border-hair rounded-2xl p-5">
            <div className="font-display font-bold text-3xl md:text-4xl text-gold leading-none mb-2">3-5%</div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-paper/60">Средняя reply rate B2B</div>
          </div>
          <div className="bg-card border border-hair rounded-2xl p-5">
            <div className="font-display font-bold text-3xl md:text-4xl text-gold leading-none mb-2">$500-700</div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-paper/60">Средний чек первого сайта</div>
          </div>
        </section>

        <div className="space-y-5">
          {days.map((d, i) => (
            <section
              key={i}
              id={`day-${String(i + 1).padStart(2, '0')}`}
              className="bg-card border border-hair rounded-2xl overflow-hidden scroll-mt-10"
            >
              <div className="px-6 md:px-10 py-7 md:py-9 border-b border-hair">
                <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                  <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-gold">
                    / {d.n} · {d.time}
                  </div>
                </div>
                <h2 className="font-display font-bold text-2xl md:text-4xl leading-tight tracking-tight uppercase mb-2">
                  {d.title}
                </h2>
                <p className="font-mono text-[13px] md:text-sm text-paper/60 leading-relaxed">
                  {d.tagline}
                </p>
              </div>

              <div className="divide-y divide-hair">
                {d.blocks.map((b, j) => (
                  <div key={j} className="px-6 md:px-10 py-6 md:py-7">
                    <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-gold mb-4">
                      {b.heading}
                    </div>
                    <ul className="space-y-3">
                      {b.bullets.map((bullet, k) => (
                        <li
                          key={k}
                          className="font-mono text-[13px] md:text-sm leading-relaxed text-paper/80 flex gap-3"
                        >
                          <span className="text-gold shrink-0">→</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {d.math && (
                  <div className="px-6 md:px-10 py-6 md:py-7 bg-ink2">
                    <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-gold mb-3">
                      / Математика дня
                    </div>
                    <p className="font-mono text-[13px] md:text-sm leading-relaxed text-paper/80">
                      {d.math}
                    </p>
                  </div>
                )}

                <div className="px-6 md:px-10 py-6 md:py-7">
                  <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-paper/50 mb-3">
                    / Частые ошибки
                  </div>
                  <ul className="space-y-2">
                    {d.errors.map((e, k) => (
                      <li
                        key={k}
                        className="font-mono text-[12px] md:text-[13px] leading-relaxed text-paper/60 flex gap-3"
                      >
                        <span className="text-paper/30 shrink-0">×</span>
                        <span>{e}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-14 md:mt-20 bg-card border border-hair rounded-2xl p-8 md:p-10 text-center">
          <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-gold mb-4">
            / Что дальше
          </div>
          <h2 className="font-display font-bold text-2xl md:text-4xl leading-tight tracking-tight uppercase mb-5">
            Этого достаточно для старта.<br />
            <span className="text-gold">Полная система - в Рокфеллере.</span>
          </h2>
          <p className="font-mono text-sm text-paper/60 max-w-xl mx-auto mb-6">
            Софт для поиска клиентов, авторские промпты, скрипты продаж, виджеты для
            пассивного дохода и прямое сопровождение Матвея.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
            <a
              href="https://t.me/Mastatop?text=%D0%9F%D1%80%D0%BE%D1%88%D1%91%D0%BB%20%D0%B3%D0%B0%D0%B9%D0%B4.%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%80%D0%B0%D0%B7%D0%B1%D0%BE%D1%80%20%D0%B8%20%D0%BF%D0%BB%D0%B0%D0%BD%20%D0%BF%D0%BE%D0%B4%20%D0%BC%D0%BE%D1%8E%20%D1%81%D0%B8%D1%82%D1%83%D0%B0%D1%86%D0%B8%D1%8E"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gold text-ink rounded-full px-6 py-4 font-mono text-xs tracking-[0.2em] uppercase font-semibold hover:bg-paper transition-colors"
            >
              <span>Хочу разбор</span>
              <span>→</span>
            </a>
            <Link
              href="/bonus/niches"
              className="inline-flex items-center justify-center gap-3 bg-ink2 border border-hair text-paper rounded-full px-6 py-4 font-mono text-xs tracking-[0.2em] uppercase hover:bg-ink3 transition-colors"
            >
              <span>Бонус 01: 50 ниш</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        <div className="mt-14 text-center font-mono text-[11px] tracking-[0.25em] uppercase text-paper/40">
          AI Мастодонт · Intensive Vol. 01 · Bonus 02 · July 2026
        </div>
      </div>
    </main>
  );
}
