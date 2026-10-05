"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type Frame = { src: string; alt: string; width: number; height: number };

// The page's one signature moment: real GoviHub diagnosis screens crossfading in a phone.
// Server HTML and reduced-motion users see the last frame (the result) and nothing moves.
// Pauses on hover, on keyboard focus, and with the Pause button.
export default function PhoneDemo({ frames, label }: { frames: Frame[]; label: string }) {
  const last = frames.length - 1;
  const [index, setIndex] = useState(last);
  const [animated, setAnimated] = useState(false);
  const [paused, setPaused] = useState(false);
  const [held, setHeld] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      setAnimated(!mq.matches);
      if (mq.matches) setIndex(last);
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [last]);

  useEffect(() => {
    if (!animated || paused || held) return;
    const t = window.setInterval(() => setIndex((i) => (i + 1) % frames.length), 2800);
    return () => window.clearInterval(t);
  }, [animated, paused, held, frames.length]);

  return (
    <figure className="mx-auto w-[15.5rem] sm:w-[17.5rem]">
      <div
        onMouseEnter={() => setHeld(true)}
        onMouseLeave={() => setHeld(false)}
        onFocus={() => setHeld(true)}
        onBlur={() => setHeld(false)}
        className="relative rounded-[2.6rem] border-[10px] border-gh-ink bg-gh-ink shadow-[0_25px_50px_-12px_rgb(0_0_0/0.35)]"
      >
        <div aria-hidden className="absolute left-1/2 top-2 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-gh-ink" />
        <div className="relative aspect-[390/844] overflow-hidden rounded-[2rem] bg-white">
          {frames.map((f, i) => (
            <Image
              key={f.src}
              src={f.src}
              alt={i === index ? f.alt : ""}
              width={f.width}
              height={f.height}
              priority={i === last}
              loading="eager"
              className={`absolute inset-0 h-full w-full object-cover object-top motion-safe:transition-opacity motion-safe:duration-700 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
      {animated && (
        <button
          type="button"
          aria-pressed={paused}
          onClick={() => setPaused((p) => !p)}
          className="mx-auto mt-4 flex min-h-11 items-center gap-2 rounded-full border border-gh-line bg-white px-4 text-sm font-semibold text-gh-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-gh-field"
        >
          <svg aria-hidden className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            {paused ? <path d="M8 5.14v13.72L19 12 8 5.14Z" /> : <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" />}
          </svg>
          {paused ? "Play" : "Pause"}
        </button>
      )}
      <figcaption className="sr-only">{label}</figcaption>
    </figure>
  );
}
