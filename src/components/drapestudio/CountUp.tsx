"use client";

import { useEffect, useRef, useState } from "react";

const fmt = (n: number) => n.toLocaleString("en-US");

// Counts from 0 to the value once the number scrolls into view. Server HTML and
// reduced-motion users get the final value straight away.
export default function CountUp({ value, prefix = "Rs. ", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const [shown, setShown] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setShown(0);
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / 1200);
          setShown(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span ref={ref}>
      <span aria-hidden className="tabular-nums">
        {prefix}
        {fmt(shown)}
        {suffix}
      </span>
      <span className="sr-only">
        {prefix}
        {fmt(value)}
        {suffix}
      </span>
    </span>
  );
}
