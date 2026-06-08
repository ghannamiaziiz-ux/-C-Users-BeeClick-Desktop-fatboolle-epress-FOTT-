# EXPRESS FOOT - Football News Platform

## Project Overview
EXPRESS FOOT is a professional, SEO-optimized football news website in English that aggregates global football news and updates. The platform aims to rank high on Google search results and provide daily content (300+ articles) from worldwide sources.

## Project Goals
1. **High Google Ranking** - Implement SEO best practices to rank in top positions for football-related keywords
2. **Global News Aggregation** - Collect authentic news from reputable worldwide football sources
3. **Professional Presentation** - Modern, clean design that looks professional and trustworthy
4. **Scalable Architecture** - Handle 300+ daily articles efficiently
5. **User Engagement** - Keep users engaged with latest football news, statistics, and updates

## Tech Stack
- **Frontend:** Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes (Node.js)
- **Database:** PostgreSQL (or MongoDB for flexibility)
- **Deployment:** Vercel (optimal for Next.js)
- **SEO Tools:** Next.js Metadata API, Sitemap generation, Schema.org markup

## Core Features to Implement

### 1. Homepage
- Hero section with featured articles
- Latest news feed (top 10-15 articles)
- Popular categories/leagues (Premier League, La Liga, Serie A, Ligue 1, etc.)
- "Most Viewed" section
- Newsletter signup
- Professional logo and branding

### 2. News Architecture
- **Categories:** League-based (Premier League, La Liga, etc.), team-based, transfer news, match results
- **Article Structure:** Title, content, image, source, publish date, author, tags
- **Article Page:** Full article view with metadata, related articles, comments section
- **Pagination:** Efficient article listing with pagination/infinite scroll

### 3. Navigation & UX
- **Header:** Logo, search bar, main menu (Home, Leagues, Teams, Latest, Contact)
- **Footer:** Links, social media, newsletter, sitemap links
- **Search Functionality:** Global search across articles
- **Mobile Responsive:** Fully responsive design for all devices
- **Dark/Light Theme:** Optional theme toggle

### 4. SEO Optimization
- **Meta Tags:** Unique title, description for every page
- **Schema.org Markup:** Article schema, NewsArticle schema, Organization schema
- **Sitemap:** Dynamic XML sitemap for all articles
- **Robots.txt:** Proper crawling instructions
- **Open Graph:** Social media preview optimization
- **Keyword Optimization:** URL slugs, heading structure (H1, H2, H3)
- **Image Optimization:** Lazy loading, WebP format, alt text
- **Internal Linking:** Strategic links between related articles
- **Page Speed:** Optimized for Core Web Vitals (LCP, FID, CLS)

### 5. Content Management
- **Data Source:** API endpoints to fetch news from multiple sources
- **Caching:** Redis caching for frequently accessed content
- **Update Schedule:** Cron jobs for periodic article fetching
- **Duplicate Detection:** Prevent duplicate articles from different sources
- **Source Attribution:** Always credit original sources

### 6. Design System
- **Color Scheme:** Professional football theme (likely primary + accent colors)
- **Typography:** Clear hierarchy with professional fonts
- **Logo:** Professional EXPRESS FOOT logo with favicon
- **UI Components:** Reusable buttons, cards, badges, loading states
- **Accessibility:** WCAG 2.1 AA compliance

## Implementation Phases

### Phase 1: Foundation (Week 1)
- [ ] Project setup and configuration
- [ ] Design system and component library
- [ ] Homepage layout
- [ ] Basic navigation
- [ ] Professional logo and branding

### Phase 2: Core Features (Week 2)
- [ ] Article listing page
- [ ] Article detail page with full content
- [ ] Search functionality
- [ ] Category pages
- [ ] Responsive design across devices

### Phase 3: SEO & Performance (Week 3)
- [ ] Metadata for all pages
- [ ] Schema.org markup implementation
- [ ] Sitemap generation
- [ ] Image optimization
- [ ] Performance optimization

### Phase 4: Content & Backend (Week 4)
- [ ] Database schema for articles
- [ ] API routes for content fetching
- [ ] News aggregation system
- [ ] Caching strategy
- [ ] Admin dashboard (basic)

### Phase 5: Advanced Features (Week 5+)
- [ ] User authentication
- [ ] Bookmarking/favorites
- [ ] Comments system
- [ ] Newsletter functionality
- [ ] Social sharing
- [ ] Analytics integration

## Database Schema (Preview)
```
Articles Table:
- id (UUID)
- title (string, unique)
- slug (string, unique)
- content (text)
- excerpt (string)
- image_url (string)
- source_url (string)
- source_name (string)
- category (string)
- tags (array)
- publish_date (timestamp)
- created_at (timestamp)
- updated_at (timestamp)
- views_count (integer)

Categories Table:
- id (UUID)
- name (string, unique)
- slug (string, unique)
- description (string)
- image_url (string)

Tags Table:
- id (UUID)
- name (string, unique)
- slug (string, unique)
```

## SEO Keywords Focus
- "football news"
- "soccer news today"
- "Premier League news"
- "transfer news"
- "match results"
- "football updates"
- "latest football news"
- League/team specific keywords

## Success Metrics
- Google ranking for target keywords (top 10)
- Monthly visitors growth
- Average session duration
- Pages per session
- Bounce rate < 50%
- Core Web Vitals (All Green)
- Daily article ingestion count

## Important Notes
- All news must be aggregated from legitimate sources
- Always attribute and link to original sources
- Never plagiarize content; summarize and add value
- Follow Google's guidelines for news sites
- Implement robots.txt and crawl directives properly
- Monitor for duplicate content issues
- Keep content fresh and updated regularly

## Branding Guidelines
- **Site Name:** EXPRESS FOOT
- **Logo Style:** Professional, modern, football-themed
- **Color Palette:** [To be defined - suggest: Primary: Football green/red, Secondary: White, Accent: Gold]
- **Tagline:** [e.g., "Latest Football News Worldwide" or "Your Daily Football Update"]
- **Tone:** Professional, authoritative, trustworthy

---

This prompt serves as the master blueprint for EXPRESS FOOT development. Refer to specific sections when working on individual features.
