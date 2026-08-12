# Портфолио — Елена Стрекозова

Художник по гриму и стилист по прическам. Минималистичный editorial-сайт-портфолио
на **Next.js 14 + TypeScript + Tailwind CSS**.

## Запуск

```bash
npm install
npm run dev
```

Открыть http://localhost:3000

Прод-сборка:

```bash
npm run build
npm start
```

## Где что менять

### 📸 Фотографии

Все изображения лежат в `public/images/<раздел>/` и **не привязаны к компонентам**.
Пути перечислены в одном файле — [`data/galleries.ts`](data/galleries.ts).

Разделы: `hero`, `cinema`, `makeup`, `postizh`, `effects`, `hairstyles`, `musicians`.

> В папках уже лежат реальные фотографии работ (перенесены с сайта-референса).
> `hero/hero-1.jpg` — ваш портрет с первого экрана.
> «Портретный грим» — три подтверждённых образа (Троцкий, Сталин, Хрущёв);
> «Бандеру» не подписывал, т.к. не смог однозначно определить фото.
> Раздел «ТВ и реклама» пока не выведен — в исходных материалах для него не
> было фотографий; папка `tv/` оставлена для будущих снимков.

Чтобы заменить фото:
1. Положите свой файл в нужную папку, например `public/images/makeup/makeup-1.jpg`.
2. В `data/galleries.ts` поменяйте `src` на новый путь (или просто расширение).

Сейчас там временные SVG-заглушки. Пересоздать их:

```bash
npm run gen:images
```

### ✍️ Тексты

- Имя, описание, блок «О себе», SEO — [`data/site.ts`](data/site.ts)
- Фильмография — [`data/filmography.ts`](data/filmography.ts) (пустые поля рисуются как «—»)
- Заголовки и подписи галерей — [`data/galleries.ts`](data/galleries.ts)

### ☎️ Контакты

Все контакты — в объекте `contacts` в [`data/site.ts`](data/site.ts):
телефон, email, Telegram, Instagram, город. Замените placeholder-значения.

## Структура

```
app/            layout (SEO, OG, шрифты) + page (сборка секций)
components/     Header, Hero, About, Filmography, GallerySection, Contacts, Footer, Reveal
data/           site.ts, filmography.ts, galleries.ts  ← весь контент здесь
public/images/  фотографии по разделам
scripts/        генератор заглушек
```

## Что реализовано

Адаптив (desktop / tablet / mobile), мобильное меню, плавный скролл, reveal-анимации
на scroll, hover-подписи на фото, masonry-галереи, lazy-loading и оптимизация через
`next/image`, доступность (alt, aria, focus), SEO + Open Graph + favicon.
