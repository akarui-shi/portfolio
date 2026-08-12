// ─────────────────────────────────────────────────────────────
//  SITE-WIDE TEXT & CONTACTS — edit this file to change wording,
//  navigation labels, and all contact details in one place.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "ЕЛЕНА СТРЕКОЗОВА",
  role: "Художник по гриму и стилист по прическам",
  heroLead:
    "Более 20 лет создаю образы для кино, рекламы, телевидения, музыкальных клипов и фотосессий.",
  about:
    "Я художник по гриму и стилист по прическам. Работаю в этом направлении более 20 лет. Работаю в кино, на съёмках рекламных роликов, в телепередачах, музыкальных клипах и фотосессиях.",
  // Open Graph / SEO
  url: "https://elena-strekozova.example.com",
  ogImage: "/images/hero/hero-1.png",
};

// ── CONTACTS — replace the placeholder values below ────────────
export const contacts = {
  phone: "+7 (916) 828-90-93",
  email: "Strekozova.a@mail.ru",
  telegram: "@Alenastrekoza",
  telegramUrl: "https://t.me/Alenastrekoza",
  // instagram: "@strekozova",
  // instagramUrl: "https://instagram.com/strekozova",
  city: "Москва",
};

// ── AWARDS — festival prizes shown in the “О себе” block ───────
export const awards = [
  {
    title: "Best Makeup · TV & Web Series",
    project: "«Паль»",
    festival: "FICIMAD — Festival Internacional de Cine Independiente de Madrid",
    year: "2026",
    // Save the certificate image here to show it (leave "" to hide the image).
    image: "/images/awards/ficimad-2026.jpeg",
  },
];

// ── NAVIGATION — id must match the section anchors ─────────────
export const nav = [
  { id: "about", label: "О себе" },
  { id: "filmography", label: "Фильмография" },
  { id: "cinema", label: "Грим" },
  { id: "postizh", label: "Постиж" },
  { id: "hairstyles", label: "Прически" },
  { id: "works", label: "Работы" },
  { id: "contacts", label: "Контакты" },
];
