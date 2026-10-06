import { sheet } from "@/app/products/primepath/content";

// Coded spreadsheet mock for the before side of the compare slider. One wrong formula, copied down.
export default function SalarySheet() {
  return (
    <div className="flex h-full flex-col bg-white text-[11px] text-slate-800 sm:text-xs">
      <div className="flex items-center gap-2 bg-[#1D6F42] px-3 py-2 text-white">
        <span className="rounded-sm bg-white px-1 font-bold text-[#1D6F42]">X</span>
        <span className="truncate font-semibold">{sheet.fileName}</span>
      </div>
      <div className="flex items-center gap-2 border-b border-slate-300 bg-slate-50 px-2 py-1.5 font-mono">
        <span className="w-8 rounded-sm border border-slate-300 bg-white px-1 text-center">{sheet.cellRef}</span>
        <span className="italic text-slate-600">fx</span>
        <span className="rounded-sm bg-red-50 px-1 font-semibold text-red-700">{sheet.formula}</span>
      </div>
      <table className="w-full table-fixed border-collapse tabular-nums">
        <colgroup>
          <col className="w-6" />
          <col className="w-[29%]" />
          <col className="w-[17%]" />
          <col className="w-[17%]" />
          <col className="w-[13%]" />
          <col />
        </colgroup>
        <thead>
          <tr className="bg-slate-100 text-slate-600">
            <th className="border border-slate-300 font-normal" />
            {sheet.columns.map((c) => (
              <th key={c} className="border border-slate-300 py-0.5 font-normal">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-300 bg-slate-100 text-center text-slate-600">1</td>
            {sheet.headers.map((h) => (
              <td key={h} className="truncate border border-slate-300 px-1 py-1 font-bold">
                {h}
              </td>
            ))}
          </tr>
          {sheet.rows.map((r, i) => (
            <tr key={r.cells[0]}>
              <td className="border border-slate-300 bg-slate-100 text-center text-slate-600">{i + 2}</td>
              {r.cells.map((c, j) => (
                <td
                  key={j}
                  className={`truncate border border-slate-300 px-1 py-1 ${j === 0 ? "" : "text-right"} ${
                    r.wrong && (j === 2 || j === 4) ? "bg-red-50 font-semibold text-red-700" : ""
                  } ${r.wrong && j === 2 && i === 1 ? "outline outline-2 -outline-offset-2 outline-red-600" : ""}`}
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex-1 bg-[linear-gradient(#e2e8f0_1px,transparent_1px)] bg-[length:auto_1.6rem]" />
      {/* Kept in the left 58% so the note stays readable at the slider start position. */}
      <p className="m-3 max-w-[54%] rounded-lg bg-red-700 px-3 py-2 text-xs font-semibold text-white">{sheet.note}</p>
    </div>
  );
}
