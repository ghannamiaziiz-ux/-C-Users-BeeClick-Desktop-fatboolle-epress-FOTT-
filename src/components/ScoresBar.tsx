import type { LiveMatch } from "@/lib/types";

function MatchChip({ match }: { match: LiveMatch }) {
  const isLive = match.status === "LIVE" || match.status === "HT";
  const score =
    match.homeScore !== null
      ? `${match.homeScore} - ${match.awayScore}`
      : "vs";

  return (
    <div className="flex shrink-0 items-center gap-3 border-r border-pitch-border px-4 py-2">
      <span className="text-[10px] font-semibold uppercase tracking-wider text-pitch-muted">
        {match.league}
      </span>
      <span className="max-w-[80px] truncate text-xs font-medium sm:max-w-none">
        {match.homeTeam}
      </span>
      <span
        className={`min-w-[52px] rounded px-2 py-0.5 text-center text-xs font-bold ${
          isLive ? "bg-red-600/20 text-red-400" : "bg-pitch-border text-white"
        }`}
      >
        {isLive && match.minute ? `${match.minute}'` : match.status}{" "}
        {score}
      </span>
      <span className="max-w-[80px] truncate text-xs font-medium sm:max-w-none">
        {match.awayTeam}
      </span>
      {isLive && (
        <span className="h-2 w-2 animate-pulse-live rounded-full bg-red-500" />
      )}
    </div>
  );
}

export function ScoresBar({ matches }: { matches: LiveMatch[] }) {
  const doubled = [...matches, ...matches];

  return (
    <div className="border-b border-pitch-border bg-pitch-card">
      <div className="overflow-hidden">
        <div className="flex w-max animate-ticker hover:[animation-play-state:paused]">
          {doubled.map((m, i) => (
            <MatchChip key={`${m.id}-${i}`} match={m} />
          ))}
        </div>
      </div>
    </div>
  );
}
