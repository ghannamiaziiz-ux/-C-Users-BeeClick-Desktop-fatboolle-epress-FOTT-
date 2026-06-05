import { breakingHeadlines } from "@/lib/data";

export function BreakingTicker() {
  const items = [...breakingHeadlines, ...breakingHeadlines];

  return (
    <div className="flex items-center gap-0 border-b border-pitch-border bg-red-950/40">
      <span className="shrink-0 bg-red-600 px-3 py-2 text-xs font-bold uppercase tracking-wider">
        Flash
      </span>
      <div className="overflow-hidden flex-1">
        <div className="flex w-max animate-ticker whitespace-nowrap">
          {items.map((h, i) => (
            <span
              key={i}
              className="px-6 py-2 text-sm text-red-100"
            >
              {h}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
