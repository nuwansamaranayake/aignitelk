"use client";

import { useId, useState } from "react";
import { calculator, rs } from "@/app/products/primepath/content";

// Live EPF and ETF example. Only fixed statutory rates, no APIT.
export default function StatutoryCalculator() {
  const [earnings, setEarnings] = useState(calculator.initial);
  const id = useId();
  const fill = ((earnings - calculator.min) / (calculator.max - calculator.min)) * 100;

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div className="pp-mesh-dark rounded-3xl p-6 text-white shadow-lk-3 sm:p-8">
        <label htmlFor={id} className="text-sm font-semibold uppercase tracking-[0.18em] text-pp-accent">
          {calculator.inputLabel}
        </label>
        <p className="mt-3 font-heading text-4xl font-bold tabular-nums sm:text-5xl" aria-hidden>
          {rs(earnings)}
        </p>
        <input
          id={id}
          type="range"
          min={calculator.min}
          max={calculator.max}
          step={calculator.step}
          value={earnings}
          onChange={(e) => setEarnings(Number(e.target.value))}
          aria-valuetext={rs(earnings)}
          style={{ background: `linear-gradient(90deg, #E7B041 ${fill}%, rgb(255 255 255 / 0.2) ${fill}%)` }}
          className="mt-6 h-2 w-full cursor-pointer appearance-none rounded-full accent-pp-accent focus:outline-none focus-visible:ring-4 focus-visible:ring-pp-accent/60 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-pp-accent [&::-moz-range-thumb]:bg-pp-primary [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-pp-accent [&::-webkit-slider-thumb]:bg-pp-primary"
        />
        <div className="mt-2 flex justify-between text-xs text-pp-navy-100">
          <span>{rs(calculator.min)}</span>
          <span>{rs(calculator.max)}</span>
        </div>
      </div>

      <div>
        <dl className="grid gap-3 sm:grid-cols-3">
          {calculator.outputs.map((o) => {
            const total = o.key === "employerCost";
            const net = o.key === "afterEpf";
            return (
              <div
                key={o.key}
                className={`rounded-2xl p-4 shadow-lk-1 ${
                  total
                    ? "bg-pp-primary text-pp-cream sm:col-span-3"
                    : net
                      ? "border-2 border-pp-accent bg-pp-accent-soft text-pp-primary sm:col-span-3"
                      : "border border-border bg-white text-pp-primary"
                }`}
              >
                <dt className={`text-sm font-semibold ${total ? "text-pp-cream" : "text-pp-navy-600"}`}>{o.label}</dt>
                <dd
                  data-output={o.key}
                  className={`mt-1 font-heading text-2xl font-bold tabular-nums ${total ? "text-pp-accent" : ""}`}
                >
                  {rs(earnings * o.rate)}
                </dd>
              </div>
            );
          })}
        </dl>
        <p className="mt-4 text-sm text-text-muted">{calculator.note}</p>
      </div>
    </div>
  );
}
