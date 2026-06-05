import {
  IconTrophy,
  IconCalendar,
  IconMail,
} from "@tabler/icons-react";
import { topScorers, upcomingFixtures, formatDate } from "@/lib/data";

export function Sidebar() {
  return (
    <aside className="space-y-6">
      <section className="rounded-xl border border-pitch-border bg-pitch-card p-4">
        <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-semibold">
          <IconTrophy className="h-5 w-5 text-pitch-gold" stroke={1.5} />
          Top buteurs LDC
        </h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs text-pitch-muted">
              <th className="pb-2">#</th>
              <th className="pb-2">Joueur</th>
              <th className="pb-2 text-right">Buts</th>
            </tr>
          </thead>
          <tbody>
            {topScorers.map((s) => (
              <tr
                key={s.rank}
                className="border-t border-pitch-border/50"
              >
                <td className="py-2 text-pitch-muted">{s.rank}</td>
                <td className="py-2">
                  <span className="font-medium">{s.player}</span>
                  <span className="block text-xs text-pitch-muted">
                    {s.team}
                  </span>
                </td>
                <td className="py-2 text-right font-bold text-pitch-accent">
                  {s.goals}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="rounded-xl border border-pitch-border bg-pitch-card p-4">
        <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-semibold">
          <IconCalendar className="h-5 w-5 text-pitch-accent" stroke={1.5} />
          Prochains matchs
        </h3>
        <ul className="space-y-3">
          {upcomingFixtures.map((f) => (
            <li
              key={f.id}
              className="rounded-lg border border-pitch-border/50 bg-pitch p-3 text-sm"
            >
              <span className="text-[10px] font-bold uppercase text-pitch-muted">
                {f.league}
              </span>
              <p className="mt-1 font-medium">
                {f.homeTeam}{" "}
                <span className="text-pitch-muted">vs</span> {f.awayTeam}
              </p>
              <p className="mt-1 text-xs text-pitch-muted">
                {formatDate(f.date)}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-xl border border-pitch-accent/30 bg-gradient-to-br from-pitch-card to-pitch-accent/10 p-4">
        <h3 className="mb-2 flex items-center gap-2 font-display text-lg font-semibold">
          <IconMail className="h-5 w-5 text-pitch-accent" stroke={1.5} />
          Newsletter
        </h3>
        <p className="mb-3 text-sm text-pitch-muted">
          Recevez les transferts et résultats en direct chaque matin.
        </p>
        <form className="flex flex-col gap-2 sm:flex-row">
          <input
            type="email"
            placeholder="votre@email.com"
            className="flex-1 rounded-lg border border-pitch-border bg-pitch px-3 py-2 text-sm outline-none focus:border-pitch-accent"
          />
          <button
            type="submit"
            className="rounded-lg bg-pitch-accent px-4 py-2 text-sm font-bold text-pitch transition hover:brightness-110"
          >
            S&apos;inscrire
          </button>
        </form>
      </section>
    </aside>
  );
}
