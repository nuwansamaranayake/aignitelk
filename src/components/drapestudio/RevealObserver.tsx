"use client";

import { useEffect } from "react";

// Scroll reveal. Sections render visible. After hydration this marks the ones already
// on screen, then sets html[data-reveal] so globals.css hides the rest until each one
// scrolls into view. If JS never runs, or motion is reduced, nothing is ever hidden.
export default function RevealObserver() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const root = document.documentElement;
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("is-visible");
    });
    root.dataset.reveal = "on";
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );
    els.forEach((el) => {
      if (!el.classList.contains("is-visible")) io.observe(el);
    });
    return () => {
      io.disconnect();
      delete root.dataset.reveal;
    };
  }, []);
  return null;
}
