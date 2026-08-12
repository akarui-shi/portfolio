import { awards, site } from "@/data/site";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-36"
    >
      <div className="grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.3em] text-stone">
            00 — О себе
          </p>
        </Reveal>
        <Reveal className="md:col-span-9" delay={120}>
          <p className="font-display text-2xl leading-[1.35] tracking-tightest sm:text-3xl md:text-[2.6rem] md:leading-[1.28]">
            {site.about}
          </p>
          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-line pt-8 sm:grid-cols-4">
            {[
              ["20+", "лет опыта"],
              ["40+", "проектов в кино"],
              ["Кино", "реклама · ТВ"],
              ["Постиж", "спецэффекты"],
            ].map(([big, small]) => (
              <div key={small}>
                <p className="font-display text-3xl tracking-tightest md:text-4xl">
                  {big}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-stone">
                  {small}
                </p>
              </div>
            ))}
          </div>

          {awards.length > 0 && (
            <div className="mt-10 border-t border-line pt-8">
              <p className="text-[11px] uppercase tracking-[0.3em] text-stone">
                Награды
              </p>
              <ul className="mt-5 space-y-8">
                {awards.map((a) => (
                  <li
                    key={`${a.festival}-${a.year}`}
                    className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6"
                  >
                    {a.image && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={a.image}
                        alt={`Награда ${a.title}, ${a.festival}, ${a.year}`}
                        loading="lazy"
                        className="h-auto w-36 shrink-0 border border-line sm:w-44"
                      />
                    )}
                    <div className="border-l-2 border-ink pl-4">
                      <span className="font-display text-xl tracking-tightest md:text-2xl">
                        {a.title} — {a.project}
                      </span>
                      <p className="mt-1 text-sm text-ink/60">
                        {a.festival}, {a.year}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
