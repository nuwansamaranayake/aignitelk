import { payslip, rs } from "@/app/products/primepath/content";

// Coded demo payslip (HTML and CSS, not an image). Used in the hero, the compare slider and the OG card.
export default function PayslipCard({ className = "" }: { className?: string }) {
  const gross = payslip.earnings.reduce((s, e) => s + e.amount, 0);
  const totalDeductions = payslip.deductions.reduce((s, d) => s + d.amount, 0);
  const net = gross - totalDeductions;

  return (
    <div className={`overflow-hidden rounded-2xl bg-white text-pp-primary shadow-lk-3 ring-1 ring-pp-primary/10 ${className}`}>
      <div className="flex items-start justify-between gap-3 bg-pp-primary px-5 py-4 text-pp-cream">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-pp-accent">{payslip.title}</p>
          <p className="mt-1 font-heading text-base font-bold leading-tight">{payslip.company}</p>
        </div>
        <p className="shrink-0 rounded-full bg-pp-accent px-2.5 py-0.5 text-xs font-bold text-pp-primary">{payslip.period}</p>
      </div>

      <div className="px-5 py-4">
        <div className="flex items-baseline justify-between gap-3">
          <p className="font-heading text-lg font-bold">{payslip.employee}</p>
          <p className="text-xs text-pp-navy-600">{payslip.designation}</p>
        </div>
        <dl className="mt-2 grid grid-cols-3 gap-2 text-[11px]">
          {payslip.fields.map((f) => (
            <div key={f.label} className="rounded-md bg-pp-navy-50 px-2 py-1">
              <dt className="text-pp-navy-600">{f.label}</dt>
              <dd className="font-semibold tabular-nums">{f.value}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.14em] text-pp-accent-deep">{payslip.earningsTitle}</p>
        <ul className="mt-1 space-y-1 text-sm">
          {payslip.earnings.map((e) => (
            <li key={e.label} className="flex justify-between gap-3">
              <span>{e.label}</span>
              <span className="tabular-nums">{rs(e.amount)}</span>
            </li>
          ))}
          <li className="flex justify-between gap-3 border-t border-pp-primary/10 pt-1 font-semibold">
            <span>{payslip.grossLabel}</span>
            <span className="tabular-nums">{rs(gross)}</span>
          </li>
        </ul>

        <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.14em] text-pp-accent-deep">{payslip.deductionsTitle}</p>
        <ul className="mt-1 space-y-1 text-sm">
          {payslip.deductions.map((d) => (
            <li key={d.label} className="flex justify-between gap-3">
              <span>{d.label}</span>
              <span className="tabular-nums">{rs(d.amount)}</span>
            </li>
          ))}
          <li className="flex justify-between gap-3 border-t border-pp-primary/10 pt-1 font-semibold">
            <span>{payslip.totalDeductionsLabel}</span>
            <span className="tabular-nums">{rs(totalDeductions)}</span>
          </li>
        </ul>

        <div className="mt-4 flex items-center justify-between rounded-xl bg-pp-primary px-4 py-3 text-pp-cream">
          <span className="text-sm font-semibold">{payslip.netLabel}</span>
          <span className="font-heading text-2xl font-bold tabular-nums text-pp-accent">{rs(net)}</span>
        </div>

        <div className="mt-3 rounded-xl border border-dashed border-pp-accent bg-pp-accent-soft px-4 py-2.5">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-pp-accent-deep">{payslip.employerTitle}</p>
          <ul className="mt-1 space-y-1 text-sm">
            {payslip.employer.map((e) => (
              <li key={e.label} className="flex justify-between gap-3">
                <span>{e.label}</span>
                <span className="font-semibold tabular-nums">{rs(e.amount)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
