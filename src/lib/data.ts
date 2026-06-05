import type { Article, Fixture, TopScorer } from "./types";

const IMG = {
  hero: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200&q=80",
  ucl: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80",
  pl: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&q=80",
  laliga: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80",
  transfer: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&q=80",
  tactics: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=800&q=80",
  stadium: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80",
  goal: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80",
};

export const articles: Article[] = [
  {
    id: "1",
    slug: "mbappe-real-madrid-ucl-finale",
    title: "Mbappé en feu : le Real Madrid se qualifie pour la finale de la LDC",
    excerpt:
      "Doublé décisif au Bernabéu. Le Français confirme son statut de leader dans les grands soirs européens.",
    content: `Le Santiago Bernabéu a vibré mercredi soir. Kylian Mbappé a inscrit un doublé face à Manchester City pour envoyer le Real Madrid en finale de Ligue des Champions.

Dès la 12e minute, l'attaquant français a ouvert le score d'une frappe croisée après une combinaison avec Vinícius Jr. City a poussé, mais Courtois a été impérial.

En seconde période, Mbappé a scellé le sort sur penalty (67e). Guardiola a salué "un joueur de classe mondiale" en conférence de presse.

**Tactique** : Ancelotti a opté pour un 4-3-3 avec Bellingham en relayeur. Rodri n'a pas réussi à casser les transitions madrilènes.

**Prochain match** : Finale le 31 mai à Munich. Adversaire : Bayern ou Arsenal.`,
    category: "UCL",
    author: "Karim Benali",
    publishedAt: "2026-06-04T21:30:00Z",
    image: IMG.hero,
    views: 48200,
    status: "published",
    featured: true,
  },
  {
    id: "2",
    slug: "haaland-city-record",
    title: "Haaland bat le record de buts sur une saison en Premier League",
    excerpt: "36 buts et la course au titre reste ouverte à trois clubs.",
    content: `Erling Haaland a inscrit son 36e but de la saison contre Liverpool. Un record historique en Premier League.

Pep Guardiola a déclaré que le Norvégien "change la définition du poste de numéro 9".`,
    category: "PL",
    author: "Sarah Mitchell",
    publishedAt: "2026-06-04T18:00:00Z",
    image: IMG.pl,
    views: 31500,
    status: "published",
  },
  {
    id: "3",
    slug: "yamal-barca-extension",
    title: "Barcelone : Lamine Yamal prolonge jusqu'en 2031",
    excerpt: "Le prodige de 17 ans signe le plus gros contrat de l'histoire du club.",
    content: `Le FC Barcelone a officialisé la prolongation de Lamine Yamal. Clause libératoire fixée à 1 milliard d'euros.

Deco : "Il représente l'avenir du Barça et du football espagnol."`,
    category: "La Liga",
    author: "Marc Torres",
    publishedAt: "2026-06-04T15:45:00Z",
    image: IMG.laliga,
    views: 27800,
    status: "published",
  },
  {
    id: "4",
    slug: "psg-doue-transfert",
    title: "PSG : accord verbal pour Doué, Chelsea sur le coup",
    excerpt: "Guerre des enchères entre Paris et Londres pour l'ailier rennais.",
    content: `Le PSG et Rennes sont proches d'un accord autour de 65 M€. Chelsea préparerait une contre-offre.

Luis Enrique veut un ailier capable de déborder et finir — profil parfait pour Doué.`,
    category: "Transferts",
    author: "Julie Martin",
    publishedAt: "2026-06-04T14:20:00Z",
    image: IMG.transfer,
    views: 22100,
    status: "published",
  },
  {
    id: "5",
    slug: "inter-milan-serie-a",
    title: "Inter Milan : Inzaghi dévoile son plan pour le Scudetto",
    excerpt: "3-5-2 et Lautaro en pointe : la recette du succès nerazzurro.",
    content: `Simone Inzaghi mise sur la solidité défensive et les transitions rapides. Lautaro Martínez mène le classement des buteurs avec 24 réalisations.`,
    category: "Serie A",
    author: "Marco Rossi",
    publishedAt: "2026-06-04T12:00:00Z",
    image: IMG.tactics,
    views: 15400,
    status: "published",
  },
  {
    id: "6",
    slug: "bayern-kane-champions",
    title: "Bayern : Kane vise le triplé historique en Bundesliga",
    excerpt: "Le capitaine anglais à un match du titre avec 32 buts au compteur.",
    content: `Harry Kane pourrait devenir le premier joueur à terminer meilleur buteur en PL et Bundesliga sur deux saisons consécutives.`,
    category: "Bundesliga",
    author: "Hans Weber",
    publishedAt: "2026-06-04T10:30:00Z",
    image: IMG.goal,
    views: 18900,
    status: "published",
  },
  {
    id: "7",
    slug: "arsenal-arteta-ucl",
    title: "Arsenal : Arteta confiant avant la demi-finale retour",
    excerpt: "Les Gunners doivent renverser un déficit de 2 buts à l'Emirates.",
    content: `Mikel Arteta compte sur Saka et Ødegaard pour faire basculer le match. "On a déjà renversé des situations pires."`,
    category: "UCL",
    author: "James Cooper",
    publishedAt: "2026-06-03T20:00:00Z",
    image: IMG.ucl,
    views: 26700,
    status: "published",
  },
  {
    id: "8",
    slug: "om-greenwood-debut",
    title: "OM : Greenwood brillant pour ses débuts à Marseille",
    excerpt: "But et passe décisive face à Nice. Le Vélodrome en feu.",
    content: `Mason Greenwood a marqué dès la 23e minute. De Zerbi : "Il apporte ce qu'on attendait : finition et créativité."`,
    category: "Ligue 1",
    author: "Pierre Dubois",
    publishedAt: "2026-06-03T18:15:00Z",
    image: IMG.stadium,
    views: 33400,
    status: "published",
  },
];

export const breakingHeadlines = [
  "🔴 OFFICIEL : Mbappé prolonge au Real Madrid jusqu'en 2029",
  "⚽ LIVE : Arsenal 1-1 Bayern (67') — Saka buteur",
  "📋 Transfert : Le PSG s'active pour Doué (65M€)",
  "🏆 LDC : Finale Real Madrid vs Bayern confirmée",
  "🇫🇷 Ligue 1 : L'OM reprend la 2e place provisoire",
];

export const leagues = [
  "Tous",
  "UCL",
  "Premier League",
  "La Liga",
  "Ligue 1",
  "Serie A",
  "Bundesliga",
  "Transferts",
] as const;

export const topScorers: TopScorer[] = [
  { rank: 1, player: "Mbappé", team: "Real Madrid", goals: 12 },
  { rank: 2, player: "Haaland", team: "Man City", goals: 11 },
  { rank: 3, player: "Kane", team: "Bayern", goals: 10 },
  { rank: 4, player: "Lewandowski", team: "Barcelona", goals: 9 },
  { rank: 5, player: "Gyökeres", team: "Sporting", goals: 8 },
];

export const upcomingFixtures: Fixture[] = [
  {
    id: 1,
    homeTeam: "Real Madrid",
    awayTeam: "Bayern",
    date: "2026-06-07T20:00:00Z",
    league: "UCL",
  },
  {
    id: 2,
    homeTeam: "Arsenal",
    awayTeam: "Chelsea",
    date: "2026-06-08T15:00:00Z",
    league: "PL",
  },
  {
    id: 3,
    homeTeam: "PSG",
    awayTeam: "Marseille",
    date: "2026-06-08T20:45:00Z",
    league: "Ligue 1",
  },
  {
    id: 4,
    homeTeam: "Barcelona",
    awayTeam: "Atlético",
    date: "2026-06-09T21:00:00Z",
    league: "La Liga",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getRelatedArticles(article: Article, limit = 4): Article[] {
  return articles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, limit);
}

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(iso));
}

export function formatRelative(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const hours = Math.floor(diff / 3600000);
  if (hours < 1) return "À l'instant";
  if (hours < 24) return `Il y a ${hours}h`;
  const days = Math.floor(hours / 24);
  return `Il y a ${days}j`;
}
