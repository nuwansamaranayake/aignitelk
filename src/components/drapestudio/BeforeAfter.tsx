"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import { shotSrc, type Shot } from "@/app/products/drapestudio/content";

type Props = {
  before: Shot;
  after: Shot;
  beforeLabel: string;
  afterLabel: string;
  sliderLabel: string;
};

// Before and after slider. Pointer events on the frame handle mouse and touch drags
// (iOS Safari ignores taps on a range track). A visually hidden native range input
// carries keyboard arrows and screen reader support. The focus ring sits on the frame.
export default function BeforeAfter({ before, after, beforeLabel, afterLabel, sliderLabel }: Props) {
  const [pos, setPos] = useState(50);
  const id = useId();
  const frame = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const seek = (clientX: number) => {
    const r = frame.current?.getBoundingClientRect();
    if (!r || r.width === 0) return;
    setPos(Math.round(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100))));
  };

  return (
    <figure className="mx-auto w-full max-w-md">
      <div
        ref={frame}
        onPointerDown={(e) => {
          dragging.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
          seek(e.clientX);
        }}
        onPointerMove={(e) => {
          if (dragging.current) seek(e.clientX);
        }}
        onPointerUp={() => {
          dragging.current = false;
        }}
        onPointerCancel={() => {
          dragging.current = false;
        }}
        className="relative aspect-[3/4] w-full cursor-ew-resize select-none overflow-hidden rounded-2xl border border-ds-gold/60 bg-ds-cream shadow-lk-3 outline outline-1 outline-offset-4 outline-ds-gold/40 [touch-action:pan-y] has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-ds-gold"
      >
        <Image
          src={shotSrc(after, 896)}
          alt={after.alt}
          width={after.width}
          height={after.height}
          draggable={false}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        />
        <Image
          src={shotSrc(before, 896)}
          alt={before.alt}
          width={before.width}
          height={before.height}
          draggable={false}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
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
          className="sr-only"
        />
        <div aria-hidden className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%` }}>
          <div className="absolute inset-y-0 w-0.5 -translate-x-1/2 bg-ds-gold" />
          <div className="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ds-gold bg-ds-emerald text-lg font-bold text-ds-gold-pale shadow-lk-2">
            ⇆
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-sm font-semibold text-ds-emerald">{sliderLabel}</figcaption>
    </figure>
  );
}
