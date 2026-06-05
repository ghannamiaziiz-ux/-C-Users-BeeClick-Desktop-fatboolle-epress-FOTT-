import type { LiveMatch } from "./types";

/** Fallback scores when no API key is configured */
export const demoMatches: LiveMatch[] = [
  {
    id: 1,
    homeTeam: "Arsenal",
    awayTeam: "Bayern",
    homeScore: 1,
    awayScore: 1,
    status: "LIVE",
    minute: 67,
    league: "UCL",
  },
  {
    id: 2,
    homeTeam: "Real Madrid",
    awayTeam: "Man City",
    homeScore: 2,
    awayScore: 0,
    status: "FT",
    league: "UCL",
  },
  {
    id: 3,
    homeTeam: "PSG",
    awayTeam: "Lyon",
    homeScore: 3,
    awayScore: 1,
    status: "FT",
    league: "Ligue 1",
  },
  {
    id: 4,
    homeTeam: "Liverpool",
    awayTeam: "Chelsea",
    homeScore: null,
    awayScore: null,
    status: "NS",
    league: "PL",
  },
  {
    id: 5,
    homeTeam: "Barcelona",
    awayTeam: "Sevilla",
    homeScore: 1,
    awayScore: 0,
    status: "HT",
    league: "La Liga",
  },
];

interface ApiFootballFixture {
  fixture: { id: number; status: { short: string; elapsed: number | null } };
  league: { name: string };
  teams: { home: { name: string }; away: { name: string } };
  goals: { home: number | null; away: number | null };
}

function mapStatus(short: string): LiveMatch["status"] {
  if (["1H", "2H", "ET", "P", "LIVE"].includes(short)) return "LIVE";
  if (short === "HT") return "HT";
  if (short === "FT" || short === "AET" || short === "PEN") return "FT";
  return "NS";
}

export async function fetchLiveScores(): Promise<LiveMatch[]> {
  const apiKey = process.env.API_FOOTBALL_KEY;
  if (!apiKey) return demoMatches;

  try {
    const res = await fetch(
      "https://v3.football.api-sports.io/fixtures?live=all",
      {
        headers: {
          "x-apisports-key": apiKey,
        },
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) return demoMatches;

    const json = (await res.json()) as { response: ApiFootballFixture[] };
    const mapped = json.response.slice(0, 12).map((f) => ({
      id: f.fixture.id,
      homeTeam: f.teams.home.name,
      awayTeam: f.teams.away.name,
      homeScore: f.goals.home,
      awayScore: f.goals.away,
      status: mapStatus(f.fixture.status.short),
      minute: f.fixture.status.elapsed ?? undefined,
      league: f.league.name,
    }));

    return mapped.length > 0 ? mapped : demoMatches;
  } catch {
    return demoMatches;
  }
}
