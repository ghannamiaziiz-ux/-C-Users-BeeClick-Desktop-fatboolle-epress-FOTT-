import Image from "next/image";
import Link from "next/link";
import {
  IconClock,
  IconEye,
  IconPencil,
  IconArrowRight,
} from "@tabler/icons-react";
import { Header } from "@/components/Header";
import { ScoresBar } from "@/components/ScoresBar";
import { BreakingTicker } from "@/components/BreakingTicker";
import { ArticleCard } from "@/components/ArticleCard";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { articles, leagues, formatRelative } from "@/lib/data";
import { fetchLiveScores } from "@/lib/football-api";

export const revalidate = 60;

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ league?: string }>;
}) {
  const params = await searchParams;
  const leagueFilter = params.league;
  const matches = await fetchLiveScores();

  const featured = articles.find((a) => a.featured) ?? articles[0];
  const trending = articles.filter((a) => a.id !== featured.id).slice(0, 5);

  const filtered = leagueFilter
    ? articles.filter((a) => {
        if (leagueFilter === "Premier League" || leagueFilter === "PL")
          return a.category === "PL";
        if (leagueFilter === "Transferts")
          return a.category === "Transferts";
        return a.category === leagueFilter;
      })
    : articles;

  const gridArticles = filtered.slice(0, 8);
  const reports = articles.slice(0, 5);

  return (
    <>
      <Header />
      <ScoresBar matches={matches} />
      <BreakingTicker />

      <main className="mx-auto max-w-7xl px-4 py-6 sm:py-8">
        {/* Hero */}
        <section className="mb-8 grid gap-6 lg:grid-cols-3">
          <Link
            href={`/article/${featured.slug}`}
            className="group relative col-span-2 overflow-hidden rounded-2xl border border-pitch-border"
          >
            <div className="relative aspect-[16/9] min-h-[240px] sm:min-h-[320px]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                priority
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pitch via-pitch/60 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
              <span className="rounded bg-purple-600/90 px-2 py-0.5 text-[10px] font-bold uppercase">
                {featured.category}
              </span>
              <h1 className="mt-2 font-display text-2xl font-bold leading-tight text-white sm:text-4xl">
                {featured.title}
              </h1>
              <p className="mt-2 line-clamp-2 max-w-2xl text-sm text-pitch-muted sm:text-base">
                {featured.excerpt}
              </p>
              <div className="mt-3 flex flex-wrap gap-3 text-xs text-pitch-muted">
                <span className="flex items-center gap-1">
                  <IconPencil className="h-3.5 w-3.5" />
                  {featured.author}
                </span>
                <span className="flex items-center gap-1">
                  <IconClock className="h-3.5 w-3.5" />
                  {formatRelative(featured.publishedAt)}
                </span>
              </div>
            </div>
          </Link>

          <div className="flex flex-col gap-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-pitch-accent">
              Tendances
            </h2>
            {trending.map((a, i) => (
              <Link
                key={a.id}
                href={`/article/${a.slug}`}
                className="group flex gap-3 rounded-xl border border-pitch-border bg-pitch-card p-2 transition hover:border-pitch-accent/30"
              >
                <span className="font-display text-2xl font-bold text-pitch-border group-hover:text-pitch-accent">
                  {i + 1}
                </span>
                <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={a.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="line-clamp-2 text-sm font-medium leading-snug group-hover:text-pitch-accent">
                    {a.title}
                  </p>
                  <span className="mt-1 flex items-center gap-1 text-[10px] text-pitch-muted">
                    <IconEye className="h-3 w-3" />
                    {(a.views / 1000).toFixed(1)}k vues
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* League filter */}
        <div
          id="live"
          className="mb-8 flex gap-2 overflow-x-auto pb-2 scrollbar-hide"
        >
          {leagues.map((l) => {
            const active =
              (!leagueFilter && l === "Tous") ||
              leagueFilter === l ||
              (l === "Premier League" && leagueFilter === "PL");
            return (
              <Link
                key={l}
                href={l === "Tous" ? "/" : `/?league=${encodeURIComponent(l)}`}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-pitch-accent text-pitch"
                    : "border border-pitch-border bg-pitch-card text-pitch-muted hover:text-white"
                }`}
              >
                {l}
              </Link>
            );
          })}
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            <section>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="font-display text-2xl font-bold">
                  Dernières actus
                </h2>
                <span className="text-sm text-pitch-muted">
                  {gridArticles.length} articles
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {gridArticles.map((a) => (
                  <ArticleCard key={a.id} article={a} />
                ))}
              </div>
            </section>

            <section>
              <h2 className="mb-4 font-display text-2xl font-bold">
                Comptes rendus
              </h2>
              <ul className="divide-y divide-pitch-border rounded-xl border border-pitch-border bg-pitch-card">
                {reports.map((a) => (
                  <li key={a.id}>
                    <Link
                      href={`/article/${a.slug}`}
                      className="group flex flex-col gap-3 p-4 transition hover:bg-pitch sm:flex-row sm:items-center"
                    >
                      <div className="relative h-24 w-full shrink-0 overflow-hidden rounded-lg sm:h-20 sm:w-32">
                        <Image
                          src={a.image}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="128px"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-bold uppercase text-pitch-accent">
                          {a.category}
                        </span>
                        <h3 className="font-display text-lg font-semibold group-hover:text-pitch-accent">
                          {a.title}
                        </h3>
                        <p className="mt-1 line-clamp-1 text-sm text-pitch-muted">
                          {a.excerpt}
                        </p>
                      </div>
                      <IconArrowRight className="hidden h-5 w-5 shrink-0 text-pitch-muted group-hover:text-pitch-accent sm:block" />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <Sidebar />
        </div>
      </main>

      <Footer />
    </>
  );
}
