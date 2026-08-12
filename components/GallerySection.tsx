import type { Gallery } from "@/data/galleries";
import Reveal from "./Reveal";
import Masonry from "./Masonry";

export default function GallerySection({
  gallery,
  tone = "light",
}: {
  gallery: Gallery;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <section
      id={gallery.id}
      className={
        dark
          ? "bg-ink text-paper"
          : "bg-paper text-ink"
      }
    >
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
        <Reveal className="mb-10 md:mb-14">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              {gallery.eyebrow && (
                <p
                  className={`text-[11px] uppercase tracking-[0.3em] ${
                    dark ? "text-stone" : "text-stone"
                  }`}
                >
                  {gallery.eyebrow}
                </p>
              )}
              <h2 className="mt-3 font-display text-[8.5vw] leading-[0.95] tracking-tightest sm:text-5xl md:text-6xl">
                {gallery.title}
              </h2>
            </div>
            {gallery.intro && (
              <p
                className={`max-w-sm text-sm leading-relaxed ${
                  dark ? "text-paper/60" : "text-ink/60"
                }`}
              >
                {gallery.intro}
              </p>
            )}
          </div>

          {gallery.subgroups && (
            <div className="mt-6 flex flex-wrap gap-2">
              {gallery.subgroups.map((s) => (
                <span
                  key={s.label}
                  className={`rounded-full border px-4 py-1.5 text-xs uppercase tracking-[0.12em] ${
                    dark
                      ? "border-paper/25 text-paper/80"
                      : "border-line text-ink/70"
                  }`}
                >
                  {s.label}
                </span>
              ))}
            </div>
          )}
        </Reveal>

        {/* True masonry: shortest-column packing, natural aspect (no crop). */}
        <Masonry photos={gallery.photos} />
      </div>
    </section>
  );
}
