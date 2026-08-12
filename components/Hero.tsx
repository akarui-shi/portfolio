import Image from "next/image";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="top"
      style={{ minHeight: "100svh" }}
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background collage image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero-1.png"
          alt="Елена Стрекозова, художник по гриму и стилист по прическам, в гримёрной"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/70" />
      </div>

      {/* Content */}
      <div
        style={{ minHeight: "100svh" }}
        className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] flex-col justify-end px-5 pb-16 pt-32 md:px-10 md:pb-24"
      >
        <p className="mb-6 text-[11px] uppercase tracking-[0.35em] text-paper/80 md:text-xs">
          Портфолио · Кино · Реклама · ТВ
        </p>
        <h1 className="font-display text-[13vw] font-medium leading-[0.92] tracking-tightest text-paper sm:text-[11vw] lg:text-[8.5vw]">
          ЕЛЕНА
          <br />
          СТРЕКОЗОВА
        </h1>
        <div className="mt-8 flex flex-col gap-6 border-t border-paper/25 pt-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md font-display text-xl text-paper md:text-2xl">
            {site.role}
          </p>
          <p className="max-w-sm text-sm leading-relaxed text-paper/80">
            {site.heroLead}
          </p>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="text-[10px] uppercase tracking-[0.3em] text-paper/70">
          Листайте
        </span>
        <span className="h-10 w-px animate-pulse bg-paper/50" />
      </div>
    </section>
  );
}
