import { timing } from "@/app/products/kalika/content";

const tones = {
  saffron: { band: "bg-lk-saffron", label: "bg-lk-saffron text-kk-night" },
  pink: { band: "bg-mm-primary", label: "bg-mm-primary text-kk-night" },
  teal: { band: "bg-lk-teal", label: "bg-lk-teal text-kk-cream" },
};

// Illustration of a 12-month band with three highlighted windows. Not client data.
export default function TimingWindow() {
  const cell = 100 / 12;
  return (
    <figure className="mx-auto w-full max-w-3xl">
      <div role="img" aria-label={timing.label} className="rounded-2xl border border-kk-gold/50 bg-kk-medallion/70 p-4 sm:p-6">
        <div aria-hidden className="relative h-8">
          {timing.windows.map((w) => (
            <span
              key={w.label}
              className={`absolute top-0 -translate-x-1/2 whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-bold sm:text-sm ${tones[w.tone].label}`}
              style={{ left: `${((w.from + w.to + 1) / 2) * cell}%` }}
            >
              {w.label}
            </span>
          ))}
        </div>
        <div aria-hidden className="relative mt-2 h-10 overflow-hidden rounded-xl bg-white/10 ring-1 ring-kk-gold/40">
          {timing.months.map((_, i) => (
            <span key={i} className="absolute inset-y-0 w-px bg-kk-gold/25" style={{ left: `${i * cell}%` }} />
          ))}
          {timing.windows.map((w) => (
            <span
              key={w.label}
              className={`absolute inset-y-1 rounded-lg shadow-lk-2 ${tones[w.tone].band}`}
              style={{ left: `${w.from * cell}%`, width: `${(w.to - w.from + 1) * cell}%` }}
            />
          ))}
        </div>
        <div aria-hidden className="mt-2 grid grid-cols-12 text-center text-[11px] font-semibold text-kk-gold-warm">
          {timing.months.map((m, i) => (
            <span key={i}>{m}</span>
          ))}
        </div>
      </div>
      <figcaption className="mt-3 text-center text-sm text-kk-cream/85">{timing.caption}</figcaption>
    </figure>
  );
}
