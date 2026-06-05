export type League =
  | "UCL"
  | "PL"
  | "La Liga"
  | "Ligue 1"
  | "Serie A"
  | "Bundesliga"
  | "Transferts";

export type ArticleStatus = "published" | "draft" | "scheduled";

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: League;
  author: string;
  publishedAt: string;
  image: string;
  views: number;
  status: ArticleStatus;
  featured?: boolean;
}

export interface LiveMatch {
  id: number;
  homeTeam: string;
  awayTeam: string;
  homeScore: number | null;
  awayScore: number | null;
  status: "LIVE" | "FT" | "NS" | "HT";
  minute?: number;
  league: string;
}

export interface Fixture {
  id: number;
  homeTeam: string;
  awayTeam: string;
  date: string;
  league: string;
}

export interface TopScorer {
  rank: number;
  player: string;
  team: string;
  goals: number;
}
