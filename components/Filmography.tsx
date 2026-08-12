import { filmography } from "@/data/filmography";
import Reveal from "./Reveal";

const dash = "—";

export default function Filmography() {
  return (
    <section
      id="filmography"
      className="border-y border-line bg-ink text-paper"
    >
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-36">
        <Reveal className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-stone">
              Фильмография
            </p>
            <h2 className="mt-3 font-display text-[11vw] leading-[0.9] tracking-tightest sm:text-6xl md:text-7xl">
              ФИЛЬМОГРАФИЯ
            </h2>
          </div>
          <p className="max-w-xs text-sm text-paper/60">
            {filmography.length} проектов, 2003 — 2024. От гримёра до художника
            по гриму.
          </p>
        </Reveal>

        {/* Column header (desktop only) */}
        <div
          className="hidden grid-cols-[1fr_auto] gap-6 border-b border-paper/25 pb-3 text-[11px] uppercase tracking-[0.2em] text-stone md:grid md:grid-cols-[minmax(0,5fr)_minmax(0,2.4fr)_minmax(0,1fr)_minmax(0,2.6fr)]"
          aria-hidden="true"
        >
          <span>Фильм</span>
          <span>Должность</span>
          <span>Год</span>
          <span>Режиссёр</span>
        </div>

        <ul>
          {filmography.map((film, i) => (
            <li
              key={`${film.title}-${i}`}
              className="group grid grid-cols-1 gap-1 border-b border-paper/15 py-5 transition-colors duration-500 hover:bg-paper/[0.04] md:grid-cols-[minmax(0,5fr)_minmax(0,2.4fr)_minmax(0,1fr)_minmax(0,2.6fr)] md:items-baseline md:gap-6 md:py-6"
            >
              <span className="font-display text-xl tracking-tightest transition-transform duration-500 ease-editorial md:text-2xl md:group-hover:translate-x-2">
                {film.title}
              </span>
              <span className="text-sm text-paper/70 md:text-base">
                <span className="text-stone md:hidden">Должность: </span>
                {film.role || dash}
              </span>
              <span className="text-sm tabular-nums text-paper/70 md:text-base">
                <span className="text-stone md:hidden">Год: </span>
                {film.year || dash}
              </span>
              <span className="text-sm text-paper/60 md:text-base">
                <span className="text-stone md:hidden">Режиссёр: </span>
                {film.director || dash}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
