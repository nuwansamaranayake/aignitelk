"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";

export type NavItem = { href: string; label: string };

// Menu for screens below the sm breakpoint. Closes on link tap and on Escape.
export default function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border-light text-lk-maroon focus:outline-none focus-visible:ring-2 focus-visible:ring-lk-maroon"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <svg aria-hidden className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          )}
        </svg>
      </button>
      {open && (
        <div id={id} className="absolute inset-x-0 top-full border-b border-border bg-bg-surface shadow-lk-2">
          <ul className="mx-auto max-w-6xl px-4 py-2">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center rounded-lg px-3 text-base font-medium text-text-primary hover:bg-bg-alt hover:text-lk-maroon"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
