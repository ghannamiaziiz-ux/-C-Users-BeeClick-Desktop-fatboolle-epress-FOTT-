# EXPRESS FOOT

Site d'actualités football — Next.js 15, Tailwind CSS, français.

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Accueil — hero, scores live, grille d'articles |
| `/article/[slug]` | Article complet + SEO + articles similaires |
| `/admin` | Dashboard admin (stats, table articles) |
| `/api/scores` | JSON scores live (API-Football ou démo) |

## Scores en direct

1. Créer un compte sur [API-Football](https://www.api-football.com/)
2. Copier `.env.example` vers `.env.local`
3. Ajouter `API_FOOTBALL_KEY=votre_clé`

Sans clé API, des scores de démonstration s'affichent.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS (thème sombre editorial)
- Images Unsplash
- Icônes Tabler (`@tabler/icons-react`)
