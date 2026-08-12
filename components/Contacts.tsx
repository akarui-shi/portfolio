import { contacts, site } from "@/data/site";
import Reveal from "./Reveal";

export default function Contacts() {
  // Contacts are optional — comment any out in data/site.ts and the
  // row is simply skipped (no crash from a missing value/href).
  const c = contacts as {
    phone?: string;
    email?: string;
    telegram?: string;
    telegramUrl?: string;
    instagram?: string;
    instagramUrl?: string;
  };

  const rows = [
    c.phone && { label: "Телефон", value: c.phone, href: `tel:${c.phone.replace(/[^+\d]/g, "")}` },
    c.email && { label: "Email", value: c.email, href: `mailto:${c.email}` },
    c.telegram && { label: "Telegram", value: c.telegram, href: c.telegramUrl ?? "#" },
    c.instagram && { label: "Instagram", value: c.instagram, href: c.instagramUrl ?? "#" },
  ].filter(Boolean) as { label: string; value: string; href: string }[];

  return (
    <section
      id="contacts"
      className="border-t border-line bg-paper"
    >
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-40">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.3em] text-stone">
            Контакты
          </p>
          <h2 className="mt-4 font-display text-[14vw] leading-[0.9] tracking-tightest sm:text-7xl md:text-[7vw]">
            ДАВАЙТЕ
            <br />
            РАБОТАТЬ ВМЕСТЕ
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-7" delay={100}>
            <ul className="divide-y divide-line border-y border-line">
              {rows.map((r) => {
                const external = r.href.startsWith("http");
                return (
                  <li key={r.label}>
                    <a
                      href={r.href}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group flex items-baseline justify-between gap-6 py-5 transition-colors hover:text-stone"
                    >
                      <span className="text-xs uppercase tracking-[0.2em] text-stone">
                        {r.label}
                      </span>
                      <span className="font-display text-xl tracking-tightest transition-transform duration-500 ease-editorial group-hover:-translate-x-1 md:text-2xl">
                        {r.value}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal className="md:col-span-5 md:pl-8" delay={200}>
            <p className="font-display text-2xl leading-tight tracking-tightest md:text-3xl">
              {site.name}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink/60">
              {site.role}. {contacts.city}. Открыта к сотрудничеству в кино,
              рекламе, на телевидении и в фотопроектах.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
