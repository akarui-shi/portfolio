"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled || open
            ? "bg-paper/85 backdrop-blur-md border-b border-line"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 md:px-10 md:py-5">
        <a
          href="#top"
          className="font-display text-base tracking-tightest md:text-lg"
          onClick={() => setOpen(false)}
        >
          Е. Стрекозова
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Основная навигация">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group relative text-[13px] uppercase tracking-[0.14em] text-ink/70 transition-colors hover:text-ink"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-all duration-500 ease-editorial group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Меню</span>
          <div className="flex flex-col items-end gap-[6px]">
            <span
              className={`block h-px bg-ink transition-all duration-300 ${
                open ? "w-6 translate-y-[7px] rotate-45" : "w-6"
              }`}
            />
            <span
              className={`block h-px bg-ink transition-all duration-300 ${
                open ? "opacity-0" : "w-4"
              }`}
            />
            <span
              className={`block h-px bg-ink transition-all duration-300 ${
                open ? "w-6 -translate-y-[7px] -rotate-45" : "w-5"
              }`}
            />
          </div>
        </button>
        </div>
      </header>

      {/* Mobile menu overlay (sibling of header so the header's
          backdrop-filter doesn't trap this fixed layer) */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col bg-paper px-6 pt-24 transition-all duration-500 ease-editorial lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none translate-y-[-6px] opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1" aria-label="Мобильная навигация">
          {nav.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="border-b border-line py-4 font-display text-2xl tracking-tightest"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <p className="mt-auto pb-10 pt-8 text-xs uppercase tracking-[0.2em] text-stone">
          {site.role}
        </p>
      </div>
    </>
  );
}
