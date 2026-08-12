import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} — ${site.role}`,
  description: site.about,
  keywords: [
    "художник по гриму",
    "стилист по прическам",
    "грим для кино",
    "постиж",
    "спецэффекты грим",
    "Елена Стрекозова",
  ],
  authors: [{ name: "Елена Стрекозова" }],
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.about,
    url: site.url,
    siteName: site.name,
    locale: "ru_RU",
    type: "website",
    images: [{ url: site.ogImage, width: 1000, height: 1250, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.about,
    images: [site.ogImage],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
