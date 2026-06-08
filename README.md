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

## Apparaître sur Google

**Important :** `localhost` n’apparaît jamais sur Google. Il faut d’abord **mettre le site en ligne** (domaine + hébergement).

### 1. Déployer (gratuit, ~5 min)

1. Crée un compte sur [vercel.com](https://vercel.com)
2. Importe ce dossier `FOTT` (GitHub ou upload)
3. Ajoute les variables d’environnement :
   - `NEXT_PUBLIC_SITE_URL` = `https://ton-domaine.com`
   - `GOOGLE_SITE_VERIFICATION` = (étape 3)
4. Connecte ton nom de domaine (ex. `expressfoot.com`)

### 2. Google Search Console

1. Va sur [search.google.com/search-console](https://search.google.com/search-console)
2. **Ajouter une propriété** → URL de ton site en ligne
3. Validation par **balise HTML** → copie le code dans `GOOGLE_SITE_VERIFICATION` sur Vercel → redéploie
4. **Sitemaps** → envoie : `https://ton-domaine.com/sitemap.xml`
5. **Inspection d’URL** → colle l’accueil → **Demander une indexation**

### 3. Déjà inclus dans le code

- `sitemap.xml` et `robots.txt` automatiques
- Meta SEO, Open Graph, Twitter Card
- Données structurées (articles + organisation)
- Page admin bloquée pour les robots (`/admin`)

L’indexation prend en général **quelques jours à 2 semaines** pour un nouveau site.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS (thème sombre editorial)
- Images Unsplash
- Icônes Tabler (`@tabler/icons-react`)
