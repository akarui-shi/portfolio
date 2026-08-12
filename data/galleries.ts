// ─────────────────────────────────────────────────────────────
//  GALLERY DATA — all image paths live here, decoupled from the
//  components. To swap a photo, drop a file into /public/images/…
//  and point `src` at it (keep alt/caption meaningful).
//
//  Every photo from the reference site is preserved here, grouped
//  into the same sections. `span` controls masonry footprint:
//  "tall" = 2 rows, "wide" = 2 columns, "big" = 2x2.
//  `fit` and `position` fine-tune how the photo sits inside the tile.
// ─────────────────────────────────────────────────────────────

export type Photo = {
  src: string;
  alt: string;
  caption?: string;
  /** aspect ratio height/width — used for masonry packing (optional; the
   *  gallery also measures each image on load, so new photos work without it). */
  ar?: number;
  span?: "tall" | "wide" | "big";
  fit?: "cover" | "contain";
  position?: string;
};

export type Gallery = {
  id: string; // anchor id
  eyebrow?: string; // small kicker above the title
  title: string;
  intro?: string;
  subgroups?: { label: string }[]; // optional category chips
  photos: Photo[];
};

export const galleries: Gallery[] = [
  {
    id: "cinema",
    eyebrow: "01 — Кино",
    title: "РАБОТА НАД ОБРАЗАМИ В КИНО",
    intro:
      "Создание характерных образов для художественных фильмов и сериалов: от исторической достоверности до портретного грима и перевоплощения актёров в реальных исторических персонажей — Троцкий, Сталин, Хрущёв.",
    subgroups: [{ label: "Образы в кино" }, { label: "Портретный грим" }],
    photos: [
      { src: "/images/cinema/cinema-1.jpg", ar: 1.03, alt: "Портретное сходство: исторический снимок и актёр в образе", caption: "Портретное сходство · Бандера", span: "big" },
      { src: "/images/cinema/cinema-2.jpg", ar: 1.03, alt: "Характерный мужской образ в кожаной кепке", caption: "Характерный образ", span: "tall", position: "50% 30%" },
      { src: "/images/cinema/cinema-3.jpeg", ar: 0.771, alt: "Исторический образ, грим с усами", caption: "Исторический образ" },
      { src: "/images/cinema/cinema-4.jpeg", ar: 1.832, alt: "Военный образ в форме с фуражкой", caption: "Военный образ", span: "tall", position: "50% 28%" },
      { src: "/images/cinema/makeup-1.jpg", ar: 1.029, alt: "Портретный грим: образ Троцкого", caption: "Портретный грим · Троцкий", span: "big", position: "50% 50%" },
      { src: "/images/cinema/makeup-2.jpeg", ar: 1.358, alt: "Портретный грим: образ Сталина", caption: "Портретный грим · Сталин", span: "tall", position: "50% 28%" },
      { src: "/images/cinema/makeup-3.jpeg", ar: 1.333, alt: "Портретный грим: образ Хрущёва", caption: "Портретный грим · Хрущёв", span: "tall", position: "50% 28%" },
    ],
  },
  {
    id: "postizh",
    eyebrow: "03 — Постиж",
    title: "РАБОТА С ПОСТИЖЕМ",
    intro:
      "Работа с Постижем и париками. Портретный грим.",
    subgroups: [{ label: "Усы, бороды, баки" }, { label: "Работа с париками" }],
    photos: [
      { src: "/images/postizh/postizh-1.jpg", ar: 1.333, alt: "Наклеенная борода из натурального волоса", caption: "Борода", span: "big", position: "50% 28%" },
      { src: "/images/postizh/postizh-2.jpg", ar: 1.343, alt: "Усы и котелок, характерный образ", caption: "Усы", span: "tall", position: "50% 24%" },
      { src: "/images/postizh/postizh-3.jpg", ar: 1.333, alt: "Полная борода, постижёрная работа", caption: "Борода", span: "tall", position: "50% 28%" },
      { src: "/images/postizh/postizh-4.jpg", ar: 1.325, alt: "Военный образ с усами и наградами", caption: "Усы, военный образ", span: "tall", position: "50% 24%" },
      { src: "/images/postizh/postizh-5.jpg", ar: 1.333, alt: "Седые усы, возрастной образ", caption: "Седые усы", span: "tall", position: "50% 28%" },
      { src: "/images/postizh/postizh-6.jpg", ar: 1.278, alt: "Седая борода, возрастной образ", caption: "Борода", position: "50% 30%" },
      { src: "/images/postizh/postizh-7.jpg", ar: 1, alt: "Пробы постижа: варианты бород и усов", caption: "Пробы постижа", span: "big" },
      { src: "/images/postizh/postizh-8.jpg", ar: 1.333, alt: "Усы и баки, характерный образ", caption: "Усы, характерный образ", span: "tall", position: "50% 28%" },
      { src: "/images/postizh/postizh-9.jpg", ar: 0.983, alt: "Усы и борода в меховой шапке, характерный образ", caption: "Усы, характерный образ" },
      { src: "/images/postizh/postizh-10.jpg", ar: 1.397, alt: "Характерный образ с париком", caption: "Образ с париком", span: "tall", position: "50% 28%" },
      { src: "/images/postizh/postizh-11.jpg", ar: 0.991, alt: "Работа с париками", caption: "Парики" },
      { src: "/images/postizh/postizh-12.jpg", ar: 0.999, alt: "Цветные парики для съёмки", caption: "Цветные парики" },
    ],
  },
  {
    id: "effects",
    eyebrow: "04 — SFX",
    title: "СПЕЦЭФФЕКТЫ, КРОВЬ, ФАКТУРА",
    intro:
      "Раны, кровь, обморожения и болезненная фактура кожи — постановочный грим для драматичных сцен.",
    photos: [
      { src: "/images/effects/effects-1.jpg", ar: 1.248, alt: "Обморожение, фактура кожи", caption: "Обморожение", span: "big" },
      { src: "/images/effects/effects-2.jpg", ar: 1.009, alt: "Постановочная рана на лице", caption: "Рана" },
      { src: "/images/effects/effects-3.jpg", ar: 2.222, alt: "Постановочный образ в кадре", caption: "Постановочный образ", span: "tall", position: "50% 24%" },
      { src: "/images/effects/effects-4.jpg", ar: 1.333, alt: "Разбитое лицо, кровь", caption: "Кровь", span: "tall", position: "50% 28%" },
      { src: "/images/effects/effects-5.jpg", ar: 1.333, alt: "Разбитое лицо, кровь", caption: "Ссадины" },
      { src: "/images/effects/effects-6.jpg", ar: 0.978, alt: "Синяки и грязь на лице", caption: "Синяки, фактура" },
      { src: "/images/effects/effects-7.jpg", ar: 0.894, alt: "Постановочная травма, кровь", caption: "Травма", span: "wide", position: "50% 45%" },
      { src: "/images/effects/effects-8.jpg", ar: 0.783, alt: "Фактура кожи, спецэффекты грима", caption: "Фактура" },
      { src: "/images/effects/effects-9.jpg", ar: 1.3, alt: "Раны и ссадины на спине", caption: "Раны на спине" },
      { src: "/images/effects/effects-10.jpg", ar: 1.656, alt: "Трупный грим, зеленоватая фактура кожи", caption: "Трупный грим", span: "tall", position: "50% 30%" },
      { src: "/images/effects/effects-11.jpg", ar: 0.539, alt: "Кадр со съёмки постановочной сцены на мониторе", caption: "Кадр со съёмки", span: "wide" },
      { src: "/images/effects/effects-12.jpg", ar: 1.702, alt: "Детский образ для съёмки", caption: "Детский образ", span: "tall", position: "50% 28%" },
      { src: "/images/effects/effects-13.jpg", ar: 0.75, alt: "Групповой кадр со спецэффектами грима", caption: "Спецэффекты, образы" },
      { src: "/images/effects/effects-14.jpg", ar: 1, alt: "Гематома и ссадины на лице", caption: "Гематома", span: "wide" },
      { src: "/images/effects/effects-15.jpg", ar: 2.222, alt: "Болезненная фактура кожи", caption: "Фактура", span: "tall", position: "50% 24%" },
      { src: "/images/effects/effects-16.jpg", ar: 1.778, alt: "Спецэффекты, гематома", caption: "Гематома", span: "tall", position: "50% 28%" },
      { src: "/images/effects/effects-17.jpg", ar: 1.778, alt: "Постановочная травма, кровь", caption: "Травма", span: "tall", position: "50% 28%" },
      { src: "/images/effects/effects-18.jpg", ar: 1, alt: "Кровь и ссадины", caption: "Ссадины" },
      { src: "/images/effects/effects-19.jpg", ar: 1.544, alt: "Кровь на лице, постановочная сцена", caption: "Кровь" },
      { src: "/images/effects/effects-20.jpeg", ar: 1.38, alt: "Разбитый заплывший глаз, кровь на лице", caption: "Разбитый глаз" },
    ],
  },
  {
    id: "hairstyles",
    eyebrow: "05 — Beauty",
    title: "ОБРАЗЫ, ПРИЧЁСКИ, MAKE UP",
    intro:
      "Причёски, макияж и создание характерных образов для съёмок.",
    photos: [
      { src: "/images/hairstyles/hairstyles-1.jpg", ar: 1.504, alt: "Образ с причёской и макияжем", caption: "Образ", span: "big", position: "50% 26%" },
      { src: "/images/hairstyles/hairstyles-2.jpg", ar: 1.504, alt: "Бьюти-макияж", caption: "Beauty", span: "tall", position: "50% 24%" },
      { src: "/images/hairstyles/hairstyles-3.jpg", ar: 1.504, alt: "Вечерние образы для съёмки", caption: "Образ", span: "tall", position: "50% 24%" },
      { src: "/images/hairstyles/hairstyles-4.jpg", ar: 1.333, alt: "Характерный образ с укладкой", caption: "Образ", span: "tall", position: "50% 26%" },
      { src: "/images/hairstyles/hairstyles-5.jpg", ar: 1.333, alt: "Собранная причёска", caption: "Укладка", span: "tall", position: "50% 26%" },
      { src: "/images/hairstyles/hairstyles-7.jpg", ar: 1.163, alt: "Плетение, собранная причёска", caption: "Причёска", span: "tall", position: "50% 24%" },
      { src: "/images/hairstyles/hairstyles-8.jpg", ar: 1.276, alt: "Собранная причёска с украшением", caption: "Причёска", position: "50% 28%" },
      { src: "/images/hairstyles/hairstyles-9.jpg", ar: 1.24, alt: "Художественный макияж с укладкой", caption: "Арт-макияж", position: "50% 28%" },
      { src: "/images/hairstyles/hairstyles-10.jpg", ar: 0.976, alt: "Макияж и укладка", caption: "Make up" },
      { src: "/images/hairstyles/hairstyles-11.jpg", ar: 1.549, alt: "Причёска для съёмки", caption: "Причёска", span: "tall", position: "50% 24%" },
      { src: "/images/hairstyles/hairstyles-12.jpeg", ar: 1.002, alt: "Причёска и макияж для съёмки", caption: "Образ", span: "tall", position: "50% 28%" },
      { src: "/images/hairstyles/hairstyles-13.jpeg", ar: 0.643, alt: "Ретро-образ в стиле Одри Хепбёрн", caption: "Ретро-образ" },
      { src: "/images/hairstyles/hairstyles-15.jpeg", ar: 1.009, alt: "Ретро-образ, укладка волнами", caption: "Ретро-образ" },
      { src: "/images/hairstyles/hairstyles-16.jpeg", ar: 1.34, alt: "Характерная укладка для съёмки", caption: "Укладка", span: "tall", position: "50% 24%" },
      { src: "/images/hairstyles/hairstyles-17.jpeg", ar: 1.23, alt: "Полный образ с макияжем", caption: "Образ", position: "50% 28%" },
      { src: "/images/hairstyles/hairstyles-18.jpeg", ar: 1.773, alt: "Гладкая собранная причёска", caption: "Укладка", span: "tall", position: "50% 24%" },
      { src: "/images/hairstyles/hairstyles-19.jpeg", ar: 1.333, alt: "Собранная причёска с локонами, вид сзади", caption: "Причёска", span: "tall", position: "50% 24%" },
      { src: "/images/hairstyles/hairstyles-20.jpeg", ar: 1.333, alt: "Классический образ в костюме", caption: "Образ", span: "tall", position: "50% 24%" },
      { src: "/images/hairstyles/hairstyles-21.jpeg", ar: 1.333, alt: "Характерный образ", caption: "Образ", span: "tall", position: "50% 24%" },
      { src: "/images/hairstyles/hairstyles-22.jpeg", ar: 1.333, alt: "Характерный образ", caption: "Образ", span: "tall", position: "50% 24%" },
      { src: "/images/hairstyles/hairstyles-23.jpeg", ar: 1.333, alt: "Характерный образ", caption: "Образ", span: "tall", position: "50% 24%" },
      { src: "/images/hairstyles/hairstyles-24.jpeg", ar: 1.333, alt: "Образ с причёской и макияжем", caption: "Образ", span: "tall", position: "50% 24%" },
      { src: "/images/hairstyles/hairstyles-25.jpeg", ar: 1.333, alt: "Характерный образ", caption: "Образ", span: "tall", position: "50% 24%" },
      { src: "/images/hairstyles/hairstyles-26.jpeg", ar: 1.333, alt: "Причёска и макияж для съёмки", caption: "Образ", span: "tall", position: "50% 24%" },
      { src: "/images/hairstyles/hairstyles-27.jpeg", ar: 1.333, alt: "Причёска и макияж для съёмки", caption: "Образ", span: "tall", position: "50% 24%" },
      { src: "/images/hairstyles/hairstyles-28.jpeg", ar: 1.333, alt: "Причёска и макияж для съёмки", caption: "Образ", span: "tall", position: "50% 24%" },
    ],
  },
  {
    id: "musicians",
    eyebrow: "06 — Music",
    title: "СОТРУДНИЧЕСТВО С МУЗЫКАНТАМИ",
    intro:
      "Образы для музыкальных клипов и промо-фотосессий артистов.",
    photos: [
      { src: "/images/musicians/musicians-1.jpg", ar: 1.013, alt: "Образ для музыкального клипа", caption: "Клип", span: "big", position: "50% 32%" },
      { src: "/images/musicians/musicians-2.jpg", ar: 1.022, alt: "Промо-фотосессия артиста", caption: "Фотосессия", span: "tall", position: "50% 30%" },
      { src: "/images/musicians/musicians-3.jpeg", ar: 1.199, alt: "Образ для артиста", caption: "Артист", span: "tall", position: "50% 28%" },
    ],
  },
];

// Grouped anchor: the nav "Работы" jumps to the first visual gallery.
export const cinemaGallery = galleries.find((g) => g.id === "cinema")!;
