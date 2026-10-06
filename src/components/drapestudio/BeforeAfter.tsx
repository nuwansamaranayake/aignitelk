"use client";

import Image from "next/image";
import { useId, useRef, useState, type ReactNode } from "react";
import { shotSrc, type Shot } from "@/app/products/drapestudio/content";

// Colour classes per product. Each string is complete so Tailwind sees every class.
export type CompareTheme = {
  frame: string;
  afterTag: string;
  line: string;
  handle: string;
  caption: string;
};

const dsTheme: CompareTheme = {
  frame: "border-ds-gold/60 bg-ds-cream outline-ds-gold/40 has-[:focus-visible]:ring-ds-gold",
  afterTag: "bg-ds-emerald/90 text-ds-gold-pale",
  line: "bg-ds-gold",
  handle: "border-ds-gold bg-ds-emerald text-ds-gold-pale",
  caption: "text-ds-emerald",
};

// Either a photo pair (DrapeStudio) or a pair of coded mocks, never neither.
type Sides =
  | { before: Shot; after: Shot; beforeNode?: never; afterNode?: never }
  | { beforeNode: ReactNode; afterNode: ReactNode; before?: never; after?: never };

type Props = Sides & {
  beforeLabel: string;
  afterLabel: string;
  sliderLabel: string;
  theme?: CompareTheme;
  aspect?: string;
  initial?: number;
};

// Before and after slider. Pointer events on the frame handle mouse and touch drags
// (iOS Safari ignores taps on a range track). A visually hidden native range input
// carries keyboard arrows and screen reader support. The focus ring sits on the frame.
export default function BeforeAfter({
  before,
  after,
  beforeNode,
  afterNode,
  beforeLabel,
  afterLabel,
  sliderLabel,
  theme = dsTheme,
  aspect = "aspect-[3/4]",
  initial = 50,
}: Props) {
  const [pos, setPos] = useState(initial);
  const id = useId();
  const frame = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const seek = (clientX: number) => {
    const r = frame.current?.getBoundingClientRect();
    if (!r || r.width === 0) return;
    setPos(Math.round(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100))));
  };

  const clip = { clipPath: `inset(0 ${100 - pos}% 0 0)` };

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
        className={`relative ${aspect} w-full cursor-ew-resize select-none overflow-hidden rounded-2xl border shadow-lk-3 outline outline-1 outline-offset-4 [touch-action:pan-y] has-[:focus-visible]:ring-4 ${theme.frame}`}
      >
        {after && (
          <Image
            src={shotSrc(after, 896)}
            alt={after.alt}
            width={after.width}
            height={after.height}
            draggable={false}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          />
        )}
        {afterNode && <div className="pointer-events-none absolute inset-0">{afterNode}</div>}
        {before && (
          <Image
            src={shotSrc(before, 896)}
            alt={before.alt}
            width={before.width}
            height={before.height}
            draggable={false}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
            style={clip}
          />
        )}
        {beforeNode && (
          <div className="pointer-events-none absolute inset-0" style={clip}>
            {beforeNode}
          </div>
        )}
        <span className="absolute left-3 top-3 z-10 rounded-md bg-ds-ink/80 px-2 py-1 text-xs font-semibold text-white">
          {beforeLabel}
        </span>
        <span className={`absolute right-3 top-3 z-10 rounded-md px-2 py-1 text-xs font-semibold ${theme.afterTag}`}>
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
        <div aria-hidden className="pointer-events-none absolute inset-y-0 z-10" style={{ left: `${pos}%` }}>
          <div className={`absolute inset-y-0 w-0.5 -translate-x-1/2 ${theme.line}`} />
          <div
            className={`absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 text-lg font-bold shadow-lk-2 ${theme.handle}`}
          >
            ⇆
          </div>
        </div>
      </div>
      <figcaption className={`mt-3 text-center text-sm font-semibold ${theme.caption}`}>{sliderLabel}</figcaption>
    </figure>
  );
}
