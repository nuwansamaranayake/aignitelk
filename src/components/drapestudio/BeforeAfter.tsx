"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { shotSrc, type Shot } from "@/app/products/drapestudio/content";

type Props = {
  before: Shot;
  after: Shot;
  beforeLabel: string;
  afterLabel: string;
  sliderLabel: string;
};

// Drag slider built on a native range input: pointer, touch and arrow keys work without extra code.
export default function BeforeAfter({ before, after, beforeLabel, afterLabel, sliderLabel }: Props) {
  const [pos, setPos] = useState(50);
  const id = useId();
  return (
    <figure className="mx-auto w-full max-w-md">
      <div className="relative aspect-[3/4] w-full select-none overflow-hidden rounded-2xl border border-ds-gold/60 bg-ds-cream shadow-lk-3 outline outline-1 outline-offset-4 outline-ds-gold/40">
        <Image
          src={shotSrc(after, 896)}
          alt={after.alt}
          width={after.width}
          height={after.height}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <Image
          src={shotSrc(before, 896)}
          alt={before.alt}
          width={before.width}
          height={before.height}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        />
        <span className="absolute left-3 top-3 rounded-md bg-ds-ink/80 px-2 py-1 text-xs font-semibold text-white">
          {beforeLabel}
        </span>
        <span className="absolute right-3 top-3 rounded-md bg-ds-emerald/90 px-2 py-1 text-xs font-semibold text-ds-gold-pale">
          {afterLabel}
        </span>
        <label htmlFor={id} className="sr-only">
          {sliderLabel}
        </label>
        <input
          id={id}
          type="range"
          min={0}
          max={100}
          step={1}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-valuetext={`${pos}% ${beforeLabel}, ${100 - pos}% ${afterLabel}`}
          className="peer absolute inset-0 z-10 h-full w-full cursor-ew-resize opacity-0 [touch-action:pan-y]"
        />
        <div aria-hidden className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%` }}>
          <div className="absolute inset-y-0 w-0.5 -translate-x-1/2 bg-ds-gold" />
          <div className="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ds-gold bg-ds-emerald text-lg font-bold text-ds-gold-pale shadow-lk-2">
            ⇆
          </div>
        </div>
        <div aria-hidden className="pointer-events-none absolute inset-0 rounded-2xl ring-ds-gold peer-focus-visible:ring-4" />
      </div>
      <figcaption className="mt-3 text-center text-sm font-semibold text-ds-emerald">{sliderLabel}</figcaption>
    </figure>
  );
}
