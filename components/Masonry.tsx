"use client";

import { useEffect, useMemo, useState } from "react";
import type { Photo } from "@/data/galleries";
import Reveal from "./Reveal";

/**
 * True masonry: each photo is placed into the currently-shortest column
 * (packing by aspect ratio), so columns end at nearly the same height with
 * no trailing gaps — and images keep their natural aspect ratio (never cropped).
 * Ratios come from data (`ar`) and are refined from each image once it loads,
 * so newly added photos work without any manual tuning.
 */
export default function Masonry({ photos }: { photos: Photo[] }) {
  const [colCount, setColCount] = useState(4);
  const [ratios, setRatios] = useState<Record<string, number>>({});

  useEffect(() => {
    const calc = () =>
      setColCount(
        window.innerWidth < 640 ? 2 : window.innerWidth < 1024 ? 3 : 4
      );
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const columns = useMemo(() => {
    // Never use more columns than photos, otherwise the trailing columns
    // stay empty (blank space to the right of a small gallery).
    const n = Math.max(1, Math.min(colCount, photos.length));
    const cols: Photo[][] = Array.from({ length: n }, () => []);
    const heights = new Array(n).fill(0);
    for (const p of photos) {
      const ar = ratios[p.src] ?? p.ar ?? 1.3; // rendered height per unit width
      let idx = 0;
      for (let i = 1; i < n; i++) if (heights[i] < heights[idx]) idx = i;
      cols[idx].push(p);
      heights[idx] += ar;
    }
    return cols;
  }, [photos, colCount, ratios]);

  return (
    <div className="flex items-start gap-2 md:gap-3">
      {columns.map((col, ci) => (
        <div key={ci} className="flex min-w-0 flex-1 flex-col gap-2 md:gap-3">
          {col.map((photo, i) => (
            <Reveal
              key={photo.src}
              delay={(i % 3) * 70}
              className="group relative block overflow-hidden bg-line/40"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                onLoad={(e) => {
                  const im = e.currentTarget;
                  if (!im.naturalWidth) return;
                  const ar = im.naturalHeight / im.naturalWidth;
                  setRatios((r) =>
                    Math.abs((r[photo.src] ?? photo.ar ?? 0) - ar) > 0.02
                      ? { ...r, [photo.src]: ar }
                      : r
                  );
                }}
                className="block h-auto w-full transition-transform duration-[900ms] ease-editorial group-hover:scale-[1.03]"
              />
              {/* Hover caption */}
              <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-ink/75 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {photo.caption && (
                  <span className="translate-y-3 p-4 text-sm text-paper transition-transform duration-500 ease-editorial group-hover:translate-y-0 md:p-5">
                    {photo.caption}
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      ))}
    </div>
  );
}
